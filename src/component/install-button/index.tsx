import { useEffect, useState, useRef, type ReactNode } from 'react';
import { Button, Modal, Progress, Alert, Space, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import {
    isStandalone,
    isIOS,
    isInstallAvailable,
    onInstallAvailabilityChange,
    triggerInstall,
    bulkCacheAssets,
    type BulkDownloadProgress,
} from '../../pwa';

const { Text, Paragraph } = Typography;

type Phase = 'idle' | 'downloading' | 'installing' | 'done' | 'error';

export interface InstallButtonProps {
    /** Custom button content. Defaults to "Install for offline use" with download icon. */
    children?: ReactNode;
    /** Antd Button props passthrough */
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    size?: 'small' | 'middle' | 'large';
    className?: string;
}

export function InstallButton({
    children,
    type = 'primary',
    size = 'middle',
    className,
}: InstallButtonProps) {
    const [available, setAvailable] = useState(isInstallAvailable());
    const [phase, setPhase] = useState<Phase>('idle');
    const [progress, setProgress] = useState<BulkDownloadProgress | null>(null);
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return onInstallAvailabilityChange(setAvailable);
    }, []);

    // Warn before unload while downloading
    useEffect(() => {
        if (phase !== 'downloading') return;

        const handler = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            // Modern browsers ignore the custom message but still show their own
            e.returnValue = '';
            return '';
        };

        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, [phase]);

    if (isStandalone()) return null;
    if (!available && !isIOS()) return null;

    const reset = () => {
        setPhase('idle');
        setProgress(null);
        setError(null);
        abortRef.current = null;
    };

    const startInstall = async () => {
        setError(null);
        setPhase('downloading');
        abortRef.current = new AbortController();

        try {
            const result = await bulkCacheAssets({
                signal: abortRef.current.signal,
                onProgress: setProgress,
            });

            if (result.failed.length > 0) {
                setError(`${result.failed.length} files failed to download. You can retry.`);
                setPhase('error');
                return;
            }

            if (isIOS()) {
                setPhase('done');
                return;
            }

            setPhase('installing');
            const outcome = await triggerInstall();

            if (outcome === 'accepted') {
                setPhase('done');
            } else {
                // User dismissed the OS prompt — cache is still good, allow retry
                reset();
            }
        } catch (err) {
            if ((err as Error).name === 'AbortError') {
                reset();
            } else {
                setError((err as Error).message);
                setPhase('error');
            }
        }
    };

    const requestClose = () => {
        if (phase === 'downloading') {
            Modal.confirm({
                title: 'Cancel installation?',
                content:
                    'Your download progress will be paused. Already-downloaded files stay cached, so resuming later will be faster.',
                okText: 'Cancel installation',
                okButtonProps: { danger: true },
                cancelText: 'Keep downloading',
                onOk: () => {
                    abortRef.current?.abort();
                },
            });
            return;
        }

        if (phase === 'installing') {
            // OS dialog is up — nothing meaningful to abort
            return;
        }

        reset();
    };

    const modalOpen = phase !== 'idle';

    return (
        <>
            <Button
                type={type}
                size={size}
                icon={<DownloadOutlined />}
                onClick={startInstall}
                className={className}
            >
                {children ?? 'Install for offline use'}
            </Button>

            <Modal
                visible={modalOpen}
                title={modalTitle(phase)}
                onCancel={requestClose}
                maskClosable={phase !== 'downloading'}
                keyboard={phase !== 'downloading'}
                closable={phase !== 'installing'}
                footer={modalFooter(phase, requestClose, startInstall, reset)}
                width={460}
                className="install-modal"
                centered
                destroyOnClose
            >
                {phase === 'downloading' && progress && (
                    <DownloadingView progress={progress} />
                )}
                {phase === 'installing' && (
                    <Paragraph>
                        <Text>Waiting for system install prompt…</Text>
                    </Paragraph>
                )}
                {phase === 'done' && <DoneView />}
                {phase === 'error' && error && (
                    <Alert
                        type="error"
                        showIcon
                        message="Installation failed"
                        description={error}
                    />
                )}
            </Modal>
        </>
    );
}

function modalTitle(phase: Phase): string {
    switch (phase) {
        case 'downloading': return 'Downloading assets';
        case 'installing': return 'Confirm installation';
        case 'done': return isIOS() ? 'Almost done' : 'Installed';
        case 'error': return 'Something went wrong';
        default: return '';
    }
}

function modalFooter(
    phase: Phase,
    requestClose: () => void,
    retry: () => void,
    reset: () => void
) {
    if (phase === 'downloading') {
        return (
            <Button onClick={requestClose} danger>
                Cancel
            </Button>
        );
    }
    if (phase === 'error') {
        return (
            <Space>
                <Button onClick={reset}>Close</Button>
                <Button type="primary" onClick={retry}>Retry</Button>
            </Space>
        );
    }
    if (phase === 'done') {
        return (
            <Button type="primary" onClick={reset}>
                Done
            </Button>
        );
    }
    return null;
}

function DownloadingView({ progress }: { progress: BulkDownloadProgress }) {
    const pct = progress.total === 0
        ? 100
        : Math.round((progress.completed / progress.total) * 100);
    const mb = (progress.bytesDownloaded / 1024 / 1024).toFixed(1);
    const totalMb = (progress.totalBytes / 1024 / 1024).toFixed(1);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Paragraph type="secondary" style={{ margin: 0 }}>
                Downloading assets so the app works without an internet connection.
                You can keep using the app in another tab — just don't close this one.
            </Paragraph>
            <Progress
                percent={pct}
                status={pct === 100 ? 'success' : 'active'}
                strokeColor={{ from: '#1890ff', to: '#52c41a' }}
            />
            <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                <Text type="secondary">
                    {progress.completed} / {progress.total} files
                </Text>
                <Text type="secondary">
                    {mb} / {totalMb} MB
                </Text>
            </Space>
            {progress.failed.length > 0 && (
                <Alert
                    type="warning"
                    showIcon
                    message={`${progress.failed.length} files failed — will retry at the end`}
                />
            )}
        </Space>
    );
}

function DoneView() {
    if (isIOS()) {
        return (
            <Space direction="vertical">
                <Paragraph>Assets downloaded. To finish installing on iOS:</Paragraph>
                <ol style={{ paddingLeft: 20, margin: 0 }}>
                    <li>Tap the <Text strong>Share</Text> button in Safari</li>
                    <li>Scroll and tap <Text strong>Add to Home Screen</Text></li>
                    <li>Tap <Text strong>Add</Text></li>
                </ol>
            </Space>
        );
    }
    return (
        <Paragraph>
            The app is installed and ready to use offline. You can launch it from
            your home screen or app drawer.
        </Paragraph>
    );
}