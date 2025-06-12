import { Checkbox, Input, Popover } from 'antd';
import { InternalPopover, PopoverButton, StyledDropdown, StyledPopMarkdown } from 'src/component';
import { CardTextArea, CardTextAreaRef, CardTextInput } from '../input-text';
import { useCard, useLanguage, useSetting } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { CanvasConst, DEFAULT_PENDULUM_SIZE, FlagInfoList, PendulumSizeMap } from 'src/model';
import { CaretDownOutlined, ApartmentOutlined } from '@ant-design/icons';
import { getFrameButtonList, getPendulumSizeList } from '../const';
import styled from 'styled-components';
import { resolveFrameStyle } from 'src/util';
import { CardLayoutPreview, FrameBehaviorSettingPanel, FramelayoutSettingPanel, FrameLayoutSettingPanel } from '../frame-setting-panel';

const {
    width,
    height,
} = CanvasConst;

type BottomFrameOptionGridRef = {
    focus: () => void,
};

const StyledPendulumFrameInputContainer = styled.div`
    display: inline-flex;
    cursor: pointer;
    box-shadow: var(--bs-input);
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    background-color: var(--main-level-4);
    &:focus-visible {
        outline: 2px solid var(--focus);
    }
    .pendulum-frame-info-block {
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
        line-height: 2; // Alignment
        min-width: 110px;
        overflow: hidden;
        border: var(--bw) solid var(--sub-level-1);
        .frame-info-block-label {
            padding: var(--spacing-px) var(--spacing-xs);
        }
    }
    .pendulum-frame-label {
        display: inline-block;
        background: var(--main-level-4);
        border: var(--bw) solid var(--sub-level-1);
        border-right: none;
        padding: var(--spacing-px) var(--spacing-xs);
        border-radius: var(--br-lg) 0 0 var(--br-lg);
        line-height: 2; // Alignment
        &:last-child {
            border-radius: var(--br-lg);
            border-right: var(--bw) solid var(--sub-level-1);
        }
    }
    .card-layout-preview-container {
        line-height: 0;
        border: var(--bw) solid var(--sub-level-1);
        overflow: hidden;
    }
    .anticon {
        align-content: center;
        padding: 0 var(--spacing-xs);
        border: var(--bw) solid var(--sub-level-1);
        border-left: none;
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
    }
`;
const StyledPendulumInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
    .red-scale {
        color: var(--sub-red-scale);
    }
    .blue-scale {
        color: var(--sub-blue-scale);
    }
    .pendulum-option {
        display: grid;
        grid-template-columns: var(--width-label) 1fr;
        align-items: center;
        .pendulum-frame-input,
        .pendulum-checkbox {
            flex: 0 0 auto;
        }
        .mirror-scale {
            /** Alignment **/
            line-height: 32px;
            align-items: center;
        }
    }
    .joined-row {
        position: relative;
        grid-column: span 2;
        .standalone-label {
            min-width: 0;
            width: unset;
            padding-left: var(--spacing-antd);
        }
        .pendulum-checkbox {
            display: inline-block;
            /** Alignment **/
            width: var(--width-label);
            /** Alignment **/
            line-height: 32px;
            text-align: right;
            font-weight: 500;
            margin-right: 0;
            padding-right: var(--spacing);
            > span {
                padding-right: 0;
            }
        }
        .pendulum-checkbox-placeholder {
            display: inline-block;
            /** Alignment **/
            width: var(--width-label);
        }
        .pendulum-frame-input {
            margin-right: var(--spacing);
        }
        .pendulum-size {
            display: inline-block;
            line-height: 1.15; // Alignment
            margin-right: var(--spacing);
        }
        .ant-checkbox-wrapper + .ant-checkbox-wrapper {
            margin-left: 0;
        }
    }
