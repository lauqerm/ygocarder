import { isIOS, isStandalone } from './detect';

export type Tristate = 'yes' | 'no' | 'unknown';

export interface PWACapabilities {
    // Core capabilities
    secureContext: boolean;
    serviceWorker: boolean;
    supportCacheStorage: boolean;
    supportStorageEstimate: boolean;
    persistentStorage: Tristate; // async, may be unknown until requested

    // Install flow
    beforeInstallPrompt: boolean; // Chrome-style install
    manualInstall: boolean;        // iOS Add to Home Screen
    alreadyStandalone: boolean;

    // Derived states for UI
    canCacheAssets: boolean;
    canInstall: boolean;
    installMethod: 'prompt' | 'manual' | 'none';
    pwaSupport: 'full' | 'partial' | 'cache-only' | 'none';
    reasons: string[]; // human-readable explanations
}

export function detectCapabilities(): PWACapabilities {
    const reasons: string[] = [];

    // Secure context — gate on everything else
    const secureContext = window.isSecureContext === true;
    if (!secureContext) {
        reasons.push('Insecure context — service workers and Cache API are disabled.');
    }

    // Do not install SW on DEV
    if (import.meta.env.DEV) {
        reasons.push('Install not available on Dev mode - Run `yarn build && yarn preview` to test it.');
    }

    // Service worker presence (already implies secure context if true)
    const serviceWorker = 'serviceWorker' in navigator;
    if (!serviceWorker && secureContext) {
        reasons.push('This browser does not support service workers.');
    }

    // Cache API
    const supportCacheStorage = 'caches' in self && typeof caches?.open === 'function';
    if (!supportCacheStorage && secureContext) {
        reasons.push('This browser does not support the Cache API.');
    }

    // Storage estimate API (for quota reporting in UI)
    const supportStorageEstimate = 'storage' in navigator && typeof navigator.storage?.estimate === 'function';

    // Install prompts
    const beforeInstallPrompt = 'BeforeInstallPromptEvent' in window;
    const isIOSDevice = isIOS();
    const manualInstall = isIOSDevice; // iOS supports A2HS via share sheet

    // Standalone detection
    const alreadyStandalone = isStandalone();

    // Persistent storage status — we report 'unknown' here since the
    // accurate check is async; use checkPersistentStorage() for the truth.
    const persistentStorage: Tristate = 'unknown';

    // ─── Derived states ────────────────────────────────────────────────────

    const canCacheAssets = !import.meta.env.DEV && secureContext && serviceWorker && supportCacheStorage;
    if (canCacheAssets && !reasons.length) {
        // No problems; nothing to add
    }

    const canInstall = !alreadyStandalone && (beforeInstallPrompt || manualInstall);

    const installMethod: PWACapabilities['installMethod'] = alreadyStandalone
        ? 'none'
        : beforeInstallPrompt
            ? 'prompt'
            : manualInstall
                ? 'manual'
                : 'none';

    let pwaSupport: PWACapabilities['pwaSupport'];
    if (alreadyStandalone) {
        pwaSupport = 'full'; // they have it installed; full SW + cache available
    } else if (canCacheAssets && canInstall) {
        pwaSupport = 'full';
    } else if (canCacheAssets && !canInstall) {
        pwaSupport = 'cache-only';
    } else if (supportCacheStorage && !serviceWorker) {
        pwaSupport = 'partial';
    } else {
        pwaSupport = 'none';
    }

    if (pwaSupport === 'cache-only' && !isIOSDevice) {
        const ua = navigator.userAgent;
        if (/Firefox/.test(ua) && !/Mobile/.test(ua)) {
            reasons.push(
                'Firefox on desktop doesn\'t support installing web apps. The app still works in the browser; for offline use, try Chrome, Edge, or use Firefox on mobile.'
            );
        } else {
            reasons.push(
                'Browser supports offline caching but cannot prompt for installation.'
            );
        };
    }
    if (pwaSupport === 'cache-only' && isIOSDevice) {
        reasons.push(
            'On iOS, install via Safari\'s Share menu → Add to Home Screen.'
        );
    }

    return {
        secureContext,
        serviceWorker,
        supportCacheStorage,
        supportStorageEstimate,
        persistentStorage,
        beforeInstallPrompt,
        manualInstall,
        alreadyStandalone,
        canCacheAssets,
        canInstall,
        installMethod,
        pwaSupport,
        reasons,
    };
}

// ─── Async deepening ───────────────────────────────────────────────────────

export async function checkPersistentStorage(): Promise<Tristate> {
    if (!navigator.storage?.persisted) return 'unknown';
    try {
        return (await navigator.storage.persisted()) ? 'yes' : 'no';
    } catch {
        return 'unknown';
    }
}

/**
 * Verify cache operations actually work, not just that the API exists.
 * Useful to detect quota exhaustion or storage permission denial.
 */
export async function verifyCacheWritable(): Promise<{
    writable: boolean;
    error?: string;
}> {
    if (!('caches' in self)) {
        return { writable: false, error: 'Cache API unavailable' };
    }
    const probeName = '__pwa_probe__';
    try {
        const cache = await caches.open(probeName);
        await cache.put(
            '/__pwa_probe__',
            new Response('probe', { headers: { 'Content-Type': 'text/plain' } })
        );
        await cache.delete('/__pwa_probe__');
        await caches.delete(probeName);
        return { writable: true };
    } catch (err) {
        return {
            writable: false,
            error: (err as Error).message ?? 'unknown error',
        };
    }
}