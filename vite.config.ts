import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    build: {
      minify: isProduction ? 'terser' : false,
      terserOptions: isProduction ? {
        compress: {
          drop_console: false, // Keep console for debugging
        },
      } : undefined,
      rollupOptions: {
        input: {
          content: resolve(__dirname, 'src/scripts/content.ts'),
          options: resolve(__dirname, 'src/options.ts'),
        },
        output: {
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'content') {
              return 'scripts/content.js';
            }
            return '[name].js';
          },
          format: 'es',
        },
      },
      outDir: resolve(__dirname, 'dist/temp'),
      emptyOutDir: true,
    },
  };
});
