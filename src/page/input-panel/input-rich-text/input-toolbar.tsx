import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Button, Input, InputNumber, Radio, Switch, Tooltip } from 'antd';
import {
    FileImageOutlined,
    PicCenterOutlined,
    PicLeftOutlined,
} from '@ant-design/icons';
import {
    TotalIconTypePresetMap,
} from 'src/model';
import { WORD_HANDLER, QUOTE_HANDLER, RUBY_HANDLER } from './rich-text-inline';
import { LINE_HANDLER, FITLINE_HANDLER } from './rich-text-block';
import { IMAGE_HANDLER, ImageBlotValue, ImageMemory, MAX_IMAGE_DIMENSION } from './rich-text-image';
import './toolbar.scss';

const BlockIcon = <svg viewBox="0 0 18 18">
    <rect className="ql-fill ql-stroke" height="3" width="3" x="4" y="5" />
    <path className="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5" />
    <rect className="ql-fill ql-stroke" height="3" width="3" x="12" y="5" />
    <path className="ql-even ql-fill ql-stroke" d="M15,8c0,4.031-3,5-3,5" />
</svg>;
const FitBlockIcon = <svg viewBox="0 0 18 18">
    <rect className="ql-fill ql-stroke" height="3" width="3" x="12" y="5" />
    <path className="ql-even ql-fill ql-stroke" d="M15,8c0,4.031-3,5-3,5" />
    <rect className="ql-fill ql-stroke" height="3" width="3" x="12" y="5" style={{ transform: 'scaleX(-1) translateX(-19px)' }} />
    <path className="ql-even ql-fill ql-stroke" d="M15,8c0,4.031-3,5-3,5" style={{ transform: 'scaleX(-1) translateX(-19px)' }} />
