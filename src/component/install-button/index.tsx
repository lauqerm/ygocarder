import { useEffect, useState, useRef } from 'react';
import {
    isStandalone,
    isIOS,
    isInstallAvailable,
    onInstallAvailabilityChange,
    triggerInstall,
    bulkCacheAssets,
    type BulkDownloadProgress,
} from '../../pwa';

type Phase = 'idle' | 'downloading' | 'installing' | 'done' | 'error';

export function InstallButton() {
    const [available, setAvailable] = useState(isInstallAvailable());
    const [phase, setPhase] = useState<Phase>('idle');
    const [progress, setProgress] = useState<BulkDownloadProgress | null>(null);
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return onInstallAvailabilityChange(setAvailable);
    }, []);

    // Hide entirely if already running standalone
    if (isStandalone()) return null;

    // iOS: show instructional flow (no programmatic install)
    // Other browsers: show button only when installable
    if (!available && !isIOS()) return null;

    const handleClick = async () => {
        setError(null);
        setPhase('downloading');
        abortRef.current = new AbortController();

        try {
            const result = await bulkCacheAssets({
                signal: abortRef.current.signal,
                onProgress: setProgress,
            });

            if (result.failed.length > 0) {
                setError(`${result.failed.length} files failed to download`);
                setPhase('error');
                return;
            }

            // iOS can't trigger install programmatically — show instructions
            if (isIOS()) {
                setPhase('done');
                return;
            }

            setPhase('installing');
            const outcome = await triggerInstall();

            if (outcome === 'accepted') {
                setPhase('done');
            } else {
                // User dismissed OS prompt; cache is still populated, allow retry
                setPhase('idle');
            }
        } catch (err) {
            if ((err as Error).name === 'AbortError') {
                setPhase('idle');
            } else {
                setError((err as Error).message);
                setPhase('error');
            }
        }
    };

    const handleCancel = () => {
        abortRef.current?.abort();
    };

    if (phase === 'done') {
        return isIOS() ? <IOSInstructions /> : null;
    }

    if (phase === 'downloading' && progress) {
        const pct = progress.total === 0 ? 100 : (progress.completed / progress.total) * 100;
        const mb = (progress.bytesDownloaded / 1024 / 1024).toFixed(1);
        const totalMb = (progress.totalBytes / 1024 / 1024).toFixed(1);

        return (
            <div className="install-progress">
                <div className="install-progress-label">
                    Downloading for offline use… {Math.round(pct)}%
                </div>
                <div className="install-progress-bar">
                    <div className="install-progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <div className="install-progress-meta">
                    {mb} MB / {totalMb} MB
                </div>
                <button onClick={handleCancel} className="install-cancel">
                    Cancel
                </button>
            </div>
        );
    }

    if (phase === 'installing') {
        return <div className="install-progress">Finishing install…</div>;
    }

    if (phase === 'error') {
        return (
            <div className="install-error">
                <div>Download failed: {error}</div>
                <button onClick={handleClick}>Retry</button>
            </div>
        );
    }

    // Idle state — show the button
    return (
        <button onClick={handleClick} className="install-button">
            Install for offline use
        </button>
    );
}

function IOSInstructions() {
    return (
        <div className="install-ios-instructions">
            <p>Assets downloaded. To finish installing:</p>
            <ol>
                <li>Tap the Share button in Safari</li>
                <li>Scroll down and tap "Add to Home Screen"</li>
                <li>Tap "Add"</li>
            </ol>
        </div>
    );
}