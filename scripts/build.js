const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const TEMP_BUILD_DIR = path.join(DIST_DIR, 'temp');

const BROWSERS = ['chrome', 'firefox', 'safari'];

async function build() {
    console.log('Building for:', BROWSERS.join(', '));

    // Clean dist directory
    await fs.remove(DIST_DIR);
    await fs.ensureDir(DIST_DIR);

    // Build with Vite (production mode for minification)
    console.log('Building TypeScript files with Vite...');
    try {
        execSync('node scripts/build-vite.js', { 
            cwd: ROOT_DIR, 
            stdio: 'inherit',
            env: { ...process.env, NODE_ENV: 'production' }
        });
    } catch (error) {
        console.error('Vite build failed:', error);
        process.exit(1);
    }

    // Copy built JS files and static assets to each browser dist
    for (const browser of BROWSERS) {
        const browserDist = path.join(DIST_DIR, browser);
        await fs.ensureDir(browserDist);

        console.log(`[${browser}] Copying files...`);

        // Copy compiled JS files from temp build
        const scriptsDir = path.join(browserDist, 'scripts');
        await fs.ensureDir(scriptsDir);
        await fs.copy(
            path.join(TEMP_BUILD_DIR, 'scripts', 'content.js'),
            path.join(scriptsDir, 'content.js')
        );
        await fs.copy(
            path.join(TEMP_BUILD_DIR, 'options.js'),
            path.join(browserDist, 'options.js')
        );

        // Copy static files
        await fs.copy(path.join(SRC_DIR, 'manifest.json'), path.join(browserDist, 'manifest.json'));
        await fs.copy(path.join(SRC_DIR, 'options.html'), path.join(browserDist, 'options.html'));
        await fs.copy(path.join(SRC_DIR, 'options.css'), path.join(browserDist, 'options.css'));
        await fs.copy(path.join(SRC_DIR, 'images'), path.join(browserDist, 'images'));
        await fs.copy(path.join(SRC_DIR, 'test.html'), path.join(browserDist, 'test.html'));
        await fs.copy(path.join(SRC_DIR, 'test-iframe.html'), path.join(browserDist, 'test-iframe.html'));

        // Firefox specific adjustments
        if (browser === 'firefox') {
            await adjustManifestForFirefox(browserDist);
        }
    }

    // Clean up temp build directory
    await fs.remove(TEMP_BUILD_DIR);

    console.log('Build complete!');
}

async function adjustManifestForFirefox(distPath) {
    const manifestPath = path.join(distPath, 'manifest.json');
    const manifest = await fs.readJson(manifestPath);

    // Firefox requires specific ID for some APIs to work or for signing
    // We can add it here if the user provides one, or just ensure compatibility
    // For now, we'll just ensure background service workers are compatible if we had them
    // (Manifest V3 is supported in Firefox)

    // Example: Add browser_specific_settings if needed
    // manifest.browser_specific_settings = {
    //     gecko: {
    //         id: "addon@example.com",
    //         strict_min_version: "109.0"
    //     }
    // };

    await fs.writeJson(manifestPath, manifest, { spaces: 2 });
    console.log('[firefox] Manifest adjusted');
}

build().catch(console.error);
