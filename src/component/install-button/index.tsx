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
import { LanguageDataDictionary, useLanguage } from 'src/service';
import { captureException } from 'src/util';

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
    const language = useLanguage();
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
        diagnostics,
    } = pwa;
    const {
        alreadyStandalone,
        canCacheAssets,
        canInstall,
        reasons,
    } = capabilities;
    const {
        storageUsageBytes,
        storageQuotaBytes,
    } = diagnostics ?? {};

    const validateBeforeDownload = async () => {
        setError(null);

        if (!cacheWritable) {
            setError(cacheWritableError);
            setPhase('error');
            return;
        }
        setPhase('downloading');
    };
    const handleDownloadError = async (err: unknown, action: string) => {
        if ((err as Error).name === 'AbortError') {
            reset();
        } else {
            await captureException(err, {
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
            await captureException(new Error('PWA: Failed to cache asset'), {
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
            await handleDownloadError(err, 'sync');
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
            await captureException(new Error('Not-error: Pull assets success'));
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
                await captureException(new Error('Not-error: Install success'));
            } else {
                // Dismissed the OS prompt; cache is preserved
                reset();
            }
        } catch (err) {
            await captureException(err, {
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
                title: language['cache-install.modal.cancel-downloading.title'],
                content: language['cache-install.modal.cancel-downloading.content'],
                okText: language['cache-install.modal.cancel-downloading.cancel.title'],
                okButtonProps: { danger: true },
                cancelText: language['cache-install.modal.cancel-downloading.resume.title'],
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
        title={modalTitle(language, phase)}
        onCancel={requestClose}
        maskClosable={phase !== 'downloading'}
        keyboard={phase !== 'downloading'}
        closable={phase !== 'installing'}
        footer={modalFooter(language, phase, requestClose, startInstall, reset, handleInstallClick)}
        className="install-modal"
        centered
        destroyOnClose
    >
        {language['cache-install.modal.content.lead']}
        {phase === 'downloading' && progress && (
            <DownloadingView progress={progress} />
        )}
        {phase === 'ready-to-install' && <InstallViewChromium fullyCached={true} />}
        {phase === 'installing' && (
            <Paragraph>
                <Text>{language['cache-install.modal.content.waiting']}</Text>
            </Paragraph>
        )}
        {phase === 'done' && <DoneView canInstall={canInstall} />}
        {phase === 'error' && error && (
            <Alert
                type="error"
                showIcon
                message={language['cache-install.modal.content.failed']}
                description={error}
            />
        )}
    </StyledProgressModal>;

    const storageUsedByPercentage = (typeof storageUsageBytes === 'number' && typeof storageQuotaBytes === 'number')
        ? Math.round(storageUsageBytes / storageQuotaBytes * 10000) / 100
        : null;
    const quotaByMb = (typeof storageUsageBytes === 'number' && typeof storageQuotaBytes === 'number')
        ? Math.round((storageQuotaBytes - storageUsageBytes) / 1024 / 1024)
        : null;
    const verdict = typeof storageUsedByPercentage !== 'number'
        ? 'var(--color)'
        : storageUsedByPercentage < 60
            ? 'var(--main-online)'
            : storageUsedByPercentage < 80
                ? 'var(--main-warning)'
                : 'var(--main-danger)';
    let icon: React.ReactNode = null;
    let label: React.ReactNode = null;
    let tooltip: React.ReactNode = <div>
        {language['cache-install.button.tooltip.first-line'](cachedAssetCount)}
        {(storageUsedByPercentage != null && quotaByMb != null)
            ? <>
                <br />
                <span style={{ color: verdict }}>
                    {language['cache-install.button.tooltip.second-line-former'](storageUsedByPercentage)}
                </span> {language['cache-install.button.tooltip.second-line-latter'](quotaByMb)}
            </>
            : <></>}
    </div>;
    let callback: undefined | (() => void) = undefined;
    const mountModal = canCacheAssets;
    if (alreadyStandalone) {
        /** Even in standalone mode, we still allow them to sync */
        icon = <SyncOutlined />;
        label = <label>{language['cache-install.button.already-standalone.label']}</label>;
        callback = startSync;
    } else if (canInstall && canCacheAssets) {
        icon = <DownloadOutlined />;
        label = <label>{language['cache-install.button.cache-install.label']}</label>;
        callback = installPromptReady ? startInstall : startSync;
    } else if (canInstall && !canCacheAssets) {
        icon = <AppstoreAddOutlined />;
        /** The label describes the essential of this operation. Without full caching, getting the app is no different than just using the web. */
        label = <label>{language['cache-install.button.install-only.label']}</label>;
        callback = showInstallOnlyHint;
    } else if (!canInstall && canCacheAssets) {
        /** Allow full caching even if they cannot install the app, as installation is just a secondary feature. */
        icon = <CloudDownloadOutlined />;
        label = <label>{language['cache-install.button.cache-only.label'](Math.round(cacheProgress * 100))}</label>;
        callback = startSync;
    } else if (!canInstall && !canCacheAssets) {
        /** Too bad */
        icon = <WarningOutlined />;
        label = <label>{language['cache-install.button.unavailable.label']}</label>;
        tooltip = <div>
            <b>{language['cache-install.button.unavailable.tooltip']}</b><br />
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
            title={language['cache-install.button.install-only.label']}
            onCancel={() => {
                setInstallOnlyModalVisible(false);
            }}
            footer={isIOS()
                ? null
                : <Space>
                    <Button onClick={() => setInstallOnlyModalVisible(false)}>
                        {language['cache-install.modal.later.label']}
                    </Button>
                    <Button type="primary" onClick={handleInstallClick}>
                        {language['cache-install.modal.install.label']}
                    </Button>
                </Space>}
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
    const language = useLanguage();
    return (
        <Space direction="vertical" size="middle">
            {fullyCached && <Alert
                type="success"
                showIcon
                message={language['cache-install.modal.result.chromium-instruction.lead']}
                description={language['cache-install.modal.result.chromium-instruction.message']}
            />}
            <Paragraph type="secondary" style={{ margin: 0 }}>
                {language['cache-install.modal.result.chromium-instruction.content'](<Text strong>
                    {language['cache-install.modal.install.label']}
                </Text>)}
            </Paragraph>
        </Space>
    );
};

function InstallViewIos() {
    const language = useLanguage();
    return (
        <Space direction="vertical" size="middle">
            <div>{language['cache-install.modal.result.ios-instruction.lead']}</div>
            <ol>
                <li>
                    {language['cache-install.modal.result.ios-instruction.first-line'](
                        <Text strong>Share</Text>
                    )}
                </li>
                <li>
                    {language['cache-install.modal.result.ios-instruction.second-line'](
                        <Text strong>Add to Home Screen</Text>,
                        <Text strong>Add to Dock</Text>
                    )}</li>
                <li>
                    {language['cache-install.modal.result.ios-instruction.third-line'](
                        <Text strong>Add</Text>
                    )}
                </li>
            </ol>
        </Space>
    );
}

function modalTitle(language: LanguageDataDictionary, phase: Phase): string {
    switch (phase) {
        case 'downloading': return language['cache-install.modal.title.downloading'];
        case 'ready-to-install': return language['cache-install.modal.title.ready'];
        case 'installing': return language['cache-install.modal.title.installing'];
        case 'done': return language[isIOS() ? 'cache-install.modal.title.almost-done' : 'cache-install.modal.title.installed'];
        case 'error': return language['cache-install.modal.title.error'];
        default: return '';
    }
}

function modalFooter(
    language: LanguageDataDictionary,
    phase: Phase,
    requestClose: () => void,
    retry: () => void,
    reset: () => void,
    installNow: () => void,
) {
    if (phase === 'downloading') {
        return (
            <Button onClick={requestClose} danger>
                {language['generic.cancel.label']}
            </Button>
        );
    }
    if (phase === 'ready-to-install') {
        return (
            <Space>
                <Button onClick={reset}>{language['cache-install.modal.later.label']}</Button>
                <Button type="primary" onClick={installNow}>{language['cache-install.modal.install.label']}</Button>
            </Space>
        );
    }
    if (phase === 'error') {
        return (
            <Space>
                <Button onClick={reset}>{language['generic.close.label']}</Button>
                <Button type="primary" onClick={retry}>{language['cache-install.modal.retry.label']}</Button>
            </Space>
        );
    }
    if (phase === 'done') {
        return (
            <Button type="primary" onClick={reset}>
                {language['generic.done.label']}
            </Button>
        );
    }
    return null;
};

function DownloadingView({ progress }: { progress: BulkDownloadProgress }) {
    const language = useLanguage();
    const pct = progress.total === 0
        ? 100
        : Math.round((progress.completed / progress.total) * 100);
    const mb = (progress.bytesDownloaded / 1024 / 1024).toFixed(1);
    const totalMb = (progress.totalBytes / 1024 / 1024).toFixed(1);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Paragraph type="secondary" style={{ margin: 0 }}>
                {language['cache-install.modal.downloading.content']}
            </Paragraph>
            <Progress
                percent={pct}
                status={pct === 100 ? 'success' : 'active'}
                strokeColor={{ from: '#1890ff', to: '#52c41a' }}
            />
            <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                <Text type="secondary">
                    {progress.completed} / {progress.total} ({mb} / {totalMb} MB)
                </Text>
            </Space>
            {progress.failed.length > 0 && (
                <Alert
                    type="warning"
                    showIcon
                    message={language['cache-install.modal.downloading.error'](progress.failed.length)}
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
    const language = useLanguage();
    if (isIOS() && canInstall) return <InstallViewIos />;
    return canInstall
        ? <Paragraph>
            {language['cache-install.modal.result.installed-cached']}
        </Paragraph>
        : <Paragraph>
            {language['cache-install.modal.result.cached']}
        </Paragraph>;
};