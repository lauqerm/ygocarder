import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useCard, useLanguage } from 'src/service';
import { ImageCropper, ImageCropperRef } from 'src/component';
import { useShallow } from 'zustand/react/shallow';
import { getArtCanvasCoordinate } from 'src/model';
import styled from 'styled-components';

const StyledImageCropper = styled(ImageCropper)`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: start;
    gap: 0;
    .card-image-source-input {
        display: flex;
        flex-direction: column-reverse;
        .online-image-tip {
            text-align: center;
        }
    }
    .card-cropper {
        width: 375px;
        text-align: center;
    }
`;

export type BackgroundInputGroupRef = {
    setValue: (value: { background?: string, backgroundCrop?: Partial<ReactCrop.Crop> }) => void,
};
export type BackgroundInputGroup = {
    children?: React.ReactNode,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
} & Pick<ImageCropper, 'backgroundColor' | 'receivingCanvas' | 'onTainted' | 'onSourceLoaded'>;
export const BackgroundInputGroup = forwardRef<BackgroundInputGroupRef, BackgroundInputGroup>(({
    backgroundColor,
    children,
    receivingCanvas,
    onSourceLoaded,
    onTainted,
    onCropChange,
}, ref) => {
    const language = useLanguage();
    const {
        background, backgroundCrop, backgroundType,
        isPendulum,
        opacity,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            background, backgroundCrop, backgroundType,
            isPendulum,
            opacity,
        },
        getUpdater,
        setCard,
    }) => ({
        background, backgroundCrop, backgroundType,
        isPendulum,
        opacity,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeBackground = useMemo(() => getUpdater('background'), [getUpdater]);
    const changeBackgroundCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(curr => ({
            ...curr,
            backgroundCrop: cropInfo,
        }));
    }, [onCropChange, setCard]);

    useEffect(() => {
        imageCropperRef.current?.setRatio(getArtCanvasCoordinate(isPendulum, opacity, backgroundType).ratio);
    }, [backgroundType, opacity, isPendulum]);

    useImperativeHandle(ref, () => ({
        setValue: ({ background, backgroundCrop }) => {
            if (typeof background === 'string' && backgroundCrop) {
                imageCropperRef.current?.forceExternalSource(background, backgroundCrop);
            }
        }
    }));

    return <StyledImageCropper
        ref={imageCropperRef}
        title={language['input.background-image.label']}
        backgroundColor={backgroundColor}
        defaultExternalSource={background}
        defaultCropInfo={backgroundCrop}
        receivingCanvas={receivingCanvas}
        onSourceChange={changeBackground}
        onCropChange={changeBackgroundCrop}
        onTainted={onTainted}
        onSourceLoaded={onSourceLoaded}
        ratio={getArtCanvasCoordinate(isPendulum, opacity, backgroundType).ratio}
        beforeCropper={null}
    >
        {children}
    </StyledImageCropper>;
});