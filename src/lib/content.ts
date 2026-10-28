// Single entry point for site content. Every getter reads from WordPress when
// WP_API_URL is set, and falls back to the local data in src/data/ otherwise,
// when that content type has no published entries yet, or when WordPress
// cannot be reached during the build (the build never fails because of it).

import type {
  Partner,
  Person,
  PersonGroup,
  Post,
  Project,
  ProjectCategory,
  Report,
  ReportType,
  SiteSettings,
} from "./types";
import {
  featuredMedia,
  getCollection,
  getEndpoint,
  isWordPressEnabled,
  splitList,
  toPlainText,
  stripShortcodes,
  decodeEntities,
  type WPEntry,
} from "./wp";
import logo from "@/assets/images/logo/yapd4africa.png";
import { settings as localSettings } from "@/data/settings";
import { projects as localProjects } from "@/data/projects";
import { people as localPeople } from "@/data/people";
import { reports as localReports } from "@/data/reports";
import { partners as localPartners } from "@/data/partners";
import { posts as localPosts } from "@/data/posts";

const ORDERED = { orderby: "menu_order", order: "asc" };

/** Runs a WordPress request; on failure, logs a warning once and returns undefined. */
const warned = new Set<string>();
async function tryWordPress<T>(label: string, load: () => Promise<T>): Promise<T | undefined> {
  if (!isWordPressEnabled) return undefined;
  try {
    return await load();
  } catch (error) {
    if (!warned.has(label)) {
      warned.add(label);
      console.warn(`[wordpress] ${label}: ${(error as Error).message}. Using local data.`);
    }
    return undefined;
  }
}

async function fromWordPress<Raw, Item>(
  label: string,
  load: () => Promise<Raw[]>,
  map: (raw: Raw) => Item | undefined,
  fallback: Item[],
): Promise<Item[]> {
  const raw = await tryWordPress(label, load);
  const items = (raw ?? []).map(map).filter((item): item is Item => item !== undefined);
  return items.length > 0 ? items : fallback;
}

const title = (entry: WPEntry) => decodeEntities(entry.title.rendered);
const oneOf = <T extends string>(value: unknown, allowed: readonly T[], fallback: T): T =>
  allowed.includes(value as T) ? (value as T) : fallback;

// ---------------------------------------------------------------------------

export async function getSettings(): Promise<SiteSettings> {
  const remote = await tryWordPress("settings", () => getEndpoint<Partial<SiteSettings>>("yapd/v1/settings"));
  if (!remote) return localSettings;
  return {
    email: remote.email || localSettings.email,
    phone: remote.phone || localSettings.phone,
    address: remote.address || localSettings.address,
    donateUrl: remote.donateUrl || localSettings.donateUrl,
    socials: { ...localSettings.socials, ...remote.socials },
    impact: remote.impact?.length ? remote.impact : localSettings.impact,
  };
}

type ProjectAcf = {
  category?: string;
  impact?: string;
  tags?: string;
  period?: string;
  /** One figure per line: "7,000+ | residents with clean water". */
  key_figures?: string;
  supporters?: string;
};

const parseKeyFigures = (value: unknown) =>
  typeof value === "string"
    ? value
        .split("\n")
        .map((line) => line.split("|").map((part) => part.trim()))
        .filter(([v, label]) => v && label)
        .map(([v, label]) => ({ value: v, label }))
    : [];

export function getProjects(): Promise<Project[]> {
  return fromWordPress(
    "projects",
    () => getCollection<WPEntry<ProjectAcf>>("projects", ORDERED),
    (entry) => ({
      slug: entry.slug,
      title: title(entry),
      category: oneOf<ProjectCategory>(entry.acf?.category, ["homegrown", "past"], "homegrown"),
      summary: toPlainText(entry.excerpt?.rendered),
      content: entry.content?.rendered ?? "",
      impact: entry.acf?.impact ?? "",
      tags: splitList(entry.acf?.tags),
      image: featuredMedia(entry, title(entry)) ?? { src: logo, alt: title(entry) },
      period: entry.acf?.period || undefined,
      stats: parseKeyFigures(entry.acf?.key_figures),
      supporters: splitList(entry.acf?.supporters),
    }),
    localProjects,
  );
}

