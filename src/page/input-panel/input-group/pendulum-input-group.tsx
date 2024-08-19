import { Checkbox, Input, Popover } from 'antd';
import { StyledPendulumFrameContainer } from '../input-panel.styled';
import { RadioTrain } from '../input-train';
import { FrameInfoBlock } from 'src/component';
import { CardTextArea, CardTextAreaRef, CardTextInput } from '../input-text';
import { useCard } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { FrameInfoMap } from 'src/model';
import { CaretDownOutlined } from '@ant-design/icons';
import { getFrameButtonList } from '../const';
import styled from 'styled-components';

const StyledPendulumFrameInputContainer = styled.div`
    display: inline-flex;
    cursor: pointer;
    box-shadow: var(--bs-input);
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    .pendulum-frame-info-block {
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
        line-height: 1.25;
        background-color: var(--main-level-4);
        min-width: 100px;
        overflow: hidden;
        border: var(--bw) solid var(--sub-level-1);
    }
    .pendulum-frame-label {
        display: inline-block;
        background: var(--main-level-4);
        border: var(--bw) solid var(--sub-level-1);
        border-right: none;
        padding: var(--spacing-px) var(--spacing-xs);
        border-radius: var(--br-lg) 0 0 var(--br-lg);
        line-height: 1.25;
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
    .joined-row {
        grid-column: span 2;
        .standalone-label {
            min-width: 0;
            width: unset;
            padding-left: var(--spacing-antd);
        }
        .pendulum-checkbox {
            /** Alignment **/
            width: 95px;
            text-align: right;
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
            margin-right: var(--spacing-lg);
        }
        .ant-checkbox-wrapper {
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
    showCreativeOption: boolean,
    showExtraDecorativeOption: boolean,
} & Pick<CardTextInput, 'onTakePicker'>;
export const PendulumInputGroup = forwardRef<PendulumInputGroupRef, PendulumInputGroup>(({
    showCreativeOption,
    showExtraDecorativeOption,
    onTakePicker,
}, ref) => {
    const {
        frame,
        isPendulum,
        pendulumFrame,
        pendulumScaleBlue,
        pendulumScaleRed,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            frame,
            isPendulum,
            pendulumFrame,
            pendulumScaleBlue,
            pendulumScaleRed,
        },
        setCard,
        getUpdater,
    }) => ({
        frame,
        isPendulum,
        pendulumFrame,
        pendulumScaleBlue,
        pendulumScaleRed,
        setCard,
        getUpdater,
    })));
    const pendulumEffectInputRef = useRef<CardTextAreaRef>(null);
    const [isMirrorScale, setMirrorScale] = useState(true);
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
    const changePendulumEffect = useMemo(() => getUpdater('pendulumEffect', undefined, 'debounce'), [getUpdater]);

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
    return <StyledPendulumInputContainer className="pendulum-input">
        <div className="joined-row pendulum-option">
            {frame !== 'link'
                ? <Checkbox
                    className="pendulum-checkbox"
                    onChange={changeToPendulum}
                    checked={isPendulum}
                >Pendulum</Checkbox>
                : <div className="pendulum-checkbox-placeholder" />}
            {showCreativeOption && <Popover
                placement="bottom"
                overlayClassName="pendulum-frame-picker-overlay"
                content={<div className="overlay-event-absorber">
                    <StyledPendulumFrameContainer
                        className="pendulum-frame-picker"
                    >
                        <Checkbox
                            className="frame-auto-checkbox"
                            checked={pendulumFrame === 'auto'}
                            onChange={e => {
                                changeBottomFrame(e.target.checked ? 'auto' : recentCustomPendulumFrame.current);
                            }}
                        >Auto</Checkbox>
                        <RadioTrain
                            className="frame-radio"
                            value={pendulumFrame}
                            onChange={changeBottomFrame}
                            optionList={frameList}
                        />
                    </StyledPendulumFrameContainer>
                </div>}
            >
                <StyledPendulumFrameInputContainer className="pendulum-frame-input">
                    <span className="pendulum-frame-label">Bottom Frame <CaretDownOutlined /></span>
                    {currentPendulumFrame
                        ? <FrameInfoBlock className="pendulum-frame-info-block" {...currentPendulumFrame} />
                        : <FrameInfoBlock className="pendulum-frame-info-block" name="Auto" />}
                </StyledPendulumFrameInputContainer>
            </Popover>}
            {(isPendulum && showCreativeOption)
                && <Checkbox onChange={e => setMirrorScale(e.target.checked)} checked={isMirrorScale}>Mirror Scale</Checkbox>}
        </div>
        {isPendulum && <>
            <div>
                <Input
                    addonBefore={<span>
                        <span style={{ color: 'var(--sub-blue-scale)' }}>Blue</span> Scale
                    </span>}
                    value={pendulumScaleBlue}
                    onChange={e => {
                        onBlueScaleChange(e);
                        if (isMirrorScale) onRedScaleChange(e);
                    }} />
            </div>
            <div>
                <Input
                    addonBefore={<span>
                        <span style={{ color: 'var(--sub-red-scale)' }}>Red</span> Scale
                    </span>}
                    value={pendulumScaleRed}
                    onChange={e => {
                        if (isMirrorScale) onBlueScaleChange(e);
                        onRedScaleChange(e);
                    }}
                />
            </div>
            <div className="joined-row" style={{ position: 'relative' }}>
                {/** Explicit label does not looks too good */}
                {/* <StandaloneLabel className="standalone-label">Pendulum Effect</StandaloneLabel> */}
                <CardTextArea ref={pendulumEffectInputRef}
                    id="pendulum-effect"
                    allowHotkey
                    defaultValue={useCard.getState().card.pendulumEffect}
                    onChange={changePendulumEffect}
                    onTakePicker={onTakePicker}
                    rows={5}
                />
            </div>
        </>}
    </StyledPendulumInputContainer>;
});