const CACHE_NAME = 'ygocarder-assets-v1';
const MANIFEST_CACHE = 'ygocarder-manifest-v1';
const SESSION_START = Date.now();

// ─── Types ─────────────────────────────────────────────────────────────────

export type DisplayMode = 'standalone' | 'minimal-ui' | 'fullscreen' | 'browser';
export type Platform = 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'other';

export interface SyncDiagnostics {
    // Display
    displayMode: DisplayMode;
    isStandalone: boolean;
    platform: Platform;

    // Network
    online: boolean;
    connectionType: string | null;
    saveData: boolean;

    // Service worker
    serviceWorkerSupported: boolean;
    serviceWorkerController: boolean;

    // Session
    sessionDurationMs: number;
    pageVisibility: 'visible' | 'hidden';
    language: string;
    timezone: string;
}

export interface FullDiagnostics extends SyncDiagnostics {
    // Cache state
    manifestVersion: string | null;
    manifestGeneratedAt: string | null;
    cachedAssetCount: number;
    expectedAssetCount: number | null;
    cacheCompletion: number; // 0–1

    // Storage
    storageQuotaBytes: number | null;
    storageUsageBytes: number | null;
    storagePersisted: boolean | null;

    // Service worker
    serviceWorkerState: ServiceWorkerState | null;
    serviceWorkerScriptURL: string | null;
}

// ─── Sync snapshot ─────────────────────────────────────────────────────────

export function getSyncDiagnostics(): SyncDiagnostics {
    return {
        displayMode: getDisplayMode(),
        isStandalone: getDisplayMode() !== 'browser',
        platform: getPlatform(),
        online: navigator.onLine,
        connectionType: getConnectionType(),
        saveData: getSaveData(),
        serviceWorkerSupported: 'serviceWorker' in navigator,
        serviceWorkerController:
            'serviceWorker' in navigator && navigator.serviceWorker.controller !== null,
        sessionDurationMs: Date.now() - SESSION_START,
        pageVisibility: document.visibilityState === 'hidden' ? 'hidden' : 'visible',
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
}

// ─── Full async snapshot ───────────────────────────────────────────────────

export async function getFullDiagnostics(): Promise<FullDiagnostics> {
    const sync = getSyncDiagnostics();

    const [manifestInfo, cacheInfo, storageInfo, swInfo] = await Promise.all([
        getManifestInfo(),
        getCacheInfo(),
        getStorageInfo(),
        getServiceWorkerInfo(),
    ]);

    const cacheCompletion =
        cacheInfo.expected && cacheInfo.expected > 0
            ? cacheInfo.cached / cacheInfo.expected
            : 0;

    return {
        ...sync,
        manifestVersion: manifestInfo.version,
        manifestGeneratedAt: manifestInfo.generatedAt,
        cachedAssetCount: cacheInfo.cached,
        expectedAssetCount: cacheInfo.expected,
        cacheCompletion,
        storageQuotaBytes: storageInfo.quota,
        storageUsageBytes: storageInfo.usage,
        storagePersisted: storageInfo.persisted,
        serviceWorkerState: swInfo.state,
        serviceWorkerScriptURL: swInfo.scriptURL,
    };
}

// ─── Individual probes ─────────────────────────────────────────────────────

function getDisplayMode(): DisplayMode {
    if ('standalone' in navigator && (navigator as any).standalone === true) {
        return 'standalone'; // iOS
    }
    if (window.matchMedia('(display-mode: fullscreen)').matches) return 'fullscreen';
    if (window.matchMedia('(display-mode: standalone)').matches) return 'standalone';
    if (window.matchMedia('(display-mode: minimal-ui)').matches) return 'minimal-ui';
    return 'browser';
}

function getPlatform(): Platform {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua) && !('MSStream' in window)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    if (/Windows/.test(ua)) return 'windows';
    if (/Mac OS X/.test(ua)) return 'macos';
    if (/Linux/.test(ua)) return 'linux';
    return 'other';
}

function getConnectionType(): string | null {
    const conn = (navigator as any).connection;
    return conn?.effectiveType ?? null;
}

function getSaveData(): boolean {
    return Boolean((navigator as any).connection?.saveData);
}

async function getManifestInfo(): Promise<{
    version: string | null;
    generatedAt: string | null;
}> {
    try {
        const cache = await caches.open(MANIFEST_CACHE);
        const response = await cache.match('manifest');
        if (!response) return { version: null, generatedAt: null };
        const data = await response.json();
        return {
            version: data.version ?? null,
            generatedAt: data.generatedAt ?? null,
        };
    } catch {
        return { version: null, generatedAt: null };
    }
}

async function getCacheInfo(): Promise<{ cached: number; expected: number | null }> {
    try {
        const [assetCache, manifestCache] = await Promise.all([
            caches.open(CACHE_NAME),
            caches.open(MANIFEST_CACHE),
        ]);
        const cachedRequests = await assetCache.keys();

        const manifestResponse = await manifestCache.match('manifest');
        let expected: number | null = null;
        if (manifestResponse) {
            const manifest = await manifestResponse.json();
            expected = Object.keys(manifest.assets ?? {}).length;
        }

        return { cached: cachedRequests.length, expected };
    } catch {
        return { cached: 0, expected: null };
    }
}

async function getStorageInfo(): Promise<{
    quota: number | null;
    usage: number | null;
    persisted: boolean | null;
}> {
    if (!navigator.storage?.estimate) {
        return { quota: null, usage: null, persisted: null };
    }
    try {
        const [estimate, persisted] = await Promise.all([
            navigator.storage.estimate(),
            navigator.storage.persisted?.() ?? Promise.resolve(null),
        ]);
        return {
            quota: estimate.quota ?? null,
            usage: estimate.usage ?? null,
            persisted,
        };
    } catch {
        return { quota: null, usage: null, persisted: null };
    }
}

async function getServiceWorkerInfo(): Promise<{
    state: FullDiagnostics['serviceWorkerState'];
    scriptURL: string | null;
}> {
    if (!('serviceWorker' in navigator)) {
        return { state: null, scriptURL: null };
    }
    try {
        const registration = await navigator.serviceWorker.getRegistration();
        const worker = registration?.active ?? registration?.installing ?? registration?.waiting;
        return {
            state: worker?.state ?? null,
            scriptURL: worker?.scriptURL ?? null,
        };
    } catch {
        return { state: null, scriptURL: null };
    }
}