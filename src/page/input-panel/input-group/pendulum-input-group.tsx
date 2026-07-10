import { Checkbox, Input, Popover } from 'antd';
import { PopoverButton, StyledDropdown } from 'src/component';
import { CardTextArea, CardTextAreaRef, CardTextInput } from '../input-text';
import { useCard, useLanguage, useSetting } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { DEFAULT_PENDULUM_SIZE, PendulumSizeMap, CheckboxChangeEvent } from 'src/model';
import styled from 'styled-components';

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
    .pendulum-option-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        row-gap: var(--spacing);
    }
    .pendulum-option {
        display: grid;
        grid-template-columns: var(--width-label) 1fr;
        align-items: center;
        .frame-blend-input,
        .pendulum-checkbox {
            flex: 0 0 auto;
        }
        .mirror-scale {
            /** Alignment **/
            line-height: 32px;
            align-items: center;
            .ant-checkbox {
                transform: translateY(-1px); // Alignment, but why?
            }
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
        .frame-blend-input {
            margin-right: var(--spacing);
        }
        .pendulum-size {
            display: inline-block;
            margin-right: var(--spacing);
            .pendulum-size-button {
                margin: 0;
            }
        }
        .ant-checkbox-wrapper + .ant-checkbox-wrapper {
            margin-left: 0;
        }
    }
`;

export type PendulumInputGroupRef = {
    setValue: (value: {
        pendulumEffect?: string,
        overlay?: string,
        overlayData?: string,
        overlaySource?: string,
        overlayCrop?: Partial<ReactCrop.Crop>,
    }) => void,
}
export type PendulumInputGroup = {
    softMode: boolean,
    showCreativeOption: boolean,
}
    & Pick<CardTextInput, 'onTakePicker'>;
export const PendulumInputGroup = forwardRef<PendulumInputGroupRef, PendulumInputGroup>(({
    softMode,
    showCreativeOption,
    onTakePicker,
}, ref) => {
    const language = useLanguage();
    const {
        isPendulum,
        pendulumScaleBlue,
        pendulumScaleRed,
        pendulumSize,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            isPendulum,
            pendulumScaleBlue,
            pendulumScaleRed,
            pendulumSize,
        },
        setCard,
        getUpdater,
    }) => ({
        isPendulum,
        pendulumScaleBlue,
        pendulumScaleRed,
        pendulumSize,
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
    const pendulumEffectInputRef = useRef<CardTextAreaRef>(null);
    const changeToPendulum = (e: CheckboxChangeEvent) => setCard(currentCard => {
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

    const pendulumSizeList = useMemo(() => Object.values(PendulumSizeMap).map(({ key, labelKey }) => ({
        label: language[labelKey],
        value: key,
    })), [language]);

    useImperativeHandle(ref, () => ({
        setValue: ({ pendulumEffect }) => {
            if (pendulumEffect) pendulumEffectInputRef.current?.setValue(pendulumEffect);
        }
    }));

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
                {(isPendulum && showCreativeOption) && <div className="pendulum-size">
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
                            className="pendulum-size-button"
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
                            <span key="blue-scale" className="blue-scale">
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