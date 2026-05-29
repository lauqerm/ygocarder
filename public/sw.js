/// <reference lib="webworker" />

/** WORKER: Asset caching */
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

        const assetCache = await caches.open(CACHE_NAME);
        const allKeys = await assetCache.keys();
        const seenUrls = new Map();

        for (const request of allKeys) {
            const url = new URL(request.url).pathname;
            if (seenUrls.has(url)) {
                // Already have an entry for this URL; delete this duplicate
                await assetCache.delete(request);
            } else {
                seenUrls.set(url, request);
            }
        }
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
 * Tries network so users get fresh HTML on updates, falls back to cached shell offline. Skip the check as quickly as possible when offline, to avoid stale waiting time.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
const NAV_TIMEOUT_MS = 3000;
async function handleNavigation(request) {
    // Fast path: definitely offline
    if (!self.navigator.onLine) {
        const cached = await caches.match(SHELL_URL);
        if (cached) return cached;
    }

    const networkPromise = fetch(request).then(async (response) => {
        if (response.ok) {
            const cache = await caches.open(SHELL_CACHE);
            cache.put(SHELL_URL, response.clone()).catch(() => { });
        }
        return response;
    });

    // Race: whichever finishes first wins
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(async () => {
            const cached = await caches.match(SHELL_URL);
            if (cached) resolve(cached);
            // If no cache, don't resolve — let network finish or fail
        }, NAV_TIMEOUT_MS);
    });

    try {
        const result = await Promise.race([networkPromise, timeoutPromise]);
        if (result) return result;
        return await networkPromise; // fallback
    } catch (err) {
        // Network failed; serve cache as last resort
        const cached = await caches.match(SHELL_URL);
        if (cached) return cached;
        throw err;
    }
};

/**
 * Cache-first strategy for assets.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleAssetRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, { ignoreVary: true });
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok && response.type === 'basic') {
            // Store under a canonical Request to avoid header-variant duplicates
            const canonicalRequest = new Request(request.url, {
                method: 'GET',
                credentials: 'same-origin',
            });
            cache.put(canonicalRequest, response.clone()).catch((err) => {
                console.warn('[sw] cache.put failed', request.url, err);
            });
        }
        return response;
    } catch (err) {
        console.warn('[sw] fetch failed', request.url, err);
        throw err;
    }
}

// Manifest-driven invalidation

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
};

/** WORKER: Interact with IndexedDB */
/** Remember to update the use-carder-db as well */
const YGO_CARDER_DB = 'YgoCarderDb';
const YGO_CARDER_DB_VERSION = 6;
function getDb() {
    let resolveDbPromise;
    let rejectDbPromise;
    const dbPromise = new Promise((resolve, reject) => {
        resolveDbPromise = resolve;
        rejectDbPromise = reject;
    });
    const DbOpenRequest = self.indexedDB.open(YGO_CARDER_DB, YGO_CARDER_DB_VERSION);
    DbOpenRequest.onupgradeneeded = event => {
        const db = event.target.result;
        const newVersion = event.newVersion;
        if (!db.objectStoreNames.contains('messageStore')) {
            db.createObjectStore('messageStore', { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains('presetLayoutStore')) {
            db.createObjectStore('presetLayoutStore', { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains('presetNameStyleStore')) {
            db.createObjectStore('presetNameStyleStore', { keyPath: 'key' });
        }
        if (newVersion === 4) {
            if (!db.objectStoreNames.contains('presetImageStore')) {
                db.createObjectStore('presetImageStore', { keyPath: 'key' });
            }
        }
        if (!db.objectStoreNames.contains('cardStore')) {
            db.createObjectStore('cardStore', { keyPath: 'key' });
        }
        console.info('YgoCarderDb ready');
    };
    DbOpenRequest.onsuccess = () => {
        resolveDbPromise(DbOpenRequest.result);
    };
    DbOpenRequest.onerror = () => {
        rejectDbPromise();
    };
    return dbPromise;
}

self.addEventListener('message', (event) => {
    if (event.data?.type !== 'SAVE_LATEST') return;

    // Use waitUntil to keep the SW alive until the write finishes.
    // event.waitUntil isn't on message events directly, but you can wrap
    // the work in a promise the SW won't kill mid-flight.
    event.waitUntil(handleSaveLatest(event.data));
});

async function handleSaveLatest({ content, version }) {
    try {
        const db = await getDb();
        if (db) {
            const tx = db.transaction('cardStore', 'readwrite');
            const objectStore = tx.objectStore('cardStore');
            await objectStore.put({ key: 'latest', content, version });

            await tx.commit();
        }
    } catch (err) {
        // SW has no UI, so just log. You could also broadcast back to any
        // remaining open clients via clients.matchAll() + postMessage if you
        // want to surface errors.
        console.error('[SW] SAVE_LATEST failed:', err);
    }
}