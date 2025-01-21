import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import webExtension from "vite-plugin-web-extension";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const isProduction = env.VITE_MODE === "production";

  return {
    plugins: [
      vue(),
      webExtension({
        manifest: resolve(__dirname, "src/manifest.json"),
        bundleInfoJsonPath: "info.json", // Create a bundle info file
        additionalInputs: ["src/inject-scripts/index.ts"],
      }),
    ],
    build: {
      minify: isProduction,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      port: Number(env.VITE_PORT) || 3000, //Dev port
      open: false, //Browser auto-open
    },
  };
});
