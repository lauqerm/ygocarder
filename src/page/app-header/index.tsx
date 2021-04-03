import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import './app-header.scss';

export const AppHeader = React.memo(() => {
    return <div className="app-header">
        <img alt="app-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} width={48} />
        <div className="app-description">
            <h1>Yugioh Carder <small style={{ fontFamily: 'serif' }}>v{process.env.REACT_APP_VERSION ?? 'unknown'} TCG</small></h1>
            <div className="app-contribution">
                <span>GUI: <b>Lauqerm</b></span>
                <span>Template: <b>Grezar</b> and others (<a
                    href="https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691"
                    target="_blank"
                    rel="noreferrer">Deviant Art</a>)</span>
                <Popover overlayClassName="disclaimer-overlay" content={<div className="disclaimer">
                    <h2>Disclaimer</h2>
                    <ul>
                        <li>This is a personal project, not an "official" card maker.</li>
                        <li>I holds no liability for cards created by this app, including picture, card text and any product that related to it.</li>
                        <li>I do not own any of Yu-Gi-Oh card layers and fonts use in this project.</li>
                        <li>If you want to modify card layers, or use it in any public project, please contact <a
                            href="https://www.deviantart.com/grezar"
                            target="_blank"
                            rel="noreferrer">Grezar</a> directly.</li>
                    </ul>
                </div>}>
                    <ExclamationCircleOutlined className="disclaimer-icon" />
                </Popover>
            </div>
        </div>
    </div>;
}, () => true);

export const taintedCanvasWarning = <Popover
    overlayClassName="disclaimer-overlay"
    style={{ display: 'inline-block' }}
    content={<div className="disclaimer">
        <h2>What is a tainted canvas?</h2>
        <p>
        You are using an image host that does not get the "approval" needed to be draw to the app. Browsers see it as a potential security risk (even if it is not the case), and mark the canvas as "tainted".
        </p>
        <h2>How does it affect me?</h2>
        <p>
        A "tainted canvas" prevent all sort of automatic save. From then on you must save the card manually by right click it → "Save image as...". It is implying that this action is fully as your concern.<br />
        Furthemore, once it get tainted, it will remains tainted even if you switch to other "safe" image host.
        </p>
        <h2>How do I fix it?</h2>
        <p>
        Change to other host ("imgur" for example, Facebook and Twitter will also work just fine) THEN refresh the page.<br />
        If you cannot afford to do that, the app will also work mostly just fine, you only need to manually save the card (and keep cautious).
        </p>
    </div>}>
    <ExclamationCircleOutlined className="disclaimer-icon" />
</Popover>;