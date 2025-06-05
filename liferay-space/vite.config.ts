import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Versão MÍNIMA para teste
export default defineConfig({
  plugins: [react()],
});