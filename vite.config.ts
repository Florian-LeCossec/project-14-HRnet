import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les dépendances principales
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@mui/material', '@mui/x-date-pickers', '@emotion/react', '@emotion/styled'],
          form: ['@tanstack/react-form', '@tanstack/react-table'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
          utils: ['date-fns'],
          // Autres dépendances
          other: ['react-select', '@flcossec/react-modal']
        },
      },
    },
    // Optimisations supplémentaires
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true,
      },
    },
  },
  // Optimisations pour le développement
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@mui/material',
      '@mui/x-date-pickers',
      '@tanstack/react-form',
      '@tanstack/react-table',
      '@reduxjs/toolkit',
      'react-redux',
      'date-fns'
    ],
  },
});
