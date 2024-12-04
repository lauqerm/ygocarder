import { Input, Radio, Tooltip } from 'antd';
import React, { useState, useCallback, useRef, useEffect, useImperativeHandle } from 'react';
import ReactCrop from 'react-image-crop';
import { DownloadOutlined } from '@ant-design/icons';
import { Loading } from '../loading';
import { IconButton } from '../icon-button';
import { useLanguage } from 'src/service';
import 'react-image-crop/dist/ReactCrop.css';
import './image-cropper.scss';

function generateDownload(canvas: HTMLCanvasElement | null, crop: ReactCrop.Crop | null) {
    if (!crop || !canvas) return;
    canvas.toBlob(
        (blob) => {
            if (blob !== null) {
                const previewUrl = window.URL.createObjectURL(blob);

                const anchor = document.createElement('a');
                anchor.download = 'crop-preview.png';
                anchor.href = URL.createObjectURL(blob);
                anchor.click();

                window.URL.revokeObjectURL(previewUrl);
            }
        },
        'image/png',
        1
    );
}

/**
 * Historic reason: cropData initially used `px` as unit, but this create a hard link between cropData and size of the cropper (NOT the actual image). This means the cropData only match a specific cropper size, and will become incorrect if the size change (which is happening when we got to v2).
 * 
 * So from now on every cropData with `px` unit in it (old data) will be converted into the new one that use `%` data, which is more tricky to calculate but remove the link entirely.
 */
const normalizeCrop = (crop: Partial<ReactCrop.Crop>, image: HTMLImageElement | null, ratio: number) => {
    if (!image) return crop;
    const { width: cropWidth, height: cropHeight, x = 0, y = 0, unit } = crop;

    /** Migrate old unit */
    if (unit === 'px') {
        const oldHeightToWidthRatio = 300 / 375;
        const newHeightToWidthRatio = 400 / 300;
        const { width: imageWidth, height: imageHeight } = image;

        const isHeightRestricted = (imageHeight / imageWidth) >= oldHeightToWidthRatio;
        const scaleRatio = isHeightRestricted ? newHeightToWidthRatio : 1;
        const nextX = Math.min((x ?? 0) * scaleRatio, imageWidth);
        const nextY = Math.min((y ?? 0) * scaleRatio, imageHeight);
        const newWidth = Math.min((cropWidth ?? 0) * scaleRatio, imageWidth);

        return {
            unit: '%' as 'px' | '%',
            x: nextX / imageWidth * 100,
            y: nextY / imageHeight * 100,
            width: newWidth / imageWidth * 100,
            height: newWidth / (ratio ?? 1) / imageHeight * 100,
            aspect: ratio,
        };
    }

    if (x < 0) return { ...crop, x: 0 };
    if (y < 0) return { ...crop, y: 0 };
    const { naturalHeight, naturalWidth } = image;
    const width = cropWidth ?? 0;
    const height = cropHeight ?? 0;
    /** Avoid recalculate if current ratio is in acceptable limit, so we don't cascade calculation error */
    const acceptableError = (naturalHeight > naturalWidth ? naturalHeight : naturalWidth) * 0.05;
    const isRatioAcceptable = Math.abs(height * naturalHeight * ratio - width * naturalWidth) <= acceptableError;

    return {
        ...crop,
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y,
        height: isRatioAcceptable
            ? height
            : width * image.naturalWidth /** Restore original size */
                / ratio /** Get height with corresponding aspect ratio */
                / image.naturalHeight /** Convert back to percent */,
        aspect: ratio,
    };
};

