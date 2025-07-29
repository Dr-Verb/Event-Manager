import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const exercisePath = "/";


///// trzeba uruchomić JSON SERWER!!! 
//// odpalenie lokalnie w folderze poleceniem: npx json-server --port=3002 --watch database/db.json
//// odpalenie / instalacja globalnie zgodnei z readme







/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
    host: true,
  },
  plugins: [react()],
});
