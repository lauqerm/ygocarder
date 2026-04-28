import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { useCard, useLanguage } from 'src/service';
import { ImageCropper, ImageCropperRef } from 'src/component';
import { useShallow } from 'zustand/react/shallow';
import { ImageSourceType, ImageStyle } from 'src/model';
import styled from 'styled-components';
import { notification } from 'antd';
import { isJsonObjectEqual } from 'src/util';

const StyledImageCropper = styled(ImageCropper)`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: start;
    gap: 0;
    --cropper-width: 225px;
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

export type IconImageInputRef = {
    hasImage: () => boolean,
    syncValue: () => void,
    setValue: (value: {
        iconImage?: string,
        iconImageData?: string,
        iconImageSource?: string,
        iconImageCrop?: Partial<ReactCrop.Crop>,
    }) => void,
    isLoading: () => boolean,
};
export type IconImageInput = {
    children?: React.ReactNode,
    onUserChange?: () => void,
} & Pick<ImageCropper, 'receivingCanvas' | 'onTainted' | 'onSourceLoaded' | 'onCropChange'>;
export const IconImageInput = forwardRef<IconImageInputRef, IconImageInput>(({
    children,
    receivingCanvas,
    onUserChange,
    onCropChange,
    onSourceLoaded,
    onTainted,
}, ref) => {
    const language = useLanguage();
    const {
        iconImage, iconImageCrop, iconImageData, iconImageSource, iconImageFit, iconImageStyle,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            iconImage, iconImageCrop, iconImageData, iconImageSource, iconImageFit, iconImageStyle,
        },
        getUpdater,
        setCard,
    }) => ({
        iconImage, iconImageCrop, iconImageData, iconImageSource, iconImageFit, iconImageStyle,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeIconImageSource = useMemo(() => getUpdater('iconImageSource'), [getUpdater]);
    const changeIconImage = useMemo(() => getUpdater('iconImage'), [getUpdater]);
    const changeIconImageData = useMemo(() => getUpdater('iconImageData'), [getUpdater]);
    const changeIconImageFit = useCallback((status: boolean) => setCard(currentCard => {
        return {
            ...currentCard,
            iconImageFit: status,
        };
    }), [setCard]);
    const changeIconImageStyle = useCallback((style: ImageStyle) => setCard(currentCard => {
        return {
            ...currentCard,
            iconImageStyle: { ...currentCard.iconImageStyle, ...style },
        };
    }), [setCard]);
    const changeIconImageCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: ImageSourceType, byUser?: boolean) => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(
            curr => {
                const currentCrop = curr.iconImageCrop;
                if (isJsonObjectEqual(currentCrop, cropInfo)) return curr;
                return {
                    ...curr,
                    iconImageCrop: cropInfo,
                };
            },
            byUser,
        );
    }, [onCropChange, setCard]);

    const intermediateOnCropChange: NonNullable<IconImageInput['onCropChange']> = useCallback((cropInfo, sourceType, byUser) => {
        if (byUser) onUserChange?.();
        changeIconImageCrop(cropInfo, sourceType, byUser);
    }, [changeIconImageCrop, onUserChange]);
    const intermediateOnSourceLoaded: NonNullable<IconImageInput['onSourceLoaded']> = useCallback((crossorigin, byUser) => {
        console.log('🚀 ~ crossorigin, byUser:', crossorigin, byUser);
        if (byUser) onUserChange?.();
        onSourceLoaded?.(crossorigin, byUser);
    }, [onUserChange, onSourceLoaded]);

    useImperativeHandle(ref, () => ({
        isLoading: () => imageCropperRef.current?.isLoading() ?? false,
        hasImage: () => imageCropperRef.current?.hasImage() ?? false,
        syncValue: () => {
            const {
                crop: currentCrop,
                imageData,
                image,
            } = imageCropperRef.current?.getSource() ?? {};
            if (iconImageCrop && !isJsonObjectEqual(currentCrop, iconImageCrop)) {
                if (iconImageSource === 'offline') {
                    if (typeof iconImageData === 'string' && imageData !== iconImageData) {
                        imageCropperRef.current?.forceSource('offline', iconImageData, iconImageCrop);
                    }
                } else {
                    if (typeof iconImage === 'string' && image !== iconImage) {
                        imageCropperRef.current?.forceSource('online', iconImage, iconImageCrop);
                    }
                }
            }
        },
        setValue: ({ iconImage, iconImageCrop, iconImageData, iconImageSource }) => {
            if (iconImageSource === 'offline') {
                if (typeof iconImageData === 'string' && iconImageCrop) {
                    imageCropperRef.current?.forceSource('offline', iconImageData, iconImageCrop);
                }
            } else {
                if (typeof iconImage === 'string' && iconImageCrop) {
                    imageCropperRef.current?.forceSource('online', iconImage, iconImageCrop);
                }
            }
        }
    }));

    return <StyledImageCropper
        ref={imageCropperRef}
        title={language['input.background-image.label']}
        defaultSourceType={iconImageSource}
        defaultInternalSource={iconImageData}
        defaultExternalSource={iconImage}
        defaultCropInfo={iconImageCrop}
        receivingCanvas={receivingCanvas}
        forceFit={iconImageFit}
        imageStyle={iconImageStyle}
        onSourceChange={(type, data) => {
            changeIconImageSource(type);
            if (type === 'offline') changeIconImageData(data);
            else changeIconImage(data);
        }}
        onCropChange={intermediateOnCropChange}
        onTainted={onTainted}
        onSourceLoaded={intermediateOnSourceLoaded}
        onForceFitChange={changeIconImageFit}
        onImageStyleChange={changeIconImageStyle}
        onMaxSizeExceeded={size => {
            notification.info({
                description: language['error.max-size.description'](size),
                message: language['error.max-size.message'],
            });
        }}
        ratio={1}
        beforeCropper={null}
        isNotFoundAnError={false}
    >
        {children}
    </StyledImageCropper>;
});