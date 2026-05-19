import { useEffect, useState } from 'react';
import { isStandalone, isIOS } from './detect';
import { isInstallAvailable, onInstallAvailabilityChange } from './install-prompt';
import { getFullDiagnostics } from './diagnostic';

export type PWAState =
  | { kind: 'not-supported'; reason: NotSupportedReason }
  | { kind: 'not-installed' }
  | { kind: 'sw-not-ready' }
  | { kind: 'installed-fresh'; manifestVersion: string | null }
  | { kind: 'installed-stale'; manifestVersion: string | null }
  | { kind: 'installed-broken'; cacheCompletion: number };

export type NotSupportedReason =
  | 'dev-mode'            // Service worker must not be installed on dev
  | 'no-service-worker'   // ancient browser
  | 'ios-no-prompt'       // iOS Safari, must use Share → Add to Home Screen
  | 'firefox-desktop'     // Firefox desktop doesn't support install prompt
  | 'in-private-window'   // best-guess: storage APIs throw
  | 'unknown';            // installable signal never fired but no clear reason

export function usePWAState(): PWAState {
  const [state, setState] = useState<PWAState>({ kind: 'sw-not-ready' });

  useEffect(() => {
    let cancelled = false;

    async function resolve() {
      const next = await computeState();
      if (!cancelled) setState(next);
    }

    resolve();

    // Re-resolve when installability changes
    const offAvail = onInstallAvailabilityChange(() => resolve());

    // Re-resolve when manifest syncs
    const onMsg = (e: MessageEvent) => {
      if (e.data?.type === 'MANIFEST_SYNCED') resolve();
    };
    navigator.serviceWorker?.addEventListener('message', onMsg);

    // Re-resolve when app gets installed mid-session
    const onInstalled = () => resolve();
    window.addEventListener('appinstalled', onInstalled);

    return () => {
      cancelled = true;
      offAvail();
      navigator.serviceWorker?.removeEventListener('message', onMsg);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  return state;
}

async function computeState(): Promise<PWAState> {  // In dev mode, no SW is registered — short-circuit to a clear state
  if (import.meta.env.DEV) {
    return { kind: 'not-supported', reason: 'dev-mode' };
  }

  if (!('serviceWorker' in navigator)) {
    return { kind: 'not-supported', reason: 'no-service-worker' };
  }

  // Wait for the SW to be ready before evaluating further state.
  // navigator.serviceWorker.ready resolves once a SW is active for the page.
  // If we time out, fall through with whatever we have.
  const ready = await Promise.race([
    navigator.serviceWorker.ready.then(() => true),
    new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 3000)),
  ]);

  if (!ready) {
    console.warn('[pwa-state] service worker not ready after 3s');
    return { kind: 'sw-not-ready' };
  }

  const diagnostics = await getFullDiagnostics();
  const standalone = isStandalone();

  console.debug('[pwa-state] computed', {
    standalone,
    manifestVersion: diagnostics.manifestVersion,
    cacheCompletion: diagnostics.cacheCompletion,
    expectedAssetCount: diagnostics.expectedAssetCount,
    cachedAssetCount: diagnostics.cachedAssetCount,
  });

  if (standalone) {
    if (
      diagnostics.expectedAssetCount &&
      diagnostics.cacheCompletion < 0.9
    ) {
      return {
        kind: 'installed-broken',
        cacheCompletion: diagnostics.cacheCompletion,
      };
    }

    const updateAvailable = await checkForUpdate(diagnostics.manifestVersion);
    if (updateAvailable) {
      return { kind: 'installed-stale', manifestVersion: diagnostics.manifestVersion };
    }
    return { kind: 'installed-fresh', manifestVersion: diagnostics.manifestVersion };
  }

  if (isInstallAvailable()) {
    return { kind: 'not-installed' };
  }

  return { kind: 'not-supported', reason: detectUnsupportedReason() };
}

async function checkForUpdate(currentVersion: string | null): Promise<boolean> {
  if (!currentVersion) return false;
  if (!navigator.onLine) return false;

  try {
    const url = `${import.meta.env.BASE_URL}asset-manifest.json?t=${Date.now()}`;

    // Timeout the manifest check to avoid blocking the UI on slow networks
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, {
      cache: 'no-store',
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!response.ok) {
      console.warn('[pwa-state] manifest fetch returned', response.status);
      return false;
    }

    const live = await response.json();
    console.debug('[pwa-state] live manifest version:', live.version, 'current:', currentVersion);
    return live.version !== currentVersion;
  } catch (err) {
    console.warn('[pwa-state] update check failed:', err);
    return false;
  }
}

function detectUnsupportedReason(): NotSupportedReason {
  if (isIOS()) return 'ios-no-prompt';

  const ua = navigator.userAgent;
  if (/Firefox/.test(ua) && !/Mobile/.test(ua)) return 'firefox-desktop';

  // Private mode detection is unreliable but storage APIs failing is a hint
  // (We don't actively test here — too expensive to gate UI on. Fall through.)

  return 'unknown';
}