// Exports the website's local content (src/data) to the seed file of the
// WordPress theme, used by Tools > YAPD4Africa import.
//   node scripts/wp-seed/export.mjs [git-ref]
// Media are downloaded by WordPress from GitHub at the given ref, so the ref
// must contain the files (default: the current commit, which must be pushed).
import { register } from "node:module";
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

register("./loader.mjs", import.meta.url);

const ref = process.argv[2] ?? execSync("git rev-parse HEAD").toString().trim();
const RAW = `https://raw.githubusercontent.com/AfricTivistes/YAPD4Africa/${ref}/`;
const media = (m) => (m ? { url: RAW + (typeof m.src === "string" ? m.src : m.src.src), alt: m.alt ?? "" } : null);

const { projects } = await import("../../src/data/projects.ts");
const { people } = await import("../../src/data/people.ts");
const { reports } = await import("../../src/data/reports.ts");
const { partners } = await import("../../src/data/partners.ts");
const { posts } = await import("../../src/data/posts.ts");
const { settings } = await import("../../src/data/settings.ts");

const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const seed = {
  generated: new Date().toISOString(),
  ref,
  projects: projects.map((p, i) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.summary,
    content: p.content,
    order: i,
    image: media(p.image),
    acf: {
      category: p.category,
      impact: p.impact,
      tags: p.tags.join(", "),
      period: p.period ?? "",
      key_figures: (p.stats ?? []).map((s) => `${s.value} | ${s.label}`).join("\n"),
      supporters: (p.supporters ?? []).join(", "),
    },
  })),
  team: people.map((p, i) => ({
    slug: slugify(`${p.name} ${p.group === "trustee" ? "trustee" : ""}`),
    title: p.name,
    order: i,
    image: media(p.image),
    acf: { role: p.role, group: p.group, bio: p.bio ?? "" },
  })),
  reports: reports.map((r) => ({
    slug: slugify(r.title).slice(0, 80),
    title: r.title,
    image: media(r.cover),
    file: { url: RAW + "public" + r.fileUrl },
    acf: { report_type: r.type, report_date: r.date.replaceAll("-", ""), description: r.description },
    project: r.project ?? null,
  })),
  partners: partners.map((p, i) => ({
    slug: slugify(p.name),
    title: p.name,
    order: i,
    image: media(p.logo),
    acf: { website: p.url ?? "" },
  })),
  posts: posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    date: p.date.length === 10 ? `${p.date} 09:00:00` : p.date.replace("T", " ").slice(0, 19),
    image: media(p.image),
    acf: { external_url: p.externalUrl ?? "" },
  })),
  settings: {
    email: settings.email,
    phone: settings.phone,
    address: settings.address,
    donate_url: settings.donateUrl ?? "",
    ...settings.socials,
    ...Object.fromEntries(
      settings.impact.flatMap((s, i) => [
        [`impact_${i}_value`, s.value],
        [`impact_${i}_label`, s.label],
        [`impact_${i}_description`, s.description],
      ]),
    ),
  },
};

const out = new URL("../../wordpress/yapd4africa-headless/seed/seed.json", import.meta.url);
writeFileSync(out, JSON.stringify(seed, null, 1) + "\n");
const count = (k) => seed[k].length;
console.log(
  `seed.json @${ref.slice(0, 8)}: ${count("projects")} projects, ${count("team")} people, ${count("reports")} reports, ${count("partners")} partners, ${count("posts")} posts`,
);