type PersonAcf = { role?: string; group?: string; bio?: string };

export async function getPeople(group?: PersonGroup): Promise<Person[]> {
  const people = await fromWordPress(
    "team",
    () => getCollection<WPEntry<PersonAcf>>("team", ORDERED),
    (entry) => {
      const name = title(entry);
      const role = entry.acf?.role ?? "";
      return {
        name,
        role,
        group: oneOf<PersonGroup>(entry.acf?.group, ["staff", "trustee"], "staff"),
        bio: entry.acf?.bio || undefined,
        image: featuredMedia(entry, `${name}, ${role} at YAPD4Africa`) ?? { src: logo, alt: name },
      };
    },
    localPeople,
  );
  return group ? people.filter((p) => p.group === group) : people;
}

type ReportAcf = {
  report_type?: string;
  report_date?: string;
  description?: string;
  file?: string;
  /** Post ID of the related project (ACF post object). */
  project?: number | false;
};

export async function getReports(): Promise<Report[]> {
  // Needed to turn the project ID stored on a report into its slug.
  const projects = await tryWordPress("projects", () => getCollection<WPEntry>("projects", ORDERED));
  const projectSlugs = new Map((projects ?? []).map((p) => [p.id, p.slug]));
  const reports = await fromWordPress(
    "reports",
    () => getCollection<WPEntry<ReportAcf>>("reports"),
    (entry) => {
      if (!entry.acf?.file) return undefined;
      return {
        title: title(entry),
        type: oneOf<ReportType>(entry.acf.report_type, ["annual", "project", "research"], "project"),
        date: entry.acf.report_date || entry.date.slice(0, 10),
        description: entry.acf.description ?? "",
        fileUrl: entry.acf.file,
        fileSize: entry.yapd_file_size || undefined,
        cover: featuredMedia(entry, `Cover of ${title(entry)}`),
        project: entry.acf.project ? projectSlugs.get(entry.acf.project) : undefined,
      };
    },
    localReports,
  );
  return reports.sort((a, b) => b.date.localeCompare(a.date));
}

type PartnerAcf = { website?: string };

export function getPartners(): Promise<Partner[]> {
  return fromWordPress(
    "partners",
    () => getCollection<WPEntry<PartnerAcf>>("partners", ORDERED),
    (entry) => {
      const logoMedia = featuredMedia(entry, `${title(entry)} logo`);
      if (!logoMedia) return undefined;
      return { name: title(entry), url: entry.acf?.website || undefined, logo: logoMedia };
    },
    localPartners,
  );
}

type PostAcf = { external_url?: string };

const EXCERPT_WORDS = 40;

/** WordPress articles, followed by the local ones that have not been recreated in WordPress yet. */
export async function getPosts(): Promise<Post[]> {
  const remote = await fromWordPress(
    "posts",
    () => getCollection<WPEntry<PostAcf>>("posts"),
    (entry) => {
      const content = stripShortcodes(entry.content?.rendered);
      const words = toPlainText(content).split(" ");
      return {
        slug: entry.slug,
        title: title(entry),
        excerpt:
          toPlainText(stripShortcodes(entry.excerpt?.rendered)) ||
          words.slice(0, EXCERPT_WORDS).join(" ") + (words.length > EXCERPT_WORDS ? "…" : ""),
        content,
        date: entry.date,
        image: featuredMedia(entry, title(entry)),
        externalUrl: entry.acf?.external_url || undefined,
        seo: entry.yoast_head_json
          ? { title: entry.yoast_head_json.title, description: entry.yoast_head_json.description }
          : undefined,
      };
    },
    [],
  );
  const remoteSlugs = new Set(remote.map((p) => p.slug));
  const posts = [...remote, ...localPosts.filter((p) => !remoteSlugs.has(p.slug))];
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

/** Link target for a post card: the external article, or the page on this site. */
export const postHref = (post: Post) => post.externalUrl ?? `/news/${post.slug}`;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });

/** Clean URL path of the current page ("/what-we-do.html" -> "/what-we-do"). */
export const cleanPath = (url: URL) => url.pathname.replace(/(\/index)?\.html$/, "").replace(/\/$/, "") || "/";
