import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()],
  css: {
    postcss: './postcss.config.mjs' // ou .cjs se escolheu a opção 2
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});