</svg>;
const WordIcon = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" viewBox="0 5 80 80">
    <path d="M0 0 C2.31 0 4.62 0 7 0 C8 3 8 3 7 9 C14.59 9 22.18 9 30 9 C30 10.98 30 12.96 30 15 C26.04 15 22.08 15 18 15 C17.9071875 16.423125 17.9071875 16.423125 17.8125 17.875 C16.94088065 24.15578651 13.4682763 29.79758555 10 35 C16.44070401 39.11108767 22.81127571 42.39982313 30 45 C29.625 47.9375 29.625 47.9375 29 51 C27 52 27 52 24.96875 51.43359375 C19.36749762 49.17359477 14.30832314 46.53874209 9.2265625 43.26953125 C7.03904212 42.02226086 5.50964627 41.2074506 3 41 C1.12222605 42.01672695 1.12222605 42.01672695 -0.625 43.625 C-6.40424508 48.25919839 -12.63650651 51.78365028 -20 53 C-21.4606285 50.35261084 -22 49.10551666 -22 46 C-21.23816406 45.70867187 -20.47632813 45.41734375 -19.69140625 45.1171875 C-12.87277965 42.4101672 -6.91326227 39.34535182 -1 35 C-1.70576172 33.948125 -1.70576172 33.948125 -2.42578125 32.875 C-6.04054046 27.36679549 -8.98626827 22.27810479 -11 16 C-14.63 15.67 -18.26 15.34 -22 15 C-22 13.02 -22 11.04 -22 9 C-14.74 9 -7.48 9 0 9 C0 6.03 0 3.06 0 0 Z M-4 15 C-3.06658186 20.60050881 -2.78573896 21.85711324 0.5625 25.875 C1.20316406 26.65617187 1.84382813 27.43734375 2.50390625 28.2421875 C2.99761719 28.82226562 3.49132812 29.40234375 4 30 C8.20794586 26.24696721 10.16342168 23.21974892 12 18 C12 17.01 12 16.02 12 15 C6.72 15 1.44 15 -4 15 Z " fill="#D3D3D6" transform="translate(36,22)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C0.125 4.75 0.125 4.75 -1 7 C-0.360625 7.391875 0.27875 7.78375 0.9375 8.1875 C3.43778819 10.38472296 3.64950425 11.75791433 4 15 C5.70840281 13.36587557 6.93453047 12.13093906 8 10 C8.66 10 9.32 10 10 10 C9.3125 12.4375 9.3125 12.4375 8 15 C5.375 15.8125 5.375 15.8125 3 16 C2.01 14.02 1.02 12.04 0 10 C-0.99 10.33 -1.98 10.66 -3 11 C-4.21869929 13.50447516 -4.21869929 13.50447516 -5 16 C-5.66 16 -6.32 16 -7 16 C-6.40165275 11.85701333 -4.99335715 8.81805623 -2.9375 5.1875 C-2.11572266 3.72376953 -2.11572266 3.72376953 -1.27734375 2.23046875 C-0.85582031 1.49441406 -0.43429688 0.75835937 0 0 Z " fill="#D3D3D6" transform="translate(54,5)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C5.0656304 6.37651123 5.0656304 6.37651123 4.75 9.375 C4 11 4 11 3 12 C0.66055264 11.71269945 -1.6739143 11.38063221 -4 11 C-1 10 -1 10 2 10 C1.7834375 9.195625 1.7834375 9.195625 1.5625 8.375 C0.90546252 5.60084173 0.44780052 2.81474612 0 0 Z " fill="#D3D3D6" transform="translate(22,10)"/>
    <path d="M0 0 C1.9375 0.8125 1.9375 0.8125 4 2 C4.33 2.99 4.66 3.98 5 5 C4.34 5 3.68 5 3 5 C1.375 2.5 1.375 2.5 0 0 Z " fill="#D3D3D6" transform="translate(28,14)"/>
    <path d="M0 0 C0.66 0 1.32 0 2 0 C1.34 1.32 0.68 2.64 0 4 C-0.99 4 -1.98 4 -3 4 C-1.625 2 -1.625 2 0 0 Z " fill="#D3D3D6" transform="translate(17,14)"/>
    <path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C5.01 1.33 4.02 1.66 3 2 C2.01 1.34 1.02 0.68 0 0 Z " fill="#D3D3D6" transform="translate(20,6)"/>
    <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.01 1 1.02 1 0 1 C0 0.67 0 0.34 0 0 Z " fill="#D3D3D6" transform="translate(27,9)"/>
    <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.01 1 1.02 1 0 1 C0 0.67 0 0.34 0 0 Z " fill="#D3D3D6" transform="translate(29,8)"/>