`;

export type PendulumInputGroupRef = {
    setValue: (value: { pendulumEffect?: string }) => void,
}
export type PendulumInputGroup = {
    softMode: boolean,
    showCreativeOption: boolean,
    showExtraDecorativeOption: boolean,
}
& Pick<CardTextInput, 'onTakePicker'>
& Pick<FramelayoutSettingPanel, 'onFrameChange'>;
export const PendulumInputGroup = forwardRef<PendulumInputGroupRef, PendulumInputGroup>(({
    softMode,
    showCreativeOption,
    showExtraDecorativeOption,
    onTakePicker,
    onFrameChange,
}, ref) => {
    const language = useLanguage();
    const {
        isPendulum,
        frame,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        effectBackground, pendulumEffectBackground,
        pendulumScaleBlue,
        pendulumScaleRed,
        pendulumSize,
        flag,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            isPendulum,
            frame,
            leftFrame, rightFrame,
            pendulumFrame, pendulumRightFrame,
            pendulumScaleBlue,
            pendulumScaleRed,
            pendulumSize,
            effectStyle,
            pendulumStyle,
            flag,
        },
        setCard,
        getUpdater,
    }) => ({
        isPendulum,
        frame,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        pendulumScaleBlue,
        pendulumScaleRed,
        pendulumSize,
        effectBackground: effectStyle.background,
        pendulumEffectBackground: pendulumStyle.background,
        flag,
        setCard,
        getUpdater,
    })));
    const {
        mirrorPendulumScale,
        updateSetting,
    } = useSetting(useShallow(({
        setting: { mirrorPendulumScale },
        updateSetting,
    }) => ({
        mirrorPendulumScale,
        updateSetting,
    })));
    const containerRef = useRef<HTMLDivElement>(null);
    const bottomFrameOptionGridRef = useRef<BottomFrameOptionGridRef>(null);
    const pendulumEffectInputRef = useRef<CardTextAreaRef>(null);
    const [frameDropdownVisible, setFrameDropdownVisibleVisible] = useState(false);
    const changeToPendulum = (e: any) => setCard(currentCard => {
        const willBecomePendulum = e.target.checked;
        /** It is rather not desirable to seemingly reduce opacity of pendulum frame, even though it looks closer to real card */
        // const currentOpacity = currentCard.opacity;
        // const nextOpacity = willBecomePendulum && (currentOpacity.pendulum ?? 100) !== 85
        //     ? { ...currentOpacity, pendulum: 85 }
        //     : currentOpacity;

        return {
            ...currentCard,
            // opacity: nextOpacity,
            isPendulum: willBecomePendulum,
        };
    });
    const onRedScaleChange = useMemo(() => getUpdater('pendulumScaleRed'), [getUpdater]);
    const onBlueScaleChange = useMemo(() => getUpdater('pendulumScaleBlue'), [getUpdater]);
    const onPendulumSizeChange = useMemo(() => getUpdater('pendulumSize'), [getUpdater]);
    const changePendulumEffect = useMemo(() => getUpdater('pendulumEffect', undefined, 'debounce'), [getUpdater]);

    const pendulumSizeList = useMemo(() => getPendulumSizeList(language), [language]);
    const frameList = useMemo(() => getFrameButtonList()
        .filter(entry => {
            return showExtraDecorativeOption || entry.edition === 'normal';
        }),
        [showExtraDecorativeOption],
    );

    useImperativeHandle(ref, () => ({
        setValue: ({ pendulumEffect }) => {
            if (pendulumEffect) pendulumEffectInputRef.current?.setValue(pendulumEffect);
        }
    }));

    const layoutState = {
        frame,
        topLeftFrame: leftFrame,
        topRightFrame: rightFrame,
        bottomLeftFrame: pendulumFrame,
        bottomRightFrame: pendulumRightFrame,
        effectBackground,
        pendulumEffectBackground,
    };
    const advanceLayoutPreviewHeight = 30; // Alignment with frame input
    const flagList = flag
        .map((entry, index) => {
            if (entry !== 0) return <li key={FlagInfoList[index].labelKey}>
                {FlagInfoList[index].displayKey(language, entry)}
            </li>;
            return null;
        })
        .filter(entry => entry != null);
    return <StyledPendulumInputContainer
        className="pendulum-input"
    >
        <div className="joined-row pendulum-option">
            <div className="pendulum-checkbox">
                <Checkbox
                    onChange={changeToPendulum}
                    checked={isPendulum}
                >{language['input.pendulum.label']}</Checkbox>
            </div>
            <div className="pendulum-option-container">
                {showCreativeOption && <Popover
                    visible={frameDropdownVisible}
                    onVisibleChange={setFrameDropdownVisibleVisible}
                    trigger={['click']}
                    placement="bottom"
                    overlayClassName="pendulum-frame-picker-overlay"
                    content={<div className="overlay-event-absorber">
                        <FrameLayoutSettingPanel ref={bottomFrameOptionGridRef}
                            isPendulum={isPendulum}
                            frameList={frameList}
                            pendulumFrame={pendulumFrame}
                            onFrameChange={onFrameChange}
                            onCancel={() => {
                                setFrameDropdownVisibleVisible(false);
                                containerRef.current?.focus();
                            }}
                        />
                        <FrameBehaviorSettingPanel />
                    </div>}
                >
                    <StyledPendulumFrameInputContainer ref={containerRef}
                        className="pendulum-frame-input"
                        tabIndex={0}
                        onKeyDown={e => {
                            if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === '  ') {
                                setFrameDropdownVisibleVisible(true);
                                /** Popover takes time to mount / become visible */
                                setTimeout(() => {
                                    bottomFrameOptionGridRef.current?.focus();
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
                            />
                        </div>
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
                        <CaretDownOutlined />
                    </StyledPendulumFrameInputContainer>
                </Popover>}
                {(isPendulum && showCreativeOption)
                    && <div className="pendulum-size">
                    <Popover key="color-picker"
                        overlayClassName="global-input-overlay font-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <StyledDropdown.Container>
                                {pendulumSizeList.map(({ value, label }) => {
                                    return <StyledDropdown.Option key={value}
                                        className={pendulumSize === value ? 'menu-active' : ''}
                                        onClick={() => {
                                            onPendulumSizeChange(value);
                                        }}
                                    >
                                        {label}
                                    </StyledDropdown.Option>;
                                })}
                            </StyledDropdown.Container>
                        </div>}
                        placement="bottomLeft"
                    >
                        <PopoverButton
                            $softMode={softMode}
                            $active={pendulumSize !== DEFAULT_PENDULUM_SIZE}
                        >
                            {language[PendulumSizeMap[pendulumSize].labelKey]}
                        </PopoverButton>
                    </Popover>
                </div>}
                {(isPendulum && showCreativeOption)
                    && <Checkbox
                        className="mirror-scale"
                        onChange={e => {
                            const willMirror = e.target.checked;

                            updateSetting({ mirrorPendulumScale: willMirror });
                            if (willMirror) onRedScaleChange(pendulumScaleBlue);
                        }}
                        checked={mirrorPendulumScale}
                    >
                        {language['input.mirror-scale.label']}
                    </Checkbox>}
            </div>
        </div>
        {isPendulum && <>
            <div>
                <Input
                    addonBefore={<span>
                        {language['input.scale.label'](
                            <span key="blue-scale"  className="blue-scale">
                                {language['input.scale.blue.label']}
                            </span>
                        )}
                    </span>}
                    value={pendulumScaleBlue}
                    allowClear
                    onChange={e => {
                        onBlueScaleChange(e);
                        if (mirrorPendulumScale) onRedScaleChange(e);
                    }}
                />
            </div>
            <div>
                <Input
                    addonBefore={<span>
                        {language['input.scale.label'](
                            <span key="red-scale" className="red-scale">
                                {language['input.scale.red.label']}
                            </span>
                        )}
                    </span>}
                    value={pendulumScaleRed}
                    allowClear
                    onChange={e => {
                        if (mirrorPendulumScale) onBlueScaleChange(e);
                        onRedScaleChange(e);
                    }}
                />
            </div>
            <div className="joined-row">
                {/** Explicit label does not looks too good */}
                {/* <StandaloneLabel className="standalone-label">Pendulum Effect</StandaloneLabel> */}
                <CardTextArea ref={pendulumEffectInputRef}
                    id="pendulum-effect"
                    allowHotkey
                    defaultValue={useCard.getState().card.pendulumEffect}
                    onChange={changePendulumEffect}
                    onTakePicker={onTakePicker}
                    autoSize={{
                        minRows: 5,
                    }}
                />
            </div>
        </>}
    </StyledPendulumInputContainer>;
});