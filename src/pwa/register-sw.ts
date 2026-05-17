const SW_URL = `${import.meta.env.BASE_URL}sw.js`;
const MANIFEST_URL = `${import.meta.env.BASE_URL}asset-manifest.json`;

export interface ManifestSyncResult {
    changed: number;
    removed: number;
    version: string;
}

export async function registerServiceWorker(): Promise<void> {
    if (!('serviceWorker' in navigator)) {
        console.info('[pwa] service workers not supported');
        return;
    }

    try {
        const registration = await navigator.serviceWorker.register(SW_URL, {
            scope: import.meta.env.BASE_URL,
            updateViaCache: 'none',
        });
        console.info('[pwa] service worker registered', registration.scope);

        // Listen for sync results from the worker
        navigator.serviceWorker.addEventListener('message', (event) => {
            const data = event.data;
            if (data?.type === 'MANIFEST_SYNCED') {
                console.info(
                    `[pwa] manifest synced: ${data.changed} changed, ${data.removed} removed`
                );
            }
        });

        // After registration, fetch the manifest and tell the worker about it
        await syncManifestWithWorker();
    } catch (err) {
        console.error('[pwa] service worker registration failed', err);
    }
}

async function syncManifestWithWorker(): Promise<void> {
    // Wait for there to actually be an active worker controlling the page
    const registration = await navigator.serviceWorker.ready;
    const worker = registration.active;
    if (!worker) return;

    try {
        const manifest = await fetch(MANIFEST_URL, { cache: 'no-store' }).then((r) => {
            if (!r.ok) throw new Error(`manifest fetch failed: ${r.status}`);
            return r.json();
        });

        worker.postMessage({ type: 'SYNC_MANIFEST', manifest });
    } catch (err) {
        console.warn('[pwa] manifest sync failed', err);
    }
}