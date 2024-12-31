// filepath: /vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  css: {
    devSourcemap:
    false,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') }, // Alias for global styles
      { find: '@cssModules', replacement: path.resolve(__dirname, 'src/components') }, // Alias for components CSS modules
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
