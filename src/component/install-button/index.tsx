import { useEffect, useState, useRef } from 'react';
import { Button, Modal, Progress, Alert, Space, Typography, Popover } from 'antd';
import {
    DownloadOutlined,
    SyncOutlined,
    WarningOutlined,
    CloudDownloadOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import {
    isIOS,
    triggerInstall,
    bulkCacheAssets,
    type BulkDownloadProgress,
    syncManifestWithWorker,
    getFullDiagnostics,
    usePWA,
} from '../../pwa';
import styled from 'styled-components';
import { StyledPopMarkdown } from '../atom';
import * as Sentry from '@sentry/react';

const { Text, Paragraph } = Typography;
const StyledProgressModal = styled(Modal)``;

type Phase = 'idle'
    | 'downloading'
    | 'ready-to-install'
    | 'installing'
    | 'done'
    | 'error';

export interface InstallButtonProps {
    className?: string,
};

export function InstallButton({
    className,
}: InstallButtonProps) {
    const pwa = usePWA();
    const [phase, setPhase] = useState<Phase>('idle');
    const [progress, setProgress] = useState<BulkDownloadProgress | null>(null);
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);
    const [cacheProgress, setCacheProgress] = useState(0);
    const [cachedAssetCount, setCachedAssetCount] = useState(0);
    const cacheHeartbeat = async () => {
        const {
            cacheCompletion,
            cachedAssetCount,
        } = await getFullDiagnostics();
        setCacheProgress(cacheCompletion);
        setCachedAssetCount(cachedAssetCount);
    };
    useEffect(() => {
        cacheHeartbeat();

        const intervalId = setInterval(cacheHeartbeat, 30000);

        return () => clearInterval(intervalId);
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

    const reset = () => {
        setPhase('idle');
        setProgress(null);
        setError(null);
        abortRef.current = null;
    };

    const {
        cacheWritable,
        cacheWritableError,
        capabilities,
        installPromptReady,
    } = pwa;
    const {
        alreadyStandalone,
        canCacheAssets,
        canInstall,
        reasons,
    } = capabilities;

    const validateBeforeDownload = async () => {
        setError(null);

        if (!cacheWritable) {
            setError(cacheWritableError);
            setPhase('error');
            return;
        }
        setPhase('downloading');
    };
    const handleDownloadError = (err: unknown, action: string) => {
        if ((err as Error).name === 'AbortError') {
            reset();
        } else {
            Sentry.captureException(err, {
                extra: {
                    type: `Failed when prepare for ${action}`,
                    ...(typeof err === 'object' ? err : {}),
                },
            });
            setError((err as Error).message);
            setPhase('error');
        }
    };
    const downloadAsset = async () => {
        abortRef.current = new AbortController();
        const result = await bulkCacheAssets({
            signal: abortRef.current.signal,
            onProgress: setProgress,
        });
        /** Prevent flashing */
        await new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 1000));

        if (result.failed.length > 0) {
            setError(`${result.failed.length} files failed to download. You can retry.`);
            setPhase('error');
            Sentry.captureException(new Error('PWA: Failed to cache asset'), {
                extra: {
                    type: 'Failed to cache asset',
                    ...result,
                },
            });
        }
        return result;
    };

    const startSync = async () => {
        await validateBeforeDownload();
        try {
            await syncManifestWithWorker();
            const result = await downloadAsset();

            if (result.failed.length <= 0) {
                setPhase('done');
            }
            cacheHeartbeat();
        } catch (err) {
            handleDownloadError(err, 'sync');
        }
    };

    const startInstall = async () => {
        await validateBeforeDownload();
        abortRef.current = new AbortController();
        try {
            const result = await downloadAsset();

            if (result.failed.length > 0) {
                return;
            }

            if (isIOS()) {
                // iOS skips the prompt step entirely
                setPhase('done');
            } else {
                // Don't call prompt() here — gesture is consumed by now.
                // Wait for the user to click "Install" in the modal.
                setPhase('ready-to-install');
            }
            cacheHeartbeat();
        } catch (err) {
            handleDownloadError(err, 'install');
        }
    };

    const handleInstallClick = async () => {
        setPhase('installing');
        try {
            const outcome = await triggerInstall();
            if (outcome === 'accepted') {
                setPhase('done');
            } else {
                // Dismissed the OS prompt; cache is preserved
                reset();
            }
        } catch (err) {
            Sentry.captureException(err, {
                extra: {
                    type: 'Failed to install',
                    ...err,
                },
            });
            setError((err as Error).message);
            setPhase('error');
        }
    };

    const [installOnlyModalVisible, setInstallOnlyModalVisible] = useState(false);
    const showInstallOnlyHint = () => {
        setInstallOnlyModalVisible(true);
    };

    const requestClose = () => {
        if (phase === 'downloading') {
            Modal.confirm({
                title: 'Cancel download?',
                content:
                    'Your download progress will be paused. Already-downloaded files stay cached, so resuming later will be faster.',
                okText: 'Cancel download',
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

    const assetDownloadModalVisible = phase !== 'idle';
    const AssetDownloadModal = <StyledProgressModal
        visible={assetDownloadModalVisible}
        title={modalTitle(phase)}
        onCancel={requestClose}
        maskClosable={phase !== 'downloading'}
        keyboard={phase !== 'downloading'}
        closable={phase !== 'installing'}
        footer={modalFooter(phase, requestClose, startInstall, reset, handleInstallClick)}
        width={460}
        className="install-modal"
        centered
        destroyOnClose
    >
        Checking for available assets.
        {phase === 'downloading' && progress && (
            <DownloadingView progress={progress} />
        )}
        {phase === 'ready-to-install' && <InstallViewChromium fullyCached={true} />}
        {phase === 'installing' && (
            <Paragraph>
                <Text>Waiting for system install prompt...</Text>
            </Paragraph>
        )}
        {phase === 'done' && <DoneView canInstall={canInstall} />}
        {phase === 'error' && error && (
            <Alert
                type="error"
                showIcon
                message="Installation failed"
                description={error}
            />
        )}
    </StyledProgressModal>;

    let icon: React.ReactNode = null;
    let label: React.ReactNode = null;
    let tooltip: React.ReactNode = <div>{cachedAssetCount} assets cached</div>;
    let callback: undefined | (() => void) = undefined;
    const mountModal = canCacheAssets;
    if (alreadyStandalone) {
        /** Even in standalone mode, we still allow them to sync */
        icon = <SyncOutlined />;
        label = <label>Check</label>;
        callback = startSync;
    } else if (canInstall && canCacheAssets) {
        icon = <DownloadOutlined />;
        label = <label>Install</label>;
        callback = installPromptReady ? startInstall : startSync;
    } else if (canInstall && !canCacheAssets) {
        icon = <AppstoreAddOutlined />;
        /** The label describes the essential of this operation. Without full caching, getting the app is no different than just using the web. */
        label = <label>Add Shortcut</label>;
        callback = showInstallOnlyHint;
    } else if (!canInstall && canCacheAssets) {
        /** Allow full caching even if they cannot install the app, as installation is just a secondary feature. */
        icon = <CloudDownloadOutlined />;
        label = <label>{`${Math.round(cacheProgress * 100)}% cached`}</label>;
        callback = startSync;
    } else if (!canInstall && !canCacheAssets) {
        /** Too bad */
        icon = <WarningOutlined />;
        label = <label>Unavailable</label>;
        tooltip = <div>
            <b>Install and caching is not possible due to:</b><br />
            {(reasons.length === 0 ? ['Unknown Reason'] : reasons).map(entry => <div key={entry}>{entry}</div>)}
        </div>;
    }
    return <Popover
        content={
            <StyledPopMarkdown $width={300}>
                {tooltip}
            </StyledPopMarkdown>
        }
        placement="bottom"
    >
        <div className={className} onClick={callback}>
            {icon}
            {label}
        </div>
        {mountModal && AssetDownloadModal}
        <StyledProgressModal
            visible={installOnlyModalVisible}
            title={'Add Shortcut'}
            onCancel={() => {
                setInstallOnlyModalVisible(false);
            }}
            footer={isIOS()
                ? null
                : <Space>
                    <Button onClick={() => setInstallOnlyModalVisible(false)}>Not now</Button>
                    <Button type="primary" onClick={handleInstallClick}>Install</Button>
                </Space>}
            width={460}
            className="add-shortcut-modal"
            centered
            destroyOnClose
        >
            {isIOS()
                ? <InstallViewIos />
                : <InstallViewChromium />}
        </StyledProgressModal>
    </Popover>;
};

type InstallViewChromium = {
    fullyCached?: boolean,
};
const InstallViewChromium = ({
    fullyCached,
}: InstallViewChromium) => {
    return (
        <Space direction="vertical" size="middle">
            {fullyCached && <Alert
                type="success"
                showIcon
                message="All assets downloaded"
                description="The app is ready to work fully offline."
            />}
            <Paragraph type="secondary" style={{ margin: 0 }}>
                Click <Text strong>Install</Text> to add the app to your home screen
                or app drawer. You'll see a system confirmation dialog next.
            </Paragraph>
        </Space>
    );
};

function InstallViewIos() {
    return (
        <Space direction="vertical" size="middle">
            <div>To install the app on iOS:</div>
            <ol>
                <li>Tap the <Text strong>Share</Text> button in Safari</li>
                <li>Scroll and tap <Text strong>Add to Home Screen</Text> or <Text strong>Add to Dock</Text></li>
                <li>Tap <Text strong>Add</Text></li>
            </ol>
        </Space>
    );
}

function modalTitle(phase: Phase): string {
    switch (phase) {
        case 'downloading': return 'Downloading assets';
        case 'ready-to-install': return 'Ready to install';
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
    reset: () => void,
    installNow: () => void,
) {
    if (phase === 'downloading') {
        return (
            <Button onClick={requestClose} danger>
                Cancel
            </Button>
        );
    }
    if (phase === 'ready-to-install') {
        return (
            <Space>
                <Button onClick={reset}>Not now</Button>
                <Button type="primary" onClick={installNow}>Install</Button>
            </Space>
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
};

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
};

type DoneView = {
    canInstall: boolean,
};
const DoneView = ({
    canInstall,
}: DoneView) => {
    if (isIOS() && canInstall) return <InstallViewIos />;
    return canInstall
        ? <Paragraph>
            The app is installed and ready to use offline. You can launch it from
            your home screen or app drawer.
        </Paragraph>
        : <Paragraph>
            The app is fully cached.
        </Paragraph>;
};