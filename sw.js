/// <reference lib="webworker" />

const CACHE_NAME = 'ygocarder-assets-v1';
const MANIFEST_CACHE = 'ygocarder-manifest-v1';
const SHELL_CACHE = 'ygocarder-shell-v1';
const BASE_PATH = '/ygocarder/';
const MANIFEST_URL = `${BASE_PATH}asset-manifest.json`;
const SHELL_URL = `${BASE_PATH}index.html`;

// Only cache asset requests under the asset directory
const ASSET_PREFIX = `${BASE_PATH}asset/`;

// Set of caches to preserve during activate cleanup
const CACHE_KEEP = new Set([CACHE_NAME, MANIFEST_CACHE, SHELL_CACHE]);

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        // Precache the app shell so the start_url loads offline.
        // This is what makes the PWA pass Chrome's installability check on mobile.
        const cache = await caches.open(SHELL_CACHE);
        try {
            await cache.add(new Request(SHELL_URL, { cache: 'reload' }));
        } catch (err) {
            console.warn('[sw] failed to precache shell', err);
        }

        // Activate immediately on first install
        self.skipWaiting();
    })());
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        // Take control of all open tabs right away
        await self.clients.claim();

        // Clean up old cache versions from previous deployments of the SW itself
        const keys = await caches.keys();
        await Promise.all(
            keys
                .filter((k) => !CACHE_KEEP.has(k))
                .map((k) => caches.delete(k))
        );
    })());
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (request.method !== 'GET') return;
    if (url.origin !== self.location.origin) return;

    // Navigation requests (HTML documents) — serve the cached shell when offline.
    // This is what enables installability and offline-first launch.
    if (request.mode === 'navigate') {
        event.respondWith(handleNavigation(request));
        return;
    }

    // Asset requests — cache-first
    if (url.pathname.startsWith(ASSET_PREFIX)) {
        event.respondWith(handleAssetRequest(request));
        return;
    }
});

/**
 * Network-first strategy for navigations.
 * Tries network so users get fresh HTML on updates, falls back to cached shell offline.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleNavigation(request) {
    try {
        const response = await fetch(request);
        // Cache the latest shell for offline use
        if (response.ok) {
            const cache = await caches.open(SHELL_CACHE);
            cache.put(SHELL_URL, response.clone()).catch((err) => {
                console.warn('[sw] shell cache.put failed', err);
            });
        }
        return response;
    } catch (err) {
        // Offline — serve the cached shell as fallback for any in-scope navigation
        const cache = await caches.open(SHELL_CACHE);
        const cached = await cache.match(SHELL_URL);
        if (cached) return cached;
        console.warn('[sw] navigation failed and no cached shell', err);
        throw err;
    }
}

/**
 * Cache-first strategy for assets.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleAssetRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok && response.type === 'basic') {
            cache.put(request, response.clone()).catch((err) => {
                console.warn('[sw] cache.put failed', request.url, err);
            });
        }
        return response;
    } catch (err) {
        console.warn('[sw] fetch failed', request.url, err);
        throw err;
    }
}

// ─── Manifest-driven invalidation ───────────────────────────────────────────

self.addEventListener('message', (event) => {
    const data = event.data;
    if (!data || typeof data !== 'object') return;

    if (data.type === 'SYNC_MANIFEST') {
        event.waitUntil(syncManifest(data.manifest));
    }
});

/**
 * @param {{ version: string, assets: Record<string, { hash: string, size: number }> }} newManifest
 */
async function syncManifest(newManifest) {
    const manifestCache = await caches.open(MANIFEST_CACHE);
    const stored = await manifestCache.match('manifest');
    const oldManifest = stored ? await stored.json() : null;

    if (oldManifest?.version === newManifest.version) {
        return { changed: 0, removed: 0 };
    }

    const assetCache = await caches.open(CACHE_NAME);
    let changed = 0;
    let removed = 0;

    if (oldManifest) {
        for (const [url, { hash }] of Object.entries(oldManifest.assets)) {
            const newEntry = newManifest.assets[url];
            if (!newEntry) {
                if (await assetCache.delete(url)) removed++;
            } else if (newEntry.hash !== hash) {
                if (await assetCache.delete(url)) changed++;
            }
        }
    }

    await manifestCache.put(
        'manifest',
        new Response(JSON.stringify(newManifest), {
            headers: { 'Content-Type': 'application/json' },
        })
    );

    const clients = await self.clients.matchAll();
    for (const client of clients) {
        client.postMessage({
            type: 'MANIFEST_SYNCED',
            changed,
            removed,
            version: newManifest.version,
        });
    }
}
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="604dd295-593b-51d9-91c0-a2b29351a13a")}catch(e){}}();
//# debugId=604dd295-593b-51d9-91c0-a2b29351a13a
