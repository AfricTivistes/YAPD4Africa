import type { ImageMetadata } from "astro";

/** An image that is either a local asset (src/assets) or a remote WordPress URL. */
export interface Media {
  src: ImageMetadata | string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SocialLinks {
  linkedin?: string;
  x?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
}

export interface SiteSettings {
  email: string;
  phone: string;
  address: string;
  socials: SocialLinks;
  impact: ImpactStat[];
  /** Online donation page (Paystack, Flutterwave, GlobalGiving…). Empty: donors are invited to get in touch. */
  donateUrl?: string;
}

export type ProjectCategory = "homegrown" | "past";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Plain-text summary used on cards and as meta description. */
  summary: string;
  /** HTML body of the project page. */
  content: string;
  impact: string;
  tags: string[];
  image: Media;
  /** Key figures shown on the project page, e.g. { value: "7,000+", label: "residents with clean water" }. */
  stats?: KeyFigure[];
  /** Funders and implementing partners. */
  supporters?: string[];
  /** Human-readable period, e.g. "2025" or "Since 2019". */
  period?: string;
}

export interface KeyFigure {
  value: string;
  label: string;
}

export type PersonGroup = "staff" | "trustee";

export interface Person {
  name: string;
  role: string;
  group: PersonGroup;
  bio?: string;
  image: Media;
}

export type ReportType = "annual" | "project" | "research";

export interface Report {
  title: string;
  type: ReportType;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  description: string;
  fileUrl: string;
  fileSize?: string;
  cover?: Media;
  /** Slug of the related project, if any. */
  project?: string;
}

export interface Partner {
  name: string;
  url?: string;
  logo: Media;
}

export interface Post {
  slug: string;
  title: string;
  /** Plain-text excerpt. */
  excerpt: string;
  /** HTML body. */
  content: string;
  /** ISO date. */
  date: string;
  image?: Media;
  /** When set, the post links to an external article instead of a page on this site. */
  externalUrl?: string;
  seo?: {
    title?: string;
    description?: string;
  };
}