export type ImageCropperRef = {
    hasImage: () => boolean,
    forceSource: (type: 'online' | 'offline', artLinkOrData: string, cropInfo: Partial<ReactCrop.Crop>) => void,
}
export type ImageCropper = {
    title?: React.ReactNode,
    backgroundColor?: string,
    className?: string,
    defaultSourceType?: string,
    defaultInternalSource?: string,
    defaultExternalSource?: string,
    receivingCanvas?: HTMLCanvasElement | null,
    children?: React.ReactNode,
    beforeCropper?: React.ReactNode,
    defaultCropInfo: Partial<ReactCrop.Crop>,
    ratio: number,
    onSourceChange?: (sourceType: 'offline' | 'online', source: string) => void,
    onSourceLoaded?: () => void,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'offline' | 'online') => void,
    onTainted: () => void,
    onMaxSizeExceeded: (size: number) => void,
}
export const ImageCropper = React.forwardRef<ImageCropperRef, ImageCropper>(({
    title,
    backgroundColor,
    className,
    defaultSourceType,
    defaultInternalSource = '',
    defaultExternalSource = '',
    receivingCanvas,
    children,
    beforeCropper,
    defaultCropInfo,
    ratio,
    onSourceLoaded = () => { },
    onSourceChange = () => { },
    onCropChange = () => { },
    onTainted = () => { },
    onMaxSizeExceeded = () => { },
}: ImageCropper, forwardedRef) => {
    const normalizedDefaultSource = defaultSourceType === 'offline'
        ? 'offline'
        : 'online';
    const language = useLanguage();
    const fileInputRef = useRef<Input>(null);
    const [
        crossorigin,
        // setCrossOrigin,
    ] = useState<'anonymous' | 'use-credentials' | undefined>('anonymous');
    const [redrawSignal, setRedrawSignal] = useState(0);
    const [sourceType, setSourceType] = useState<'offline' | 'online'>(normalizedDefaultSource);
    const [inputMode, setInputMode] = useState<'offline' | 'online'>(normalizedDefaultSource);
    const [internalSource, setInternalSource] = useState(defaultInternalSource);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [externalSource, setExternalSource] = useState(defaultExternalSource);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [crop, setCrop] = useState({
        current: defaultCropInfo,
        completed: null as ReactCrop.Crop | null,
    });
    // const [completedCrop, setCompletedCrop] = useState<ReactCrop.Crop | null>(null);
    const [isMigrated, setMigrated] = useState(defaultCropInfo.unit === '%');
    const {
        current: currentCrop,
        completed: completedCrop,
    } = crop;

    const applyOfflineSource = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const targetFile = e.target.files[0];
            const maxFileSize = 4;

            if (targetFile.size < maxFileSize * 1024 * 1024) {
                setLoading(true);
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    if (typeof reader.result === 'string') {
                        setInternalSource(reader.result);
                        setSourceType('offline');
                        setInputMode('offline');
                        onSourceChange('offline', reader.result);
                        setLoading(false);
                    }
                });
                reader.readAsDataURL(targetFile);
            } else {
                onMaxSizeExceeded(maxFileSize);
            }
        } else alert(language['image-cropper.not-found-warning']);
    };

    const pendingCrop = useRef({
        source: '',
        crop: null as Partial<ReactCrop.Crop> | null,
    });
    const onLoad = useCallback((img: HTMLImageElement) => {
        setLoading(false);
        setError(null);
        onSourceLoaded();
        imgRef.current = img;
        /** @todo Check if we really need timeout delay here */
        if (img.src === pendingCrop.current.source && pendingCrop.current.crop) {
            const internalId = pendingId.current;
            setTimeout(() => {
                if (internalId !== pendingId.current || !pendingCrop.current.crop) return;
                const normalizedCrop = normalizeCrop(pendingCrop.current.crop, img, ratio);
                setCrop({
                    completed: normalizedCrop,
                    current: normalizedCrop,
                });
                setMigrated(true);
                pendingCrop.current = {
                    source: '',
                    crop: null,
                };
            }, 250);
        } else {
            setTimeout(() => {
                setCrop(cur => {
                    const normalizedCrop = normalizeCrop(cur.current, img, ratio);

                    return {
                        completed: normalizedCrop,
                        current: normalizedCrop,
                    };
                });
                setMigrated(true);
            }, 250);
        }
    }, [onSourceLoaded, ratio]);

    const applyOnlineSource = (e: React.ChangeEvent<HTMLInputElement>) => {
        const source = e.target.value;

        setLoading(true);
        setSourceType('online');
        setInputMode('online');
        onSourceChange('online', source);
        setExternalSource(source);
    };

    useEffect(() => {
        const image = imgRef.current;
        if (!completedCrop || !receivingCanvas || !image) return;

        const { aspect: ratio } = completedCrop;

        /** Increase image size for a bit */
        receivingCanvas.style.transform = 'scale(2)';
        const ctx = receivingCanvas.getContext('2d');
        if (!ctx || typeof ratio !== 'number' || ratio <= 0) return;

        const { naturalHeight, naturalWidth } = image;
        const zoomX = naturalWidth / image.width;
        const zoomY = naturalHeight / image.height;
        const cropUnit = completedCrop.unit ?? 'px';
        const pixelRatio = window.devicePixelRatio;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        /** Snap sizing into whole pixel for a more crispy image. */
        let expectedDrawWidth = Math.floor((completedCrop.width ?? 0) * (cropUnit === 'px' ? zoomX : naturalWidth / 100));
        let drawWidth = Math.min(naturalWidth, expectedDrawWidth);
        let expectedDrawHeight = Math.floor(expectedDrawWidth / ratio);
        let drawHeight = Math.min(naturalHeight, expectedDrawHeight);
        let drawCoordinateX = Math.min(
            naturalWidth,
            Math.floor((completedCrop.x ?? 0) * (cropUnit === 'px' ? zoomX : naturalWidth / 100))
        );
        let drawCoordinateY = Math.min(
            naturalHeight,
            Math.floor((completedCrop.y ?? 0) * (cropUnit === 'px' ? zoomY : naturalHeight / 100))
        );
        ctx.imageSmoothingQuality = 'high';
        if (drawWidth <= 0 || drawHeight <= 0) return;

        let fitCropData: Partial<ReactCrop.Crop> | undefined = undefined;
        /** If the crop section is overflowed (mainly because change of ratio), we try to snap it back to the cropper. */
        if (
            // Size overflow
            (drawCoordinateX + drawWidth) > naturalWidth
            || (drawCoordinateY + drawHeight) > naturalHeight
            // Edge overflow
            || drawCoordinateX < 0
            || drawCoordinateY < 0
            // Ratio overflow
            || Math.abs((expectedDrawWidth - drawWidth) / drawWidth) > 0.01
            || Math.abs((expectedDrawHeight - drawHeight) / drawHeight) > 0.01
        ) {
            /** Try to maximize new crop section's area */
            const prominentSide = ratio * naturalHeight > naturalWidth ? 'width' : 'height';
            /**
             * Automatically center current crop section.
             * @todo For the best UX, it should actually be proportional based on the x and y before the snap.
             * */
            if (prominentSide === 'width') {
                drawWidth = naturalWidth;
                drawHeight = drawWidth / ratio;
                drawCoordinateX = 0;
                drawCoordinateY = (naturalHeight - drawHeight) / 2;
                fitCropData = {
                    unit: '%',
                    aspect: ratio,
                    height: drawHeight / naturalHeight * 100,
                    width: drawWidth / naturalWidth * 100,
                    x: 0,
                    y: drawCoordinateY / naturalHeight * 100,
                };
            } else {
                drawWidth = naturalHeight * ratio;
                drawHeight = naturalHeight;
                drawCoordinateX = (naturalWidth - drawWidth) / 2;
                drawCoordinateY = 0;
                fitCropData = {
                    unit: '%',
                    aspect: ratio,
                    height: drawHeight / naturalHeight * 100,
                    width: drawWidth / naturalWidth * 100,
                    x: drawCoordinateX / naturalWidth * 100,
                    y: 0,
                };
            }
        }
        // const boundingWidth = Math.ceil(receivingCanvas.getBoundingClientRect().width);
        // const boundingHeight = Math.ceil(receivingCanvas.getBoundingClientRect().height);

        receivingCanvas.width = (drawWidth ?? 0);
        receivingCanvas.height = (drawHeight ?? 0);

        ctx.drawImage(
            image,
            drawCoordinateX,
            drawCoordinateY,
            drawWidth,
            drawHeight,
            0,
            0,
            drawWidth,
            drawHeight,
        );
        if (sourceType === 'offline' && (internalSource ?? '').length <= 0) { }
        else if (ratio === completedCrop.aspect) {
            onCropChange(completedCrop, sourceType);
        }
        if (fitCropData) {
            setCrop(cur => ({ ...cur, current: fitCropData }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completedCrop, receivingCanvas, redrawSignal]);

    useEffect(() => {
        setCrop(cur => {
            if (imgRef.current != null && cur.current) {
                const newValue = normalizeCrop(cur.current, imgRef.current, ratio);
                return {
                    current: newValue,
                    completed: newValue,
                };
            }
            return cur;
        });
    }, [ratio]);

    const pendingId = useRef(0);
    useImperativeHandle(forwardedRef, () => ({
        hasImage: () => (typeof internalSource === 'string' && internalSource.length > 0 && sourceType === 'offline')
            || (typeof externalSource === 'string' && externalSource.length > 0 && sourceType === 'online'),
        forceSource: (type: 'online' | 'offline', source, cropInfo) => {
            const currentSource = sourceType === 'offline' ? internalSource : externalSource;
            if (currentSource !== source) {
                setLoading(true);
                setSourceType(type);
                setInputMode(type);
                onSourceChange(type, source);
                if (type === 'offline') {
                    setInternalSource(source);
                } else setExternalSource(source);
            }
            setMigrated(cropInfo.unit === '%');
            pendingId.current += 1;
            pendingCrop.current = {
                source,
                crop: cropInfo,
            };
            setRedrawSignal(cur => cur + 1);
        }
    }));

    const isDownloadable = receivingCanvas && !isLoading && completedCrop?.width && completedCrop?.height;
    return (
        <div className={`card-image-cropper ${className}`}>
            <div className="card-image-source-input">
                {children}
                <div className="card-image-source-input-container">
                    <div className="card-image-source-input-title">
                        <span className="field-title">
                            {title} <IconButton
                                Icon={DownloadOutlined}
                                containerProps={{ className: isDownloadable ? '' : 'disabled' }}
                                tooltipProps={{ overlay: isDownloadable
                                    ? language['image-cropper.download']
                                    : language['image-cropper.no-download'] }}
                                onClick={() => (isDownloadable && receivingCanvas) && generateDownload(receivingCanvas, completedCrop)}
                            />
                        </span>
                        <Radio.Group
                            className="card-image-source-type-input"
                            onChange={e => {
                                const value = e.target.value;
                                setInputMode(value);
                                if (
                                    ((internalSource ?? '').length > 0 && value === 'offline')
                                    || ((externalSource ?? '').length > 0 && value === 'online')
                                ) {
                                    setSourceType(value);
                                    if (value === 'offline') {
                                        onSourceChange('offline', internalSource);
                                    } else {
                                        onSourceChange('online', externalSource);
                                    }
                                }
                            }}
                            value={inputMode}
                        >
                            <Radio.Button value={'online'} checked={inputMode === 'online'}>
                                {language['image-cropper.source.online.tooltip']}
                            </Radio.Button>
                            <Tooltip title={<div className="image-warning">
                                {language['image-cropper.offline-warning']}
                            </div>}>
                                <Radio.Button value={'offline'} checked={inputMode === 'offline'}>
                                    {language['image-cropper.source.offline.tooltip']}
                                </Radio.Button>
                            </Tooltip>
                        </Radio.Group>
                    </div>
                    <div className={['card-image-input', inputMode === 'online' ? '' : 'input-inactive'].join(' ')}>
                        <Input key="key"
                            placeholder={language['image-cropper.placeholder']}
                            value={externalSource}
                            onChange={applyOnlineSource}
                            maxLength={512}
                            allowClear
                        />
                        {error
                            ? <div className="online-image-tip image-warning">
                                {language['image-cropper.not-found-warning']}
                            </div>
                            : <div className="online-image-tip">
                                {language['image-cropper.online-tip']}
                            </div>}
                    </div>
                    <div className={['card-image-input', inputMode === 'offline' ? '' : 'input-inactive'].join(' ')}>
                        <Input ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={applyOfflineSource}
                            onClick={() => fileInputRef.current?.setValue('')}
                        />
                        <hr />
                        {language['image-cropper.offline-warning']}
                    </div>
                </div>
            </div>
            {beforeCropper}
            <div className="card-cropper">
                {isLoading && <Loading.FullView />}
                <ReactCrop key={`${sourceType}-${isMigrated}-${redrawSignal}`}
                    src={sourceType === 'offline' ? internalSource : externalSource}
                    imageStyle={backgroundColor
                        ? {
                            backgroundColor,
                        }
                        : {
                            backgroundImage: `url("${process.env.PUBLIC_URL}/asset/image/texture/transparent-tile.png")`
                        }}
                    onImageLoaded={onLoad}
                    onImageError={() => {
                        pendingCrop.current = {
                            source: '',
                            crop: null,
                        };
                        setError('Image error');
                        setLoading(false);
                        if (!receivingCanvas) onTainted();
                        else if (
                            (sourceType === 'online' && (externalSource ?? '') === '')
                            || (sourceType === 'offline' && (internalSource ?? '') === '')
                        ) {
                            const { width, height } = receivingCanvas;
                            const ctx = receivingCanvas.getContext('2d');

                            ctx?.clearRect(0, 0, width, height);
                            if (completedCrop) onCropChange(completedCrop, sourceType);
                            onSourceLoaded();
                        } else {
                            onTainted();
                        }
                        // setCrossOrigin(undefined);
                    }}
                    crop={currentCrop}
                    onChange={(pixelCropData, percentCropData) => {
                        const image = imgRef.current;
                        if (pendingCrop.current.crop) return;
                        if (!isMigrated) {
                            setMigrated(true);
                            setCrop(cur => {
                                return {
                                    ...cur,
                                    current: normalizeCrop(pixelCropData, image, ratio)
                                };
                            });
                        } else {
                            setCrop(cur => {
                                return {
                                    ...cur,
                                    current: normalizeCrop(percentCropData, image, ratio)
                                };
                            });
                        }
                    }}
                    onComplete={(_, percentData) => {
                        if (!pendingCrop.current.crop) setCrop(cur => ({ ...cur, completed: percentData }));
                    }}
                    ruleOfThirds={true}
                    crossorigin={crossorigin}
                />
            </div>
        </div>
    );
});
