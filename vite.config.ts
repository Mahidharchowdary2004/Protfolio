import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "0.0.0.0",  // Ensures compatibility with various environments
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3003", // Backend URL
        changeOrigin: true,              // Ensures headers match the backend
        secure: false,                   // Disables SSL checks (for development)
        rewrite: (path) => path.replace(/^\/api/, ""), // Clean endpoint usage
      },
    },
  },
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
