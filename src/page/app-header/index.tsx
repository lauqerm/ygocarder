import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { Explanation } from 'src/component';
import './app-header.scss';

export const AppHeader = React.memo(() => {
    return <div className="app-header">
        <img alt="app-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} width={48} />
        <div className="app-description">
            <h1>Yugioh Carder <small style={{ fontFamily: 'serif' }}>v{process.env.REACT_APP_VERSION ?? 'unknown'} TCG</small></h1>
            <div className="app-contribution">
                <span>GUI: <b>Lauqerm</b></span>
                <span>
                    Template: <b>Grezar</b> (<a
                        href="https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691"
                        target="_blank"
                        rel="noreferrer">DeviantArt</a>), <b>9558able</b> (<a
                        href="https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421"
                        target="_blank"
                        rel="noreferrer">DeviantArt</a>) and others
                </span>
                <Explanation
                    content={<div className="disclaimer">
                        <h2>Disclaimer</h2>
                        <ul>
                            <li>This is a personal project, not an "official" card maker.</li>
                            <li>I hold no liability for cards created by this app, including pictures, card text and any product that related to it.</li>
                            <li>I do not own any of Yu-Gi-Oh card layers and fonts use in this project. They belong to their respective creators.</li>
                            <li>If you want to modify card layers, or use it in any public project, please contact <a
                                href="https://www.deviantart.com/grezar"
                                target="_blank"
                                rel="noreferrer">Grezar</a> or <a
                                href="https://www.deviantart.com/9558able"
                                target="_blank"
                                rel="noreferrer">9558able</a> directly.
                            </li>
                            <li>I do not charge any kind of fee, require donation or embed ads, and hold no liability for any other parties that use my code in their websites.</li>
                        </ul>
                    </div>}
                />
            </div>
        </div>
    </div>;
}, () => true);

export const taintedCanvasWarning = <Popover
    overlayClassName="disclaimer-overlay"
    style={{ display: 'inline-block' }}
    content={<div className="disclaimer">
        <h2>What is happening?</h2>
        <p>
            You are using an image host that does not get the "approval" needed to be draw to the app. Browsers see it as a potential security risk (even if it is not the case), and mark the canvas as "tainted".
        </p>
        <h2>How does it affect me?</h2>
        <p>
            A "tainted canvas" prevent all sort of automatic save. From then on you must save the card manually by right click it → "Save image as...". It is implying that this action is fully of your concern.<br />
            Furthemore, once it get tainted, it will remains tainted even if you switch to other "safe" image host.
        </p>
        <h2>How do I fix it?</h2>
        <p>
            Change to other safe and popular image host ("imgur" for example) <b>then refresh the page</b>.<br />
            If you cannot afford to do that, the app will also work mostly just fine, you only need to manually save the card (and keep cautious).
        </p>
    </div>}>
    <ExclamationCircleOutlined className="disclaimer-icon" />
</Popover>;