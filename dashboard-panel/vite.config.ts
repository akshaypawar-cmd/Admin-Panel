import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve : {
  alias: {
    "@api":path.resolve(__dirname,"./src/api"),
    "@components":path.resolve(__dirname, "./src/components"),
    "@pages":path.resolve(__dirname,"./src/pages"),
    "@mockdata":path.resolve(__dirname,"./src/mockdata"),
    "@protected":path.resolve(__dirname,"./src/protected"),
    "@route":path.resolve(__dirname,"./src/route"),
    "@container":path.resolve(__dirname,"./src/container")
  }}
});
