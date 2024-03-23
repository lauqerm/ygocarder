import { Button, Input, Radio } from 'antd';
import React, { useState, useCallback, useRef, useEffect, useImperativeHandle } from 'react';
import ReactCrop from 'react-image-crop';
import { Loading } from '../loading';
import 'react-image-crop/dist/ReactCrop.css';
import './card-picture.scss';

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
    ratio?: number,
    defaultCropInfo: Partial<ReactCrop.Crop>,
    onSourceChange?: (source: string) => void,
    onImageChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
    onTainted: () => void,
}
export const ImageCropper = React.forwardRef<ImageCropperRef, ImageCropper>(({
    noRedrawNumber = 0,
    defaultExternalSource = '',
    previewCanvasRef,
    children,
    ratio = 1,
    defaultCropInfo,
    onSourceChange = () => { },
    onImageChange = () => { },
    onTainted = () => { },
}: ImageCropper, forwardedRef) => {
    const [crossorigin, setCrossOrigin] = useState<'anonymous' | 'use-credentials' | undefined>('anonymous');
    const [sourceType, setSourceType] = useState<'internal' | 'external'>('external');
    const [internalSource, setInternalSource] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [externalSource, setExternalSource] = useState(defaultExternalSource);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [crop, setCrop] = useState<Partial<ReactCrop.Crop>>(defaultCropInfo);
    const [completedCrop, setCompletedCrop] = useState<ReactCrop.Crop | null>(null);
    const [isMigrated, setMigrated] = useState(defaultCropInfo.unit === '%');

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setLoading(true);
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                if (typeof reader.result === 'string') {
                    setInternalSource(reader.result);
                    setSourceType('internal');
                }
            });
            reader.readAsDataURL(e.target.files[0]);
        } else alert('No file uploaded');
    };

    const onLoad = useCallback((img: HTMLImageElement) => {
        setLoading(false);
        imgRef.current = img;
    }, []);

    const useExternalSource = (e: React.ChangeEvent<HTMLInputElement>) => {
        const source = e.target.value;

        setLoading(true);
        setSourceType('external');
        onSourceChange(source);
        setExternalSource(source);
    };

    useEffect(() => {
        const image = imgRef.current;
        const canvas = previewCanvasRef;
        const cropData = completedCrop;
        if (!cropData || !canvas || !image) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { naturalHeight, naturalWidth } = image;
        const { aspect } = cropData;
        const zoomX = naturalWidth / image.width;
        const zoomY = naturalHeight / image.height;
        const cropUnit = cropData.unit ?? 'px';
        const pixelRatio = window.devicePixelRatio;
        const boundingWidth = Math.ceil(canvas.getBoundingClientRect().width);
        const boundingHeight = Math.ceil(canvas.getBoundingClientRect().height);
        const aspectRatio = typeof aspect === 'number' && aspect > 0 ? aspect : 1;

        canvas.width = (boundingWidth ?? 0) * pixelRatio;
        canvas.height = (boundingHeight ?? 0) * pixelRatio;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        /** Làm mượt thông số crop để image không bị vỡ */
        const drawWidth = Math.min(
            naturalWidth,
            Math.round((cropData.width ?? 0) * (cropUnit === 'px' ? zoomX : naturalWidth / 100)),
        );
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            (cropData.x ?? 0) * (cropUnit === 'px' ? zoomX : naturalWidth / 100),
            (cropData.y ?? 0) * (cropUnit === 'px' ? zoomY : naturalHeight / 100),
            drawWidth,
            drawWidth / aspectRatio,
            0,
            0,
            (boundingWidth ?? 0),
            (boundingHeight ?? 0) / aspectRatio,
        );
        onImageChange(cropData, sourceType);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completedCrop, previewCanvasRef, noRedrawNumber]);

    useEffect(() => {
        const image = imgRef.current;
        const { height, aspect, width } = completedCrop ?? {};
        if (image
            && typeof height === 'number'
            && typeof aspect === 'number'
            && typeof width === 'number'
            && (ratio > 0 && ratio !== aspect)
        ) {
            setCrop(crop => ({
                ...crop,
                aspect: ratio,
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ratio]);

    useImperativeHandle(forwardedRef, () => ({
        forceExternalSource: (source, cropInfo) => {
            const inUseSource = sourceType === 'internal' ? internalSource : externalSource;
            if (inUseSource !== source) {
                setLoading(true);
                setSourceType('external');
                onSourceChange(source);
                setExternalSource(source);
            }
            setMigrated(cropInfo.unit === '%');
            setCrop(cropInfo);
        }
    }));

    return (
        <div className="card-image-cropper">
            <div className="card-image-source-input">
                {children}
                <Radio.Group onChange={e => setSourceType(e.target.value)} value={sourceType}>
                    <Radio.Button value={'external'}>
                        <Input key="key"
                            addonBefore="Link" placeholder="https://my-online-image..."
                            value={externalSource}
                            onChange={useExternalSource} maxLength={256}
                        />
                    </Radio.Button>
                    <Radio.Button value={'internal'}>
                        <Input type="file" accept="image/*" onChange={onSelectFile} />
                        <div>
                            {sourceType === 'internal' && <>
                                <Button
                                    className="download-button"
                                    disabled={!completedCrop?.width || !completedCrop?.height}
                                    onClick={() => previewCanvasRef && generateDownload(previewCanvasRef, completedCrop)}
                                >
                                    <span style={{ color: '#3b9dff' }}>Download cropped image</span>
                                </Button>
                                <span style={{ color: '#FF6F6F' }}>Offline images are not auto saved!</span>
                            </>}
                        </div>
                    </Radio.Button>
                </Radio.Group>
            </div>
            <div className="card-cropper">
                {isLoading && <Loading.FullView />}
                <ReactCrop key={`${sourceType}${ratio}${isMigrated}`}
                    src={sourceType === 'internal' ? internalSource : externalSource}
                    onImageLoaded={onLoad}
                    onImageError={() => {
                        onTainted();
                        setCrossOrigin(undefined);
                    }}
                    crop={crop}
                    onChange={(cropData, percentCropData) => {
                        const image = imgRef.current;
                        
                        if (isMigrated) {
                            setCrop(() => {
                                if (!image) return percentCropData;
                                const width = percentCropData.width ?? 0;

                                return {
                                    ...percentCropData,
                                    height: width * image.naturalWidth /** Restore original size */
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
