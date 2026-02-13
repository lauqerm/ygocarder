import {
    GithubFilled,
    DatabaseFilled,
    AuditOutlined,
    SnippetsFilled,
    QuestionCircleOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { Explanation } from '../explanation';
import { SettingButton } from '../setting';
import { useCard, useCardList, useI18N, useLanguage, usePresetManager } from 'src/service';
import { Dropdown, Menu, Radio, Tooltip } from 'antd';
import { IconButton, StyledHeaderButtonContainer } from '../icon-button';
import { useShallow } from 'zustand/react/shallow';
import { mergeClass } from 'src/util';
import { VersionLogButton } from './version-log';
import { StyledPopMarkdown } from '../atom';
import { FAD_BUTTON_ID, QuestionAndFeedback } from './faq';
import { PresetManager } from '../preset-manager';
import { SampleCard, SampleCardRef } from './sample';
import { useRef } from 'react';
import './app-header.scss';
import { CardSeriesMetadata } from 'src/model';

export const Affiliation = () => {
    return <div className="affiliation">
        <div className="affiliation-link">
            <a href="https://github.com/lauqerm/ygocarder" target="_blank" rel="noreferrer">
                <GithubFilled />
            </a>
        </div>
    </div>;
};

const AdditionalContributorIcon = styled(QuestionCircleOutlined)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`;
const AdditionalContributorContainer = styled(StyledPopMarkdown)`
    font-size: var(--fs-sm);
`;
const StyledAppHeaderButtonContainer = styled.div`
    align-content: center;
    align-self: center;
    border-left: var(--bw) dashed #b1b1b1;
    padding-left: var(--spacing);
    margin-left: var(--spacing);
    height: 100%;
    text-align: center;
    .button-label {
        position: relative;
    }
    .manager-notice {
        position: absolute;
        color: var(--main-danger);
        right: 0;
        top: 0;
        line-height: 1;
    }
`;
/** @summary If possible, please don't remove this credit box. Show these artists the appreciation they deserve for their hard works. */
export type AppHeader = {} & Pick<SampleCard, 'applyCardData'>;
export const AppHeader = ({
    applyCardData,
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
    const {
        cardList,
        isListDirty,
        toggleVisible,
        visible,
    } = useCardList(useShallow(({
        cardList,
        isListDirty,
        toggleVisible,
        visible,
    }) => ({
        cardList,
        isListDirty,
        toggleVisible,
        visible,
    })));
    const {
        setVisible: setPresetManagerVisible,
        visible: presetManagerVisible,
    } = usePresetManager(useShallow(({
        setVisible,
        visible,
    }) => ({
        setVisible,
        visible,
    })));
    const sampleCardRef = useRef<SampleCardRef>(null);
    const {
        series,
        setCard,
    } = useCard(useShallow(({
        card,
        setCard,
    }) => ({
        series: card.series,
        setCard,
    })));

    return <div className="app-header">
        <div className="app-series">
            <div className="series-option-container">
                <Radio.Group value={series} size="small" className="series-option">
                    {Object.values(CardSeriesMetadata)
                        .map(({ value, imagePath }) => {
                            return <Radio.Button key={value}
                                value={value}
                                onChange={e => setCard(card => {
                                    const nextCard = { ...card };
                                    nextCard.series = e.target.value;

                                    return nextCard;
                                })}
                            >
                                <img src={`${process.env.PUBLIC_URL}/asset/image/series/${imagePath}.png`} alt={imagePath} />
                            </Radio.Button>;
                        })}
                </Radio.Group>
            </div>
            
        </div>
        <div className="app-description">
            <div className="app-primary-header">
                <h1>
                    <img alt="app-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} className="app-logo" />
                    Yugioh Carder
                </h1>
                <Dropdown
                    placement="bottomLeft"
                    arrow
                    overlay={<Menu onClick={e => e.domEvent.stopPropagation()}>
                        {Object
                            .values(languageMetadataMap)
                            .filter(({ active }) => active)
                            .map(({ codeName, name }) => {
                                return <Menu.Item key={`${codeName}`}
                                    onClick={() => {
                                        changeLanguage(codeName);
                                    }}
                                >
                                    {name}
                                </Menu.Item>;
                            })}
                    </Menu>}
                >
                    <div>
                        <IconButton
                            onClick={() => {}}
                        >
                            {languageInfo.name}
                        </IconButton>
                    </div>
                </Dropdown>
                <Tooltip title="Check the FAQ Button => Feedbacks to see if your issue is already answered.">
                    <span
                        id="sentry-bug-report"
                        className="bug-report"
                        onMouseOver={() => {
                            document.getElementById(FAD_BUTTON_ID)?.classList.add('js-highlight');
                        }}
                        onMouseOut={() => {
                            document.getElementById(FAD_BUTTON_ID)?.classList.remove('js-highlight');
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
                        <Explanation
                            icon={AdditionalContributorIcon}
                            content={<AdditionalContributorContainer className="additional-contributors">
                                <ul className="template-creator">
                                    <li>
                                        <a
                                            href="https://www.deviantart.com/icycatelf"
                                            target="_blank"
                                            rel="noreferrer"><b>icycatelf</b></a>,
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
                                </ul>
                            </AdditionalContributorContainer>}
                        />
                    )}
                </span>
            </div>
        </div>
        <div className="app-tool">
            <StyledAppHeaderButtonContainer className="app-setting">
                <SettingButton />
            </StyledAppHeaderButtonContainer>
            <StyledAppHeaderButtonContainer className="card-manager">
                <StyledHeaderButtonContainer
                    className={mergeClass('manager-button-label', visible ? 'manager-active' : '')}
                    onClick={() => toggleVisible()}
                >
                    <div className="button-label">
                        <DatabaseFilled />
                        <label>{language['manager.icon.title']}</label>
                        {(isListDirty && cardList.length > 1) && <div className="manager-notice">*</div>}
                    </div>
                </StyledHeaderButtonContainer>
            </StyledAppHeaderButtonContainer>
            <StyledAppHeaderButtonContainer className="preset-manager">
                <StyledHeaderButtonContainer
                    className={mergeClass('preset-manager-button-label', presetManagerVisible ? 'preset-manager-active' : '')}
                    onClick={() => setPresetManagerVisible()}
                >
                    <div className="button-label">
                        <AuditOutlined />
                        <label>{language['preset.manager.label']}</label>
                    </div>
                </StyledHeaderButtonContainer>
                <PresetManager language={language} />
            </StyledAppHeaderButtonContainer>
            <StyledAppHeaderButtonContainer className="sample-card">
                <StyledHeaderButtonContainer
                    className={mergeClass('preset-sample-button-label')}
                    onClick={() => {
                        sampleCardRef.current?.open();
                    }}
                >
                    <div className="button-label">
                        <SnippetsFilled />
                        <label>{language['sample.manager.label']}</label>
                    </div>
                </StyledHeaderButtonContainer>
                <SampleCard
                    ref={sampleCardRef}
                    language={language}
                    applyCardData={applyCardData}
                />
            </StyledAppHeaderButtonContainer>
        </div>
    </div>;
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