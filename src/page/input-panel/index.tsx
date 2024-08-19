import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import {
    Card,
    CardOpacity,
    NameStyle,
    NameStyleType,
    FrameInfoMap,
} from '../../model';
import {
    Affiliation,
    AppHeader,
    StandaloneLabel,
} from '../../component';
import {
    checkLink,
    checkMonster,
} from '../../util';
import {
    FoilButtonList,
    getAttributeList,
    FinishButtonList,
    FormatButtonList,
} from './const';
import { CharPicker } from './char-picker';
import { TextStylePicker, TextStylePickerRef } from './text-style-picker';
import { CheckboxTrain, FrameTrain, RadioTrain } from './input-train';
import { Explanation } from 'src/component/explanation';
import { changeCardFormat, useCard, useSetting } from '../../service';
import { OpacityPicker, OpacityPickerRef } from './opacity-picker';
import {
    CardIconInputGroup,
    EffectInputGroup,
    EffectInputGroupRef,
    FooterInputGroup,
    FooterInputGroupRef,
    ImageInputGroup,
    ImageInputGroupRef,
    NameSetInputGroup,
    NameSetInputGroupRef,
    PendulumInputGroup,
    PendulumInputGroupRef,
    PostPendulumInputGroup,
    PostPendulumInputGroupRef,
} from './input-group';
import { useShallow } from 'zustand/react/shallow';
import {
    StyledFormatRadioTrain,
    StyledNameSetIdInputContainer,
} from './input-panel.styled';
import './input-panel.scss';

