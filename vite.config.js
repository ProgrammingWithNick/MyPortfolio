import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) {
              return "framer-motion"; // Separate Framer Motion
            }
            if (id.includes("@emailjs")) {
              return "emailjs"; // Separate EmailJS
            }
            if (id.includes("react")) {
              return "react-vendor"; // React-related libraries
            }
            return "vendor"; // Other third-party libraries
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Increase warning limit to 1.5MB
  },
});
