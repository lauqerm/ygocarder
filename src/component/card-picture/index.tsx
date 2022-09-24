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
    const [crop, setCrop] = useState<ReactCrop.Crop>(defaultCropInfo);
    const [completedCrop, setCompletedCrop] = useState<ReactCrop.Crop | null>(null);

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
        }
    };

    const onLoad = useCallback((img: HTMLImageElement) => {
        setLoading(false);
        imgRef.current = img;
    }, []);

    const onExternalSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const source = e.target.value;

        setLoading(true);
        setSourceType('external');
        onSourceChange(source);
        setExternalSource(source);
    };

    useEffect(() => {
        const image = imgRef.current;
        const canvas = previewCanvasRef;
        const crop = completedCrop;
        if (!crop || !canvas || !image) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const pixelRatio = window.devicePixelRatio;
        const boundingWidth = Math.ceil(canvas.getBoundingClientRect().width);
        const boundingHeight = Math.ceil(canvas.getBoundingClientRect().height);
        const renderRatio = crop.aspect ?? 0;

        canvas.width = (boundingWidth ?? 0) * pixelRatio;
        canvas.height = (boundingHeight ?? 0) * pixelRatio;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            (crop.x ?? 0) * scaleX,
            (crop.y ?? 0) * scaleY,
            (crop.width ?? 0) * scaleX,
            (crop.height ?? 0) * scaleY,
            0,
            0,
            (boundingWidth ?? 0),
            (boundingHeight ?? 0) / (renderRatio > 0 ? renderRatio : 1),
        );
        onImageChange(crop, sourceType);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completedCrop, previewCanvasRef, noRedrawNumber]);

    useImperativeHandle(forwardedRef, () => ({
        forceExternalSource: (source, cropInfo) => {
            const inUseSource = sourceType === 'internal' ? internalSource : externalSource;
            if (inUseSource !== source) {
                setLoading(true);
                setSourceType('external');
                onSourceChange(source);
                setExternalSource(source);
            }
            setCrop(cropInfo);
        }
    }));

    useEffect(() => {
        const { height, aspect, width } = completedCrop ?? {};
        if (typeof height === 'number' && typeof aspect === 'number' && typeof width === 'number' && (ratio > 0 && ratio !== aspect)) {
            setCrop({
                ...completedCrop,
                aspect: ratio,
                height: width / ratio,
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ratio]);

    return (
        <div className="card-image-cropper">
            <div className="card-image-source-input">
                {children}
                <Radio.Group onChange={e => setSourceType(e.target.value)} value={sourceType}>
                    <Radio.Button value={'external'}>
                        <Input key="key"
                            addonBefore="Link" placeholder="https://my-online-image..."
                            value={externalSource}
                            onChange={onExternalSourceChange} maxLength={256} />
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
                                    Download cropped image#3b9dff
                                </Button>
                                <span style={{ color: '#FF6F6F' }}>Offline images are not auto saved!</span>
                            </>}
                        </div>
                    </Radio.Button>
                </Radio.Group>
            </div>
            <div className="card-cropper">
                {isLoading && <Loading.FullView />}
                <ReactCrop key={`${sourceType}${ratio}`}
                    src={sourceType === 'internal' ? internalSource : externalSource}
                    onImageLoaded={onLoad}
                    onImageError={() => {
                        onTainted();
                        setCrossOrigin(undefined);
                    }}
                    crop={crop}
                    onChange={cropData => setCrop({ ...cropData, aspect: ratio })}
                    onComplete={cropData => setCompletedCrop(cropData)}
                    ruleOfThirds={true}
                    crossorigin={crossorigin}
                />
            </div>
        </div>
    );
});
