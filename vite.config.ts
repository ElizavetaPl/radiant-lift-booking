// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project sub-path: https://elizavetapi.github.io/radiant-lift-booking/
const BASE_PATH = "/radiant-lift-booking/";

export default defineConfig({
  // Static hosting: no server runtime is produced.
  nitro: false,
  vite: {
    base: BASE_PATH,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    router: { basepath: BASE_PATH },
    spa: {
      enabled: true,
      prerender: { outputPath: "/index.html", crawlLinks: false },
    },
  },
});
