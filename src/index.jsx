import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {
    registerServiceWorker,
    initInstallPrompt,
} from './pwa';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

/** Ready for install prompt */
initInstallPrompt();

// Register after the app has rendered, not during boot
if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
        registerServiceWorker();
    });
}