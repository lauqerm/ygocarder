import { useCallback, useEffect, useRef, useState } from 'react';
import { checkPersistentStorage, detectCapabilities, PWACapabilities, Tristate, verifyCacheWritable } from './capability';
import { FullDiagnostics, getFullDiagnostics, getSyncDiagnostics, SyncDiagnostics } from './diagnostic';
import { isInstallPromptReady, onInstallAvailabilityChange, wasInstalledBefore } from './install-prompt';

export type InstallHint = 'definitely-installed' | 'probably-installed' | 'unknown';

export interface UsePWAResult {
    // Sync state — always available, never null
    capabilities: PWACapabilities;
    runtime: SyncDiagnostics;
    online: boolean;
    installPromptReady: boolean;
    installHint: InstallHint;

    // Async state — null while loading
    diagnostics: FullDiagnostics | null;
    persistentStorage: Tristate;
    cacheWritable: boolean | null;
    cacheWritableError: string | null;

    // Lifecycle
    loading: boolean;
    refresh: () => Promise<void>;
}

export function usePWA(): UsePWAResult {
    // ─── Sync state ────────────────────────────────────────────────────────
    // detectCapabilities() is cheap and stable for the session, but we still
    // useState it so we can refresh after `appinstalled` flips standalone.
    const [capabilities, setCapabilities] = useState(() => detectCapabilities());
    const [runtime, setRuntime] = useState<SyncDiagnostics>(() => getSyncDiagnostics());
    const [online, setOnline] = useState<boolean>(() => navigator.onLine);
    const [installPromptReady, setInstallPromptReady] = useState<boolean>(() => isInstallPromptReady());

    // ─── Async state ───────────────────────────────────────────────────────
    const [diagnostics, setDiagnostics] = useState<FullDiagnostics | null>(null);
    const [persistentStorage, setPersistentStorage] = useState<Tristate>('unknown');
    const [cacheWritable, setCacheWritable] = useState<boolean | null>(null);
    const [cacheWritableError, setCacheWritableError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Track mounted state to avoid setState-on-unmounted warnings
    const mountedRef = useRef(true);
    useEffect(() => {
        mountedRef.current = true;
        return () => { mountedRef.current = false };
    }, []);

    // ─── Refresh function ──────────────────────────────────────────────────
    const refresh = useCallback(async () => {
        setLoading(true);

        // Re-snapshot sync state too — standalone may have flipped, etc.
        setCapabilities(detectCapabilities());
        setRuntime(getSyncDiagnostics());

        try {
            const [diag, persisted, writable] = await Promise.all([
                getFullDiagnostics(),
                checkPersistentStorage(),
                verifyCacheWritable(),
            ]);

            if (!mountedRef.current) return;

            setDiagnostics(diag);
            setPersistentStorage(persisted);
            setCacheWritable(writable.writable);
            setCacheWritableError(writable.error ?? null);
        } catch (err) {
            console.warn('[usePWA] refresh failed', err);
        } finally {
            if (mountedRef.current) setLoading(false);
        }
    }, []);

    // ─── Initial load ──────────────────────────────────────────────────────
    useEffect(() => {
        refresh();
    }, [refresh]);

    // ─── Subscribe to dynamic events ───────────────────────────────────────
    useEffect(() => {
        const onOnline = () => setOnline(true);
        const onOffline = () => setOnline(false);
        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);
        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, []);

    useEffect(() => {
        return onInstallAvailabilityChange(setInstallPromptReady);
    }, []);

    useEffect(() => {
        const onInstalled = () => {
            // appinstalled fires when the user accepts the install prompt.
            // Standalone mode may flip; capabilities and diagnostics need refresh.
            refresh();
        };
        window.addEventListener('appinstalled', onInstalled);
        return () => window.removeEventListener('appinstalled', onInstalled);
    }, [refresh]);

    useEffect(() => {
        // The SW posts MANIFEST_SYNCED after evicting changed/removed assets.
        // Cache state may differ now — refresh diagnostics.
        if (!('serviceWorker' in navigator)) return;

        const handler = (event: MessageEvent) => {
            if (event.data?.type === 'MANIFEST_SYNCED') {
                refresh();
            }
        };
        navigator.serviceWorker.addEventListener('message', handler);
        return () => navigator.serviceWorker.removeEventListener('message', handler);
    }, [refresh]);

    // ─── Derived: install hint ─────────────────────────────────────────────
    const installHint: InstallHint = (() => {
        if (capabilities.alreadyStandalone) return 'definitely-installed';
        // Could call getInstalledRelatedApps here too, but it's async and
        // unreliable — leaving it out keeps the hint sync.
        if (wasInstalledBefore()) return 'probably-installed';
        return 'unknown';
    })();

    return {
        capabilities,
        runtime,
        online,
        installPromptReady,
        installHint,
        diagnostics,
        persistentStorage,
        cacheWritable,
        cacheWritableError,
        loading,
        refresh,
    };
}