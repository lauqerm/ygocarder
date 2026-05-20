import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig(({ mode }) => {
    // Load env vars so SENTRY_AUTH_TOKEN is available
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: '/ygocarder/',
        build: {
            target: 'es2020',
            sourcemap: true, // equivalent to webpack's devtool: 'source-map'
        },
        define: {
            // By default, Vite doesn't include shims for NodeJS/
            // necessary for segment analytics lib to work
            global: 'window',
        },
        plugins: [
            react(),
            // Only run Sentry in production builds and when token is present
            sentryVitePlugin({
                authToken: env.SENTRY_AUTH_TOKEN,
                org: 'lauqerm',
                project: 'ygo-carder',
                disable: !env.SENTRY_AUTH_TOKEN || mode !== 'production',
            }),
        ],
        resolve: {
            alias: {
                'src': path.resolve(__dirname, './src'),
            },
        },
        server: {
            port: 3000, // matches CRA's default, optional
            host: true,
            open: false, // auto-open browser, like CRA
        },
    };
});