export type CardInputPanelRef = {
    forceCardData: (card: Card) => void,
}
export type CardInputPanel = {} & Pick<ImageInputGroup, 'receivingCanvasRef' | 'onCropChange' | 'onTainted' | 'onSourceLoaded'>;
export const CardInputPanel = React.forwardRef<CardInputPanelRef, CardInputPanel>(({
    receivingCanvasRef,
    onCropChange,
    onTainted,
    onSourceLoaded,
}: CardInputPanel, forwardedRef) => {
    const {
        format,
        frame, foil, finish, opacity,
        nameStyleType, nameStyle,
        isPendulum,
        attribute,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            format,
            frame, foil, finish, opacity,
            nameStyleType, nameStyle,
            isPendulum,
            attribute,
        },
        getUpdater,
        setCard,
    }) => ({
        format,
        frame, foil, finish, opacity,
        nameStyleType, nameStyle,
        isPendulum,
        attribute,
        getUpdater,
        setCard,
    })));
    const { setting } = useSetting();
    const { showCreativeOption, showExtraDecorativeOption } = setting;

    const stylePickerRef = useRef<TextStylePickerRef>(null);

    const isLink = checkLink({ frame });
    const isMonster = checkMonster({ frame });
    const [stylePickerResetCount, setStylePickerResetCount] = useState(0);

    const imageInputGroupRef = useRef<ImageInputGroupRef>(null);
    const opacityPickerRef = useRef<OpacityPickerRef>(null);
    const nameSetIdInputGroupRef = useRef<NameSetInputGroupRef>(null);
    const pendulumInputGroupRef = useRef<PendulumInputGroupRef>(null);
    const effectInputGroupRef = useRef<EffectInputGroupRef>(null);
    const postPendulumInputGroupRef = useRef<PostPendulumInputGroupRef>(null);
    const footerInputGroupRef = useRef<FooterInputGroupRef>(null);

    const [pickerTarget, setPickerTarget] = useState<{
        id: string,
        setValue: (nextValue: string) => void,
    }>({
        id: '',
        setValue: () => {},
    });

    const changeFormat = (formatValue: string | number) => {
        setCard(currentCard => {
            const nextFormat = `${formatValue}`;
            const foramtSwappedCard = changeCardFormat(currentCard, nextFormat);
            postPendulumInputGroupRef.current?.setValue({ typeAbility: foramtSwappedCard.typeAbility });

            return foramtSwappedCard;
        });
    };
    const changeFoil = useMemo(() => getUpdater('foil'), [getUpdater]);
    const onFinishChange = useMemo(() => getUpdater('finish'), [getUpdater]);
    const changeOpacity = useCallback((opacity: CardOpacity) => setCard(curr => ({ ...curr, opacity })), [setCard]);
    const changeAttribute = useMemo(() => getUpdater('attribute'), [getUpdater]);
    const changeNameStyle = (type: NameStyleType, value: Partial<NameStyle>) => {
        setCard(currentCard => {
            return {
                ...currentCard,
                nameStyleType: type,
                nameStyle: value,
            };
        });
    };

    const attributeList = useMemo(() => getAttributeList(format), [format]);

    useEffect(() => {
        stylePickerRef.current?.setValue({ font: nameStyle.font });
    }, [nameStyle]);

    useEffect(() => {
        opacityPickerRef.current?.setValue(opacity);
    }, [opacity]);

    useImperativeHandle(forwardedRef, () => ({
        forceCardData: (card) => {
            setStylePickerResetCount(cnt => cnt + 1);
            const {
                name,
                art, artCrop,
                setId,
                pendulumEffect,
                typeAbility,
                effect,
                atk, def,
                creator, password,
            } = card;

            imageInputGroupRef.current?.setValue({ art, artCrop });
            nameSetIdInputGroupRef.current?.setValue({ name, setId });
            pendulumInputGroupRef.current?.setValue({ pendulumEffect });
            effectInputGroupRef.current?.setValue(effect);
            postPendulumInputGroupRef.current?.setValue({ typeAbility });
            footerInputGroupRef.current?.setValue({ atk, def, creator, password });
        }
    }));

    return <div
        className={['card-info-panel', format === 'ocg' ? 'input-ocg' : 'input-tcg'].join(' ')}
    >
        <AppHeader />
        <br />
        <Affiliation />

        <div className="card-overlay-input">
            <StyledFormatRadioTrain className="format-radio" value={format} onChange={changeFormat} optionList={FormatButtonList}>
                <span>Format</span>
            </StyledFormatRadioTrain>
            <RadioTrain className="foil-radio" value={foil} onChange={changeFoil} optionList={FoilButtonList}>
                <span>Foil</span>
            </RadioTrain>
            {showExtraDecorativeOption && <CheckboxTrain
                className="finish-checkbox"
                value={finish}
                onChange={onFinishChange}
                optionList={FinishButtonList}
            >
                <span>Finish</span>
            </CheckboxTrain>}
        </div>

        {showCreativeOption && <div className="card-opacity-input">
            <label className="standalone-addon ant-input-group-addon">
                Opacity <Explanation
                    content={'May affect behavior of some finish types'}
                />
            </label>
            <OpacityPicker ref={opacityPickerRef}
                defaultValue={opacity}
                isPendulum={isPendulum}
                onChange={changeOpacity}
            />
        </div>}

        <FrameTrain onSTFrameChange={typeAbility => postPendulumInputGroupRef.current?.setValue({ typeAbility })} />

        <StyledNameSetIdInputContainer className="name-style-id-input">
            <NameSetInputGroup ref={nameSetIdInputGroupRef}
                onTakePicker={setPickerTarget}
            />
            <TextStylePicker key={stylePickerResetCount} ref={stylePickerRef}
                frameInfo={FrameInfoMap[frame as keyof typeof FrameInfoMap]}
                defaultType={nameStyleType}
                defaultValue={nameStyle}
                showExtraDecorativeOption={showExtraDecorativeOption}
                onChange={changeNameStyle}
            />
            <CardIconInputGroup
                isLink={isLink}
                isMonster={isMonster}
                showCreativeOption={showCreativeOption}
            />
        </StyledNameSetIdInputContainer>
        <div className="main-info">
            <div className="main-info-first">
                <RadioTrain
                    className="fill-input-train attribute-input"
                    value={attribute}
                    onChange={changeAttribute}
                    optionList={attributeList}
                >
                    <span>Attribute</span>
                </RadioTrain>

                {(isPendulum || frame !== 'link' || showCreativeOption)
                    && <PendulumInputGroup ref={pendulumInputGroupRef}
                        showCreativeOption={showCreativeOption}
                        showExtraDecorativeOption={showExtraDecorativeOption}
                        onTakePicker={setPickerTarget}
                    />}

                <PostPendulumInputGroup ref={postPendulumInputGroupRef} onTakePicker={setPickerTarget} />

                <div>
                    <div className="card-effect-letter-helper">
                        <StandaloneLabel className="standalone-label">
                            Effect
                        </StandaloneLabel>
                        <CharPicker
                            targetId={pickerTarget.id}
                            onPick={pickerTarget.setValue}
                        />
                    </div>
                    <EffectInputGroup ref={effectInputGroupRef} onTakePicker={setPickerTarget} />
                </div>

                <FooterInputGroup ref={footerInputGroupRef}
                    isMonster={isMonster}
                    showCreativeOption={showCreativeOption}
                    onTakePicker={setPickerTarget}
                />
            </div>
            <div className="main-info-second">
                <ImageInputGroup ref={imageInputGroupRef}
                    receivingCanvasRef={receivingCanvasRef}
                    isLink={isLink}
                    showExtraDecorativeOption={showExtraDecorativeOption}
                    onSourceLoaded={onSourceLoaded}
                    onTainted={onTainted}
                    onCropChange={onCropChange}
                />
            </div>
        </div>
    </div>;
});