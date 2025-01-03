import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr:true,
    watch: {
      usePolling: true, // If changes aren't detected, this may help.
    },
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    extensions: ['.ts', '.js'], // Ensure TypeScript files are resolved
  },
});
