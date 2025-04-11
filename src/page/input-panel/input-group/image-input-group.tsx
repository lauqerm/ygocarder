import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { useCard, useLanguage } from 'src/service';
import { ImageCropper, ImageCropperRef, LinkMarkChooser, RadioTrain } from 'src/component';
import { useShallow } from 'zustand/react/shallow';
import { ArtFinishButtonList } from '../const';
import { getArtCanvasCoordinate } from 'src/model';
import styled from 'styled-components';
import { notification } from 'antd';

const StyledImageRadioTrain = styled(RadioTrain)`
    .ant-input-group-addon {
        flex: 0;
    }
    .radio-train-input-group .ant-radio-button-wrapper {
        min-width: unset;
    }
`;

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
    receivingCanvas: HTMLCanvasElement | null,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online') => void,
    onTainted: ImageCropper['onTainted'],
    onSourceLoaded: ImageCropper['onSourceLoaded'],
};
export const ImageInputGroup = forwardRef<ImageInputGroupRef, ImageInputGroup>(({
    showExtraDecorativeOption,
    receivingCanvas,
    onSourceLoaded,
    onTainted,
    onCropChange,
}, ref) => {
    const language = useLanguage();
    const {
        opacity,
        artFinish,
        linkMap,
        isPendulum,
        isLink,
        art, artCrop, artData, artSource, artFit,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            opacity,
            artFinish,
            linkMap,
            isPendulum,
            isLink,
            art, artCrop, artData, artSource, artFit,
        },
        getUpdater,
        setCard,
    }) => ({
        opacity,
        artFinish,
        linkMap,
        isPendulum,
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
        ratio={getArtCanvasCoordinate(isPendulum, opacity).ratio}
        beforeCropper={showExtraDecorativeOption
            ? <StyledImageRadioTrain
                className="art-finish-checkbox fill-input-train"
                value={artFinish}
                onChange={changeArtFinish}
                optionList={ArtFinishButtonList}
            >
                <span className="field-title">{language['input.art-finish.label']}</span>
            </StyledImageRadioTrain>
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