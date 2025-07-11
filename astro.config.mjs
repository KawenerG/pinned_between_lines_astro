// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://kawenerg.github.io/pinned_between_lines_astro",
  base: "/pinned_between_lines_astro/",
  build: {
    format: "file",
  },
  integrations: [pagefind()],
});
