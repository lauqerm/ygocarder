import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useCard } from 'src/service';
import { ImageCropper, ImageCropperRef, LinkMarkChooser } from 'src/component';
import { RadioTrain } from '../input-train';
import { useShallow } from 'zustand/react/shallow';
import { ArtFinishButtonList } from '../const';
import { getArtCanvasCoordinate } from 'src/model';
import styled from 'styled-components';

const StyledImageRadioTrain = styled(RadioTrain)`
    .ant-input-group-addon {
        padding-left: 0;
    }
    .radio-train-input-group .ant-radio-button-wrapper {
        min-width: unset;
    }
`;

export type ImageInputGroupRef = {
    setValue: (value: { art?: string, artCrop?: Partial<ReactCrop.Crop> }) => void,
};
export type ImageInputGroup = {
    isLink: boolean,
    showExtraDecorativeOption: boolean,
    receivingCanvas: HTMLCanvasElement | null,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
    onTainted: ImageCropper['onTainted'],
    onSourceLoaded: ImageCropper['onSourceLoaded'],
};
export const ImageInputGroup = forwardRef<ImageInputGroupRef, ImageInputGroup>(({
    isLink,
    showExtraDecorativeOption,
    receivingCanvas,
    onSourceLoaded,
    onTainted,
    onCropChange,
}, ref) => {
    const {
        opacity,
        artFinish,
        linkMap,
        isPendulum,
        art, artCrop,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            opacity,
            artFinish,
            linkMap,
            isPendulum,
            art, artCrop,
        },
        getUpdater,
        setCard,
    }) => ({
        opacity,
        artFinish,
        linkMap,
        isPendulum,
        art, artCrop,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeLinkMap = useMemo(() => getUpdater('linkMap'), [getUpdater]);
    const changePicture = useMemo(() => getUpdater('art'), [getUpdater]);
    const changeArtFinish = useMemo(() => getUpdater('artFinish'), [getUpdater]);
    const changeImageCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(curr => ({
            ...curr,
            artCrop: cropInfo,
        }));
    }, [onCropChange, setCard]);

    useEffect(() => {
        imageCropperRef.current?.setRatio(getArtCanvasCoordinate(isPendulum, opacity).ratio);
    }, [opacity, isPendulum]);

    useImperativeHandle(ref, () => ({
        setValue: ({ art, artCrop }) => {
            if (typeof art === 'string' && artCrop) {
                imageCropperRef.current?.forceExternalSource(art, artCrop);
            }
        }
    }));

    return <ImageCropper
        ref={imageCropperRef}
        defaultExternalSource={art}
        defaultCropInfo={artCrop}
        receivingCanvas={receivingCanvas}
        onSourceChange={changePicture}
        onCropChange={changeImageCrop}
        onTainted={onTainted}
        onSourceLoaded={onSourceLoaded}
        defaultRatio={getArtCanvasCoordinate(isPendulum, opacity).ratio}
        beforeCropper={showExtraDecorativeOption
            ? <StyledImageRadioTrain
                className="art-finish-checkbox fill-input-train"
                value={artFinish}
                onChange={changeArtFinish}
                optionList={ArtFinishButtonList}
            >
                <span className="field-title">Art Finish</span>
            </StyledImageRadioTrain>
            : null
        }
    >
        {isLink
            ? <LinkMarkChooser defaultValue={linkMap} onChange={changeLinkMap} />
            : <div />}
    </ImageCropper>;
});