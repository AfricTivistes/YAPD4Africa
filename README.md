# YAPD4Africa — site web

Site de [yapd4africa.org](https://yapd4africa.org), construit avec [Astro](https://astro.build) (site 100 % statique) et alimenté par un WordPress « headless ».

- **Front-end** : Astro 7 + Tailwind CSS 4, déployé sur Netlify. Aucun framework JS côté client.
- **Back-end** : WordPress, lu via l'API REST **au moment du build**. WordPress n'est jamais appelé par les visiteurs.
- **Repli local** : si `WP_API_URL` n'est pas défini, si un type de contenu est vide dans WordPress ou si WordPress ne répond pas pendant le build, le site utilise les données de `src/data/`. Un build n'échoue jamais à cause de WordPress : un avertissement `[wordpress]` apparaît dans les logs Netlify.

## Développement

Prérequis : Node.js ≥ 22.23 (`nvm use` lit `.nvmrc`).

```sh
npm install
cp .env.example .env   # puis renseigner WP_API_URL, ou le laisser vide
npm run dev            # http://localhost:4321
npm run build          # vérification TypeScript + build dans dist/
npm run preview
```

## Structure

```
src/
  pages/            routes (une URL = un fichier)
    what-we-do/[slug].astro   page de chaque projet
    news/[slug].astro         page de chaque article
  layouts/BaseLayout.astro    <head> SEO, Open Graph, JSON-LD, header/footer
  components/       composants .astro
  lib/
    wp.ts           client REST WordPress (pagination, cache, helpers)
    content.ts      getters getProjects(), getPeople(), getReports()… (WordPress → repli local)
    types.ts        modèle de données
  data/             contenu de repli + textes éditoriaux fixes (valeurs, CARE-SD, navigation)
  assets/images/    images optimisées au build (WebP, srcset)
public/
  reports/          PDF des rapports (repli local)
  images/           logo et image Open Graph par défaut
wordpress/yapd-headless/      plugin WordPress (modèle de contenu)
```

## État actuel de WordPress (cms.yapd4africa.org)

| Contenu | Source |
| --- | --- |
| Actualités | **Articles WordPress**, complétés par les articles locaux qui n'ont pas encore été recréés dans WordPress (même slug = la version WordPress l'emporte) |
| Projets, équipe, rapports, partenaires, réglages | Données locales, en attendant l'installation du plugin `yapd-headless` |

Conseils de rédaction des articles :
- Utiliser l'**éditeur de blocs** de WordPress, pas le Divi Builder. Les shortcodes Divi restants sont retirés, mais leur mise en page est perdue.
- Toujours définir une **image à la une**, qui sert de vignette et d'image de partage.
- Renseigner l'**extrait**. S'il est vide, les 40 premiers mots de l'article sont utilisés.

## Mise à jour automatique (build hook)

1. Dans Netlify : *Project configuration → Build & deploy → Continuous deployment → Build hooks → Add build hook*. Nom : `WordPress`, branche : `main`. Copier l'URL obtenue.
2. Copier `wordpress/netlify-build-hook.php` dans `wp-content/mu-plugins/` sur le serveur Infomaniak.
3. Dans `wp-config.php`, ajouter `define( 'YAPD_NETLIFY_BUILD_HOOK', 'https://api.netlify.com/build_hooks/…' );`

Chaque publication, mise à jour, dépublication ou suppression relance alors le site, qui est à jour en 1 à 2 minutes. Un bouton **Rebuild website** apparaît aussi dans la barre d'administration. L'URL du hook reste hors de la base de données et de git.

## Brancher WordPress

1. Installer WordPress (ex. `cms.yapd4africa.org`) avec les permaliens activés (« Titre de la publication »).
2. Installer et activer **Advanced Custom Fields** (la version gratuite suffit).
3. Copier `wordpress/yapd-headless/` dans `wp-content/plugins/` et l'activer.
4. Optionnel : **Yoast SEO**. Le titre et la description Yoast des articles sont repris par le site.
5. Dans Netlify : *Project configuration → Environment variables* → `WP_API_URL=https://cms.yapd4africa.org/wp-json/wp/v2`.
6. Dans Netlify : *Build & deploy → Build hooks* → créer un hook, puis le coller dans WordPress → *Réglages → YAPD4Africa site → Netlify build hook URL*. Chaque publication relance alors un build (1 à 2 min).

### Modèle de contenu

