import { getLocalSetting } from './other';

/** This file is set up in such a way that benefit code splitting. */
type CaptureContext = {
    extra: { [x: string]: unknown },
};
type EventHint = {
    data?: unknown,
};

export const captureException = async (
    e: unknown,
    context?: CaptureContext,
    hint?: EventHint,
) => {
    const Sentry = await import('@sentry/react');

    if (hint) {
        Sentry.captureException(e, hint);
    } else {
        const { extra } = context ?? { extra: {} };
        const reportedError = {
            version: import.meta.env.APP_VERSION ?? '0.0.0',
            setting: getLocalSetting(),
            href: window.location.href,
        };
        Sentry.captureException(e, {
            extra: { ...reportedError, ...extra }
        });
    }
    console.error(e);
};