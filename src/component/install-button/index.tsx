import { useEffect, useState, useRef, type ReactNode } from 'react';
import { Button, Modal, Progress, Alert, Space, Typography, Popover } from 'antd';
import {
    DownloadOutlined,
    SyncOutlined,
    CheckCircleOutlined,
    QuestionCircleOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import {
    usePWAState,
    isIOS,
    triggerInstall,
    bulkCacheAssets,
    type BulkDownloadProgress,
    NotSupportedReason,
    syncManifestWithWorker,
} from '../../pwa';
import styled from 'styled-components';
import { StyledPopMarkdown } from '../atom';

const { Text, Paragraph } = Typography;
const StyledProgressModal = styled(Modal)`
    
`;

type Phase = 'idle' | 'downloading' | 'installing' | 'done' | 'error';

export interface InstallButtonProps {
    /** Custom button content. Defaults to "Install for offline use" with download icon. */
    children?: ReactNode,
    className?: string,
}

export function InstallButton({
    children,
    className,
}: InstallButtonProps) {
    const pwaState = usePWAState();
    const [phase, setPhase] = useState<Phase>('idle');
    const [progress, setProgress] = useState<BulkDownloadProgress | null>(null);
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);

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

    const startSync = async () => {
  setError(null);
  setPhase('downloading');
  abortRef.current = new AbortController();

  try {
    await syncManifestWithWorker();
    const result = await bulkCacheAssets({
      signal: abortRef.current.signal,
      onProgress: setProgress,
    });

    if (result.failed.length > 0) {
      setError(`${result.failed.length} files failed to update.`);
      setPhase('error');
    } else {
      setPhase('done');
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
    const ModalComponent = <StyledProgressModal
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
            </StyledProgressModal>;

    switch (pwaState.kind) {
    case 'sw-not-ready':
      return (
        <div className={className}>
                                  <LoadingOutlined />
                                  <label>Preparing</label>
        </div>
      );

    case 'not-supported':
      return <>
      <UnsupportedHint className={className} reason={pwaState.reason} />
      </>;

    case 'not-installed':
      return (
        <>
        <div className={className} onClick={startInstall}>
                                  <DownloadOutlined />
                                  <label>Install</label>
        </div>
          {ModalComponent}
        </>
      );

    case 'installed-fresh':
      return (
        <>
        <div className={className} onClick={startSync}>
                                  <CheckCircleOutlined />
                                  <label>Check</label>
        </div>
          {ModalComponent}
        </>
      );

    case 'installed-stale':
      return (
        <>
        <div className={className} onClick={startSync}>
                                  <SyncOutlined />
                                  <label>Update Now</label>
        </div>
          {ModalComponent}
        </>
      );

    case 'installed-broken':
      return (
        <>
        <div className={className} onClick={startSync}>
            ({Math.round(pwaState.cacheCompletion * 100)}%) Finish
          </div>
          {ModalComponent}
        </>
      );

      default: return <>{children}</>;
  }
}

function UnsupportedHint({ reason, className }: { reason: NotSupportedReason, className?: string }) {
  const { title, content } = unsupportedMessage(reason);

  return (
    <Popover
      content={
        <StyledPopMarkdown>
          <strong>{title}</strong>
          <div>{content}</div>
        </StyledPopMarkdown>
      }
      placement="topLeft"
    >
        <div className={className}>
      <QuestionCircleOutlined />
        <label>Can't Install</label>
      </div>
    </Popover>
  );
}

function unsupportedMessage(reason: NotSupportedReason): { title: string; content: string } {
  switch (reason) {
    case 'dev-mode':
      return {
        title: 'Install not available: Dev mode',
        content: 'Run `yarn build && yarn preview` to test it.',
      };
    case 'no-service-worker':
      return {
        title: 'Install not available: Browser too old',
        content: 'Your browser doesn\'t support offline web apps. Try a recent version of Chrome, Edge, Firefox, or Safari.',
      };
    case 'ios-no-prompt':
      return {
        title: 'Install not available: Add to Home Screen on iOS',
        content: 'Tap the Share button in Safari, then "Add to Home Screen". The app will work offline once installed.',
      };
    case 'firefox-desktop':
      return {
        title: 'Install not available: Not supported on Firefox desktop',
        content: 'Firefox on desktop doesn\'t support installing web apps. The app still works in the browser; for offline use, try Chrome, Edge, or use Firefox on mobile.',
      };
    case 'in-private-window':
      return {
        title: 'Install not available: Private window',
        content: 'Offline mode doesn\'t work in private/incognito windows. Open the app in a regular window to install.',
      };
    default:
      return {
        title: 'Install not available',
        content: 'Your browser doesn\'t support installing this app right now. Check that you\'re on the latest version, in a regular (non-private) window, and using HTTPS.',
      };
  }
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