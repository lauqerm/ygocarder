import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Input, Checkbox, Popover, Tooltip } from 'antd';
import {
    Card,
    CardOpacity,
    CondenseType,
    NameStyle,
    NameStyleType,
    frameMap,
    getArtCanvasCoordinate,
} from '../../model';
import {
    Affiliation,
    AppHeader,
    FormattingHelpDrawer,
    FrameInfoBlock,
    IconButton,
    ImageCropper,
    LinkMarkChooser,
    StandaloneLabel,
    StyledDropdown,
} from '../../component';
import {
    checkXyz,
    checkLink,
    checkMonster,
    randomPassword,
    randomSetID,
    checkDarkSynchro,
    normalizedCardName,
} from '../../util';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons';
import {
    FoilButtonList,
    StarButtonList,
    STIconButtonList,
    getAttributeList,
    StickerButtonList,
    CondenseThresholdButtonList,
    FinishButtonList,
    ArtFinishButtonList,
    FormatButtonList,
    getFrameButtonList,
    IconTypeList,
    IconTypeMap
} from './const';
import { CharPicker } from './char-picker';
import { TextStylePicker, TextStylePickerRef } from './text-style-picker';
import { CheckboxTrain, FrameTrain, RadioTrain } from './input-train';
import { ImageCropperRef } from '../../component/image-cropper';
import { Explanation } from 'src/component/explanation';
import { changeCardFormat, useCard, useSetting } from '../../service';
import { OpacityPicker, OpacityPickerRef } from './opacity-picker';
import { StyledPendulumFrameContainer } from './input-panel.styled';
import { CardCheckboxGroup } from './input-checkbox-group';
import { CardTextArea, CardTextInput, CardTextInputRef } from './input-text';
import './input-panel.scss';

