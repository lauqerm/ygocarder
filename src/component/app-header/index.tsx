import { GithubFilled, InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Explanation } from '../explanation';
import { useI18N, useLanguage } from 'src/service';
import { Button, Radio, Tooltip } from 'antd';
import { buildGlyphAtlas, CHARSET, exportAtlas, reportOutliers } from 'src/util/normalize-v2/glyph-atlas-build';
import { captureException } from 'src/util';
import { VersionLogButton } from './version-log';
import { StyledPopMarkdown } from '../atom';
import { QuestionAndFeedback } from './faq';
import { type SampleCard } from './sample';
import React, { lazy, useEffect, useRef } from 'react';
import { PUBLIC_PATH } from 'src/model';
import { FAQ_BUTTON_ID } from './model';
import './app-header.scss';

export const Affiliation = () => {
    return <div className="affiliation">
        <div className="affiliation-link" onClick={() => {
            captureException(new Error('Not-error: Affiliation link clicked'));
        }}>
            <a href="https://github.com/lauqerm/ygocarder" target="_blank" rel="noreferrer">
                <GithubFilled />
            </a>
        </div>
    </div>;
};

const AppHeaderContainer = styled.div`
    display: inline-grid;
    grid-template-columns: max-content 1fr max-content max-content max-content max-content 85px;
    margin-bottom: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: 3px; // Alignment
    padding-right: var(--spacing);
    border-radius: var(--br);
    box-shadow: var(--bs-block);
    transition: width linear 2s;
    .app-logo {
        cursor: pointer;
        padding: 3px 0; // Alignment
        border-radius: var(--br);
        &:hover {
            background-color: var(--main-active);
        }
    }
    .header-language {
        display: inline-flex;
        flex-wrap: wrap;
        column-gap: var(--spacing-sm);
        row-gap: var(--spacing-sm);
        margin-bottom: var(--spacing-xxs);
        .ant-radio-button-wrapper {
            > span:nth-child(2) {
                font-size: 0.85em;
                letter-spacing: 0.02em;
            }
        }
        .bug-report {
            text-align: center;
            border: var(--bw) solid var(--sub-level-1);
            background-color: var(--main-level-4);
            border-radius: var(--br-lg);
            padding: 0 var(--spacing-xs);
            cursor: pointer;
            &:hover {
                background: var(--sub-danger);
            }
            a {
                display: block;
            }
        }
    }
    .app-description {
        border-left: var(--bw) dashed #b1b1b1;
        padding-left: var(--spacing);
        margin-left: var(--spacing-xs);
        h1 {
            font-family: MatrixBoldSmallCaps;
            margin: 0;
            line-height: 1;
            font-size: var(--fs-2xl);
            letter-spacing: 1px;
            color: var(--color-heavy);
            text-shadow: -1px 1px 2px #1b1b1b;
            transform: translateY(2px); // Alignment
            small {
                font-size: var(--fs-xl);
            }
        }
    }
    .app-contribution {
        display: grid;
        grid-template-columns: max-content 1fr;
        column-gap: var(--spacing-sm);
        font-size: var(--fs-sm);
        line-height: 1.25;
        b {
            font-size: var(--fs-sm);
        }
        > * {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            min-width: 0;
        }
    }
    .header-panel-fallback {
        grid-column: auto / -1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        .anticon-spin {
            font-size: var(--fs-xl);
        }
    }
`;
const AdditionalContributorIcon = styled(InfoCircleOutlined)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`;
const AdditionalContributorContainer = styled(StyledPopMarkdown)`
    font-size: var(--fs-sm);
