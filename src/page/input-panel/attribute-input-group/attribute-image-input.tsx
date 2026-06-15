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
    grid-template-columns: 1fr max-content;
    align-items: start;
    --cropper-width: 225px;
    .card-image-source-input {
        display: flex;
        flex-direction: column;
        .online-image-tip {
            text-align: center;
        }
    }
    .card-image-source-input-container {
        margin-bottom: var(--spacing-sm);
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

export type AttributeImageInputRef = {
    hasImage: () => boolean,
    syncValue: () => void,
    setValue: (value: {
        attributeImage?: string,
        attributeImageData?: string,
        attributeImageSource?: string,
        attributeImageCrop?: Partial<ReactCrop.Crop>,
    }) => void,
    isLoading: () => boolean,
};
export type AttributeImageInput = {
    children?: React.ReactNode,
    onUserChange?: () => void,
} & Pick<ImageCropper, 'receivingCanvas' | 'onTainted' | 'onSourceLoaded' | 'onCropChange'>;
export const AttributeImageInput = forwardRef<AttributeImageInputRef, AttributeImageInput>(({
    children,
    receivingCanvas,
    onUserChange,
    onCropChange,
    onSourceLoaded,
    onTainted,
}, ref) => {
    const language = useLanguage();
    const {
        attributeImage, attributeImageCrop, attributeImageData, attributeImageSource, attributeImageFit, attributeImageStyle,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            attributeImage, attributeImageCrop, attributeImageData, attributeImageSource, attributeImageFit, attributeImageStyle,
        },
        getUpdater,
        setCard,
    }) => ({
        attributeImage, attributeImageCrop, attributeImageData, attributeImageSource, attributeImageFit, attributeImageStyle,
        getUpdater,
        setCard,
    })));
    const imageCropperRef = useRef<ImageCropperRef>(null);

    const changeAttributeImageSource = useMemo(() => getUpdater('attributeImageSource'), [getUpdater]);
    const changeAttributeImage = useMemo(() => getUpdater('attributeImage'), [getUpdater]);
    const changeAttributeImageData = useMemo(() => getUpdater('attributeImageData'), [getUpdater]);
    const changeAttributeImageFit = useCallback((status: boolean) => setCard(currentCard => {
        return {
            ...currentCard,
            attributeImageFit: status,
        };
    }), [setCard]);
    const changeAttributeImageStyle = useCallback((style: ImageStyle) => setCard(currentCard => {
        return {
            ...currentCard,
            attributeImageStyle: { ...currentCard.attributeImageStyle, ...style },
        };
    }), [setCard]);
    const changeAttributeImageCrop = useCallback((cropInfo: Partial<ReactCrop.Crop>, sourceType: ImageSourceType, byUser?: boolean) => {
        onCropChange?.(cropInfo, sourceType);
        if (cropInfo) setCard(
            curr => {
                const currentCrop = curr.attributeImageCrop;
                if (isJsonObjectEqual(currentCrop, cropInfo)) return curr;
                return {
                    ...curr,
                    attributeImageCrop: cropInfo,
                };
            },
            byUser,
        );
    }, [onCropChange, setCard]);

    const intermediateOnCropChange: NonNullable<AttributeImageInput['onCropChange']> = useCallback((cropInfo, sourceType, byUser) => {
        if (byUser) onUserChange?.();
        changeAttributeImageCrop(cropInfo, sourceType, byUser);
    }, [changeAttributeImageCrop, onUserChange]);
    const intermediateOnSourceLoaded: NonNullable<AttributeImageInput['onSourceLoaded']> = useCallback((crossorigin, byUser) => {
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
            if (attributeImageCrop && !isJsonObjectEqual(currentCrop, attributeImageCrop)) {
                if (attributeImageSource === 'offline') {
                    if (typeof attributeImageData === 'string' && imageData !== attributeImageData) {
                        imageCropperRef.current?.forceSource('offline', attributeImageData, attributeImageCrop);
                    }
                } else {
                    if (typeof attributeImage === 'string' && image !== attributeImage) {
                        imageCropperRef.current?.forceSource('online', attributeImage, attributeImageCrop);
                    }
                }
            }
        },
        setValue: ({ attributeImage, attributeImageCrop, attributeImageData, attributeImageSource }) => {
            if (attributeImageSource === 'offline') {
                if (typeof attributeImageData === 'string' && attributeImageCrop) {
                    imageCropperRef.current?.forceSource('offline', attributeImageData, attributeImageCrop);
                }
            } else {
                if (typeof attributeImage === 'string' && attributeImageCrop) {
                    imageCropperRef.current?.forceSource('online', attributeImage, attributeImageCrop);
                }
            }
        }
    }));

    return <StyledImageCropper
        ref={imageCropperRef}
        title={language['input.background-image.label']}
        defaultSourceType={attributeImageSource}
        defaultInternalSource={attributeImageData}
        defaultExternalSource={attributeImage}
        defaultCropInfo={attributeImageCrop}
        receivingCanvas={receivingCanvas}
        disabled={true}
        forceFit={attributeImageFit}
        imageStyle={attributeImageStyle}
        onSourceChange={(type, data) => {
            changeAttributeImageSource(type);
            if (type === 'offline') changeAttributeImageData(data);
            else changeAttributeImage(data);
        }}
        onCropChange={intermediateOnCropChange}
        onTainted={onTainted}
        onSourceLoaded={intermediateOnSourceLoaded}
        onForceFitChange={changeAttributeImageFit}
        onImageStyleChange={changeAttributeImageStyle}
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