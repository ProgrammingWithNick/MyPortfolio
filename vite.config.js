import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures assets load correctly
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "framer-motion";
            if (id.includes("@emailjs")) return "emailjs";
            if (id.includes("react")) return "react-vendor";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});

