import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
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
    IconButton,
    RadioTrain,
    StandaloneLabel,
    StyledPopMarkdown,
} from '../../component';
import {
    checkMonster,
} from '../../util';
import {
    getFoilButtonList,
    getAttributeList,
    getFinishList,
    FormatButtonList,
} from './const';
import { ClearOutlined } from '@ant-design/icons';
import { CharPicker } from './char-picker';
import { NameStylePicker, NameStylePickerRef } from './name-style-picker';
import { CheckboxTrain, FrameTrain, FrameTrainRef } from './input-train';
import { Explanation } from 'src/component/explanation';
import { changeCardFormat, useCard, useLanguage, useSetting } from '../../service';
import { LayoutPicker, OpacityPickerRef } from './layout-picker';
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
import {
    TextStylePicker,
} from './text-style-picker';
import { useShallow } from 'zustand/react/shallow';
import {
    StyledFormatRadioTrain,
    StyledInputLabelWithButton,
    StyledNameSetIdInputContainer,
} from './input-panel.styled';
import './input-panel.scss';

export type CardInputPanelRef = {
    forceCardData: (card: Card) => void,
    isLoading: () => boolean,
};
export type CardInputPanel = {
    artworkCanvas: ImageInputGroup['receivingCanvas'],
    backgroundCanvas: ImageInputGroup['receivingCanvas'],
} & Pick<ImageInputGroup, 'onCropChange' | 'onTainted' | 'onSourceLoaded'>;
export const CardInputPanel = forwardRef<CardInputPanelRef, CardInputPanel>(({
    artworkCanvas,
    backgroundCanvas,
    onCropChange,
    onTainted,
    onSourceLoaded,
}: CardInputPanel, forwardedRef) => {
    const language = useLanguage();
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
            isLink,
            attribute,
        },
        getUpdater,
        setCard,
    }) => ({
        format,
        frame, foil, finish, opacity,
        nameStyleType, nameStyle,
        isPendulum,
        isLink,
        attribute,
        getUpdater,
        setCard,
    })));
    const { setting } = useSetting();
    const { showCreativeOption, showExtraDecorativeOption, reduceMotionColor } = setting;

    const stylePickerRef = useRef<NameStylePickerRef>(null);

    const isMonster = checkMonster({ frame });
    const [stylePickerResetCount, setStylePickerResetCount] = useState(0);
    const foilButtonList = useMemo(() => getFoilButtonList({
        normal: language['input.foil.normal.label'],
        gold: language['input.foil.gold.label'],
        platinum: language['input.foil.platinum.label'],
    }), [language]);

    const frameTrainRef = useRef<FrameTrainRef>(null);
    const imageInputGroupRef = useRef<ImageInputGroupRef>(null);
    const layoutPickerRef = useRef<OpacityPickerRef>(null);
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
            const formatSwappedCard = changeCardFormat(currentCard, nextFormat);

            const { name, setId, effect, typeAbility, password, creator, pendulumEffect } = formatSwappedCard;
            nameSetIdInputGroupRef.current?.setValue({ name, setId });
            effectInputGroupRef.current?.setValue(effect);
            pendulumInputGroupRef.current?.setValue({ pendulumEffect });
            postPendulumInputGroupRef.current?.setValue({ typeAbility });
            footerInputGroupRef.current?.setValue({ creator, password });

            return formatSwappedCard;
        });
    };
    const changeFoil = useMemo(() => getUpdater('foil'), [getUpdater]);
    const onFinishChange = useMemo(() => getUpdater('finish'), [getUpdater]);
    const changeOpacity = useCallback((opacity: CardOpacity) => setCard(curr => ({ ...curr, opacity })), [setCard]);
    const changeAttribute = useMemo(() => getUpdater('attribute'), [getUpdater]);
    const changeNameStyle = useCallback((type: NameStyleType, value: Partial<NameStyle>) => {
        setCard(currentCard => {
            return {
                ...currentCard,
                nameStyleType: type,
                nameStyle: value,
            };
        });
    }, [setCard]);

    const attributeList = useMemo(() => getAttributeList(format, language, showCreativeOption), [format, language, showCreativeOption]);
    const finishList = useMemo(() => getFinishList(language), [language]);

    useEffect(() => {
        stylePickerRef.current?.setValue({ font: nameStyle.font });
    }, [nameStyle]);

    useEffect(() => {
        layoutPickerRef.current?.setValue(opacity);
    }, [opacity]);

    useImperativeHandle(forwardedRef, () => ({
        isLoading: () => (imageInputGroupRef.current?.isLoading() ?? false)
            || (layoutPickerRef.current?.isLoading() ?? false),
        forceCardData: card => {
            setStylePickerResetCount(cnt => cnt + 1);
            const {
                name,
                art, artCrop, artData, artSource,
                background, backgroundCrop, backgroundData, backgroundSource,
                opacity,
                setId,
                pendulumEffect,
                typeAbility,
                effect,
                atk, def,
                creator, password,
            } = card;

            imageInputGroupRef.current?.setValue({ art, artCrop, artData, artSource });
            layoutPickerRef.current?.setValue({
                ...opacity,
                background, backgroundCrop, backgroundData, backgroundSource,
            });
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
                <span>{language['input.format.label']}</span>
            </StyledFormatRadioTrain>
            <RadioTrain className="foil-radio" value={foil} onChange={changeFoil} optionList={foilButtonList}>
                <span>{language['input.foil.label']}</span>
            </RadioTrain>
            {showExtraDecorativeOption && <CheckboxTrain
                className="finish-checkbox"
                value={finish}
                onChange={onFinishChange}
                optionList={finishList}
            >
                <StyledInputLabelWithButton className="finish-checkbox-label">
                    <div className="input-label">{language['input.finish.label']}</div>
                    <IconButton
                        onClick={() => onFinishChange([])}
                        Icon={ClearOutlined}
                        tooltipProps={{
                            title: language['input.other-finish.reset.tooltip'],
                        }}
                    />
                </StyledInputLabelWithButton>
            </CheckboxTrain>}
        </div>

        {showCreativeOption && <div className="card-layout-input">
            <label className="standalone-addon ant-input-group-addon">
                {language['input.layout.label']} <Explanation
                    content={<StyledPopMarkdown>{language['input.layout.tooltip']}</StyledPopMarkdown>}
                />
            </label>
            <LayoutPicker ref={layoutPickerRef}
                defaultValue={opacity}
                receivingCanvas={backgroundCanvas}
                onChange={changeOpacity}
                onTainted={onTainted}
                onCropChange={onCropChange}
                onSourceLoaded={onSourceLoaded}
            />
        </div>}

        <FrameTrain ref={frameTrainRef}
            onSTFrameChange={typeAbility => postPendulumInputGroupRef.current?.setValue({ typeAbility })}
            onPasswordChange={password => footerInputGroupRef.current?.setValue({ password })}
            onStatChange={(atk, def) => footerInputGroupRef.current?.setValue({ atk, def })}
        />

        <StyledNameSetIdInputContainer className="name-style-id-input">
            <NameSetInputGroup ref={nameSetIdInputGroupRef}
                onTakePicker={setPickerTarget}
            />
            <NameStylePicker key={stylePickerResetCount} ref={stylePickerRef}
                frameInfo={FrameInfoMap[frame as keyof typeof FrameInfoMap]}
                defaultType={nameStyleType}
                defaultValue={nameStyle}
                showExtraDecorativeOption={showExtraDecorativeOption}
                onChange={changeNameStyle}
            />
            <CardIconInputGroup
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
                    <span>{language['input.attribute.label']}</span>
                </RadioTrain>

                {(isPendulum || showCreativeOption)
                    && <PendulumInputGroup ref={pendulumInputGroupRef}
                        showCreativeOption={showCreativeOption}
                        showExtraDecorativeOption={showExtraDecorativeOption}
                        softMode={reduceMotionColor}
                        onTakePicker={setPickerTarget}
                        onFrameChange={frame => frameTrainRef.current.changeFrame(frame)}
                    />}

                <PostPendulumInputGroup ref={postPendulumInputGroupRef} onTakePicker={setPickerTarget} />

                <div>
                    <div className="card-effect-letter-helper">
                        <StandaloneLabel className="standalone-label">
                            {language['input.effect.label']}
                        </StandaloneLabel>
                        {showCreativeOption ? <TextStylePicker /> : <div />}
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
                    receivingCanvas={artworkCanvas}
                    showCreativeOption={showCreativeOption}
                    showExtraDecorativeOption={showExtraDecorativeOption}
                    onSourceLoaded={onSourceLoaded}
                    onTainted={onTainted}
                    onCropChange={onCropChange}
                />
            </div>
        </div>
    </div>;
});