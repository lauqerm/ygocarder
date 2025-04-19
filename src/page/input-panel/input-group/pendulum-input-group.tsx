import { Checkbox, Input, Popover } from 'antd';
import { StyledPendulumFrameContainer } from '../input-panel.styled';
import { FrameInfoBlock, PopoverButton, RadioTrain, StyledDropdown } from 'src/component';
import { CardTextArea, CardTextAreaRef, CardTextInput } from '../input-text';
import { useCard, useLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { DEFAULT_PENDULUM_SIZE, FrameInfoMap } from 'src/model';
import { CaretDownOutlined } from '@ant-design/icons';
import { getFrameButtonList, getPendulumSizeList } from '../const';
import styled from 'styled-components';
import { getNavigationProps } from 'src/util';

type BottomFrameOptionGridRef = {
    focus: () => void,
};
type BottomFrameOptionGrid = {
    pendulumFrame: string,
    frameList: ReturnType<typeof getFrameButtonList>,
    onChange: (value: string | number) => void,
    onCancel: () => void,
};
const BottomFrameOptionGrid = forwardRef<BottomFrameOptionGridRef, BottomFrameOptionGrid>(({
    frameList,
    pendulumFrame,
    onChange,
    onCancel,
}, ref) => {
    const language = useLanguage();
    const recentCustomPendulumFrame = useRef(pendulumFrame === 'auto' ? 'spell' : pendulumFrame);
    const inputRef = useRef<HTMLInputElement>(null);
    const [focus, setFocus] = useState(0);

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
    }));

    return <StyledPendulumFrameContainer
        className="pendulum-frame-picker"
        {...getNavigationProps({
            stopPropagation: true,
            optionLength: frameList.length,
            setFocus,
            onTrigger: () => {
                if (focus >= 0) onChange(frameList[focus].value);
            },
            onCancel,
        })}
    >
        <Checkbox ref={inputRef}
            className="frame-auto-checkbox"
            checked={pendulumFrame === 'auto'}
            onChange={e => {
                onChange(e.target.checked ? 'auto' : recentCustomPendulumFrame.current);
            }}
        >{language['input.frame.auto']}</Checkbox>
        <RadioTrain
            className="frame-radio"
            value={pendulumFrame}
            onChange={onChange}
            optionList={frameList}
        />
    </StyledPendulumFrameContainer>;
});

const StyledPendulumFrameInputContainer = styled.div`
    display: inline-flex;
    cursor: pointer;
    box-shadow: var(--bs-input);
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    &:focus-visible {
        outline: 2px solid var(--focus);
    }
    .pendulum-frame-info-block {
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
        line-height: 2; // Alignment
        background-color: var(--main-level-4);
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
        display: flex;
        align-items: center;
        .pendulum-frame-input,
        .pendulum-checkbox {
            flex: 0 0 auto;
        }
        .mirror-scale {
            display: inline-flex;
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
} & Pick<CardTextInput, 'onTakePicker'>;
export const PendulumInputGroup = forwardRef<PendulumInputGroupRef, PendulumInputGroup>(({
    softMode,
    showCreativeOption,
    showExtraDecorativeOption,
    onTakePicker,
}, ref) => {
    const language = useLanguage();
    const {
        isPendulum,
        pendulumFrame,
        pendulumScaleBlue,
        pendulumScaleRed,
        pendulumSize,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            isPendulum,
            pendulumFrame,
            pendulumScaleBlue,
            pendulumScaleRed,
            pendulumSize,
        },
        setCard,
        getUpdater,
    }) => ({
        isPendulum,
        pendulumFrame,
        pendulumScaleBlue,
        pendulumScaleRed,
        pendulumSize,
        setCard,
        getUpdater,
    })));
    const containerRef = useRef<HTMLDivElement>(null);
    const bottomFrameOptionGridRef = useRef<BottomFrameOptionGridRef>(null);
    const pendulumEffectInputRef = useRef<CardTextAreaRef>(null);
    const [isMirrorScale, setMirrorScale] = useState(true);
    const [frameDropdownVisible, setFrameDropdownVisibleVisible] = useState(false);
    const recentCustomPendulumFrame = useRef(pendulumFrame === 'auto' ? 'spell' : pendulumFrame);
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
    const changeBottomFrame = (value: string | number) => {
        const normalizedValue = `${value}`;

        if (normalizedValue !== 'auto') recentCustomPendulumFrame.current = normalizedValue;
        setCard(currentCard => {
            return { ...currentCard, pendulumFrame: normalizedValue };
        });
    };
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

    const currentPendulumFrame = FrameInfoMap[pendulumFrame];
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
            {showCreativeOption && <Popover
                visible={frameDropdownVisible}
                onVisibleChange={setFrameDropdownVisibleVisible}
                trigger={['hover', 'click']}
                placement="bottom"
                overlayClassName="pendulum-frame-picker-overlay"
                content={<div className="overlay-event-absorber">
                    <BottomFrameOptionGrid ref={bottomFrameOptionGridRef}
                        frameList={frameList}
                        pendulumFrame={pendulumFrame}
                        onCancel={() => {
                            setFrameDropdownVisibleVisible(false);
                            containerRef.current?.focus();
                        }}
                        onChange={changeBottomFrame}
                    />
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
                    <span className="pendulum-frame-label">{language['input.bottom-frame.label']} <CaretDownOutlined /></span>
                    {currentPendulumFrame
                        ? <FrameInfoBlock className="pendulum-frame-info-block" {...currentPendulumFrame} />
                        : <FrameInfoBlock className="pendulum-frame-info-block" nameKey="input.frame.auto" />}
                </StyledPendulumFrameInputContainer>
            </Popover>}
            {(isPendulum && showCreativeOption)
                && <div className="pendulum-size">
                <Popover key="color-picker"
                    trigger={['click']}
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
                        {language['input.pendulum-size.label']}
                    </PopoverButton>
                </Popover>
            </div>}
            {(isPendulum && showCreativeOption)
                && <Checkbox
                    className="mirror-scale"
                    onChange={e => {
                        const willMirror = e.target.checked;

                        setMirrorScale(willMirror);
                        if (willMirror) onRedScaleChange(pendulumScaleBlue);
                    }}
                    checked={isMirrorScale}
                >
                    {language['input.mirror-scale.label']}
                </Checkbox>}
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
                    onChange={e => {
                        onBlueScaleChange(e);
                        if (isMirrorScale) onRedScaleChange(e);
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
                    onChange={e => {
                        if (isMirrorScale) onBlueScaleChange(e);
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