import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { useCard, useLanguage } from 'src/service';
import { ImageCropper, ImageCropperRef } from 'src/component';
import { useShallow } from 'zustand/react/shallow';
import { getArtCanvasCoordinate } from 'src/model';
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

export type BackgroundInputGroupRef = {
    hasImage: () => boolean,
    setValue: (value: {
        background?: string,
        backgroundData?: string,
        backgroundSource?: string,
        backgroundCrop?: Partial<ReactCrop.Crop>,
    }) => void,
    isLoading: () => boolean,
};
export type BackgroundInputGroup = {
    children?: React.ReactNode,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online') => void,
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
        background, backgroundCrop, backgroundType, backgroundData, backgroundSource, backgroundFit,
        isPendulum, pendulumSize,
        opacity,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            background, backgroundCrop, backgroundType, backgroundData, backgroundSource, backgroundFit,
            isPendulum, pendulumSize,
            opacity,
        },
        getUpdater,
        setCard,
    }) => ({
        background, backgroundCrop, backgroundType, backgroundData, backgroundSource, backgroundFit,
        isPendulum, pendulumSize,
        opacity,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeBackgroundSource = useMemo(() => getUpdater('backgroundSource'), [getUpdater]);
    const changeBackground = useMemo(() => getUpdater('background'), [getUpdater]);
    const changeBackgroundData = useMemo(() => getUpdater('backgroundData'), [getUpdater]);
    const changeBackgroundFit = useCallback((status: boolean) => setCard(currentCard => {
        return {
            ...currentCard,
            backgroundFit: status,
        };
    }), [setCard]);
    const changeBackgroundCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online', byUser?: boolean) => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(
            curr => ({
                ...curr,
                backgroundCrop: cropInfo,
            }),
            byUser,
        );
    }, [onCropChange, setCard]);

    useImperativeHandle(ref, () => ({
        isLoading: () => imageCropperRef.current?.isLoading() ?? false,
        hasImage: () => imageCropperRef.current?.hasImage() ?? false,
        setValue: ({ background, backgroundCrop, backgroundData, backgroundSource }) => {
            if (backgroundSource === 'offline') {
                if (typeof backgroundData === 'string' && backgroundCrop) {
                    imageCropperRef.current?.forceSource('offline', backgroundData, backgroundCrop);
                }
            } else {
                if (typeof background === 'string' && backgroundCrop) {
                    imageCropperRef.current?.forceSource('online', background, backgroundCrop);
                }
            }
        }
    }));

    return <StyledImageCropper
        ref={imageCropperRef}
        title={language['input.background-image.label']}
        backgroundColor={backgroundColor}
        defaultSourceType={backgroundSource}
        defaultInternalSource={backgroundData}
        defaultExternalSource={background}
        defaultCropInfo={backgroundCrop}
        receivingCanvas={receivingCanvas}
        forceFit={backgroundFit}
        onSourceChange={(type, data) => {
            changeBackgroundSource(type);
            if (type === 'offline') changeBackgroundData(data);
            else changeBackground(data);
        }}
        onCropChange={changeBackgroundCrop}
        onTainted={onTainted}
        onSourceLoaded={onSourceLoaded}
        onForceFitChange={changeBackgroundFit}
        onMaxSizeExceeded={size => {
            notification.error({
                description: language['error.max-size.description'](size),
                message: language['error.max-size.message'],
            });
        }}
        ratio={getArtCanvasCoordinate(isPendulum, opacity, backgroundType, pendulumSize).backgroundRatio}
        beforeCropper={null}
    >
        {children}
    </StyledImageCropper>;
});