import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Input, Checkbox, Popover, Tooltip } from 'antd';
import { Card, CardOpacity, CondenseType, NameFontDataMap, NameStyle, NameStyleType, frameMap, getArtCanvasCoordinate, tcgToOCGTermMap } from '../../model';
import { FormattingHelpDrawer, FrameInfoBlock, IconButton, ImageCropper, LinkMarkChooser, StandaloneLabel } from '../../component';
import { checkXyz, checkLink, checkMonster, randomPassword, randomSetID, checkDarkSynchro, checkSpeedSkill, normalizedCardName } from '../../util';
import debounce from 'lodash.debounce';
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
    getFrameButtonList
} from './const';
import { CharPicker } from './char-picker';
import { TextStylePicker, TextStylePickerRef } from './text-style-picker';
import { CheckboxTrain, RadioTrain } from './input-train';
import { ImageCropperRef } from '../../component/image-cropper';
import { Explanation } from 'src/component/explanation';
import { changeCardFormat, useSetting } from '../../service';
import { OpacityPicker, OpacityPickerRef } from './opacity-picker';
import { StyledPendulumFrameContainer } from './input-panel.styled';
import './input-panel.scss';

const { TextArea } = Input;

const onChangeFactory = (
    key: string,
    mutateFunction: (func: (card: Card) => Card) => void,
    valueTransform: (value: any) => any = (value) => value,
) => {
    return (e: any) => {
        mutateFunction(current => ({
            ...current,
            [key]: valueTransform(typeof e === 'string' || typeof e === 'number' || Array.isArray(e) ? e : e?.target?.value),
        }));
    };
};

const availableCommand = new Set(['1', '2', '3', '4', '5']);