`;
const HeaderPanel = lazy(() => import('./header-panel').then(({ HeaderPanel }) => ({ default: HeaderPanel })));
/** @summary If possible, please don't remove this credit box. Show these artists the appreciation they deserve for their hard works. */
export type AppHeader = {
    resetCardData: () => void,
} & Pick<SampleCard, 'applyCardData'>;
export const AppHeader = ({
    applyCardData,
    resetCardData,
}: AppHeader) => {
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

    /** Analytic and report */
    const sentryInitialized = useRef(false);
    const reportTarget = document.getElementById('sentry-bug-report');
    useEffect(() => {
        if (language) import('../../util/sentry').then(({ setupSentry }) => {
            if (sentryInitialized.current === false) {
                sentryInitialized.current = true;
                setupSentry(
                    document.getElementById('sentry-bug-report'),
                    {
                        formTitle: language['contributor.bug-report.tooltip'],
                        nameLabel: language['contributor.bug-report.name.label'],
                        namePlaceholder: language['contributor.bug-report.name.placeholder'],
                        messageLabel: language['contributor.bug-report.message.label'],
                        messagePlaceholder: language['contributor.bug-report.message.placeholder'],
                        addScreenshotButtonLabel: language['contributor.bug-report.screenshot.label'],
                        removeScreenshotButtonLabel: language['contributor.bug-report.remove-screenshot.label'],
                        cancelButtonLabel: language['contributor.bug-report.cancel.label'],
                        submitButtonLabel: language['contributor.bug-report.submit.label'],
                        isRequiredLabel: language['contributor.bug-report.required.label'],
                        successMessageText: language['contributor.bug-report.success.label'],
                    }
                );
            }
        });
    }, [language, reportTarget]);

    return <AppHeaderContainer className="app-header">
        <Tooltip title={language['generic.reset.label']}>
            <img className="app-logo" alt="app-logo" src={`${PUBLIC_PATH}/logo192.png`} width={35} onClick={() => resetCardData()} />
        </Tooltip>
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
                <Tooltip title={language['contributor.bug-report.tooltip-detail']}>
                    <span
                        id="sentry-bug-report"
                        className="bug-report"
                        onMouseOver={() => {
                            document.getElementById(FAQ_BUTTON_ID)?.classList.add('js-highlight');
                        }}
                        onMouseOut={() => {
                            document.getElementById(FAQ_BUTTON_ID)?.classList.remove('js-highlight');
                        }}
                    >
                        <div>
                            {language['contributor.bug-report.tooltip']}
                        </div>
                    </span>
                </Tooltip>
                <QuestionAndFeedback />
                <VersionLogButton />
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
                        content={<StyledPopMarkdown className="disclaimer">
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
                        </StyledPopMarkdown>}
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
                            href="https://www.deviantart.com/geckoygo"
                            target="_blank"
                            rel="noreferrer"><b>GeckoYGO</b></a>,
                        <Explanation
                            key="artist-5"
                            icon={AdditionalContributorIcon}
                            content={<AdditionalContributorContainer className="additional-contributors">
                                <ul className="template-creator">
                                    <li>
                                        <a
                                            href="https://www.deviantart.com/icycatelf"
                                            target="_blank"
                                            rel="noreferrer"><b>icycatelf</b></a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.deviantart.com/neophoenixknight/art/Rebirth-Monsters-686893186"
                                            target="_blank"
                                            rel="noreferrer"><b>NeoPhoenixKnight</b></a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/100006320592457/"
                                            target="_blank"
                                            rel="noreferrer"><b>Trí Dũng Song Toàn</b></a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/61577932176567/"
                                            target="_blank"
                                            rel="noreferrer"><b>Trần Quang Anh</b></a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/amarillonmc"
                                            target="_blank"
                                            rel="noreferrer"><b>amarillonmc</b></a>
                                    </li>
                                </ul>
                            </AdditionalContributorContainer>}
                        />
                    )}
                </span>
                <Button onClick={async () => {
                    await document.fonts.ready; // never skip this, or you cache the fallback font

                    const overrideMap = {
                        scale1: {
                            ratio1: {
                                1: { offsetY: 1, scaleY: 1.0217 },
                                2: { offsetY: 1, scaleY: 1.0217 },
                                3: { offsetY: 2, scaleY: 1.0652 },
                                4: { scaleY: 1.0217 },
                                5: { offsetY: 2, scaleY: 1.0652 },
                                6: { scaleY: 1.0217 },
                                7: { scaleY: 1.0217 },
                                8: { scaleY: 1.0217 },
                                9: { scaleY: 1.0217 },
                                E: { offsetY: 1, scaleY: 1.0222 },
                                i: { offsetY: 1, scaleY: 1.0294 },
                                I: { offsetY: 1, scaleY: 1.0222 },
                                N: { offsetY: 1 },
                                O: { scaleY: 0.9787 },
                            },
                            ratio2: {
                                1: { offsetY: 1, scaleY: 1.0217 },
                                2: { offsetY: 1, scaleY: 1.0217 },
                                3: { offsetY: 2, scaleY: 1.0652 },
                                4: { scaleY: 1.0217 },
                                5: { offsetY: 2, scaleY: 1.0652 },
                                6: { scaleY: 1.0217 },
                                7: { scaleY: 1.0217 },
                                8: { scaleY: 1.0217 },
                                9: { scaleY: 1.0217 },
                                E: { offsetY: 1, scaleY: 1.0222 },
                                i: { offsetY: 1, scaleY: 1.0294 },
                                I: { offsetY: 1, scaleY: 1.0222 },
                                N: { offsetY: 1 },
                                O: { offsetY: -1, scaleY: 0.9681 },
                                Q: { offsetY: -1, scaleY: 0.9798 },
                            },
                        },
                        scale2: {
                            ratio1: {
                                1: { offsetY: 1, scaleY: 1.022 },
                                2: { offsetY: 1, scaleY: 1.0217 },
                                3: { offsetY: 2, scaleY: 1.043 },
                                4: { scaleY: 1.022 },
                                5: { offsetY: 1, scaleY: 1.0323 },
                                6: { scaleY: 1.022 },
                                7: { scaleY: 1.022 },
                                8: { scaleY: 1.022 },
                                9: { scaleY: 1.022 },
                                E: { offsetY: 1, scaleY: 1.0111 },
                                i: { offsetY: 1, scaleY: 1.0147 },
                                I: { offsetY: 1, scaleY: 1.0111 },
                                N: { offsetY: 1, scaleY: 1.0101 },
                                O: { offsetY: -1, scaleY: 0.9681 },
                                q: { scaleY: 0.9867 },
                                Q: { offsetY: -1, scaleY: 0.9798 },
                            },
                            ratio2: {
                                1: { offsetY: 1, scaleY: 1.022 },
                                2: { offsetY: 1, scaleY: 1.0217 },
                                3: { offsetY: 2, scaleY: 1.0217 },
                                4: { offsetY: 1, scaleY: 1.0165 },
                                5: { offsetY: 2, scaleY: 1.0377 },
                                6: { scaleY: 1.0111 },
                                7: { offsetY: 1, scaleY: 1.0332 },
                                8: { offsetY: -1, scaleY: 1.0057 },
                                9: { scaleY: 1.0112 },
                                a: { offsetY: 1, scaleY: 1.0074 },
                                A: { offsetY: 1, scaleY: 1.0056 },
                                b: { offsetY: 1, scaleY: 1.0074 },
                                B: { offsetY: 1, scaleY: 1.0056 },
                                c: { offsetY: -1, scaleY: 0.9856 },
                                C: { offsetY: -1, scaleY: 0.9783 },
                                d: { offsetY: 1, scaleY: 1.0074 },
                                D: { offsetY: 1, scaleY: 1.0056 },
                                e: { offsetY: 1, scaleY: 1.0074 },
                                E: { offsetY: 1, scaleY: 1.0055 },
                                f: { offsetY: 1, scaleY: 1.0074 },
                                F: { offsetY: 1, scaleY: 1.0056 },
                                g: { offsetY: -1, scaleY: 0.9856 },
                                G: { offsetY: -1, scaleY: 0.9783 },
                                h: { offsetY: 1, scaleY: 1.0074 },
                                H: { offsetY: 1, scaleY: 1.0056 },
                                i: { offsetY: 1, scaleY: 1.0073 },
                                I: { offsetY: 1, scaleY: 1.0111 },
                                k: { offsetY: 1, scaleY: 1.0074 },
                                K: { offsetY: 1, scaleY: 1.0056 },
                                l: { offsetY: 1, scaleY: 1.0074 },
                                L: { offsetY: 1, scaleY: 1.0056 },
                                m: { offsetY: 1, scaleY: 1.0074 },
                                M: { offsetY: 1, scaleY: 1.0056 },
                                n: { offsetY: 1, scaleY: 1.0066 },
                                N: { offsetY: 1, scaleY: 1.0101 },
                                o: { offsetY: -2, scaleY: 0.9648 },
                                O: { offsetY: -2, scaleY: 0.9681 },
                                p: { offsetY: 1, scaleY: 1.0074 },
                                P: { offsetY: 1, scaleY: 1.0056 },
                                q: { offsetY: -2, scaleY: 0.967 },
                                Q: { offsetY: -2, scaleY: 0.9698 },
                                r: { offsetY: 1, scaleY: 1.0074 },
                                R: { offsetY: 1, scaleY: 1.0056 },
                                s: { offsetY: -1, scaleY: 0.9786 },
                                S: { offsetY: -1, scaleY: 0.9836 },
                                t: { offsetY: 1, scaleY: 1.0074 },
                                T: { offsetY: 1, scaleY: 1.0056 },
                                u: { offsetY: -1, scaleY: 0.9928 },
                                U: { offsetY: -2, scaleY: 0.9891 },
                                v: { offsetY: 1, scaleY: 1.0074 },
                                V: { offsetY: 1, scaleY: 1.0056 },
                                w: { offsetY: 1, scaleY: 1.0074 },
                                W: { offsetY: 1, scaleY: 1.0056 },
                                x: { offsetY: 1, scaleY: 1.0074 },
                                X: { offsetY: 1, scaleY: 1.0056 },
                                y: { offsetY: 1, scaleY: 1.0074 },
                                Y: { offsetY: 1, scaleY: 1.0056 },
                                z: { offsetY: 1, scaleY: 1.0074 },
                                Z: { offsetY: 1, scaleY: 1.0056 },
                            },
                        },
                    };
                    // await exportAtlas(buildGlyphAtlas(
                    //     [
                    //         { id: 'caps', chars: CHARSET.upper, fontSizeCss: 182, anchorChar: 'M', overrides: overrideMap.scale2.ratio1 },
                    //         { id: 'smallcaps', chars: CHARSET.lower, fontSizeCss: 182, anchorChar: 'm', overrides: overrideMap.scale2.ratio1 },
                    //         { id: 'digits', chars: CHARSET.digits, fontSizeCss: 182, anchorChar: '0', overrides: overrideMap.scale2.ratio1 },
                    //     ],
                    //     { fontFamily: 'MatrixRegularSmallCaps, Times New Roman', pixelRatio: 1, fillStyle: '#000' },
                    // ), 'matrix-lg@1x');
                    await exportAtlas(buildGlyphAtlas(
                        [
                            { id: 'caps', chars: CHARSET.upper, fontSizeCss: 182, anchorChar: 'M', overrides: overrideMap.scale2.ratio1 },
                            { id: 'smallcaps', chars: CHARSET.lower, fontSizeCss: 182, anchorChar: 'm', overrides: overrideMap.scale2.ratio1 },
                            { id: 'digits', chars: CHARSET.digits, fontSizeCss: 182, anchorChar: '0', overrides: overrideMap.scale2.ratio1 },
                        ],
                        { fontFamily: 'MatrixRegularSmallCaps, Times New Roman', pixelRatio: 2, fillStyle: '#000' },
                    ), 'matrix-lg@2x');
                    // await exportAtlas(buildGlyphAtlas(
                    //     [
                    //         { id: 'caps', chars: CHARSET.upper, fontSizeCss: 91, anchorChar: 'M', overrides: overrideMap.scale1.ratio1 },
                    //         { id: 'smallcaps', chars: CHARSET.lower, fontSizeCss: 91, anchorChar: 'm', overrides: overrideMap.scale1.ratio1 },
                    //         { id: 'digits', chars: CHARSET.digits, fontSizeCss: 91, anchorChar: '0', overrides: overrideMap.scale1.ratio1 },
                    //     ],
                    //     { fontFamily: 'MatrixRegularSmallCaps, Times New Roman', pixelRatio: 1, fillStyle: '#000' },
                    // ), 'matrix-md@1x');
                    // await exportAtlas(buildGlyphAtlas(
                    //     [
                    //         { id: 'caps', chars: CHARSET.upper, fontSizeCss: 91, anchorChar: 'M', overrides: overrideMap.scale1.ratio1 },
                    //         { id: 'smallcaps', chars: CHARSET.lower, fontSizeCss: 91, anchorChar: 'm', overrides: overrideMap.scale1.ratio1 },
                    //         { id: 'digits', chars: CHARSET.digits, fontSizeCss: 91, anchorChar: '0', overrides: overrideMap.scale1.ratio1 },
                    //     ],
                    //     { fontFamily: 'MatrixRegularSmallCaps, Times New Roman', pixelRatio: 2, fillStyle: '#000' },
                    // ), 'matrix-md@2x');
                }}>
                    Generate
                </Button>
            </div>
        </div>
        <React.Suspense
            fallback={<div className="header-panel-fallback">
                <div>
                    <LoadingOutlined />
                </div>
            </div>}
        >
            <HeaderPanel applyCardData={applyCardData} />
        </React.Suspense>
    </AppHeaderContainer>;
};

export const TaintedCanvasPanel = () => {
    const language = useLanguage();

    return <StyledPopMarkdown className="disclaimer">
        <h2>{language['alert.explaination.tainted.first-question']}</h2>
        <p>{language['alert.explaination.tainted.first-answer']}</p>
        <h2>{language['alert.explaination.tainted.second-question']}</h2>
        <p>{language['alert.explaination.tainted.second-answer']}</p>
        <h2>{language['alert.explaination.tainted.third-question']}</h2>
        <p>{language['alert.explaination.tainted.third-answer']}</p>
    </StyledPopMarkdown>;
};

export const TaintedCanvasWarning = () => {
    return <Explanation
        overlayClassName="disclaimer-overlay"
        content={<TaintedCanvasPanel />}
    />;
};
