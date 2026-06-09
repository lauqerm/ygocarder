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
            chunkSizeWarningLimit: 1000, // increase chunk size warning limit to 1000kb, double the default of 500kb, since our chunks are often large due to the nature of the app
            rolldownOptions: {
                output: {
                    codeSplitting: {
                        groups: [
                            {
                                // react-moveable gets its own isolated chunk
                                name: 'vendor-moveable',
                                test: /node_modules[\\/]react-moveable/,
                                priority: 20,
                            },
                        ],
                    },
                },
            },
        },
        define: {
            // By default, Vite doesn't include shims for NodeJS/
            // necessary for segment analytics lib to work
            global: 'window',
            'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version),
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
        preview: {
            allowedHosts: ['stress-snowfield-stinging.ngrok-free.dev'],
        }
    };
});