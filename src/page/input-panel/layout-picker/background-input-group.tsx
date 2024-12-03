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
    hasImage: () => boolean,
    setValue: (value: {
        background?: string,
        backgroundData?: string,
        backgroundSource?: string,
        backgroundCrop?: Partial<ReactCrop.Crop>,
    }) => void,
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
        background, backgroundCrop, backgroundType, backgroundData, backgroundSource,
        isPendulum,
        opacity,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            background, backgroundCrop, backgroundType, backgroundData, backgroundSource,
            isPendulum,
            opacity,
        },
        getUpdater,
        setCard,
    }) => ({
        background, backgroundCrop, backgroundType, backgroundData, backgroundSource,
        isPendulum,
        opacity,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeBackgroundSource = useMemo(() => getUpdater('backgroundSource'), [getUpdater]);
    const changeBackground = useMemo(() => getUpdater('background'), [getUpdater]);
    const changeBackgroundData = useMemo(() => getUpdater('backgroundData'), [getUpdater]);
    const changeBackgroundCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online') => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(curr => ({
            ...curr,
            backgroundCrop: cropInfo,
        }));
    }, [onCropChange, setCard]);

    useImperativeHandle(ref, () => ({
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
        onSourceChange={(type, data) => {
            changeBackgroundSource(type);
            if (type === 'offline') changeBackgroundData(data);
            else changeBackground(data);
        }}
        onCropChange={changeBackgroundCrop}
        onTainted={onTainted}
        onSourceLoaded={onSourceLoaded}
        onMaxSizeExceeded={size => {
            notification.error({
                description: language['error.max-size.description'](size),
                message: language['error.max-size.message'],
            });
        }}
        ratio={getArtCanvasCoordinate(isPendulum, opacity, backgroundType).ratio}
        beforeCropper={null}
    >
        {children}
    </StyledImageCropper>;
});