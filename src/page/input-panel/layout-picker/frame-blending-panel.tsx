import { Modal } from 'antd';
import styled from 'styled-components';
import { FrameLayoutSettingPanel } from './frame-setting-panel';
import { useCard, useLanguage, useSetting } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { useMemo, useRef, useState } from 'react';
import { CardLayoutPreview, InternalPopover, StyledPopMarkdown } from 'src/component';
import { ApartmentOutlined } from '@ant-design/icons';
import { resolveFrameStyle } from 'src/util';
import { CanvasConst } from 'src/model';
import { getFrameButtonList } from '../const';
import { FlagPresentationList } from '../../common';
import { FrameBehaviorSettingPanel } from './frame-behavior-setting-panel';

const {
    width,
    height,
} = CanvasConst;
const StyledFrameSettingModal = styled(Modal)`
    .ant-modal-content .ant-modal-body {
        padding: 0;
    }
`;
const StyledPendulumFrameInputContainer = styled.div`
    display: inline-flex;
    cursor: pointer;
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    background-color: var(--main-level-4);
    align-items: center;
    &:focus-visible {
        outline: 2px solid var(--focus);
    }
    .flag-list-indicator {
        box-shadow: 0 0 0 var(--bw) var(--sub-level-1) inset;
        padding: var(--spacing-xxs) var(--spacing-xs);
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
        &:empty:before {
            content: "\\200B";
        }
    }
    .pendulum-frame-label {
        display: inline-block;
        background: var(--main-level-4);
        border: var(--bw) solid var(--sub-level-1);
        border-right: none;
        padding: var(--spacing-px) var(--spacing-xs);
        border-radius: var(--br-lg) 0 0 var(--br-lg);
        &:last-child {
            border-radius: var(--br-lg);
            border-right: var(--bw) solid var(--sub-level-1);
        }
    }
    .card-layout-preview-container {
        line-height: 0;
        border: none;
        overflow: hidden;
    }
`;
type BottomFrameOptionGridRef = {
    focus: () => void,
};
export type FrameBlendingPanel = {}
    & Pick<FrameLayoutSettingPanel, 'receivingCanvas' | 'onFrameChange' | 'onSourceLoaded' | 'onTainted' | 'onCropChange'>
export const FrameBlendingPanel = ({
    onFrameChange,
    onTainted,
    onCropChange,
    onSourceLoaded,
    receivingCanvas,
}: FrameBlendingPanel) => {
    const language = useLanguage();
    const {
        isPendulum,
        frame,
        foil,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        effectBackground, pendulumEffectBackground,
        dyeList,
        flag,
    } = useCard(useShallow(({
        card: {
            isPendulum,
            frame,
            foil,
            leftFrame, rightFrame,
            pendulumFrame, pendulumRightFrame,
            effectStyle,
            pendulumStyle,
            dyeList,
            flag,
        },
    }) => ({
        isPendulum,
        frame,
        foil,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        effectBackground: effectStyle.background,
        pendulumEffectBackground: pendulumStyle.background,
        dyeList,
        flag,
    })));
    const {
        showCreativeOption,
        showExtraDecorativeOption,
    } = useSetting(useShallow(({
        setting: {
            showCreativeOption,
            showExtraDecorativeOption,
        },
    }) => ({
        showCreativeOption,
        showExtraDecorativeOption,
    })));
    const containerRef = useRef<HTMLDivElement>(null);
    const frameBlenderRef = useRef<BottomFrameOptionGridRef>(null);
    const [frameBlenderVisible, setFrameBlenderVisible] = useState(false);
    const frameList = useMemo(() => getFrameButtonList('both')
        .filter(entry => {
            return showExtraDecorativeOption || entry.edition === 'normal';
        }),
        [showExtraDecorativeOption],
    );

    const layoutState = {
        frame,
        topLeftFrame: leftFrame,
        topRightFrame: rightFrame,
        bottomLeftFrame: pendulumFrame,
        bottomRightFrame: pendulumRightFrame,
        effectBackground,
        pendulumEffectBackground,
    };
    const advanceLayoutPreviewHeight = 28; // Alignment with frame input
    const flagList = flag
        .map((entry, index) => {
            const target = FlagPresentationList[index];

            if (entry !== 0 && target) return <li key={target.labelKey}>
                {target.valueDisplay(language, entry)}
            </li>;
            return null;
        })
        .filter(entry => entry != null);

    return <>
        <StyledFrameSettingModal
            visible={frameBlenderVisible}
            onCancel={() => setFrameBlenderVisible(false)}
            width={613}
            forceRender
            closable={false}
            footer={null}
            className="global-input-overlay frame-blender-overlay layout-picker-overlay"
        >
            <FrameLayoutSettingPanel ref={frameBlenderRef}
                isPendulum={isPendulum}
                frameList={frameList}
                pendulumFrame={pendulumFrame}
                onTainted={onTainted}
                onCropChange={onCropChange}
                onSourceLoaded={onSourceLoaded}
                receivingCanvas={receivingCanvas}
                onFrameChange={onFrameChange}
                onCancel={() => {
                    setFrameBlenderVisible(false);
                    containerRef.current?.focus();
                }}
            />
            <FrameBehaviorSettingPanel />
        </StyledFrameSettingModal>
        {showCreativeOption && <StyledPendulumFrameInputContainer ref={containerRef}
            className="frame-blend-input"
            tabIndex={0}
            onClick={() => setFrameBlenderVisible(true)}
            onKeyDown={e => {
                if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === '  ') {
                    setFrameBlenderVisible(true);
                    /** Popover takes time to mount / become visible */
                    setTimeout(() => {
                        frameBlenderRef.current?.focus();
                    }, 200);

                    return false;
                }
            }}
        >
            <span className="pendulum-frame-label">
                {language['input.advanced-frame.label']}
            </span>
            <div className="card-layout-preview-container">
                <CardLayoutPreview
                    width={Math.round(advanceLayoutPreviewHeight * width / height)}
                    height={advanceLayoutPreviewHeight}
                    isPendulum={isPendulum}
                    resolvedLayoutState={resolveFrameStyle(layoutState, isPendulum)}
                    tabIndex={-1}
                    dyeList={dyeList}
                    foil={foil}
                    language={language}
                />
            </div>
            <div className="flag-list-indicator">
                {flagList.length > 0
                    ? <InternalPopover
                        content={<StyledPopMarkdown>
                            {language['input.flag.effective.label']}
                            <ul>{flagList}</ul>
                        </StyledPopMarkdown>}
                    >
                        <ApartmentOutlined />
                    </InternalPopover>
                    : null}
            </div>
        </StyledPendulumFrameInputContainer>}
    </>;
};