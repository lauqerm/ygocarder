import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { useCard, useLanguage } from 'src/service';
import { ImageCropper, ImageCropperRef } from 'src/component';
import { useShallow } from 'zustand/react/shallow';
import { CardArtCanvasCoordinateMap, ImageStyle } from 'src/model';
import styled from 'styled-components';
import { notification } from 'antd';

const StyledImageCropper = styled(ImageCropper)`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: start;
    gap: 0;
    .card-image-source-input {
        display: flex;
        flex-direction: column;
        .online-image-tip {
            text-align: center;
        }
    }
    .card-cropper {
        width: var(--cropper-width);
        text-align: center;
    }
    .layout-picker-subpanel {
        h2 {
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

export type OverlayInputGroupRef = {
    hasImage: () => boolean,
    setValue: (value: {
        overlay?: string,
        overlayData?: string,
        overlaySource?: string,
        overlayCrop?: Partial<ReactCrop.Crop>,
    }) => void,
    isLoading: () => boolean,
};
export type OverlayInputGroup = {
    children?: React.ReactNode,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online') => void,
} & Pick<ImageCropper, 'receivingCanvas' | 'onTainted' | 'onSourceLoaded'>;
export const OverlayInputGroup = forwardRef<OverlayInputGroupRef, OverlayInputGroup>(({
    children,
    receivingCanvas,
    onSourceLoaded,
    onTainted,
    onCropChange,
}, ref) => {
    const language = useLanguage();
    const {
        overlay, overlayCrop, overlayData, overlaySource, overlayFit, overlayStyle,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            overlay, overlayCrop, overlayData, overlaySource, overlayFit, overlayStyle,
        },
        getUpdater,
        setCard,
    }) => ({
        overlay, overlayCrop, overlayData, overlaySource, overlayFit, overlayStyle,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeOverlaySource = useMemo(() => getUpdater('overlaySource'), [getUpdater]);
    const changeOverlay = useMemo(() => getUpdater('overlay'), [getUpdater]);
    const changeOverlayData = useMemo(() => getUpdater('overlayData'), [getUpdater]);
    const changeOverlayFit = useCallback((status: boolean) => setCard(currentCard => {
        return {
            ...currentCard,
            overlayFit: status,
        };
    }), [setCard]);
    const changeOverlayStyle = useCallback((style: ImageStyle) => setCard(currentCard => {
        return {
            ...currentCard,
            overlayStyle: { ...currentCard.overlayStyle, ...style },
        };
    }), [setCard]);
    const changeOverlayCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online', byUser?: boolean) => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(
            curr => ({
                ...curr,
                overlayCrop: cropInfo,
            }),
            byUser,
        );
    }, [onCropChange, setCard]);

    useImperativeHandle(ref, () => ({
        isLoading: () => imageCropperRef.current?.isLoading() ?? false,
        hasImage: () => imageCropperRef.current?.hasImage() ?? false,
        setValue: ({ overlay, overlayCrop, overlayData, overlaySource }) => {
            if (overlaySource === 'offline') {
                if (typeof overlayData === 'string' && overlayCrop) {
                    imageCropperRef.current?.forceSource('offline', overlayData, overlayCrop);
                }
            } else {
                if (typeof overlay === 'string' && overlayCrop) {
                    imageCropperRef.current?.forceSource('online', overlay, overlayCrop);
                }
            }
        }
    }));

    return <StyledImageCropper
        ref={imageCropperRef}
        title={language['input.background-image.label']}
        defaultSourceType={overlaySource}
        defaultInternalSource={overlayData}
        defaultExternalSource={overlay}
        defaultCropInfo={overlayCrop}
        receivingCanvas={receivingCanvas}
        forceFit={overlayFit}
        imageStyle={overlayStyle}
        onSourceChange={(type, data) => {
            changeOverlaySource(type);
            if (type === 'offline') changeOverlayData(data);
            else changeOverlay(data);
        }}
        onCropChange={changeOverlayCrop}
        onTainted={onTainted}
        onSourceLoaded={onSourceLoaded}
        onForceFitChange={changeOverlayFit}
        onImageStyleChange={changeOverlayStyle}
        onMaxSizeExceeded={size => {
            notification.info({
                description: language['error.max-size.description'](size),
                message: language['error.max-size.message'],
            });
        }}
        ratio={CardArtCanvasCoordinateMap.overframeCard.backgroundRatio}
        beforeCropper={null}
        isNotFoundAnError={false}
    >
        {children}
    </StyledImageCropper>;
});