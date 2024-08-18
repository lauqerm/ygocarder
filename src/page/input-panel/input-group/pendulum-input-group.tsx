import { Checkbox, Input, Popover } from 'antd';
import { StyledPendulumFrameContainer } from '../input-panel.styled';
import { RadioTrain } from '../input-train';
import { FrameInfoBlock } from 'src/component';
import { CardTextArea, CardTextInput, CardTextInputRef } from '../input-text';
import { useCard } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { FrameInfoMap } from 'src/model';
import { CaretDownOutlined } from '@ant-design/icons';
import { getFrameButtonList } from '../const';

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
    const pendulumEffectInputRef = useRef<CardTextInputRef>(null);
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
    return <div className="pendulum-container">
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
                <div className="pendulum-frame-input">
                    <span className="pendulum-frame-label">Bottom Frame <CaretDownOutlined /></span>
                    {currentPendulumFrame
                        ? <FrameInfoBlock className="frame-info-block" {...currentPendulumFrame} />
                        : <FrameInfoBlock className="frame-info-block" name="Auto" />}
                </div>
            </Popover>}
            {(isPendulum && showCreativeOption)
                && <Checkbox onChange={e => setMirrorScale(e.target.checked)} checked={isMirrorScale}>Mirror Scale</Checkbox>}
        </div>
        {isPendulum && <>
            <div>
                <Input
                    addonBefore={<span>
                        <span style={{ color: 'var(--main-blue-scale)' }}>Blue</span> Scale
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
                        <span style={{ color: 'var(--main-red-scale)' }}>Red</span> Scale
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
    </div>;
});