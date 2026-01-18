// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://www.hazlatarea.pe",
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap({
            changefreq: "weekly",
            priority: 0.7,
            lastmod: new Date("2026-01-18"),
        }),
    ],
    output: "static",
});
