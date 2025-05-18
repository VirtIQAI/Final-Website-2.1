import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: 'https://virtiq.dk',
      exclude: ['/404'],
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', '@splinetool/react-spline'],
        },
      },
    },
  },
});