import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.BASE_PATH || (isGitHubPages ? "/ricemill-project/" : "/");

export default defineConfig({
  base: basePath,
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro(
      isGitHubPages
        ? {
            baseURL: basePath,
            prerender: {
              routes: ["/"],
              crawlLinks: true,
            },
          }
        : {}
    ),
    react(),
  ],
});
