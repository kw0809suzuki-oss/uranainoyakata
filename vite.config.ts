import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(() => ({
  plugins: [
    nodePolyfills({
      include: ["stream", "crypto", "process"],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
    react(),
  ],
  server: {
    proxy: { "/_api": `http://127.0.0.1:${process.env.PORT || 3333}` },
  },
  build: {
    assetsDir: "_assets",
  },
}));
