// Minimal WordPress REST API client, used at build time only.
// The content model it expects is registered by the plugin in wordpress/yapd-headless.

import type { Media } from "./types";

export const WP_URL = (import.meta.env.WP_URL ?? "").replace(/\/+$/, "");
export const isWordPressEnabled = WP_URL !== "";

const PER_PAGE = 100;
const cache = new Map<string, Promise<unknown>>();

async function fetchJson(url: URL): Promise<Response> {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`WordPress request failed (${res.status} ${res.statusText}): ${url}`);
  }
  return res;
}

/** Fetches every item of a wp/v2 collection, following pagination. Results are cached per build. */
export function getCollection<T>(type: string, params: Record<string, string> = {}): Promise<T[]> {
  const key = `${type}?${new URLSearchParams(params)}`;
  if (!cache.has(key)) {
    cache.set(
      key,
      (async () => {
        const items: T[] = [];
        let page = 1;
        let totalPages = 1;
        do {
          const url = new URL(`${WP_URL}/wp-json/wp/v2/${type}`);
          url.search = new URLSearchParams({
            per_page: String(PER_PAGE),
            page: String(page),
            _embed: "wp:featuredmedia",
            acf_format: "standard",
            ...params,
          }).toString();
          const res = await fetchJson(url);
          totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
          items.push(...((await res.json()) as T[]));
          page++;
        } while (page <= totalPages);
        return items;
      })(),
    );
  }
  return cache.get(key) as Promise<T[]>;
}

/** Fetches a custom endpoint, e.g. "yapd/v1/settings". */
export function getEndpoint<T>(route: string): Promise<T> {
  if (!cache.has(route)) {
    cache.set(
      route,
      fetchJson(new URL(`${WP_URL}/wp-json/${route}`)).then((res) => res.json()),
    );
  }
  return cache.get(route) as Promise<T>;
}

// ---------------------------------------------------------------------------
// Raw WordPress shapes (only the fields we use)

export interface WPRendered {
  rendered: string;
}

export interface WPMedia {
  source_url: string;
  alt_text?: string;
  media_details?: { width?: number; height?: number };
}

export interface WPEntry<Acf = Record<string, unknown>> {
  id: number;
  slug: string;
  date: string;
  title: WPRendered;
  content?: WPRendered;
  excerpt?: WPRendered;
  menu_order?: number;
  acf?: Acf;
  yoast_head_json?: { title?: string; description?: string };
  /** Added by the yapd-headless plugin on reports. */
  yapd_file_size?: string | null;
  _embedded?: { "wp:featuredmedia"?: WPMedia[] };
}

// ---------------------------------------------------------------------------
// Helpers

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
};

export function decodeEntities(text: string): string {
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isNaN(n) ? match : String.fromCodePoint(n);
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

/** Converts rendered HTML (title, excerpt) to plain text. */
export function toPlainText(html = ""): string {
  return decodeEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .replace(/\s*\[…\]\s*$/, "…")
    .trim();
}

export function featuredMedia(entry: WPEntry, fallbackAlt: string): Media | undefined {
  const media = entry._embedded?.["wp:featuredmedia"]?.[0];
  if (!media?.source_url) return undefined;
  return {
    src: media.source_url,
    alt: media.alt_text || fallbackAlt,
    width: media.media_details?.width,
    height: media.media_details?.height,
  };
}

/** Splits a comma-separated ACF text field into trimmed values. */
export function splitList(value: unknown): string[] {
  return typeof value === "string"
    ? value
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean)
    : [];
}
