import { GithubFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { Explanation } from '../explanation';
import { SettingButton } from '../setting';
import './app-header.scss';

export const Affiliation = () => {
    return <div className="affiliation">
        <span className="version">v{process.env.REACT_APP_VERSION ?? 'unknown'}</span>
        <div className="affiliation-link">
            <a href="https://github.com/lauqerm/ygocarder" target="_blank" rel="noreferrer">
                <GithubFilled />
            </a>
        </div>
    </div>;
};

const StyledAppSettingContainer = styled.div`
    align-content: center;
    border-left: 1px dashed #b1b1b1;
    padding-left: var(--spacing);
    margin-left: var(--spacing);
`;
export const AppHeader = () => {
    return <div className="app-header">
        <img alt="app-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} width={35} />
        <div className="app-description">
            <h1>Yugioh Carder</h1>
            <div className="app-contribution">
                <span className="app-creator">
                    GUI: <b>Lauqerm</b> <Explanation
                        content={<div className="disclaimer">
                            <h2>Disclaimer</h2>
                            <ul>
                                <li>This is a personal project, not an "official" card maker.</li>
                                <li>I hold no liability for cards created by this app, including pictures, card text and any product related to it.</li>
                                <li>I do not own any of Yu-Gi-Oh card layers and fonts use in this project. They belong to their respective creators.</li>
                                <li>If you want to modify card layers, or use it in any public project, please contact <a
                                    href="https://www.deviantart.com/grezar"
                                    target="_blank"
                                    rel="noreferrer">Grezar</a> or <a
                                    href="https://www.deviantart.com/9558able"
                                    target="_blank"
                                    rel="noreferrer">9558able</a> directly.
                                </li>
                                <li>This app is completely free, I do not charge any kind of fee, require donation or even serve any ads, but I hold no liability for any other parties that use my code in their websites.</li>
                            </ul>
                        </div>}
                    />
                </span>
                <span className="template-creator">
                    Template: <a
                        href="https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691"
                        target="_blank"
                        rel="noreferrer"><b>Grezar</b></a>, <a
                        href="https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421"
                        target="_blank"
                        rel="noreferrer"><b>9558able</b></a>, <a
                        href="https://www.deviantart.com/slackermagician"
                        target="_blank"
                        rel="noreferrer"><b>SlackerMagician</b></a>, <a
                        href="https://www.deviantart.com/icycatelf"
                        target="_blank"
                        rel="noreferrer"><b>icycatelf</b></a> and others
                </span>
            </div>
        </div>
        <StyledAppSettingContainer className="app-setting">
            <SettingButton />
        </StyledAppSettingContainer>
    </div>;
};

export const TaintedCanvasWarning = <Explanation
    overlayClassName="disclaimer-overlay"
    style={{ display: 'inline-block' }}
    content={<div className="disclaimer">
        <h2>What is happening?</h2>
        <p>
            You are using an image host that does not get the "approval" needed for the app to use it. Browsers see it as a potential security risk (even if it is not the case), and mark the card as "tainted".
        </p>
        <h2>How does it affect me?</h2>
        <p>
            A "tainted card" prevents all sort of automatic save. From then on you must save the card manually by right click it → "Save image as...". It is implying that this action is fully of your consent.
        </p>
        <h2>How do I fix it?</h2>
        <p>
            Change to other safe and popular image host ("imgur" for example) will likely fix the issue. You may try to refresh the page if the issue persists.<br />
            If you cannot afford to switch to other image hosts, the app will also work mostly just fine, you only need to manually save the card (and keep cautious for potential malicious links).
        </p>
    </div>}
/>;