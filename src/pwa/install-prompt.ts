interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const listeners = new Set<(available: boolean) => void>();
const INSTALLED_KEY = 'pwa.installed';

export function initInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault(); // suppress the browser's mini-infobar
        deferredPrompt = e as BeforeInstallPromptEvent;
        notify(true);
    });

    window.addEventListener('appinstalled', () => {
        try {
            localStorage.setItem(INSTALLED_KEY, new Date().toISOString());
        } catch { /* private mode etc. */ }
        deferredPrompt = null;
        notify(false);
    });
};

export function wasInstalledBefore(): boolean {
    try {
        return localStorage.getItem(INSTALLED_KEY) !== null;
    } catch {
        return false;
    }
};

export function isInstallPromptReady(): boolean {
    return deferredPrompt !== null;
}

export function onInstallAvailabilityChange(
    listener: (available: boolean) => void
): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export async function triggerInstall(): Promise<'accepted' | 'dismissed' | 'unavailable'> {
    if (!deferredPrompt) return 'unavailable';

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    notify(false);
    return outcome;
}

function notify(available: boolean) {
    for (const l of listeners) l(available);
}