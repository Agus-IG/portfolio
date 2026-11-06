import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativo: funciona tanto en usuario.github.io como en usuario.github.io/portfolio
export default defineConfig({
  plugins: [react()],
  base: './',
});