export type CardInputPanelRef = {
    forceCardData: (card: Card) => void,
}
export type CardInputPanel = {
    receivingCanvasRef: HTMLCanvasElement | null,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
    onTainted: ImageCropper['onTainted'],
    onSourceLoaded: ImageCropper['onSourceLoaded'],
}
export const CardInputPanel = React.forwardRef<CardInputPanelRef, CardInputPanel>(({
    receivingCanvasRef,
    onCropChange,
    onTainted,
    onSourceLoaded,
}: CardInputPanel, forwardedRef) => {
    const {
        setCard: updateCard,
        card: currentCard,
    } = useCard();
    const {
        setting,
    } = useSetting(({ setting }) => ({ setting }));
    const { showCreativeOption, showExtraDecorativeOption } = setting;

    const [isMirrorScale, setMirrorScale] = useState(true);
    const stylePickerRef = useRef<TextStylePickerRef>(null);
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const {
        format,
        frame, foil, finish, artFinish, opacity,
        name, nameStyleType, nameStyle,
        picture, pictureCrop,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumEffect, pendulumScaleRed, pendulumScaleBlue,
        atk, def, linkMap,
        attribute,
        cardIcon, subFamily, star,
        setId,
        password, creator, sticker,
        furiganaHelper,
    } = currentCard;
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const isDarkSynchro = checkDarkSynchro(currentCard);
    const isOCG = format === 'ocg';
    const [displayTypeAbility, setDisplayTypeAbility] = useState(typeAbility.join('/'));
    const [stylePickerResetCount, setStylePickerResetCount] = useState(0);
    const opacityPickerRef = useRef<OpacityPickerRef>(null);
    const lastPendulumFrame = useRef(pendulumFrame === 'auto' ? 'spell' : pendulumFrame);
    const nameInputRef = useRef<CardTextInputRef>(null);
    const setIdInputRef = useRef<CardTextInputRef>(null);
    const pendulumEffectInputRef = useRef<CardTextInputRef>(null);
    const typeAbilityInputRef = useRef<CardTextInputRef>(null);
    const effectInputRef = useRef<CardTextInputRef>(null);
    const atkInputRef = useRef<CardTextInputRef>(null);
    const defInputRef = useRef<CardTextInputRef>(null);
    const passwordInputRef = useRef<CardTextInputRef>(null);
    const creatorInputRef = useRef<CardTextInputRef>(null);
    const [pickerTarget, setPickerTarget] = useState<{
        id: string,
        setValue: (nextValue: string) => void,
    }>({
        id: '',
        setValue: () => {},
    });

    const changeFactory = useCallback((
        key: string,
        valueTransform: (value: any) => any = (value) => value,
    ) => {
        return (e: any) => {
            updateCard(current => ({
                ...current,
                [key]: valueTransform(typeof e === 'string' || typeof e === 'number' || Array.isArray(e) ? e : e?.target?.value),
            }));
        };
    }, [updateCard]);
    const changeFormat = (formatValue: string | number) => {
        updateCard(currentCard => {
            const nextFormat = `${formatValue}`;
            const foramtSwappedCard = changeCardFormat(currentCard, nextFormat);
            setDisplayTypeAbility(foramtSwappedCard.typeAbility.join('/'));

            return foramtSwappedCard;
        });
    };
    const changeFoil = useMemo(() => changeFactory('foil'), [changeFactory]);
    const onFinishChange = useMemo(() => changeFactory('finish'), [changeFactory]);
    const changeOpacity = useCallback((opacity: CardOpacity) => updateCard(curr => ({ ...curr, opacity })), [updateCard]);
    const onArtFinishChange = useMemo(() => changeFactory('artFinish'), [changeFactory]);
    const chnageAttribute = useMemo(() => changeFactory('attribute'), [changeFactory]);
    const onSubFamilyChange = useMemo(() => changeFactory('subFamily'), [changeFactory]);
    const changeName = useMemo(() => debounce(changeFactory('name'), 200), [changeFactory]);
    const changeNameStyle = (type: NameStyleType, value: Partial<NameStyle>) => {
        updateCard(currentCard => {
            return {
                ...currentCard,
                nameStyleType: type,
                nameStyle: value,
            };
        });
    };
    const onCondenseTolerantChange = (value: CondenseType) => {
        updateCard(currentCard => {
            return {
                ...currentCard,
                effectStyle: {
                    ...currentCard.effectStyle,
                    condenseTolerant: value,
                }
            };
        });
    };
    const setIconType = useMemo(() => changeFactory('cardIcon'), [changeFactory]);
    const onStarChange = useMemo(() => changeFactory('star'), [changeFactory]);
    const onIsPendulumChange = (e: any) => updateCard(currentCard => {
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
    const onPictureChange = useMemo(() => changeFactory('picture'), [changeFactory]);
    const onLinkMapChange = useMemo(() => changeFactory('linkMap'), [changeFactory]);
    const onPendulumFrameChange = (value: string | number) => {
        const normalizedValue = `${value}`;

        if (normalizedValue !== 'auto') lastPendulumFrame.current = normalizedValue;
        updateCard(currentCard => {
            return { ...currentCard, pendulumFrame: normalizedValue };
        });
    };
    const onRedScaleChange = useMemo(() => changeFactory('pendulumScaleRed'), [changeFactory]);
    const onBlueScaleChange = useMemo(() => changeFactory('pendulumScaleBlue'), [changeFactory]);
    const changePendulumEffect = useMemo(() => throttle(changeFactory('pendulumEffect'), 400), [changeFactory]);
    const changeEffect = useMemo(() => throttle(changeFactory('effect'), 400), [changeFactory]);
    const changeATK = useMemo(() => changeFactory('atk', value => typeof value === 'string' ? value.trim() : value), [changeFactory]);
    const changeDEF = useMemo(() => changeFactory('def', value => typeof value === 'string' ? value.trim() : value), [changeFactory]);
    const changeTypeAbility = useMemo(() => {
        return throttle(
            changeFactory(
                'typeAbility',
                value => typeof value !== 'string' ? [] : value.split(/／|\//)
                    .map(entry => `${entry}`.trim())
                    .filter(entry => typeof entry === 'string' && entry.length > 0),
            ),
            400,
        );
    }, [changeFactory]);
    const changeSetId = useMemo(() => changeFactory('setId'), [changeFactory]);
    const changePassword = useMemo(() => changeFactory('password'), [changeFactory]);
    const onStickerChange = useMemo(() => changeFactory('sticker'), [changeFactory]);
    const changeCreator = useMemo(() => changeFactory('creator'), [changeFactory]);
    const toggleFuriganaHelper = useCallback((e: any) => updateCard(currentCard => {
        return { ...currentCard, furiganaHelper: e.target.checked };
    }), [updateCard]);

    const attributeList = useMemo(() => getAttributeList(format), [format]);
    const frameList = useMemo(() => getFrameButtonList()
        .filter(entry => {
            return showExtraDecorativeOption || entry.edition === 'normal';
        }),
        [showExtraDecorativeOption],
    );

    useEffect(() => {
        stylePickerRef.current?.setValue({ font: nameStyle.font });
    }, [nameStyle]);

    useEffect(() => {
        opacityPickerRef.current?.setValue(opacity);
    }, [opacity]);

    const changeImageCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) updateCard(curr => ({
            ...curr,
            pictureCrop: cropInfo,
        }));
    }, [onCropChange, updateCard]);

    useImperativeHandle(forwardedRef, () => ({
        forceCardData: (card) => {
            setStylePickerResetCount(cnt => cnt + 1);

            nameInputRef.current?.setValue(card.name);
            setIdInputRef.current?.setValue(card.setId);
            pendulumEffectInputRef.current?.setValue(card.pendulumEffect);
            typeAbilityInputRef.current?.setValue(card.typeAbility.join('/'));
            effectInputRef.current?.setValue(card.pendulumEffect);
            atkInputRef.current?.setValue(card.atk);
            defInputRef.current?.setValue(card.def);
            passwordInputRef.current?.setValue(card.password);
            creatorInputRef.current?.setValue(card.creator);
            imageCropperRef.current?.forceExternalSource(card.picture, card.pictureCrop);
        }
    }));

    const currentPendulumFrame = frameMap[pendulumFrame];
    const iconTypeData = cardIcon === 'auto'
        ? IconTypeMap[isMonster
            ? isXyz ? 'rank' : isDarkSynchro ? 'negative-level' : 'level'
            : 'st'
        ]
        : IconTypeMap[cardIcon];
    const IconDropdown = <Popover key="icon-type-picker"
        trigger={['click']}
        overlayClassName="input-overlay pattern-picker-overlay"
        content={showCreativeOption
            ? <div className="overlay-event-absorber">
                <StyledDropdown.Container>
                    {IconTypeList.map(({ fullLabel, value }) => {
                        return <StyledDropdown.Option key={value}
                            className={value === cardIcon ? 'menu-active' : ''}
                            onClick={() => setIconType(value)}
                        >
                            {fullLabel}
                        </StyledDropdown.Option>;
                    })}
                </StyledDropdown.Container>
            </div>
            : null}
        placement="bottomRight"
    >
        <span
            className={`card-icon-dropdown ${cardIcon === 'auto' ? '' : 'active'}`}
        >
            {showCreativeOption
                ? <>{iconTypeData.label} <CaretDownOutlined /></>
                : iconTypeData.label}
        </span>
    </Popover>;
    return <div className={['card-info-panel', format === 'ocg' ? 'input-ocg' : 'input-tcg'].join(' ')}>
        <AppHeader />
        <br />
        <Affiliation />
        <div className="card-overlay-input">
            <RadioTrain className="format-radio" value={format} onChange={changeFormat} optionList={FormatButtonList}>
                <span>Format</span>
            </RadioTrain>
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
        <FrameTrain setDisplayTypeAbility={setDisplayTypeAbility} />
        <div className="name-style-id-input">
            <div className="name-id-input">
                <CardTextInput ref={nameInputRef}
                    id="name"
                    defaultValue={name}
                    addonBefore={<Tooltip title="Copy">
                        <span style={{ cursor: 'pointer' }} onClick={() => {
                            navigator.clipboard.writeText(normalizedCardName(name));
                        }}>
                            Name
                        </span>
                    </Tooltip>}
                    onChange={changeName}
                    onTakePicker={setPickerTarget}
                />
                <CardTextInput ref={setIdInputRef}
                    id="set-id"
                    defaultValue={setId}
                    addonBefore={<div className="input-label-with-button">
                        <div className="input-label">Set ID</div>
                        <IconButton
                            containerProps={{
                                onClick: () => setIdInputRef.current?.setValue(randomSetID(format))
                            }}
                            Icon={SyncOutlined}
                            tooltipProps={{ overlay: 'Randomize' }}
                        />
                    </div>}
                    onChange={changeSetId}
                    onTakePicker={setPickerTarget}
                />
            </div>
            <TextStylePicker ref={stylePickerRef} key={stylePickerResetCount}
                frameInfo={frameMap[frame as keyof typeof frameMap]}
                defaultType={nameStyleType}
                defaultValue={nameStyle}
                showExtraDecorativeOption={showExtraDecorativeOption}
                onChange={changeNameStyle}
            />
            {!isLink
                ? iconTypeData.value === 'st'
                    ? <RadioTrain value={subFamily} onChange={onSubFamilyChange} optionList={STIconButtonList}>
                        {IconDropdown}
                    </RadioTrain>
                    : <RadioTrain className="checkbox-star-train" value={`${star}`} onChange={onStarChange} optionList={StarButtonList}>
                        {IconDropdown}
                    </RadioTrain>
                : null
            }
        </div>
        <div key="pic" className="main-info">
            <div className="main-info-first">
                <RadioTrain
                    className="image-input-train attribute-input"
                    value={attribute}
                    onChange={chnageAttribute}
                    optionList={attributeList}
                >
                    <span>Attribute</span>
                </RadioTrain>
                {(isPendulum || frame !== 'link' || showCreativeOption) && <div className="pendulum-container">
                    <div className="joined-row pendulum-option">
                        {frame !== 'link'
                            ? <Checkbox
                                className="pendulum-checkbox"
                                onChange={onIsPendulumChange}
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
                                            onPendulumFrameChange(e.target.checked ? 'auto' : lastPendulumFrame.current);
                                        }}
                                    >Auto</Checkbox>
                                    <RadioTrain
                                        className="frame-radio"
                                        value={pendulumFrame}
                                        onChange={onPendulumFrameChange}
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
                            <StandaloneLabel className="standalone-label">Pendulum Effect</StandaloneLabel>
                            <CardTextArea ref={pendulumEffectInputRef}
                                id="pendulum-effect"
                                allowHotkey
                                defaultValue={pendulumEffect}
                                onChange={changePendulumEffect}
                                onTakePicker={setPickerTarget}
                                rows={5}
                            />
                        </div>
                    </>}
                </div>}
                <div className={`two-column-input-group variant-${format}`}>
                    <CardTextInput ref={typeAbilityInputRef}
                        addonBefore="Type"
                        id="type-ability"
                        defaultValue={displayTypeAbility}
                        onChange={ev => {
                            const value = ev.target.value;

                            changeTypeAbility(value
                                .split(/／|\//)
                                .map(entry => entry.trim())
                                .filter(entry => typeof entry === 'string' && entry.length > 0));
                        }}
                        onTakePicker={setPickerTarget}
                    />
                    {isOCG && <Tooltip
                        overlay="Automatically annotates popular kanji characters with furigana. Manual-input furigana are unaffected."
                    >
                        <Checkbox
                            className="input-kanji-helper"
                            onChange={toggleFuriganaHelper}
                            checked={furiganaHelper}
                        >
                            {'Furigana Helper'}
                        </Checkbox>
                    </Tooltip>}
                    <RadioTrain className="condense-input" value={`${effectStyle?.condenseTolerant}`}
                        onChange={value => onCondenseTolerantChange(value as CondenseType)}
                        optionList={CondenseThresholdButtonList}
                    >
                        <span>
                            Condense <Explanation
                                content={'Higher condense limit will prefer compressing words instead of adding new lines'}
                            />
                        </span>
                    </RadioTrain>
                    <FormattingHelpDrawer />
                </div>
                <div>
                    <div className="card-effect-letter-helper">
                        <StandaloneLabel className="standalone-label">Effect</StandaloneLabel>
                        <CharPicker
                            targetId={pickerTarget.id}
                            onPick={value=> pickerTarget.setValue(value)}
                        />
                    </div>
                    <CardTextArea ref={effectInputRef}
                        id="effect"
                        allowHotkey
                        defaultValue={effect}
                        onChange={changeEffect}
                        onTakePicker={setPickerTarget}
                        rows={9}
                    />
                </div>
                <div className="card-footer-input">
                    {(isMonster || showCreativeOption)
                        && <>
                            <CardTextInput ref={atkInputRef}
                                id="atk"
                                addonBefore="ATK"
                                defaultValue={atk}
                                onChange={changeATK}
                                onTakePicker={setPickerTarget}
                            />
                            <CardTextInput ref={defInputRef}
                                id="def"
                                addonBefore="DEF"
                                defaultValue={def}
                                onChange={changeDEF}
                                onTakePicker={setPickerTarget}
                            />
                        </>}
                    <CardTextInput ref={passwordInputRef}
                        id="password"
                        addonBefore={<div className="input-label-with-button">
                            <div className="input-label">Password</div>
                            <IconButton
                                containerProps={{
                                    onClick: () => passwordInputRef.current?.setValue(randomPassword())
                                }}
                                Icon={SyncOutlined}
                                tooltipProps={{ overlay: 'Randomize' }}
                            />
                        </div>}
                        defaultValue={password}
                        onChange={changePassword}
                        onTakePicker={setPickerTarget}
                    />
                    <CardCheckboxGroup />
                    <CardTextInput ref={creatorInputRef}
                        id="creator"
                        addonBefore="Creator Text"
                        defaultValue={creator}
                        onChange={changeCreator}
                        onTakePicker={setPickerTarget}
                    />
                    <RadioTrain
                        className="sticker-input image-input-train"
                        value={sticker}
                        onChange={onStickerChange}
                        optionList={StickerButtonList}
                    >
                        <span>Sticker</span>
                    </RadioTrain>
                </div>
            </div>
            <div className="main-info-second">
                <ImageCropper
                    ref={imageCropperRef}
                    noRedrawNumber={1}
                    defaultExternalSource={picture}
                    defaultCropInfo={pictureCrop}
                    previewCanvasRef={receivingCanvasRef}
                    onSourceChange={onPictureChange}
                    onCropChange={changeImageCrop}
                    onTainted={onTainted}
                    onSourceLoaded={onSourceLoaded}
                    ratio={getArtCanvasCoordinate(isPendulum, opacity).ratio}
                    beforeCropper={showExtraDecorativeOption
                        ? <RadioTrain
                            className="art-finish-checkbox image-input-train"
                            value={artFinish}
                            onChange={onArtFinishChange}
                            optionList={ArtFinishButtonList}
                        >
                            <span className="field-title">Art Finish</span>
                        </RadioTrain>
                        : null
                    }
                >
                    {isLink
                        ? <LinkMarkChooser defaultValue={linkMap} onChange={onLinkMapChange} />
                        : <div />}
                </ImageCropper>
            </div>
        </div>
    </div>;
});