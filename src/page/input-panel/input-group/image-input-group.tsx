import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { LanguageDataDictionary, useCard, useLanguage } from 'src/service';
import { ImageCropper, ImageCropperRef, LinkMarkChooser, RadioTrain, StyledDropdown, StyledDropdownLabel } from 'src/component';
import { useShallow } from 'zustand/react/shallow';
import { ArtFinishButtonList, getOtherFinishList } from '../const';
import { getArtCanvasCoordinate, OtherFinish, OtherFinishTypeMap } from 'src/model';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';
import { notification, Popover } from 'antd';
import { mergeClass } from 'src/util';

const StyledImageRadioTrain = styled(RadioTrain)`
    .ant-input-group-addon {
        flex: 0 0 auto;
        text-align: left;
    }
    .radio-train-input-group .ant-radio-button-wrapper {
        min-width: unset;
    }
`;
const FinishLabel = styled(StyledDropdown.Option)`
    display: grid;
    grid-template-columns: 30px 1fr;
    column-gap: var(--spacing-xs);
    .tag {
        background: var(--sub-level-2);
        color: var(--color-contrast);
        box-shadow: 0 0 1px 1px var(--main-level-1) inset;
        font-size: var(--fs-xs);
        text-align: center;
        line-height: 1.5;
    }
    &.default {
        .tag {
            background: var(--sub-level-4);
        }
    }
`;

type OtherFinishPicker = {
    finishValueList: [...OtherFinish, art: string],
    changeFinish: (valueMap: Record<keyof typeof OtherFinishTypeMap, string>) => void,
    language: LanguageDataDictionary,
    showCreativeOption: boolean,
};
const OtherFinishPicker = ({
    finishValueList,
    changeFinish,
    language,
    showCreativeOption,
}: OtherFinishPicker) => {
    const [selectedType, setSelectedType] = useState<keyof typeof OtherFinishTypeMap>(OtherFinishTypeMap['art'].key);
    const valueMap = {
        [OtherFinishTypeMap['attribute'].key]: finishValueList[0],
        [OtherFinishTypeMap['icon'].key]: finishValueList[1],
        [OtherFinishTypeMap['sticker'].key]: finishValueList[2],
        [OtherFinishTypeMap['art'].key]: finishValueList[3],
    };
    const activeWidget = Object.values(valueMap).some(entry => entry !== 'normal');
    const finishList = useMemo(() => getOtherFinishList(language), [language]);

    const IconDropdownLabel = showCreativeOption
        ? <>{language[OtherFinishTypeMap[selectedType].labelKey]} <CaretDownOutlined /></>
        : language[OtherFinishTypeMap[selectedType].labelKey];
    const IconDropdown = <Popover key="icon-type-picker"
        trigger={['click']}
        overlayClassName="global-input-overlay pattern-picker-overlay"
        content={<div className="overlay-event-absorber">
            <StyledDropdown.Container>
                <StyledDropdownLabel>{language['input.other-finish.label']}</StyledDropdownLabel>
                {finishList.map(({ label, value }) => {
                    return <FinishLabel key={value}
                        className={mergeClass(
                            valueMap[value] === 'normal' ? 'default' : '',
                            selectedType === value ? 'menu-active' : '',
                        )}
                        onClick={() => {
                            setSelectedType(value);
                        }}
                    >
                        <div className="value">
                            <div className="tag">{valueMap[value] === 'normal' ? 'Auto' : valueMap[value]}</div>
                        </div>
                        <div className="label">{label}</div>
                    </FinishLabel>;
                })}
            </StyledDropdown.Container>
        </div>}
        placement="bottomRight"
    >
        <span
            className={`field-title card-icon-dropdown ${activeWidget ? 'active' : ''} ${showCreativeOption ? '' : 'disabled'}`}
        >
            {IconDropdownLabel}
        </span>
    </Popover>;

    return <StyledImageRadioTrain
        className="art-finish-checkbox fill-input-train"
        value={valueMap[selectedType]}
        onChange={value => {
            const nextValueMap = { ...valueMap };
            nextValueMap[selectedType] = `${value}`;

            changeFinish(nextValueMap);
        }}
        optionList={ArtFinishButtonList}
    >
        {IconDropdown}
    </StyledImageRadioTrain>;
};

