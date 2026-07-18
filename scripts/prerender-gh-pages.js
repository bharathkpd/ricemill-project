import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const ssrPath = path.resolve(rootDir, ".output/server/_ssr/ssr.mjs");
const publicDir = path.resolve(rootDir, ".output/public");

async function run() {
  console.log("Generating static HTML for GitHub Pages from built SSR handler...");
  try {
    const ssrModule = await import(pathToFileURL(ssrPath).href);
    const handler = ssrModule.default;
    if (!handler || typeof handler.fetch !== "function") {
      throw new Error("Could not find fetch handler on SSR module");
    }

    const basePath = process.env.BASE_PATH || "/ricemill-project/";
    const url = `http://localhost${basePath}`;
    console.log(`Requesting ${url} from SSR engine...`);

    const response = await handler.fetch(new Request(url), {}, {});
    if (response.status !== 200) {
      console.warn(`Warning: SSR handler returned status ${response.status} for ${url}`);
    }

    const html = await response.text();
    if (!html || !html.includes("<html")) {
      throw new Error("Rendered output does not look like valid HTML");
    }

    const indexPath = path.join(publicDir, "index.html");
    const notFoundPath = path.join(publicDir, "404.html");
    const noJekyllPath = path.join(publicDir, ".nojekyll");

    await fs.writeFile(indexPath, html, "utf-8");
    await fs.writeFile(notFoundPath, html, "utf-8");
    await fs.writeFile(noJekyllPath, "", "utf-8");

    console.log(`Successfully generated index.html (${html.length} bytes) and 404.html at ${publicDir}`);
    process.exit(0);
  } catch (err) {
    console.error("Failed to generate static HTML:", err);
    process.exit(1);
  }
}

function pathToFileURL(filepath) {
  return new URL(`file:///${filepath.replace(/\\/g, "/")}`);
}

run();
