import url from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import electron from "vite-plugin-electron/simple";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    electron({
      main: { entry: "electron/main.ts" },
      renderer: process.env.NODE_ENV === "test" ? undefined : {},
      preload: { input: path.join(__dirname, "electron/preload.ts") },
    }),
  ],
  resolve: {
    alias: {
      "@": url.fileURLToPath(new url.URL("./src", import.meta.url)),
    },
  },
});
