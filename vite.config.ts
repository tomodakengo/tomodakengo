import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GitHub Pages のリポジトリ名を指定
const repoName = "tomodakengo";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
      ? [
        await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer(),
        ),
      ]
      : []),
    {
      name: 'copy-404-html',
      closeBundle() {
        // ビルド後に404.htmlをdist/publicにコピー
        if (fs.existsSync('client/404.html')) {
          fs.copyFileSync('client/404.html', 'dist/public/404.html');
          console.log('✓ 404.html copied to dist/public');
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  // GitHub Pages用の設定
  base: `/${repoName}/`,
});
