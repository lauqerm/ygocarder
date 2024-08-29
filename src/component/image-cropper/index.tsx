import { Input, Radio, Tooltip } from 'antd';
import React, { useState, useCallback, useRef, useEffect, useImperativeHandle } from 'react';
import ReactCrop from 'react-image-crop';
import { DownloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Loading } from '../loading';
import { IconButton } from '../icon-button';
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
const normalizeCrop = (crop: Partial<ReactCrop.Crop>, image: HTMLImageElement | null, ratio: number) => {
    if (!image) return crop;
    const { width: cropWidth, height: cropHeight, x = 0, y = 0 } = crop;
    if (x < 0) return { ...crop, x: 0 };
    if (y < 0) return { ...crop, y: 0 };
    const { naturalHeight, naturalWidth } = image;
    const width = cropWidth ?? 0;
    const height = cropHeight ?? 0;
    /** Kiểm tra ratio hiện tại, nếu width và height đã ở ratio chuẩn, ta không tính toán lại để tránh tích lũy sai số */
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
    setRatio: (ratio: number) => void,
    forceExternalSource: (artLink: string, cropInfo: Partial<ReactCrop.Crop>) => void,
}
export type ImageCropper = {
    title?: React.ReactNode,
    backgroundColor?: string,
    className?: string,
    defaultExternalSource?: string,
    receivingCanvas?: HTMLCanvasElement | null,
    children?: React.ReactNode,
    beforeCropper?: React.ReactNode,
    defaultCropInfo: Partial<ReactCrop.Crop>,
    ratio: number,
    onSourceChange?: (source: string) => void,
    onSourceLoaded?: () => void,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
    onTainted: () => void,
}
export const ImageCropper = React.forwardRef<ImageCropperRef, ImageCropper>(({
    title = 'Card Art',
    backgroundColor,
    className,
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
}: ImageCropper, forwardedRef) => {
    const [
        crossorigin,
        // setCrossOrigin,
    ] = useState<'anonymous' | 'use-credentials' | undefined>('anonymous');
    const [redrawSignal, setRedrawSignal] = useState(0);
    // const [ratio, setRatio] = useState(defaultRatio);
    const [sourceType, setSourceType] = useState<'internal' | 'external'>('external');
    const [inputMode, setInputMode] = useState<'internal' | 'external'>('external');
    const [internalSource, setInternalSource] = useState('');
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
            setLoading(true);
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                if (typeof reader.result === 'string') {
                    setInternalSource(reader.result);
                    setSourceType('internal');
                    setInputMode('internal');
                }
            });
            reader.readAsDataURL(e.target.files[0]);
        } else alert('No file uploaded');
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
            }, 250);
        }
    }, [onSourceLoaded, ratio]);

    const applyOnlineSource = (e: React.ChangeEvent<HTMLInputElement>) => {
        const source = e.target.value;

        setLoading(true);
        setSourceType('external');
        setInputMode('external');
        onSourceChange(source);
        setExternalSource(source);
    };

    useEffect(() => {
        const image = imgRef.current;
        if (!completedCrop || !receivingCanvas || !image) return;

        const { aspect: ratio } = completedCrop;

        /** Upsize canvas để nâng cao chất lượng ảnh */
        receivingCanvas.style.transform = 'scale(2)';
        const ctx = receivingCanvas.getContext('2d');
        if (!ctx || typeof ratio !== 'number' || ratio <= 0) return;

        const { naturalHeight, naturalWidth } = image;
        const zoomX = naturalWidth / image.width;
        const zoomY = naturalHeight / image.height;
        const cropUnit = completedCrop.unit ?? 'px';
        const pixelRatio = window.devicePixelRatio;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        /** Làm mượt thông số crop để image không bị vỡ.
         * Ta dùng floor để an toàn, tránh tích tụ sai số
         */
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
        /** Fit crop frame vào ảnh nếu nó bị tràn (ví dụ do thay đổi về ratio). Ta cố gắng để crop frame lớn nhất có thể. */
        if (
            // Tràn kích thước
            (drawCoordinateX + drawWidth) > naturalWidth
            || (drawCoordinateY + drawHeight) > naturalHeight
            // Tràn lề
            || drawCoordinateX < 0
            || drawCoordinateY < 0
            // Tràn tỷ lệ
            || Math.abs((expectedDrawWidth - drawWidth) / drawWidth) > 0.01
            || Math.abs((expectedDrawHeight - drawHeight) / drawHeight) > 0.01
        ) {
            /** Xác định chiều mà frame có thể extend tối đa */
            const prominentSide = ratio * naturalHeight > naturalWidth ? 'width' : 'height';
            /** Canh giữa lại crop frame */
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
        if (sourceType === 'internal' && (internalSource ?? '').length <= 0) { }
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
        setRatio: ratio => {
            // setRatio(ratio);
            // setRedrawSignal(cur => cur + 1);
        },
        forceExternalSource: (source, cropInfo) => {
            const currentSource = sourceType === 'internal' ? internalSource : externalSource;
            if (currentSource !== source) {
                setLoading(true);
                setSourceType('external');
                setInputMode('external');
                onSourceChange(source);
                setExternalSource(source);
            }
            // setRatio(cropInfo.aspect ?? 1);
            setMigrated(cropInfo.unit === '%');
            pendingId.current += 1;
            pendingCrop.current = {
                source,
                crop: cropInfo,
            };
            // setCrop(cropInfo);
            // setCompletedCrop(cropInfo);
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
                                tooltipProps={{ overlay: isDownloadable ? 'Download cropped image' : 'Image is not loaded yet' }}
                                onClick={() => (isDownloadable && receivingCanvas)
                                        && generateDownload(receivingCanvas, completedCrop)}
                            />
                        </span>
                        <Radio.Group
                            className="card-image-source-type-input"
                            onChange={e => {
                                const value = e.target.value;
                                setInputMode(value);
                                if (
                                    ((internalSource ?? '').length > 0 && value === 'internal')
                                    || ((externalSource ?? '').length > 0 && value === 'external')
                                ) setSourceType(value);
                            }}
                            value={inputMode}
                        >
                            <Radio.Button value={'external'} checked={inputMode === 'external'}>
                                Online
                            </Radio.Button>
                            <Tooltip title={<div className="image-warning">
                                Card data with offline image cannot be exported or auto-saved.
                            </div>}>
                                <Radio.Button value={'internal'} checked={inputMode === 'internal'}>
                                    Offline <ExclamationCircleOutlined />
                                </Radio.Button>
                            </Tooltip>
                        </Radio.Group>
                    </div>
                    <div className={['card-image-input', inputMode === 'external' ? '' : 'input-inactive'].join(' ')}>
                        <Input key="key"
                            placeholder="Image link"
                            value={externalSource}
                            onChange={applyOnlineSource}
                            maxLength={512}
                            allowClear
                        />
                        {error
                            ? <div className="online-image-tip image-warning">
                                Image not found.
                            </div>
                            : <div className="online-image-tip">
                                You may use popular hosts such as imgur.
                            </div>}
                    </div>
                    <div className={['card-image-input', inputMode === 'internal' ? '' : 'input-inactive'].join(' ')}>
                        <Input type="file" accept="image/*" onChange={applyOfflineSource} />
                        <hr />
                        Offline image cannot be exported or auto-saved.
                    </div>
                </div>
            </div>
            {beforeCropper}
            <div className="card-cropper">
                {isLoading && <Loading.FullView />}
                <ReactCrop key={`${sourceType}-${isMigrated}-${redrawSignal}`}
                    src={sourceType === 'internal' ? internalSource : externalSource}
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
                        if (sourceType === 'external' && (externalSource ?? '') === '' && receivingCanvas) {
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
                    onChange={(cropData, percentCropData) => {
                        if (pendingCrop.current.crop) return;
                        const image = imgRef.current;

                        if (isMigrated) {
                            setCrop(cur => {
                                return {
                                    ...cur,
                                    current: normalizeCrop(percentCropData, image, ratio)
                                };
                            });
                        }
                        /** Ban đầu cropData có unit là px, nhưng sau đó convert qua percent để đảm bảo có thể reapply
                         * mà không phụ thuộc vào size crop component.
                         * 
                         * Ta có một lần migrate ở đây, ban đầu crop component có max height là 300 và max width là 375,
                         * max height giờ đã được tăng lên 400, nghĩa là các image trước đó bị giới hạn 300px height sẽ
                         * phải thích nghi lại. Nếu ratio đã là percent thì nghĩa là image đã được thích nghi.
                        */
                        else {
                            setCrop(cur => {
                                if (!image) return { ...cur, current: cropData };
                                const oldHeightToWidthRatio = 300 / 375;
                                const newHeightToWidthRatio = 400 / 300;
                                const { width: imageWidth, height: imageHeight } = image;
                                const isHeightRestricted = (imageHeight / imageWidth) >= oldHeightToWidthRatio;

                                if (!isHeightRestricted) return { ...cur, current: percentCropData };
                                const newX = Math.min((cropData.x ?? 0) * newHeightToWidthRatio, imageWidth);
                                const newY = Math.min((cropData.y ?? 0) * newHeightToWidthRatio, imageHeight);
                                const newWidth = Math.min((cropData.width ?? 0) * newHeightToWidthRatio, imageWidth);

                                return {
                                    ...cur,
                                    current: {
                                        unit: '%',
                                        x: newX / imageWidth * 100,
                                        y: newY / imageHeight * 100,
                                        width: newWidth / imageWidth * 100,
                                        height: newWidth / (ratio ?? 1) / imageHeight * 100,
                                        aspect: ratio,
                                    },
                                };
                            });
                            setMigrated(true);
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
