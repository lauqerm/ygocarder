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

export function initInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault(); // suppress the browser's mini-infobar
        deferredPrompt = e as BeforeInstallPromptEvent;
        notify(true);
    });

    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
        notify(false);
    });
}

export function isInstallAvailable(): boolean {
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