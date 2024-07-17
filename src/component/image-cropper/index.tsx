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
                anchor.download = 'cropPreview.png';
                anchor.href = URL.createObjectURL(blob);
                anchor.click();

                window.URL.revokeObjectURL(previewUrl);
            }
        },
        'image/png',
        1
    );
}

export type ImageCropperRef = {
    forceExternalSource: (pictureLink: string, cropInfo: Partial<ReactCrop.Crop>) => void,
}
export type ImageCropper = {
    noRedrawNumber?: number,
    defaultExternalSource?: string,
    previewCanvasRef?: HTMLCanvasElement | null,
    children?: React.ReactNode,
    beforeCropper?: React.ReactNode,
    ratio?: number,
    defaultCropInfo: Partial<ReactCrop.Crop>,
    onSourceChange?: (source: string) => void,
    onSourceLoaded?: () => void,
    onCropChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
    onTainted: () => void,
}
export const ImageCropper = React.forwardRef<ImageCropperRef, ImageCropper>(({
    noRedrawNumber = 0,
    defaultExternalSource = '',
    previewCanvasRef,
    children,
    beforeCropper,
    ratio = 1,
    defaultCropInfo,
    onSourceLoaded = () => { },
    onSourceChange = () => { },
    onCropChange = () => { },
    onTainted = () => { },
}: ImageCropper, forwardedRef) => {
    const [
        crossorigin,
        // setCrossOrigin,
    ] = useState<'anonymous' | 'use-credentials' | undefined>('anonymous');
    const [sourceType, setSourceType] = useState<'internal' | 'external'>('external');
    const [inputMode, setInputMode] = useState<'internal' | 'external'>('external');
    const [internalSource, setInternalSource] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [externalSource, setExternalSource] = useState(defaultExternalSource);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [crop, setCrop] = useState<Partial<ReactCrop.Crop>>(defaultCropInfo);
    const [completedCrop, setCompletedCrop] = useState<ReactCrop.Crop | null>(null);
    const [isMigrated, setMigrated] = useState(defaultCropInfo.unit === '%');

    const applyInternalSource = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const onLoad = useCallback((img: HTMLImageElement) => {
        setLoading(false);
        setError(null);
        onSourceLoaded();
        imgRef.current = img;
    }, [onSourceLoaded]);

    const applyExternalSource = (e: React.ChangeEvent<HTMLInputElement>) => {
        const source = e.target.value;

        setLoading(true);
        setSourceType('external');
        setInputMode('external');
        onSourceChange(source);
        setExternalSource(source);
    };

    useEffect(() => {
        const image = imgRef.current;
        const canvas = previewCanvasRef;
        if (!completedCrop || !canvas || !image) return;

        /** Upsize canvas để nâng cao chất lượng ảnh */
        canvas.style.transform = 'scale(2)';
        const ctx = canvas.getContext('2d');
        if (!ctx || ratio <= 0) return;

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
        // const boundingWidth = Math.ceil(canvas.getBoundingClientRect().width);
        // const boundingHeight = Math.ceil(canvas.getBoundingClientRect().height);

        canvas.width = (drawWidth ?? 0) * pixelRatio;
        canvas.height = (drawHeight ?? 0) * pixelRatio;

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
            setCrop(fitCropData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ratio, completedCrop, previewCanvasRef, noRedrawNumber]);

    useImperativeHandle(forwardedRef, () => ({
        forceExternalSource: (source, cropInfo) => {
            const inUseSource = sourceType === 'internal' ? internalSource : externalSource;
            if (inUseSource !== source) {
                setLoading(true);
                setSourceType('external');
                setInputMode('external');
                onSourceChange(source);
                setExternalSource(source);
            }
            setMigrated(cropInfo.unit === '%');
            setCrop(cropInfo);
        }
    }));

    const isDownloadable = previewCanvasRef && !isLoading && completedCrop?.width && completedCrop?.height;
    return (
        <div className="card-image-cropper">
            <div className="card-image-source-input">
                {children}
                <div className="card-image-source-input-container">
                    <div className="card-image-source-input-title">
                        <span className="field-title">
                            Card Art <IconButton
                                Icon={DownloadOutlined}
                                containerProps={{ className: isDownloadable ? '' : 'disabled' }}
                                tooltipProps={{ overlay: isDownloadable ? 'Download cropped image' : 'Image is not loaded yet' }}
                                iconProps={{
                                    onClick: () => (isDownloadable && previewCanvasRef) && generateDownload(previewCanvasRef, completedCrop)
                                }}
                            />
                        </span>
                        <Radio.Group
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
                            placeholder="https://my-online-image..."
                            value={externalSource}
                            onChange={applyExternalSource} maxLength={512}
                        />
                        {error
                            ? <div className="online-image-tip image-warning">
                                Could not load this image, please try another link.
                            </div>
                            : <div className="online-image-tip">
                                You may use popular hosts such as imgur.
                            </div>}
                    </div>
                    <div className={['card-image-input', inputMode === 'internal' ? '' : 'input-inactive'].join(' ')}>
                        <Input type="file" accept="image/*" onChange={applyInternalSource} />
                        <hr />
                    </div>
                </div>
            </div>
            {beforeCropper}
            <div className="card-cropper">
                {isLoading && <Loading.FullView />}
                <ReactCrop key={`${sourceType}${ratio}${isMigrated}`}
                    src={sourceType === 'internal' ? internalSource : externalSource}
                    onImageLoaded={onLoad}
                    onImageError={() => {
                        onTainted();
                        setError('Tainted image');
                        setLoading(false);
                        // setCrossOrigin(undefined);
                    }}
                    crop={crop}
                    onChange={(cropData, percentCropData) => {
                        const image = imgRef.current;

                        if (isMigrated) {
                            setCrop(() => {
                                if (!image) return percentCropData;
                                const { width: cropWidth, height: cropHeight, x = 0, y = 0 } = percentCropData;
                                if (x < 0) return { ...percentCropData, x: 0 };
                                if (y < 0) return { ...percentCropData, y: 0 };
                                const { naturalHeight, naturalWidth } = image;
                                const width = cropWidth ?? 0;
                                const height = cropHeight ?? 0;
                                /** Kiểm tra ratio hiện tại, nếu width và height đã ở ratio chuẩn, ta không tính toán lại để tránh tích lũy sai số */
                                const acceptableError = (naturalHeight > naturalWidth ? naturalHeight : naturalWidth) * 0.05;
                                const isRatioAcceptable = Math.abs(height * naturalHeight * ratio - width * naturalWidth) <= acceptableError;

                                return {
                                    ...percentCropData,
                                    x: x < 0 ? 0 : x,
                                    y: y < 0 ? 0 : y,
                                    height: isRatioAcceptable
                                        ? height
                                        : width * image.naturalWidth /** Restore original size */
                                        / ratio /** Get height with corresponding aspect ratio */
                                        / image.naturalHeight /** Convert back to percent */,
                                    aspect: ratio,
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
                            setCrop(() => {
                                if (!image) return cropData;
                                const oldHeightToWidthRatio = 300 / 375;
                                const newHeightToWidthRatio = 400 / 300;
                                const { width: imageWidth, height: imageHeight } = image;
                                const isHeightRestricted = (imageHeight / imageWidth) >= oldHeightToWidthRatio;

                                if (!isHeightRestricted) return percentCropData;
                                const newX = Math.min((cropData.x ?? 0) * newHeightToWidthRatio, imageWidth);
                                const newY = Math.min((cropData.y ?? 0) * newHeightToWidthRatio, imageHeight);
                                const newWidth = Math.min((cropData.width ?? 0) * newHeightToWidthRatio, imageWidth);

                                return {
                                    unit: '%',
                                    x: newX / imageWidth * 100,
                                    y: newY / imageHeight * 100,
                                    width: newWidth / imageWidth * 100,
                                    height: newWidth / (ratio ?? 1) / imageHeight * 100,
                                    aspect: ratio,
                                };
                            });
                            setMigrated(true);
                        }
                    }}
                    onComplete={(_, percentData) => {
                        setCompletedCrop(percentData);
                    }}
                    ruleOfThirds={true}
                    crossorigin={crossorigin}
                />
            </div>
        </div>
    );
});
