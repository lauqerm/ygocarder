import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import './app-header.scss';

export const AppHeader = React.memo(() => {
    return <div className="app-header">
        <img alt="app-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} width={48} />
        <div className="app-description">
            <h1>Yugioh Carder <small>v{process.env.REACT_APP_VERSION ?? 'unknown'} TCG</small></h1>
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