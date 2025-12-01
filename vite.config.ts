import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
          '@styles': path.resolve(__dirname, './styles'),
          '@components': path.resolve(__dirname, './components'),
          '@hooks': path.resolve(__dirname, './hooks'),
        }
      },
      css: {
        postcss: './postcss.config.cjs',
      },
      build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
          output: {
            manualChunks: undefined
          }
        }
      },
      // Simple performance optimization
      server: {
        hmr: true,
        proxy: {
          '/api': {
            target: process.env.VITE_PROXY_TARGET ?? 'http://localhost:5000',
            changeOrigin: true,
            secure: false,
            // keep the /api prefix so StoreContext can keep calling /api/*
            rewrite: (path) => path
          }
        }
      }
    };
});
