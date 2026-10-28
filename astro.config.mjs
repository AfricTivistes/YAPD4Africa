// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

const { WP_URL } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");

// Images coming from WordPress are downloaded and optimized at build time,
// so the WordPress host has to be explicitly allowed.
const imageDomains = WP_URL ? [new URL(WP_URL).hostname] : [];

export default defineConfig({
  site: "https://yapd4africa.org",
  trailingSlash: "never",
  build: {
    // /what-we-do.html is served as /what-we-do on Netlify (pretty URLs),
    // which keeps the URLs of the previous site unchanged.
    format: "file",
  },
  image: {
    domains: imageDomains,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
