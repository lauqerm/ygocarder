import React, { ErrorInfo } from 'react';
import * as Sentry from '@sentry/react';

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
        Sentry.captureException(error, { data: info.componentStack });
    }
  
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }
    
        return this.props.children;
    }
  }