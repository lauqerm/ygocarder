/// <reference lib="webworker" />

const CACHE_NAME = 'ygocarder-assets-v1';
const MANIFEST_CACHE = 'ygocarder-manifest-v1';
const BASE_PATH = '/ygocarder/';
const MANIFEST_URL = `${BASE_PATH}asset-manifest.json`;

// Only cache requests under the asset directory
const ASSET_PREFIX = `${BASE_PATH}asset/`;

self.addEventListener('install', (event) => {
    // Activate immediately on first install; we don't precache anything yet
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        // Take control of all open tabs right away
        await self.clients.claim();

        // Clean up old cache versions from previous deployments of the SW itself
        const keys = await caches.keys();
        await Promise.all(
            keys
                .filter((k) => k !== CACHE_NAME && k !== MANIFEST_CACHE)
                .map((k) => caches.delete(k))
        );
    })());
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Only handle GET requests for our assets
    if (request.method !== 'GET') return;
    if (url.origin !== self.location.origin) return;
    if (!url.pathname.startsWith(ASSET_PREFIX)) return;

    event.respondWith(handleAssetRequest(request));
});

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
        // Only cache successful, basic-type responses
        if (response.ok && response.type === 'basic') {
            // Clone before caching — Response bodies can only be read once
            cache.put(request, response.clone()).catch((err) => {
                console.warn('[sw] cache.put failed', request.url, err);
            });
        }
        return response;
    } catch (err) {
        // Offline and not in cache — propagate the error to the page
        console.warn('[sw] fetch failed', request.url, err);
        throw err;
    }
}

// ─── Manifest-driven invalidation ───────────────────────────────────────────
// The page sends this message after fetching the latest manifest.
// We compare against our stored manifest and evict entries whose hashes changed.

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

    // Fast path: same version, nothing to do
    if (oldManifest?.version === newManifest.version) {
        return { changed: 0, removed: 0 };
    }

    const assetCache = await caches.open(CACHE_NAME);
    let changed = 0;
    let removed = 0;

    if (oldManifest) {
        // Evict entries whose hash changed
        for (const [url, { hash }] of Object.entries(oldManifest.assets)) {
            const newEntry = newManifest.assets[url];
            if (!newEntry) {
                // Asset removed from manifest — evict
                if (await assetCache.delete(url)) removed++;
            } else if (newEntry.hash !== hash) {
                // Asset content changed — evict, will refetch on next request
                if (await assetCache.delete(url)) changed++;
            }
        }
    }

    // Store the new manifest as our reference for next sync
    await manifestCache.put(
        'manifest',
        new Response(JSON.stringify(newManifest), {
            headers: { 'Content-Type': 'application/json' },
        })
    );

    // Notify all clients of the result
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
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="23a09879-4d86-587c-9550-19b279bdcd49")}catch(e){}}();
//# debugId=23a09879-4d86-587c-9550-19b279bdcd49
