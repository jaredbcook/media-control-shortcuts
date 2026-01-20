const { build } = require('vite');
const { resolve } = require('path');

async function buildWithVite() {
    const isProduction = process.env.NODE_ENV === 'production';
    const rootDir = resolve(__dirname, '..');
    const tempDir = resolve(rootDir, 'dist/temp');
    
    // Build content script
    await build({
        root: rootDir,
        build: {
            minify: isProduction ? 'terser' : false,
            terserOptions: isProduction ? {
                compress: {
                    drop_console: false,
                },
            } : undefined,
            rollupOptions: {
                input: resolve(rootDir, 'src/scripts/content.ts'),
                output: {
                    dir: resolve(tempDir, 'scripts'),
                    entryFileNames: 'content.js',
                    format: 'iife',
                    name: 'MediaControlShortcuts',
                },
            },
            outDir: tempDir,
            emptyOutDir: true,
        },
    });

    // Build options script
    await build({
        root: rootDir,
        build: {
            minify: isProduction ? 'terser' : false,
            terserOptions: isProduction ? {
                compress: {
                    drop_console: false,
                },
            } : undefined,
            rollupOptions: {
                input: resolve(rootDir, 'src/options.ts'),
                output: {
                    dir: tempDir,
                    entryFileNames: 'options.js',
                    format: 'iife',
                    name: 'Options',
                },
            },
            outDir: tempDir,
            emptyOutDir: false,
        },
    });
}

buildWithVite().catch(console.error);
