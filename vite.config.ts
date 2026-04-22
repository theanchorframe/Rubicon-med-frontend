import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: isSsrBuild
    ? undefined
    : {
        rollupOptions: {
          output: {
            manualChunks: {
              react: ["react", "react-dom", "react-router-dom"],
              animation: ["framer-motion"],
              charts: ["recharts", "react-countup"],
              icons: ["lucide-react", "@phosphor-icons/react"],
              ui: ["@radix-ui/react-dialog", "@radix-ui/react-toast", "@radix-ui/react-tooltip"],
            },
          },
        },
      },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
}));
