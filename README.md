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
wordpress/yapd4africa-headless/  thème WordPress du CMS (modèle de contenu, build hook, redirections)
```

## WordPress (cms.yapd4africa.org)

Le CMS est hébergé chez Infomaniak. Il utilise le thème **YAPD4Africa Headless** ([wordpress/yapd4africa-headless](wordpress/yapd4africa-headless)), qui :

- **crée le modèle de contenu** : Projects, Team & Trustees, Reports, Partners, les champs ACF et la page *Réglages → YAPD4Africa site* ;
- **reconstruit le site sur Netlify** à chaque publication, mise à jour, dépublication ou suppression (le site est à jour en 1 à 2 minutes). Il ajoute un bouton *Rebuild website now* et un widget sur le tableau de bord ;
- **redirige les visiteurs** de `cms.yapd4africa.org` (301) vers la page équivalente de `yapd4africa.org`, et marque le CMS `noindex`. Seul le site public est indexé. L'administration, l'API et la prévisualisation des brouillons continuent de fonctionner ;
- **désactive les commentaires**, que le site n'utilise pas.

### Installation

1. `npm run theme:zip`, qui produit `wordpress/yapd4africa-headless.zip`.
2. WordPress → *Apparence → Thèmes → Ajouter → Téléverser un thème* → choisir le zip → **Activer**.
3. *Extensions → Ajouter* → installer et activer **Advanced Custom Fields** (version gratuite).
4. *Réglages → YAPD4Africa site → Netlify build hook URL* : coller l'URL du build hook (Netlify → *Project configuration → Build & deploy → Build hooks*). Pour garder ce secret hors de la base de données, on peut aussi le définir dans `wp-config.php` : `define( 'YAPD_NETLIFY_BUILD_HOOK', '…' );`.
5. Netlify → *Environment variables* : `WP_API_URL=https://cms.yapd4africa.org/wp-json/wp/v2`.

Pour mettre à jour le thème, téléverser le nouveau zip ; WordPress propose de remplacer la version installée.

### Règles de bascule entre données locales et WordPress

- **Actualités** : articles WordPress + articles locaux pas encore recréés dans WordPress. À slug identique, c'est la version WordPress qui s'affiche.
- **Projets, équipe, rapports, partenaires** : tant qu'un type n'a **aucune** entrée publiée dans WordPress, le site utilise les données locales. **Dès la première entrée publiée, seul WordPress est utilisé pour ce type** : il faut donc importer le contenu existant avant de commencer à saisir.
- Si WordPress ne répond pas pendant un build (délai de 15 s), le site utilise les données locales et le build réussit, avec un avertissement `[wordpress]` dans les logs Netlify.

### Rédaction

- Utiliser l'**éditeur de blocs**, pas le Divi Builder. Les éventuels shortcodes Divi sont retirés.
- Toujours définir une **image à la une**, qui sert de vignette et d'image de partage, avec un texte alternatif.
- Renseigner l'**extrait**. S'il est vide, les 40 premiers mots de l'article sont utilisés.
- Le slug d'un projet devient son URL `/what-we-do/<slug>`. Pour garder les URLs actuelles, reprendre les slugs de `src/data/projects.ts`.
- L'ordre des projets, de l'équipe et des partenaires suit le champ **Ordre** (attributs de page).
- Optionnel : **Yoast SEO**. Le titre et la description Yoast des articles sont repris par le site.

### Modèle de contenu

| WordPress (menu)        | Endpoint REST              | Utilisé pour                         | Champs                                                               |
| ----------------------- | -------------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Articles                | `wp/v2/posts`              | `/news`, `/news/[slug]`, accueil     | titre, contenu, extrait, image à la une, `external_url` (optionnel)  |
| Projects                | `wp/v2/projects`           | `/what-we-do`, `/what-we-do/[slug]`  | titre, contenu, **extrait** (résumé), image, `category`, `impact`, `tags`, `period`, `key_figures` (une ligne par chiffre : `7,000+ | residents with clean water`), `supporters` |
| Team & Trustees         | `wp/v2/team`               | `/who-are-we`                        | nom (titre), photo, `role`, `group` (staff/trustee), `bio`           |
| Reports                 | `wp/v2/reports`            | `/reports` + page du projet lié      | titre, couverture (image), `report_type`, `report_date`, `description`, `file` (PDF), `project` (optionnel) |
| Partners                | `wp/v2/partners`           | bandeau partenaires (accueil)        | nom, logo (image à la une), `website`                                |
| Réglages → YAPD4Africa site | `yapd/v1/settings`     | footer, contact, `/support-us`, chiffres d'impact | email, téléphone, adresse, lien de don, réseaux sociaux, 6 chiffres d'impact |


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