export type CardInputPanelRef = {
    forceCardData: (card: Card) => void,
}
export type CardInputPanel = {
    currentCard: Card,
    receivingCanvasRef: HTMLCanvasElement | null,
    defaultCropInfo: Partial<ReactCrop.Crop>,
    onCardChange: React.Dispatch<React.SetStateAction<Card>>,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
    children?: React.ReactNode,
} & {
    onTainted: ImageCropper['onTainted'],
    onSourceLoaded: ImageCropper['onSourceLoaded'],
}
export const CardInputPanel = React.forwardRef<CardInputPanelRef, CardInputPanel>(({
    currentCard,
    receivingCanvasRef,
    defaultCropInfo,
    onCardChange,
    onCropChange,
    onTainted,
    onSourceLoaded,
    children,
}: CardInputPanel, forwardedRef) => {
    const {
        setting,
    } = useSetting(({ setting }) => ({ setting }));
    const { allowHotkey, showCreativeOption, showExtraDecorativeOption } = setting;

    const [isMirrorScale, setMirrorScale] = useState(true);
    const stylePickerRef = useRef<TextStylePickerRef>(null);
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const {
        format,
        frame, foil, finish, artFinish, opacity,
        name, nameStyleType, nameStyle,
        picture,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumEffect, pendulumScaleRed, pendulumScaleBlue,
        atk, def, linkMap,
        attribute,
        subFamily,
        star,
        setId,
        passcode, creator, sticker,
        isSpeedCard, isDuelTerminalCard, isFirstEdition,
        furiganaHelper,
    } = currentCard;
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const isSpeedSkill = checkSpeedSkill(currentCard);
    const isDarkSynchro = checkDarkSynchro(currentCard);
    const isOCG = format === 'ocg';
    const [displayTypeAbility, setDisplayTypeAbility] = useState(typeAbility.join('/'));
    const [displayName, setDisplayName] = useState(name);
    const [displayEffect, setDisplayEffect] = useState(effect);
    const [displayPendulumEffect, setDisplayPendulumEffect] = useState(pendulumEffect);
    const [onlineCharPicker, setOnlineCharPicker] = useState('');
    const [stylePickerResetCount, setStylePickerResetCount] = useState(0);
    const ref = useRef();
    const opacityPickerRef = useRef<OpacityPickerRef>(null);
    const lastPendulumFrame = useRef(pendulumFrame === 'auto' ? 'spell' : pendulumFrame);

    const setCard = (mutateFunc: (card: Card) => Card) => {
        onCardChange(currentCard => mutateFunc(currentCard));
    };
    const onFormatChange = (formatValue: string | number) => {
        onCardChange(currentCard => {
            const nextFormat = `${formatValue}`;
            const foramtSwappedCard = changeCardFormat(currentCard, nextFormat);
            setDisplayTypeAbility(foramtSwappedCard.typeAbility.join('/'));

            return foramtSwappedCard;
        });
    };
    const onFoilChange = onChangeFactory('foil', setCard);
    const onFinishChange = onChangeFactory('finish', setCard);
    const onOpacityChange = (opacity: CardOpacity) => onCardChange(currentCard => ({ ...currentCard, opacity }));
    const onArtFinishChange = onChangeFactory('artFinish', setCard);
    const onFrameChange = (frameValue: number | string) => {
        onCardChange(currentCard => {
            const value = `${frameValue}`;
            const isST = value === 'spell' || value === 'trap';
            const termMap = currentCard.format === 'tcg'
                ? {
                    'Spell Card': 'Spell Card',
                    'Trap Card': 'Trap Card',
                }
                : tcgToOCGTermMap;
            const newTypeAbility = value === 'spell'
                ? [termMap['Spell Card']]
                : value === 'trap' ? [termMap['Trap Card']] : currentCard.typeAbility;
            if (isST) setDisplayTypeAbility(newTypeAbility[0]);

            return {
                ...currentCard,
                frame: value,
                isPendulum: value === 'link' ? false : currentCard.isPendulum,
                subFamily: isST ? 'NO ICON' : currentCard.subFamily,
                attribute: isST
                    ? `${value}`.toUpperCase()
                    : currentCard.attribute,
                typeAbility: newTypeAbility,
            };
        });
    };
    const onAttributeChange = onChangeFactory('attribute', setCard);
    const onSubFamilyChange = onChangeFactory('subFamily', setCard);
    const onNameChange = debounce(onChangeFactory('name', setCard), 400);
    const onNameColorChange = (type: NameStyleType, value: Partial<NameStyle>) => {
        onCardChange(currentCard => {
            return {
                ...currentCard,
                nameStyleType: type,
                nameStyle: value,
            };
        });
    };
    const onCondenseTolerantChange = (value: CondenseType) => {
        onCardChange(currentCard => {
            return {
                ...currentCard,
                effectStyle: {
                    ...currentCard.effectStyle,
                    condenseTolerant: value,
                }
            };
        });
    };
    const onStarChange = onChangeFactory('star', setCard);
    const onIsPendulumChange = (e: any) => onCardChange(currentCard => {
        const willBecomePendulum = e.target.checked;
        /** It is rather not desirable to seemingly reduce opacity of pendulum frame, even though it is closer to real card */
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
    const onPictureChange = onChangeFactory('picture', setCard);
    const onLinkMapChange = onChangeFactory('linkMap', setCard);
    const onPendulumFrameChange = (value: string | number) => {
        const normalizedValue = `${value}`;

        if (normalizedValue !== 'auto') lastPendulumFrame.current = normalizedValue;
        onCardChange(currentCard => {
            return { ...currentCard, pendulumFrame: normalizedValue };
        });
    };
    const onRedScaleChange = onChangeFactory('pendulumScaleRed', setCard);
    const onBlueScaleChange = onChangeFactory('pendulumScaleBlue', setCard);
    const onPendulumEffectChange = debounce(onChangeFactory('pendulumEffect', setCard), 400);
    const onEffectChange = debounce(onChangeFactory('effect', setCard), 400);
    const onATKChange = onChangeFactory('atk', setCard);
    const onDEFChange = onChangeFactory('def', setCard);
    const onTypeAbilityChange = debounce((value: (string | number)[]) => {
        setCard(current => ({
            ...current,
            typeAbility: value.map(entry => `${entry}`),
        }));
    }, 400);
    const onSetIDChange = onChangeFactory('setId', setCard);
    const onPasscodeChange = onChangeFactory('passcode', setCard);
    const onStickerChange = onChangeFactory('sticker', setCard);
    const onCreatorChange = onChangeFactory('creator', setCard);
    const onFirstEditionChange = (e: any) => onCardChange(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isFirstEdition: nextValue,
            isDuelTerminalCard: nextValue ? false : currentCard.isDuelTerminalCard,
        };
    });
    const onDuelTerminalCardChange = (e: any) => onCardChange(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isDuelTerminalCard: nextValue,
            isFirstEdition: nextValue ? false : currentCard.isFirstEdition,
        };
    });
    const onSpeedCardChange = (e: any) => onCardChange(currentCard => {
        return { ...currentCard, isSpeedCard: e.target.checked };
    });
    const toggleFuriganaHelper = (e: any) => onCardChange(currentCard => {
        return { ...currentCard, furiganaHelper: e.target.checked };
    });

    const attributeList = useMemo(() => getAttributeList(format), [format]);
    const frameList = useMemo(() => getFrameButtonList()
        .filter(entry => {
            return showExtraDecorativeOption || entry.edition === 'normal';
        }),
        [showExtraDecorativeOption],
    );

    useEffect(() => {
        stylePickerRef.current?.setValue({ font: nameStyle.font });
    }, [nameStyle.font]);

    useEffect(() => {
        opacityPickerRef.current?.setValue(opacity);
    }, [opacity]);

    const [forceCursorData, setForceCursorData] = useState({ id: '', placement: -1 });
    useEffect(() => {
        const { id, placement } = forceCursorData;
        if (id && placement >= 0) {
            const target = document.querySelector(`#${id}`) as HTMLInputElement | null;

            if (target && (target.selectionEnd ?? -1) >= 0) {
                target.selectionEnd = placement;
                setForceCursorData({ id: '', placement: -1 });
            }
        }
    }, [forceCursorData]);
    const wrapText = (
        value: string,
        key: string,
        selectionStart: number,
        selectionEnd: number,
        onResult: (joinedText: string, newCursorPlacement: number) => void,
    ) => {
        const selectedText = value.substring(selectionStart, selectionEnd);
        const nextLetter = value[selectionEnd];
        let wrappedText = selectedText;
        let cursorOffset = 2;
        switch (key) {
            case '1': wrappedText = `[${selectedText}]${nextLetter === '\n' ? '' : '\n'}`; cursorOffset = nextLetter === '\n' ? 2 : 3; break;
            case '2': wrappedText = `{${selectedText}}`; break;
            case '3': wrappedText = `{${selectedText}|}`; break;
            case '4': wrappedText = `{${selectedText}||}`; cursorOffset = 3; break;
            case '5': wrappedText = `{{${selectedText}}}`; cursorOffset = 4; break;
        }
        const joinedText = value.substring(0, selectionStart)
            + `${wrappedText}`
            + value.substring(selectionEnd, value.length);

        onResult(joinedText, selectionEnd + cursorOffset);
    };

    useImperativeHandle(forwardedRef, () => ({
        forceCardData: (card) => {
            setDisplayTypeAbility(card.typeAbility.join('/'));
            setDisplayName(card.name);
            setDisplayEffect(card.effect);
            setDisplayPendulumEffect(card.pendulumEffect);
            setStylePickerResetCount(cnt => cnt + 1);
            imageCropperRef.current?.forceExternalSource(card.picture, card.pictureCrop);
        }
    }));

    const currentPendulumFrame = frameMap[pendulumFrame];
    return <div className="card-info-panel">
        {children}
        <div className="card-overlay-input">
            <RadioTrain className="format-radio" value={format} onChange={onFormatChange} optionList={FormatButtonList}>
                <span>Format</span>
            </RadioTrain>
            <RadioTrain className="foil-radio" value={foil} onChange={onFoilChange} optionList={FoilButtonList}>
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
                onChange={onOpacityChange}
            />
        </div>}
        <RadioTrain className="frame-radio" value={frame} onChange={onFrameChange} optionList={frameList} />
        <div className="name-style-id-input">
            <div className="name-id-input">
                <Input
                    id="name"
                    ref={onlineCharPicker === 'name' ? ref as any : null}
                    autoComplete="off"
                    onFocus={() => setOnlineCharPicker('name')}
                    allowClear
                    addonBefore={<Tooltip title="Copy">
                        <span style={{ cursor: 'pointer' }} onClick={() => {
                            navigator.clipboard.writeText(normalizedCardName(name));
                        }}>
                            Name
                        </span>
                    </Tooltip>}
                    placeholder="Card Name"
                    value={displayName}
                    className="name-input"
                    onKeyDown={ev => {
                        if (!allowHotkey) return;
                        const { ctrlKey, key, metaKey } = ev;
                        const selectionStart = ev.currentTarget.selectionStart ?? -1;
                        const selectionEnd = ev.currentTarget.selectionEnd ?? -1;
                        if ((ctrlKey || metaKey) && selectionEnd !== selectionStart && availableCommand.has(key)) {
                            ev.preventDefault();
                            wrapText(
                                ev.currentTarget.value, key,
                                selectionStart, selectionEnd,
                                (joinedText, placement) => {
                                    onNameChange({ target: { value: joinedText } });
                                    setDisplayName(joinedText);
                                    setForceCursorData({ id: 'name', placement });
                                }
                            );
                        }
                    }}
                    onChange={ev => {
                        onNameChange(ev);
                        setDisplayName(ev.target.value);
                    }}
                />
                <Input
                    id="set-id"
                    ref={onlineCharPicker === 'set-id' ? ref as any : null}
                    autoComplete="off"
                    onFocus={() => setOnlineCharPicker('set-id')}
                    allowClear
                    className="set-id-input"
                    addonBefore={<div className="input-label-with-button">
                        <div className="input-label">Set ID</div>
                        <IconButton
                            containerProps={{ onClick: () => onPasscodeChange(randomSetID(format)) }}
                            Icon={SyncOutlined}
                            tooltipProps={{ overlay: 'Randomize' }}
                        />
                    </div>}
                    onChange={onSetIDChange}
                    placeholder="Set ID"
                    value={setId}
                />
            </div>
            <TextStylePicker ref={stylePickerRef} key={stylePickerResetCount}
                defaultFont={NameFontDataMap[
                    isSpeedSkill
                        ? 'Arial'
                        : isOCG ? 'OCG' : 'Default'
                ].value}
                frameInfo={frameMap[frame as keyof typeof frameMap]}
                defaultType={nameStyleType}
                defaultValue={nameStyle}
                showExtraDecorativeOption={showExtraDecorativeOption}
                onChange={onNameColorChange}
            />
            {isMonster
                ? !isLink
                    ? <RadioTrain className="checkbox-star-train" value={`${star}`} onChange={onStarChange} optionList={StarButtonList}>
                        <span>{isXyz ? 'Rank' : isDarkSynchro ? 'Neg. Level' : 'Level'}</span>
                    </RadioTrain>
                    : null
                : <RadioTrain value={subFamily} onChange={onSubFamilyChange} optionList={STIconButtonList}>
                    <span>Icon</span>
                </RadioTrain>
            }
        </div>
        <div key="pic" className="main-info">
            <div className="main-info-first">
                <RadioTrain
                    className="image-input-train attribute-input"
                    value={attribute}
                    onChange={onAttributeChange}
                    optionList={attributeList}
                >
                    <span>Attribute</span>
                </RadioTrain>
                {(isPendulum || frame !== 'link' || showCreativeOption) && <div className="pendulum-container">
                    <div className="joined-row pendulum-option">
                        {frame !== 'link'
                            ? <Checkbox className="pendulum-checkbox" onChange={onIsPendulumChange} checked={isPendulum}>Pendulum</Checkbox>
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
                            <Input key="blue-scale"
                                addonBefore={<span>
                                    <span style={{ color: '#3b9dff' }}>Blue</span> Scale
                                </span>}
                                value={pendulumScaleBlue}
                                onChange={e => {
                                    onBlueScaleChange(e);
                                    if (isMirrorScale) onRedScaleChange(e);
                                }} />
                        </div>
                        <div>
                            <Input key="red-scale"
                                addonBefore={<span>
                                    <span style={{ color: '#ff6f6f' }}>Red</span> Scale
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
                            <TextArea key="pendulum-effect"
                                id="pendulum-effect"
                                ref={onlineCharPicker === 'pendulum-effect' ? ref as any : null}
                                onFocus={() => setOnlineCharPicker('pendulum-effect')}
                                allowClear
                                spellCheck={false}
                                placeholder="Pendulum effect"
                                value={displayPendulumEffect}
                                onKeyDown={ev => {
                                    if (!allowHotkey) return;
                                    const { ctrlKey, metaKey, key } = ev;
                                    const selectionStart = ev.currentTarget.selectionStart ?? -1;
                                    const selectionEnd = ev.currentTarget.selectionEnd ?? -1;
                                    if ((ctrlKey || metaKey) && selectionEnd !== selectionStart && availableCommand.has(key)) {
                                        ev.preventDefault();
                                        wrapText(
                                            ev.currentTarget.value, key,
                                            selectionStart, selectionEnd,
                                            (joinedText, placement) => {
                                                onPendulumEffectChange({ target: { value: joinedText } });
                                                setDisplayPendulumEffect(joinedText);
                                                setForceCursorData({ id: 'pendulum-effect', placement });
                                            }
                                        );
                                    }
                                }}
                                onChange={ev => {
                                    onPendulumEffectChange(ev);
                                    setDisplayPendulumEffect(ev.target.value);
                                }}
                                rows={5}
                            />
                        </div>
                    </>}
                </div>}
                <div className="two-column-input-group">
                    <Input addonBefore="Type"
                        id="type"
                        className="type-ability-input"
                        ref={onlineCharPicker === 'type' ? ref as any : null}
                        autoComplete="off"
                        onFocus={() => setOnlineCharPicker('type')}
                        allowClear
                        onChange={ev => {
                            const value = ev.target.value;

                            setDisplayTypeAbility(value);
                            onTypeAbilityChange(value
                                .split('/')
                                .map(entry => entry.trim())
                                .filter(entry => typeof entry === 'string' && entry.length > 0));
                        }}
                        placeholder="Type / Ability"
                        style={{ width: '100%' }}
                        value={displayTypeAbility}
                    />
                    {isOCG && <Tooltip overlay="Automatically annotates popular kanji characters with furigana. Manual-input furigana are unaffected.">
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
                            targetId={onlineCharPicker}
                            onPick={value => {
                                if (ref.current) (ref.current as any)?.props?.onChange?.({
                                    target: { value }
                                });
                            }}
                        />
                    </div>
                    <TextArea key="effect"
                        id="card-effect"
                        ref={onlineCharPicker === 'card-effect' ? ref as any : null}
                        onFocus={() => setOnlineCharPicker('card-effect')}
                        allowClear
                        spellCheck={false}
                        placeholder="Card effect"
                        value={displayEffect}
                        rows={9}
                        onKeyDown={ev => {
                            if (!allowHotkey) return;
                            const { ctrlKey, metaKey, key } = ev;
                            const selectionStart = ev.currentTarget.selectionStart ?? -1;
                            const selectionEnd = ev.currentTarget.selectionEnd ?? -1;
                            if ((ctrlKey || metaKey) && selectionEnd !== selectionStart && availableCommand.has(key)) {
                                ev.preventDefault();
                                wrapText(
                                    ev.currentTarget.value, key,
                                    selectionStart, selectionEnd,
                                    (joinedText, placement) => {
                                        onEffectChange({ target: { value: joinedText } });
                                        setDisplayEffect(joinedText);
                                        setForceCursorData({ id: 'card-effect', placement });
                                    }
                                );
                            }
                        }}
                        onChange={ev => {
                            onEffectChange(ev);
                            setDisplayEffect(ev.target.value);
                        }}
                    />
                </div>
                <div className="card-footer-input">
                    {isMonster
                        ? <Input key="atk"
                            id="atk"
                            ref={onlineCharPicker === 'atk' ? ref as any : null}
                            onFocus={() => setOnlineCharPicker('atk')}
                            addonBefore="ATK" allowClear value={atk} onChange={onATKChange} />
                        : null}
                    {isMonster
                        ? <Input key="def"
                            id="def"
                            ref={onlineCharPicker === 'def' ? ref as any : null}
                            onFocus={() => setOnlineCharPicker('def')}
                            addonBefore="DEF" allowClear value={def} onChange={onDEFChange} />
                        : null}
                    <Input
                        id="password"
                        ref={onlineCharPicker === 'password' ? ref as any : null}
                        autoComplete="off"
                        onFocus={() => setOnlineCharPicker('password')}
                        allowClear
                        className="password-input"
                        addonBefore={<div className="input-label-with-button">
                            <div className="input-label">Password</div>
                            <IconButton
                                containerProps={{ onClick: () => onPasscodeChange(randomPassword()) }}
                                Icon={SyncOutlined}
                                tooltipProps={{ overlay: 'Randomize' }}
                            />
                        </div>}
                        onChange={onPasscodeChange}
                        placeholder="Password"
                        value={passcode}
                    />
                    <div className="checkbox-input">
                        <Checkbox
                            className="input-1st"
                            onChange={onFirstEditionChange}
                            checked={isFirstEdition}
                        >
                            {'1st Edition'}
                        </Checkbox>
                        <Checkbox
                            className="input-speed"
                            onChange={onSpeedCardChange}
                            checked={isSpeedCard}
                        >
                            {'Speed'}
                        </Checkbox>
                        <Checkbox
                            className="input-terminal"
                            onChange={onDuelTerminalCardChange}
                            checked={isDuelTerminalCard}
                        >
                            {'Duel Terminal'}
                        </Checkbox>
                    </div>
                    <Input addonBefore="Creator"
                        id="creator-text"
                        ref={onlineCharPicker === 'creator-text' ? ref as any : null}
                        autoComplete="off"
                        onFocus={() => setOnlineCharPicker('creator-text')}
                        allowClear
                        className="creator-input"
                        onChange={onCreatorChange}
                        placeholder="Creator"
                        value={creator}
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
                    defaultCropInfo={defaultCropInfo}
                    previewCanvasRef={receivingCanvasRef}
                    onSourceChange={onPictureChange}
                    onCropChange={onCropChange}
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