</svg>;
export type InputRichTextToolbarRef = {
    resetImageInput: () => void,
    resetRubyInput: () => void,
};
export type InputRichTextToolbar = {
    id: string,
    onChangeMode: () => void,
    onMemoizedImageInsert: (imageData: ImageBlotValue) => void,
    getContentRange: () => ({ index: number, length: number } | undefined | null),
};
export const InputRichTextToolbar = forwardRef<InputRichTextToolbarRef, InputRichTextToolbar>(({
    id,
    onChangeMode,
    onMemoizedImageInsert,
    getContentRange,
}, ref) => {
    const [imageKey, setImageKey] = useState(0);
    const [showImageTooltip, setShowImageTooltip] = useState(false);
    const [currentImageName, setCurrentImageName] = useState('');
    const currentMemoizedImage = ImageMemory.get(id, currentImageName);
    const memoizedImageList = Object.values(ImageMemory.all(id));
    const imageInputRef = useRef<HTMLDivElement>(null);
    const commonImageNumberProps = {
        max: MAX_IMAGE_DIMENSION,
        min: -MAX_IMAGE_DIMENSION,
        step: 1,
    };
    
    const [rubyKey, setRubyKey] = useState(0);
    const [showRubyTooltip, setShowRubyTooltip] = useState(false);
    const rubyInputRef = useRef<HTMLDivElement>(null);

    const commonInputProps = {
        size: 'small' as const,
        allowClear: true,
    };

    useEffect(() => {
        const imageInputElement = imageInputRef.current;
        const rubyInputElement = rubyInputRef.current;
        function handleClickOutside(event: MouseEvent) {
            if (imageInputElement && !imageInputElement.contains(event.target as Node)) {
                setShowImageTooltip(false);
            }
            if (rubyInputElement && !rubyInputElement.contains(event.target as Node)) {
                setShowRubyTooltip(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useImperativeHandle(ref, () => ({
        resetImageInput: () => {
            setImageKey(cur => cur + 1);
            setShowImageTooltip(false);
        },
        resetRubyInput: () => {
            setRubyKey(cur => cur + 1);
            setShowRubyTooltip(false);
        },
    }));

    /** All ids here are used for identification for js elsewhere (in rich text input), do not remove. */
    return <div id={`${id}-toolbar`} className="quill-custom-toolbar">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <strong></strong>
        <button className={`ql-${LINE_HANDLER}`}>
            <Tooltip title="Line: Left alignment">
                {BlockIcon}
            </Tooltip>
        </button>
        <button className={`ql-${FITLINE_HANDLER}`}>
            <Tooltip title="Line: Justify alignment">
                {FitBlockIcon}
            </Tooltip>
        </button>
        <strong></strong>
        <button className={`ql-${WORD_HANDLER}`}>
            <Tooltip title="Word: Compressable">
                <PicLeftOutlined />
            </Tooltip>
        </button>
        <button className={`ql-${QUOTE_HANDLER}`}>
            <Tooltip title="Word: Non-compressable">
                <PicCenterOutlined />
            </Tooltip>
        </button>
        <div id={`${id}-toolbar-ruby`} className="html-tooltip">
            <button
                onClick={() => {
                    setShowRubyTooltip(true);
                    const range = getContentRange();
                    const rubyFootInputContainer = (document.querySelector(`#${id}-toolbar .ruby-input-group .ruby-foot-input`) as HTMLElement | null);
                    if (range && range.length > 0) rubyFootInputContainer?.classList.add('ql-hidden');
                    else rubyFootInputContainer?.classList.remove('ql-hidden');
                    /** Not sure if we want auto focus yet, this will break the focus of the editor */
                    // setTimeout(() => document.getElementById(`${id}-ruby-head`)?.focus(), 250);
                }}
            >
                {WordIcon}
            </button>
            <div ref={rubyInputRef} className="html-tooltip-container" style={{ display: showRubyTooltip ? 'block' : 'none' }}>
                <div className="html-tooltip-content ruby-input-group">
                    <div className="input-group">
                        <Input
                            key={`${rubyKey}-${id}-ruby-head`}
                            id={`${id}-ruby-head`}
                            placeholder="Annotation"
                            onChange={e => setCurrentImageName(e.target.value)}
                            {...commonInputProps}
                        />
                        <Input
                            key={`${rubyKey}-${id}-ruby-foot`}
                            id={`${id}-ruby-foot`}
                            placeholder="Content"
                            className="ruby-foot-input"
                            {...commonInputProps}
                        />
                        <Radio.Group key={`${rubyKey}-${id}-ruby-width`} defaultValue="normal">
                            <Radio value="normal" id={`${id}-ruby-width-normal`}>Normal</Radio>
                            <Radio value="fit" id={`${id}-ruby-width-fit`}>Fit</Radio>
                        </Radio.Group>
                    </div>
                    <div className="input-footer">
                        <Button
                            type="primary"
                            className={`ql-${RUBY_HANDLER}`}
                        >
                            Insert
                        </Button>
                    </div>
                </div>
                <div className="html-tooltip-arrow" />
            </div>
        </div>
        <strong></strong>
        <div id={`${id}-toolbar-image`} className="html-tooltip">
            <button onClick={() => {
                setShowImageTooltip(true);
                /** Not sure if we want auto focus yet, this will break the focus of the editor */
                // setTimeout(() => document.getElementById(`${id}-image-url`)?.focus(), 250);
            }}>
                <FileImageOutlined />
            </button>
            <div ref={imageInputRef} className="html-tooltip-container" style={{ display: showImageTooltip ? 'block' : 'none' }}>
                <div className="html-tooltip-content image-input-group">
                    <div className="input-group">
                        <Input
                            key={`${imageKey}-${id}-image-name`}
                            id={`${id}-image-name`}
                            placeholder="Reusable Name"
                            onChange={e => setCurrentImageName(e.target.value)}
                            {...commonInputProps}
                        />
                        <Input
                            key={`${imageKey}-${id}-image-url`}
                            id={`${id}-image-url`}
                            placeholder="Image URL"
                            disabled={!!currentMemoizedImage}
                            {...commonInputProps}
                        />
                        <InputNumber
                            key={`${imageKey}-${id}-image-width`}
                            id={`${id}-image-width`}
                            placeholder="Width"
                            disabled={!!currentMemoizedImage}
                            {...commonImageNumberProps}
                            {...commonInputProps}
                        />
                        <InputNumber
                            key={`${imageKey}-${id}-image-offset-x`}
                            id={`${id}-image-offset-x`}
                            placeholder="Offset X"
                            disabled={!!currentMemoizedImage}
                            {...commonImageNumberProps}
                            {...commonInputProps}
                        />
                        <InputNumber
                            key={`${imageKey}-${id}-image-offset-y`}
                            id={`${id}-image-offset-y`}
                            placeholder="Offset Y"
                            disabled={!!currentMemoizedImage}
                            {...commonImageNumberProps}
                            {...commonInputProps}
                        />
                        {currentMemoizedImage && <>
                            <div className="memoized-image-preview">
                                <img
                                    src={currentMemoizedImage.src ?? ''}
                                    alt={`alt-${currentMemoizedImage.name}`}
                                    data-width={currentMemoizedImage.width}
                                    data-height={currentMemoizedImage.height}
                                    data-offsetx={currentMemoizedImage.offsetx}
                                    data-offsety={currentMemoizedImage.offsety}
                                />
                            </div>
                            <div className="memoized-image-information">
                                Width: {currentMemoizedImage.width ?? 'auto'}
                                <br />
                                OffsetX: {currentMemoizedImage.offsetx ?? 'auto'}
                                <br />
                                OffsetY: {currentMemoizedImage.offsety ?? 'auto'}
                            </div>
                        </>}
                        {memoizedImageList.length > 0 && <div className="memoized-image-picker">
                            {memoizedImageList.map((imageData) => {
                                return (
                                    <button
                                        key={imageData.src}
                                        className="image-preset"
                                        onClick={() => {
                                            onMemoizedImageInsert(imageData);
                                        }}
                                    >
                                        <img src={imageData.src} alt={imageData.src} />
                                    </button>
                                );
                            })}
                        </div>}
                        <div className="memoized-image-picker">
                            {Object.entries(TotalIconTypePresetMap).filter(([, source]) => source !== '').map(([path, source]) => {
                                return (
                                    <button
                                        key={path}
                                        className="image-preset"
                                        onClick={() => {
                                            onMemoizedImageInsert({ src: path });
                                        }}
                                    >
                                        <img src={`${process.env.PUBLIC_URL}/asset/image/${source}`} alt={path} />
                                    </button>
                                );
                            })}
                        </div>
                        {/** We disallow height input in normal mode because:
                         * * We avoid waiting for image load to get the aspect ratio, and therefore it is impossible to determine the width when height is given.
                         * * In most cases, users only want to adjust the width and keep the aspect ratio. */}
                        {/* <InputNumber
                            placeholder="Height" id={`${id}-image-height`} {...commonImageProps} {...commonInputProps} /> */}
                    </div>
                    <div className="input-footer">
                        <Button
                            type="primary"
                            className={`ql-${IMAGE_HANDLER}`}
                        >
                            Insert
                        </Button>
                    </div>
                </div>
                <div className="html-tooltip-arrow" />
            </div>
        </div>
        <div className="mode-switch">
            <Switch
                size="small"
                checked={true}
                onChange={() => onChangeMode()}
            /> Advanced Mode
        </div>
    </div>;
});