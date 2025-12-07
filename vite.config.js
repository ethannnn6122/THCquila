import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/THCquila/',
  plugins: [react()],
  resolve: {
    alias: {
      // Helps resolve old node_module imports if needed
    },
  },
  // This section is critical for old "Create React App" projects
  // It allows files ending in .js to contain JSX code
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000, // Keeps your old port
    open: true, // Opens browser automatically
  },
  build: {
    outDir: 'build',
  },
});