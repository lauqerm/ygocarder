import { DatabaseFilled, BookFilled, SnippetsFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { SettingButton } from '../setting';
import { useCardList, useI18N, usePresetManager } from 'src/service';
import { StyledHeaderButtonContainer } from '../icon-button';
import { useShallow } from 'zustand/react/shallow';
import { mergeClass } from 'src/util';
import { PresetManager } from '../preset-manager';
import { SampleCard, SampleCardRef } from './sample';
import { useRef } from 'react';
import { InstallButton } from '../install-button';

const StyledAppHeaderToolbarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-left: var(--spacing);
    align-content: flex-start;
    > .app-header-button {
        flex: 1 0 auto;
        &.install-app {
            flex-basis: 85px;
        }
    }
`;
const StyledAppHeaderButtonContainer = styled.div`
    align-content: center;
    align-self: center;
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    padding: var(--spacing-xxs) var(--spacing-sm);
    background-color: var(--main-level-4);
    label {
        text-align: center;
    }
    .button-label {
        position: relative;
        .anticon {
            margin: var(--spacing-px);
        }
    }
    .manager-notice {
        position: absolute;
        color: var(--main-danger);
        right: 0;
        top: 0;
        line-height: 1;
    }
    .preset-manager-active,
    .manager-active {
        color: var(--main-online);
        .anticon {
            color: var(--main-online);
        }
    }
    &:hover {
        background-color: var(--sub-level-4);
    }
`;
export type HeaderPanel = Pick<SampleCard, 'applyCardData'>;
export const HeaderPanel = ({
    applyCardData,
}: HeaderPanel) => {
    const {
        language,
    } = useI18N(({
        language,
    }) => ({
        language,
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

    return <StyledAppHeaderToolbarContainer className="app-header-toolbar">
        <StyledAppHeaderButtonContainer className="app-header-button app-setting">
            <SettingButton />
        </StyledAppHeaderButtonContainer>
        <StyledAppHeaderButtonContainer className="app-header-button card-manager">
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
        <StyledAppHeaderButtonContainer className="app-header-button preset-manager">
            <StyledHeaderButtonContainer
                className={mergeClass('preset-manager-button-label', presetManagerVisible ? 'preset-manager-active' : '')}
                onClick={() => setPresetManagerVisible()}
            >
                <div className="button-label">
                    <BookFilled />
                    <label>{language['preset.manager.label']}</label>
                </div>
            </StyledHeaderButtonContainer>
            <PresetManager language={language} />
        </StyledAppHeaderButtonContainer>
        <StyledAppHeaderButtonContainer className="app-header-button sample-card">
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
        <StyledAppHeaderButtonContainer className="app-header-button install-app">
            <StyledHeaderButtonContainer
                className={mergeClass('install-button-label')}
            >
                <InstallButton className="button-label" />
            </StyledHeaderButtonContainer>
        </StyledAppHeaderButtonContainer>
    </StyledAppHeaderToolbarContainer>;
};