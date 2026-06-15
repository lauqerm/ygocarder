import { Button, notification } from 'antd';
import React, { ErrorInfo } from 'react';
import { getLanguage } from 'src/service';
import { captureException } from 'src/util';
import styled from 'styled-components';

export type ErrorBoundaryProps = {
    fallback?: React.ReactChild,
};
export type ErrorBoundaryState = {
    hasError: false,
};
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown) {
        console.error('Boundary', error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        captureException(error, undefined, { data: info.componentStack });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }

        return this.props.children;
    }
};

const NotificationButtonContainer = styled.div`
    button + button {
        margin-left: var(--spacing);
    }
`;
interface State { hasError: boolean; dimissed: boolean }
export class ChunkErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
    state = {
        hasError: false,
        dimissed: false,
    };

    static getDerivedStateFromError(err: Error) {
        const isChunkError = err.message.includes('dynamically imported module')
            || err.message.includes('Failed to fetch');
        return { hasError: isChunkError };
    }

    componentDidMount(): void {
        if (this.state.hasError && !this.state.dimissed) {
            const language = getLanguage();
            const notificationKey = 'reload-for-update';
            const dismiss = () => {
                notification.close(notificationKey);
                this.setState({ dimissed: true });
            };
            notification.info({
                key: notificationKey,
                message: language['prompt.new-version.message'] ?? 'A new version of the app is available',
                description: language['prompt.new-version.description'] ?? 'Save your work and reload the app to get the newest version and avoid potential errors.',
                duration: 0,
                onClick: dismiss,
                btn: <NotificationButtonContainer>
                    <Button onClick={dismiss}>
                        {language['prompt.new-version.dismiss'] ?? 'Do it later'}
                    </Button>
                    <Button onClick={() => window.location.reload()} type="primary">
                        {language['prompt.new-version.ok'] ?? 'Reload now'}
                    </Button>
                </NotificationButtonContainer>
            });
        }
    }
    render() {
        if (this.state.hasError) {
            return <div />;
        }
        return this.props.children;
    }
}