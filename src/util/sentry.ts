import { getFullDiagnostics } from 'src/pwa/diagnostic';

/** This file is specifically designed for code splitting:
 * * Dynamic import sentry.
 * * Thunk function for captureException, so that it will not throw error even if sentry is not initialized yet, and also avoiding leaking sentry to the rest of the codebase.
 * * Files used this module must import it directly (this file is not exported to the barrel index file).
 */
export const setupSentry = async (
    reportTarget: HTMLElement | null,
    languageMap: Record<string, string>,
) => {
    const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
    const Sentry = await import('@sentry/react');
    if (reportTarget
        && sentryDsn
        && Sentry.isInitialized() === false
    ) {
        window.addEventListener('online', () => {
            Sentry.setTag('pwa_online', true);
        });
        window.addEventListener('offline', () => {
            Sentry.setTag('pwa_online', false);
        });
        if (navigator) navigator.serviceWorker?.addEventListener('message', (event) => {
            if (event.data?.type === 'MANIFEST_SYNCED') {
                Sentry.setTag('pwa_manifest_version', event.data.version);
            }
        });
        window.addEventListener('appinstalled', () => {
            Sentry.setTag('pwa_just_installed', true);
        });
        Sentry.init({
            dsn: sentryDsn,
            integrations: [
                Sentry.browserTracingIntegration(),
                Sentry.replayIntegration(),
                Sentry.feedbackIntegration({
                    colorScheme: 'system',
                    autoInject: false,
                    onSubmitSuccess: async ({
                        name,
                        message,
                    }: {
                        name: string;
                        email: string;
                        message: string;
                        attachments: unknown[] | undefined;
                    }) => {
                        const diagnostics = await getFullDiagnostics();

                        Sentry.captureMessage('User feedback', {
                            level: 'info',
                            contexts: {
                                pwa_diagnostics: JSON.parse(JSON.stringify(diagnostics)),
                            },
                            extra: {
                                feedback_name: name,
                                feedback_message: message,
                                cache_completion_pct: Math.round(diagnostics.cacheCompletion * 100),
                                storage_used_mb: diagnostics.storageUsageBytes
                                    ? (diagnostics.storageUsageBytes / 1024 / 1024).toFixed(1)
                                    : null,
                            },
                        });
                    },
                }).attachTo(reportTarget, {
                    isEmailRequired: false,
                    showEmail: false,
                    ...languageMap,
                }),
            ],
            /** @todo Should we enable dialog here? Because there is no way for us to contact the user back, we will have a very hard time fighting against false positive error. */
            // beforeSend(event) {
            //     // Check if it is an exception, and if so, show the report dialog
            //     if (event.exception && event.event_id) {
            //         Sentry.showReportDialog({
            //             eventId: event.event_id,
            //         });
            //     }
            //     return event;
            // },
            // Tracing
            tracesSampleRate: 1.0, //  Capture 100% of the transactions
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: ['lauqerm.github.io'],
            // Session Replay
            replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
            replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
        });

        _captureException = async (
            e: unknown,
            context?: CaptureContext,
            hint?: EventHint,
        ) => {
            let setting: Record<string, unknown> = {};
            try {
                const cachedStore = JSON.parse(localStorage.getItem('setting') ?? '{}');

                if (cachedStore && typeof cachedStore === 'object' && !Array.isArray(cachedStore)) setting = cachedStore;
            } catch (e) {
                console.error('useSetting: Error when getting cached setting', e);
            }

            if (hint) {
                Sentry.captureException(e, hint);
            } else {
                const { extra } = context ?? { extra: {} };
                const reportedError = {
                    version: import.meta.env.APP_VERSION ?? '0.0.0',
                    setting,
                    href: window.location.href,
                };
                Sentry.captureException(e, {
                    extra: { ...reportedError, ...extra }
                });
            }
            console.error(e);
        };
        return true;
    }
    return false;
};

/** This file is set up in such a way that benefit code splitting. */
type CaptureContext = {
    extra: { [x: string]: unknown },
};
type EventHint = {
    data?: unknown,
};

let _captureException = async (
    e: unknown,
    context?: CaptureContext,
    hint?: EventHint,
) => {
    console.error('captureException is not initialized yet', e, context, hint);
};

export const captureException = async (
    e: unknown,
    context?: CaptureContext,
    hint?: EventHint,
) => _captureException(e, context, hint);