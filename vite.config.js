import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/MyPortfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        asciiCanvas: resolve(__dirname, 'ascii-canvas.html'),
      },
    },
  },
});