| WordPress (menu)        | Endpoint REST              | Utilisé pour                         | Champs                                                               |
| ----------------------- | -------------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Articles                | `wp/v2/posts`              | `/news`, `/news/[slug]`, accueil     | titre, contenu, extrait, image à la une, `external_url` (optionnel)  |
| Projects                | `wp/v2/projects`           | `/what-we-do`, `/what-we-do/[slug]`  | titre, contenu, **extrait** (résumé), image, `category`, `impact`, `tags`, `period`, `key_figures` (une ligne par chiffre : `7,000+ | residents with clean water`), `supporters` |
| Team & Trustees         | `wp/v2/team`               | `/who-are-we`                        | nom (titre), photo, `role`, `group` (staff/trustee), `bio`           |
| Reports                 | `wp/v2/reports`            | `/reports` + page du projet lié      | titre, couverture (image), `report_type`, `report_date`, `description`, `file` (PDF), `project` (optionnel) |
| Partners                | `wp/v2/partners`           | bandeau partenaires (accueil)        | nom, logo (image à la une), `website`                                |
| Réglages → YAPD4Africa site | `yapd/v1/settings`     | footer, contact, `/support-us`, chiffres d'impact | email, téléphone, adresse, lien de don, réseaux sociaux, 6 chiffres d'impact |

- L'ordre des projets, de l'équipe et des partenaires suit le champ **Ordre** (attributs de page).
- Le slug WordPress d'un projet devient son URL : `/what-we-do/<slug>`. Pour garder les URLs actuelles, reprendre les slugs de `src/data/projects.ts`.
- Un type de contenu **sans aucune entrée publiée** retombe sur les données locales. Dès qu'une entrée est publiée, seules les données WordPress sont utilisées pour ce type.
- Si WordPress est injoignable pendant un build, le build échoue volontairement, et Netlify garde la version en ligne précédente.

## Ajouter des contenus sans WordPress

Le dossier `ressources/` (ignoré par git) sert de boîte de dépôt pour les fichiers bruts : documents Word, PDF non compressés, photos HEIC. Ces fichiers ne sont jamais publiés tels quels.

- **Rapports PDF** : les compresser (`gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook …`), les placer dans `public/reports/`, puis les déclarer dans `src/data/reports.ts`.
- **Images** : les placer dans `src/assets/images/…`. Astro les optimise au build.

## Formulaires (contact et newsletter)

Les deux formulaires utilisent **Netlify Forms** : `contact` (page Contact) et `newsletter` (footer de toutes les pages).

1. Activer la détection des formulaires dans *Site configuration → Forms*.
2. Configurer les notifications e-mail (par ex. vers yapd2020@gmail.com).
3. Les inscrits à la newsletter s'exportent en CSV depuis Netlify. On peut aussi les envoyer automatiquement vers Brevo ou Mailchimp (via Zapier ou Make).

Les liens `/contact?subject=Partnership` (ou `Volunteering`) pré-remplissent le sujet du formulaire.

## Dons

La page `/support-us` affiche un bouton « Donate online » dès qu'un lien de don est renseigné dans *Réglages → YAPD4Africa site*, par exemple une page Paystack, Flutterwave ou GlobalGiving. Sans lien, le bouton ouvre un e-mail de contact.

## Variables d'environnement (Netlify)

| Variable | Rôle |
| --- | --- |
| `WP_API_URL` | API REST WordPress, ex. `https://cms.yapd4africa.org/wp-json/wp/v2` (vide = données locales) |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Optionnel. Active Plausible Analytics, sans cookie et sans bannière de consentement (ex. `yapd4africa.org`). |
| `PUBLIC_GA_ID` | Optionnel. Active Google Analytics 4 (ex. `G-XXXXXXX`). |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Optionnel. Code de vérification Google Search Console (méthode « balise HTML »). |

Après la mise en ligne, soumettre `https://yapd4africa.org/sitemap-index.xml` dans Google Search Console.

## SEO

- Chaque page a son propre titre, sa description, son URL canonique et son image Open Graph (1200×630, générée au build).
- JSON-LD : `NGO` sur toutes les pages, `BreadcrumbList` sur les projets, `NewsArticle` sur les articles.
- `sitemap-index.xml` est généré automatiquement et déclaré dans `robots.txt`.
- Les anciennes URLs des PDF (`/lovable-uploads/...`) sont redirigées (301) dans `netlify.toml`.
