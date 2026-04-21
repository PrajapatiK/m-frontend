// vite.config.js in todo-components
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "todo-components",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/components/List.tsx",
        "./Input": "./src/components/Input.tsx",
        "./Button": "./src/components/Button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