export type ImageInputGroupRef = {
    setValue: (value: {
        art?: string,
        artData?: string,
        artSource?: string,
        artCrop?: Partial<ReactCrop.Crop>,
    }) => void,
    isLoading: () => boolean,
};
export type ImageInputGroup = {
    showExtraDecorativeOption: boolean,
    showCreativeOption: boolean,
    receivingCanvas: HTMLCanvasElement | null,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online') => void,
    onTainted: ImageCropper['onTainted'],
    onSourceLoaded: ImageCropper['onSourceLoaded'],
};
export const ImageInputGroup = forwardRef<ImageInputGroupRef, ImageInputGroup>(({
    showExtraDecorativeOption,
    showCreativeOption,
    receivingCanvas,
    onSourceLoaded,
    onTainted,
    onCropChange,
}, ref) => {
    const language = useLanguage();
    const {
        opacity,
        artFinish, otherFinish,
        linkMap,
        isPendulum, pendulumSize,
        isLink,
        art, artCrop, artData, artSource, artFit,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            opacity,
            artFinish, otherFinish,
            linkMap,
            isPendulum, pendulumSize,
            isLink,
            art, artCrop, artData, artSource, artFit,
        },
        getUpdater,
        setCard,
    }) => ({
        opacity,
        artFinish, otherFinish,
        linkMap,
        isPendulum, pendulumSize,
        isLink,
        art, artCrop, artData, artSource, artFit,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeLinkMap = useMemo(() => getUpdater('linkMap'), [getUpdater]);
    const changeLinkStatus = useCallback((willBecomeLink: boolean) => setCard(currentCard => {
        return {
            ...currentCard,
            isLink: willBecomeLink,
        };
    }), [setCard]);
    const changeArt = useMemo(() => getUpdater('art'), [getUpdater]);
    const changeArtData = useMemo(() => getUpdater('artData'), [getUpdater]);
    const changeArtFit = useCallback((status: boolean) => setCard(currentCard => {
        return {
            ...currentCard,
            artFit: status,
        };
    }), [setCard]);
    const changeArtSource = useMemo(() => getUpdater('artSource'), [getUpdater]);
    const changeArtFinish = useMemo(() => getUpdater('artFinish'), [getUpdater]);
    const changeOtherFinish = useMemo(() => getUpdater('otherFinish'), [getUpdater]);
    const changeImageCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online', byUser?: boolean) => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(
            curr => ({
                ...curr,
                artCrop: cropInfo,
            }),
            byUser,
        );
    }, [onCropChange, setCard]);

    useImperativeHandle(ref, () => ({
        isLoading: () => imageCropperRef.current?.isLoading() ?? false,
        setValue: ({ art, artCrop, artData, artSource }) => {
            if (artSource === 'offline') {
                if (typeof artData === 'string' && artCrop) {
                    imageCropperRef.current?.forceSource('offline', artData, artCrop);
                }
            } else {
                if (typeof art === 'string' && artCrop) {
                    imageCropperRef.current?.forceSource('online', art, artCrop);
                }
            }
        }
    }));

    return <ImageCropper
        ref={imageCropperRef}
        title={language['input.card-art.label']}
        defaultSourceType={artSource}
        defaultExternalSource={art}
        defaultInternalSource={artData}
        defaultCropInfo={artCrop}
        forceFit={artFit}
        receivingCanvas={receivingCanvas}
        onSourceChange={(type, data) => {
            changeArtSource(type);
            if (type === 'offline') changeArtData(data);
            else changeArt(data);
        }}
        onCropChange={changeImageCrop}
        onTainted={onTainted}
        onSourceLoaded={onSourceLoaded}
        onForceFitChange={changeArtFit}
        onMaxSizeExceeded={size => {
            notification.error({
                description: language['error.max-size.description'](size),
                message: language['error.max-size.message'],
            });
        }}
        ratio={getArtCanvasCoordinate(isPendulum, opacity, undefined, pendulumSize).ratio}
        beforeCropper={showExtraDecorativeOption
            ? <OtherFinishPicker
                finishValueList={[...otherFinish, artFinish]}
                changeFinish={finishMap => {
                    changeArtFinish(finishMap[OtherFinishTypeMap['art'].key]);
                    changeOtherFinish([
                        finishMap[OtherFinishTypeMap['attribute'].key],
                        finishMap[OtherFinishTypeMap['icon'].key],
                        finishMap[OtherFinishTypeMap['sticker'].key],
                    ]);
                }}
                language={language}
                showCreativeOption={showCreativeOption}
            />
            : null
        }
    >
        <div>
            <LinkMarkChooser key={`link-${JSON.stringify(linkMap)}`}
                active={isLink === true}
                defaultValue={linkMap}
                onChange={changeLinkMap}
                onStatusChange={changeLinkStatus}
            />
        </div>
    </ImageCropper>;
});