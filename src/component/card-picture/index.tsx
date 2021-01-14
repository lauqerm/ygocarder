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
	defaultExternalSource?: string,
    onSourceChange?: (source: string) => void,
    previewCanvasRef?: HTMLCanvasElement | null,
}
export const ImageCropper = ({
    defaultExternalSource = '',
    onSourceChange = () => {},
    previewCanvasRef,
}: ImageCropper) => {
    const [sourceType, setSourceType] = useState('external');
    const [internalSource, setInternalSource] = useState('');
    const [externalSource, setExternalSource] = useState(defaultExternalSource);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [crop, setCrop] = useState<ReactCrop.Crop>({ unit: '%', width: 30, aspect: 1 });
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

        canvas.width = (crop.width ?? 0) * pixelRatio;
        canvas.height = (crop.height ?? 0) * pixelRatio;

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
            (crop.width ?? 0),
            (crop.height ?? 0)
        );
    }, [completedCrop, previewCanvasRef]);

    return (
        <div className="card-image-cropper">
            <div className="card-image-source-input">
                <Radio.Group onChange={e => setSourceType(e.target.value)} value={sourceType}>
                    <Radio.Button value={'external'}>
                        <Input key="key" placeholder="Card Picture Link" value={externalSource} onChange={onExternalSourceChange} maxLength={256} />
                    </Radio.Button>
                    <Radio.Button value={'internal'}>
                        <Input type="file" accept="image/*" onChange={onSelectFile} />
                        <div>
                            {sourceType === 'internal' && <Button
                                className="download-button"
                                disabled={!completedCrop?.width || !completedCrop?.height}
                                onClick={() => previewCanvasRef && generateDownload(previewCanvasRef, completedCrop)}
                            >
                                Download cropped image
                            </Button>}
                        </div>
                    </Radio.Button>
                </Radio.Group>
            </div>
            <div className="card-cropper">
                <ReactCrop
                    src={sourceType === 'internal' ? internalSource : externalSource}
                    onImageLoaded={onLoad}
                    crop={crop}
                    onChange={cropData => setCrop(cropData)}
                    onComplete={cropData => setCompletedCrop(cropData)}
                    ruleOfThirds={true}
                />
            </div>
        </div>
    );
};
