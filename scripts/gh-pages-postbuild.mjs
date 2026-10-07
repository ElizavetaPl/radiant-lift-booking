// Prepares dist/client for GitHub Pages: SPA fallback (404.html) and disables Jekyll.
import { copyFileSync, writeFileSync, existsSync } from "node:fs";
const dir = "dist/client";
if (!existsSync(`${dir}/index.html`)) throw new Error("dist/client/index.html missing — SPA shell was not generated");
copyFileSync(`${dir}/index.html`, `${dir}/404.html`);
writeFileSync(`${dir}/.nojekyll`, "");
console.log("GitHub Pages files ready in dist/client");
