import { defineConfig } from 'vite';
// import { aliases } from 'vite-plugin-aliases'; // Note the import change
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['react-hook-form'],
  },
  plugins: [react({
    include: "**/*.tsx",
  })],
  resolve: {
    alias: {
      '@components': './src/components',
      '@api': './src/api',
      '@pages': './src/pages',
      '@hooks': './src/hooks',
      '@store': './src/store',
    },
  },
});
