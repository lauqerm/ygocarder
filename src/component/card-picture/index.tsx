import { Button, Input, Radio } from 'antd';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './card-picture.scss';

function generateDownload(canvas: HTMLCanvasElement | null, crop: ReactCrop.Crop | null) {
    if (!crop || !canvas) return;
    canvas.toBlob(
        (blob) => {
            const previewUrl = window.URL.createObjectURL(blob);

            const anchor = document.createElement('a');
            anchor.download = 'cropPreview.png';
            anchor.href = URL.createObjectURL(blob);
            anchor.click();

            window.URL.revokeObjectURL(previewUrl);
        },
        'image/png',
        1
    );
}

export type ImageCropper = {
    noRedrawNumber?: number,
	defaultExternalSource?: string,
    previewCanvasRef?: HTMLCanvasElement | null,
    children?: React.ReactNode,
    ratio?: number,
    defaultCropInfo: Partial<ReactCrop.Crop>,
    onSourceChange?: (source: string) => void,
    onImageChange?: (cropInfo: Partial<ReactCrop.Crop>) => void,
}
export const ImageCropper = ({
    noRedrawNumber = 0,
    defaultExternalSource = '',
    previewCanvasRef,
    children,
    ratio = 1,
    defaultCropInfo,
    onSourceChange = () => {},
    onImageChange = () => {},
}: ImageCropper) => {
    const [sourceType, setSourceType] = useState('external');
    const [internalSource, setInternalSource] = useState('');
    const [externalSource, setExternalSource] = useState(defaultExternalSource);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [crop, setCrop] = useState<ReactCrop.Crop>(defaultCropInfo);
    const [completedCrop, setCompletedCrop] = useState<ReactCrop.Crop | null>(null);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
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

    const onLoad = useCallback((img) => {
        imgRef.current = img;
    }, []);
	
    const onExternalSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const source = e.target.value;

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
            (boundingHeight ?? 0)
        );
        onImageChange(crop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completedCrop, previewCanvasRef, noRedrawNumber]);

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
                        <Input type="file"  accept="image/*" onChange={onSelectFile} />
                        <div>
                            {sourceType === 'internal' && <>
                                <Button
                                    className="download-button"
                                    disabled={!completedCrop?.width || !completedCrop?.height}
                                    onClick={() => previewCanvasRef && generateDownload(previewCanvasRef, completedCrop)}
                                >
                                Download cropped image
                                </Button>
                                <span style={{ color: '#FF6F6F' }}>Offline images are not auto saved!</span>
                            </>}
                        </div>
                    </Radio.Button>
                </Radio.Group>
            </div>
            <div className="card-cropper">
                <ReactCrop key={sourceType}
                    src={sourceType === 'internal' ? internalSource : externalSource}
                    onImageLoaded={onLoad}
                    onImageError={() => {
                        console.log('ERROR');
                    }}
                    crop={crop}
                    onChange={cropData => setCrop({ ...cropData, aspect: ratio })}
                    onComplete={cropData => setCompletedCrop(cropData)}
                    ruleOfThirds={true}
                    crossorigin="anonymous"
                />
            </div>
        </div>
    );
};
