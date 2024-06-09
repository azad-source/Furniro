import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), viteTsconfigPaths(), svgr()],
    test: {
      globals: true,
      environment: "jsdom",
    },
    resolve: {
      alias: {
        variables: resolve(__dirname, "src/variables"),
      },
    },
  };
});
