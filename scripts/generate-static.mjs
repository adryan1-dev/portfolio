import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const PUBLIC_DIR = resolve(".output/public");
const base = process.env.VITE_BASE || "/";
const pathname = base.endsWith("/") ? base : `${base}/`;
const url = `http://localhost${pathname}`;

const server = await import(new URL("../.output/server/index.mjs", import.meta.url).href);

const response = await server.default.fetch(
  new Request(url),
  {},
  { waitUntil() {}, context: { waitUntil() {} } },
);

if (!response.ok) {
  throw new Error(`Static export failed: ${response.status} ${response.statusText} for ${url}`);
}

const html = await response.text();

await writeFile(resolve(PUBLIC_DIR, "index.html"), html, "utf8");
await writeFile(resolve(PUBLIC_DIR, "404.html"), html, "utf8");
await writeFile(resolve(PUBLIC_DIR, ".nojekyll"), "", "utf8");

console.log(`Static export written to ${PUBLIC_DIR} (${html.length} bytes)`);
