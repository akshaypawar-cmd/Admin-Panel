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
    "@routes":path.resolve(__dirname,"./src/routes"),
    "@container":path.resolve(__dirname,"./src/containers"),
    "@schema":path.resolve(__dirname,"./src/schema"),
    "@types":path.resolve(__dirname,"./src/types"),
    "@forms":path.resolve(__dirname,"./src/Forms"),
    "@services":path.resolve(__dirname,"./src/services")
  }}
});
