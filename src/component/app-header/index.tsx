import { GithubFilled, BugOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Explanation } from '../explanation';
import { SettingButton } from '../setting';
import { useI18N, useLanguage } from 'src/service';
import { Radio } from 'antd';
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
    align-self: center;
    border-left: var(--bw) dashed #b1b1b1;
    padding-left: var(--spacing);
    margin-left: var(--spacing);
    height: 100%;
`;
/** @summary If possible, please don't remove this credit box. Show these artists the appreciation they deserve for their hard works. */
export const AppHeader = () => {
    const {
        language,
        languageInfo,
        languageMetadataMap,
        changeLanguage,
    } = useI18N(({
        languageInfo,
        language,
        languageMetadataMap,
        changeLanguage,
    }) => ({
        languageInfo,
        language,
        languageMetadataMap,
        changeLanguage,
    }));

    return <div className="app-header">
        <img alt="app-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} width={35} />
        <div className="app-description">
            <div className="header-language">
                <h1>Yugioh Carder</h1>
                <Radio.Group value={languageInfo.codeName} size="small" className="language-option">
                    {Object.values(languageMetadataMap)
                        .filter(({ active }) => active)
                        .map(({ codeName, name }) => {
                            return <Radio.Button key={codeName}
                                value={codeName}
                                onChange={e => changeLanguage(e.target.value)}
                            >
                                {name}
                            </Radio.Button>;
                        })}
                </Radio.Group>
                <span className="bug-report">
                    <div id="sentry-bug-report">
                        {language['contributor.bug-report.tooltip']} <BugOutlined />
                    </div>
                </span>
            </div>
            <div className="app-contribution">
                <span className="app-creator">
                    {language['contributor.gui.label']}: <a
                        href="https://github.com/lauqerm/ygocarder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <b>Lauqerm</b>
                    </a>&nbsp;<Explanation
                        content={<div className="disclaimer">
                            <h2>{language['contributor.disclaimer.label']}</h2>
                            <ul>
                                <li>{language['contributor.disclaimer.line-1'](<a key="app-author" href="https://lauqerm.github.io/ygocarder">lauqerm.github.io/ygocarder</a>)}</li>
                                <li>{language['contributor.disclaimer.line-2']}</li>
                                <li>{language['contributor.disclaimer.line-3']}</li>
                                <li>{language['contributor.disclaimer.line-4']}</li>
                                <li>{language['contributor.disclaimer.line-5'](
                                    <a key="template-maker-1"
                                        href="https://www.deviantart.com/grezar"
                                        target="_blank"
                                        rel="noreferrer">Grezar</a>,
                                    <a key="template-maker-2"
                                        href="https://www.deviantart.com/9558able"
                                        target="_blank"
                                        rel="noreferrer">9558able</a>
                                )}</li>
                                <li>{language['contributor.disclaimer.line-6']}</li>
                            </ul>
                        </div>}
                    />
                </span>
                <span className="template-creator">
                    {language['contributor.template-maker'](
                        <a key="artist-1"
                            href="https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691"
                            target="_blank"
                            rel="noreferrer"><b>Grezar</b></a>,
                        <a key="artist-2"
                            href="https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421"
                            target="_blank"
                            rel="noreferrer"><b>9558able</b></a>,
                        <a key="artist-3"
                            href="https://www.deviantart.com/slackermagician"
                            target="_blank"
                            rel="noreferrer"><b>SlackerMagician</b></a>,
                        <a key="artist-4"
                            href="https://www.deviantart.com/icycatelf"
                            target="_blank"
                            rel="noreferrer"><b>icycatelf</b></a>,
                    )}
                </span>
            </div>
        </div>
        <StyledAppSettingContainer className="app-setting">
            <SettingButton />
        </StyledAppSettingContainer>
    </div>;
};

export const TaintedCanvasWarning = () => {
    const language = useLanguage();

    return <Explanation
        overlayClassName="disclaimer-overlay"
        content={<div className="disclaimer">
            <h2>{language['alert.explaination.tainted.first-question']}</h2>
            <p>{language['alert.explaination.tainted.first-answer']}</p>
            <h2>{language['alert.explaination.tainted.second-question']}</h2>
            <p>{language['alert.explaination.tainted.second-answer']}</p>
            <h2>{language['alert.explaination.tainted.third-question']}</h2>
            <p>{language['alert.explaination.tainted.third-answer']}</p>
        </div>}
    />;
};