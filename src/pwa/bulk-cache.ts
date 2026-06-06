interface AssetEntry {
    hash: string;
    size: number;
}

interface AssetManifest {
    version: string;
    assets: Record<string, AssetEntry>;
    totalBytes: number;
}

const CACHE_NAME = 'ygocarder-assets-v1'; // must match sw.js in public folder
const MANIFEST_URL = `${import.meta.env.BASE_URL}asset-manifest.json`;
const CONCURRENCY = 6;

export interface BulkDownloadProgress {
    completed: number;
    total: number;
    bytesDownloaded: number;
    totalBytes: number;
    failed: string[];
}

export interface BulkDownloadOptions {
    onProgress?: (progress: BulkDownloadProgress) => void;
    signal?: AbortSignal;
}

export async function bulkCacheAssets(
    options: BulkDownloadOptions = {}
): Promise<BulkDownloadProgress> {
    // Request persistent storage so the cache survives storage pressure
    if (navigator.storage?.persist) {
        const persisted = await navigator.storage.persist();
        console.info('[bulk-cache] persistent storage:', persisted);
    }

    const manifest = await fetchManifest();
    const cache = await caches.open(CACHE_NAME);

    // Skip assets already cached (matched by URL — content invalidation is the SW's job)
    const cachedRequests = await cache.keys();
    const cachedUrls = new Set(cachedRequests.map((r) => new URL(r.url).pathname));

    const allUrls = Object.keys(manifest.assets);
    const toFetch = allUrls.filter((url) => !cachedUrls.has(url));

    const totalBytes = toFetch.reduce(
        (sum, url) => sum + manifest.assets[url].size,
        0
    );

    const progress: BulkDownloadProgress = {
        completed: 0,
        total: toFetch.length,
        bytesDownloaded: 0,
        totalBytes,
        failed: [],
    };

    options.onProgress?.(progress);

    if (toFetch.length === 0) return progress;

    // Worker pool: spawn N workers that pull from a shared queue
    const queue = [...toFetch];

    async function worker(): Promise<void> {
        while (queue.length > 0) {
            if (options.signal?.aborted) throw new DOMException('Aborted', 'AbortError');

            const url = queue.shift();
            if (!url) return;

            try {
                const response = await fetchWithRetry(url, options.signal);
                if (response.ok) {
                    await cache.put(new Request(url), response);
                    progress.bytesDownloaded += manifest.assets[url].size;
                } else {
                    progress.failed.push(url);
                }
            } catch (err) {
                if ((err as Error).name === 'AbortError') throw err;
                progress.failed.push(url);
                console.warn('[bulk-cache] failed', url, err);
            }

            progress.completed++;
            options.onProgress?.({ ...progress });
        }
    }

    await Promise.all(
        Array.from({ length: CONCURRENCY }, () => worker())
    );

    return progress;
}

async function fetchManifest(): Promise<AssetManifest> {
    const response = await fetch(`${MANIFEST_URL}?t=${Date.now()}`, {
        cache: 'no-store',
    });
    if (!response.ok) throw new Error(`Manifest fetch failed: ${response.status}`);
    return response.json();
}

async function fetchWithRetry(
    url: string,
    signal: AbortSignal | undefined,
    attempts = 3
): Promise<Response> {
    let lastError: unknown;
    for (let i = 0; i < attempts; i++) {
        if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
        try {
            const response = await fetch(url, { cache: 'no-store', signal });
            if (response.ok) return response;
            lastError = new Error(`HTTP ${response.status}`);
        } catch (err) {
            if ((err as Error).name === 'AbortError') throw err;
            lastError = err;
        }
        // Exponential backoff: 500ms, 1000ms, 2000ms
        await new Promise((r) => setTimeout(r, 500 * 2 ** i));
    }
    throw lastError;
}