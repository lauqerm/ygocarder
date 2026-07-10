import { Checkbox, Modal, Popover, Tooltip } from 'antd';
import { forwardRef, lazy, Suspense, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import {
    BackgroundType,
    getBackgroundTypeList,
    CardOpacity,
    DEFAULT_BASE_FILL_COLOR,
    getDefaultCardOpacity,
    DefaultColorList,
    LayoutSettingList,
    CanvasConst,
    CheckboxChangeEvent,
    getDefaultCoordinateMap,
} from 'src/model';
import styled from 'styled-components';
import { BackgroundInputGroup, BackgroundInputGroupRef } from './background-input-group';
import { ImageCropper, LoadingLabel, PopoverButton, RadioTrain, SolidLabel } from 'src/component';
import { useCard, useLanguage, useSetting } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { BorderOuterOutlined } from '@ant-design/icons';
import { OpacityPicker } from './opacity-picker';
import { FrameCoordinatePanel, FrameCoordinatePanelRef } from './frame-coordinate-panel';
import './layout-picker.scss';
import { FrameBlendingPanel } from './frame-blending-panel';
import { isKeyListEqual } from 'src/util';

const CompactPicker = lazy(() => import('react-color').then(({ CompactPicker }) => ({ default: CompactPicker })));
const {
    width,
    height,
} = CanvasConst;
const StyledLayoutPickerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
    padding: 2px 0;
    align-items: center;
    .art-frame {
        span {
            padding: 0;
        }
    }
    div.ant-slider {
        .ant-slider-handle {
            height: 19px;
            top: 8px;
            border-radius: 0;
            width: 10px;
        }
        .ant-slider-step,
        .ant-slider-track,
        .ant-slider-rail {
            height: 10px;
        }
    }
    .card-opacity-slider {
        flex: 0 1 auto;
        .ant-slider {
            padding-top: 8px;
        }
    }
    .background-label {
        cursor: pointer;
        &:hover {
            .background-preview {
                box-shadow: 0 0 2px 0 #2a2a2a;
            }
        }
    }
    .frame-layout-button {
        vertical-align: bottom;
        flex: 0 0 auto;
        margin: 0;
        margin-right: var(--spacing);
    }
    .background-preview {
        display: inline-block;
        line-height: 0;
        width: 17px;
        height: 17px; // Alignment
        align-self: center;
        border: 1px solid #333333;
        text-align: center;
        user-select: none;
        margin-right: var(--spacing-xs);
        .background-preview-callback-passer {
            width: 100%;
            height: 100%;
        }
        .background-image-preview {
            max-width: 15px;
            max-height: 15px;
        }
        .no-background-icon {
            font-size: 15px; // Alignment
        }
    }
`;
const StyledBaseFillPickerContainer = styled.div`
    --input-width: 315px;
    &.overlay-no-background-image {
        .card-image-cropper {
            grid-template-columns: 1fr;
        }
        .card-cropper {
            min-height: 0;
            line-height: 0;
            width: 0;
            visibility: hidden;
            position: absolute;
        }
        .card-image-source-input {
            padding-right: 0;
            margin-right: 0;
            border-right: none;
        }
        i {
            max-width: var(--input-width); // Alignment
        }
    }
    i {
        display: inline-block;
        font-size: var(--fs-sm);
        color: var(--color);
        font-weight: normal;
    }
    .background-picker {
        padding: var(--spacing-xs);
        /** No display none here, again we want to keep card cropper painted, just not visible */
        &.overlay-no-background {
            visibility: hidden;
            height: 0;
            width: 0;
            padding: 0;
        }
        .layout-picker-panel {
            margin-top: var(--spacing);
        }
        .card-image-input {
            text-align: center;
            max-width: var(--input-width);
        }
    }
    .card-image-source-input {
        height: 100%;
        justify-content: start;
        padding-right: var(--spacing-xs);
        margin-right: var(--spacing-xs);
        border-right: var(--bw) solid var(--sub-level-4);
        .type-section h2 {
            margin-top: var(--spacing-xs);
        }
        .background-type-picker {
            .radio-train-input-group {
                display: grid;
            }
            .ant-radio-button-wrapper {
                border-left: var(--bw) solid var(--sub-level-1);
            }
        }
        .color-section h2 {
            padding-top: 0;
            padding-left: 0;
        }
    }
    .color-section {
        > h2 + div {
            > div:first-child {
                box-shadow: none !important; // Override inline style
            }
            > div:nth-child(2) {
                border: var(--bw) solid var(--main-level-1);
            }
        }
    }
`;
const LayoutSettingContainer = styled.div`
    max-width: 20rem;
    padding: var(--spacing-sm);
    small {
        display: block;
        line-height: var(--fs-lg);
        &.tooltip-disable {
            color: var(--color-dim);
        }
    }
    .layout-setting-option + .layout-setting-option {
        margin-top: var(--spacing-sm);
    }
`;

export type LayoutPicker = {
    defaultValue: Partial<CardOpacity>,
    onChange: (opacity: CardOpacity) => void,
    backgroundReceivingCanvas: ImageCropper['receivingCanvas'],
    overlayReceivingCanvas: ImageCropper['receivingCanvas'],
}
    & Pick<ImageCropper, 'onTainted' | 'onCropChange' | 'onSourceLoaded'>
    & Pick<FrameBlendingPanel, 'onFrameChange'>;
export type LayoutPickerRef = {
    setValue: (opacity: Partial<CardOpacity> & {
        background?: string,
        backgroundData?: string,
        backgroundSource?: string,
        backgroundCrop?: Partial<ReactCrop.Crop>,
        backgroundType?: BackgroundType,
    }) => void,
    isLoading: () => boolean,
};
export const LayoutPicker = forwardRef<LayoutPickerRef, LayoutPicker>(({
    backgroundReceivingCanvas,
    overlayReceivingCanvas,
    defaultValue,
    onFrameChange,
    onTainted,
    onChange,
    onSourceLoaded,
    onCropChange,
}, ref) => {
    const language = useLanguage();
    const {
        background,
        backgroundData,
        backgroundSource,
        backgroundType,
        coordinateMap,
        hasBackground,
        legacyTemplate,
        getUpdater,
        setCard,
    } = useCard(useShallow(({
        card: {
            background,
            backgroundData,
            backgroundSource,
            backgroundType,
            coordinateMap,
            hasBackground,
            legacyTemplate,
        },
        setCard,
        getUpdater,
    }) => ({
        background,
        backgroundData,
        backgroundSource,
        backgroundType,
        coordinateMap,
        hasBackground,
        legacyTemplate,
        getUpdater,
        setCard,
    })));
    const {
        globalScale,
        showCreativeOption,
        softMode,
    } = useSetting(useShallow(({ setting: {
        globalScale,
        showCreativeOption,
        reduceMotionColor: softMode,
    } }) => ({
        globalScale,
        showCreativeOption,
        softMode,
    })));
    const [backgroundInputVisible, setBackgroundInputVisible] = useState(true);
    const [backgroundInputHidden, setBackgroundInputHidden] = useState(true);
    const [opacity, setOpacity] = useState(() => ({ ...getDefaultCardOpacity(), ...defaultValue }));
    const [frameCoordinateVisible, setFrameCoordinateVisible] = useState(false);
    const backgroundInputRef = useRef<BackgroundInputGroupRef>(null);
    const frameCoordinateRef = useRef<FrameCoordinatePanelRef>(null);

    const changeBackgroundType = useMemo(() => getUpdater('backgroundType'), [getUpdater]);
    const changeLegacyTemplate = useMemo(() => getUpdater('legacyTemplate'), [getUpdater]);
    const changeHasBackground = useCallback((e: CheckboxChangeEvent) => setCard(currentCard => {
        const nextValue = e.target.checked;

        return { ...currentCard, hasBackground: nextValue };
    }), [setCard]);

    const onChangeRef = useRef(onChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);
    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                onChangeRef.current(opacity);
            }
        }, 500);

        return () => {
            relevant = false;
        };
        /** No need to depend on callback */
    }, [opacity]);

    useEffect(() => {
        /** Force render, otherwise we will miss the image */
        setBackgroundInputVisible(false);
        /** Avoid consecutive render here, so the popover does not "flashing" when close */
        setTimeout(() => {
            setBackgroundInputHidden(false);
        }, 250);
    }, []);

    useImperativeHandle(ref, () => ({
        isLoading: () => backgroundInputRef.current?.isLoading() ?? false,
        setValue: ({ background, backgroundCrop, backgroundData, backgroundSource, ...newValue }) => {
            if ((typeof background === 'string' || typeof backgroundData === 'string') && backgroundCrop) {
                backgroundInputRef.current?.setValue({ background, backgroundCrop, backgroundData, backgroundSource });
            }
            for (const key in newValue) {
                if (newValue[key as keyof CardOpacity] !== opacity[key as keyof CardOpacity]) {
                    setOpacity(cur => {
                        return { ...cur, ...newValue };
                    });
                }
            }
        },
    }));

    const isCustomCardLayout = Object.entries(getDefaultCoordinateMap()).reduce((acc, [key, value]) => {
        if (typeof coordinateMap[key] === 'string' && coordinateMap[key] !== value) return true;
        return acc;
    }, false);
    const noBackground = (background ?? '').length === 0
        && (backgroundInputRef.current?.hasImage() !== true);
    return <StyledLayoutPickerContainer className="card-opacity-slider-container">
        <Tooltip title={language['input.opacity.legacy.tooltip']}>
            <SolidLabel onClick={() => changeLegacyTemplate(cur => !cur.legacyTemplate)}>
                <div className="button-label">
                    <Checkbox checked={legacyTemplate} />
                    &nbsp;{language['input.opacity.legacy.label']}
                </div>
            </SolidLabel>
        </Tooltip>
        <Popover
            overlayClassName="global-input-overlay global-style-picker-overlay"
            content={<div className="overlay-event-absorber">
                <LayoutSettingContainer className="input-popover">
                    <div className="layout-setting-option">
                        <Checkbox
                            className="art-frame"
                            onChange={value => {
                                setOpacity(cur => ({
                                    ...cur,
                                    boundless: value.target.checked,
                                }));
                            }}
                            checked={opacity.boundless}
                        >
                            {language['input.opacity.boundless.label']}
                        </Checkbox>
                        <br />
                        <small>
                            {language['input.opacity.boundless.tooltip']}
                        </small>
                    </div>
                    <div className="layout-setting-option">
                        <Checkbox
                            className="art-frame"
                            disabled={!opacity.boundless}
                            onChange={value => {
                                setOpacity(cur => ({
                                    ...cur,
                                    frameBorder: value.target.checked,
                                    boundless: value.target.checked ? true : cur.boundless,
                                }));
                            }}
                            checked={opacity.frameBorder}
                        >
                            {language['input.opacity.overframe.label']}
                        </Checkbox>
                        <br />
                        <small className={!opacity.boundless ? 'tooltip-disable' : ''}>
                            {language['input.opacity.overframe.tooltip']}
                        </small>
                    </div>
                    {LayoutSettingList.map(({
                        labelKey,
                        subType,
                        tooltipKey,
                    }) => {
                        const isActive = subType && opacity[subType];
                        return <div key={subType} className="layout-setting-option">
                            <Checkbox
                                className="art-frame"
                                onChange={e => setOpacity(cur => ({ ...cur, [subType]: e.target.checked }))}
                                checked={isActive}
                            >
                                {language[labelKey]}
                            </Checkbox>
                            <br />
                            <small>
                                {language[tooltipKey]}
                            </small>
                        </div>;
                    })}
                </LayoutSettingContainer>
            </div>}
        >
            <PopoverButton
                $softMode={softMode}
                $active={!isKeyListEqual(
                    opacity,
                    getDefaultCardOpacity(),
                    ['frameBorder', 'boundless', ...LayoutSettingList.map(entry => entry.subType)],
                )}
            >
                <div className="button-label">
                    {language['input.opacity.setting.label']}
                </div>
            </PopoverButton>
        </Popover>
        <Popover
            visible={backgroundInputVisible}
            destroyTooltipOnHide={false}
            trigger={['click']}
            onVisibleChange={setBackgroundInputVisible}
            overlayClassName={[
                'global-input-overlay global-style-picker-overlay layout-picker-overlay',
                backgroundInputVisible ? 'picker-visible' : '',
                backgroundInputHidden ? 'picker-hidden' : '',
            ].join(' ')}
            content={<div className="overlay-event-absorber">
                <StyledBaseFillPickerContainer
                    className={[
                        'input-popover',
                        noBackground ? 'overlay-no-background-image' : ''
                    ].join(' ')}
                >
                    <h2 className={`custom-style-expand ${hasBackground ? '' : 'inactive'}`}>
                        <Checkbox
                            checked={hasBackground}
                            onChange={e => {
                                changeHasBackground(e);
                            }}
                        >{language['input.background.toggle-label']}</Checkbox>
                        <br />
                        <i>{language['input.background.description']}</i>
                    </h2>
                    <div
                        className={`background-picker ${hasBackground ? '' : 'overlay-no-background'}`}
                        style={{
                            ...({
                                '--card-height': `${height * globalScale}px`,
                                '--card-width': `${width * globalScale}px`,
                                '--global-scale': `${globalScale}`,
                                '--cropper-width': `${300}px`,
                            }),
                        } as React.CSSProperties}
                    >
                        <BackgroundInputGroup
                            ref={backgroundInputRef}
                            receivingCanvas={backgroundReceivingCanvas}
                            onSourceLoaded={onSourceLoaded}
                            onTainted={onTainted}
                            onCropChange={onCropChange}
                            backgroundColor={opacity.baseFill}
                        >
                            <div className="layout-picker-panel">
                                <div className="layout-picker-subpanel color-section">
                                    <h3>{language['input.background-color.label']}</h3>
                                    <Suspense fallback={<LoadingLabel />}>
                                        <CompactPicker
                                            colors={DefaultColorList}
                                            color={opacity.baseFill}
                                            onChangeComplete={color => {
                                                setOpacity(cur => ({ ...cur, baseFill: color.hex }));
                                            }}
                                        />
                                    </Suspense>
                                </div>
                                {!noBackground && <div className="layout-picker-subpanel type-section">
                                    <h3>{language['input.background-type.label']}</h3>
                                    <RadioTrain
                                        className="background-type-picker"
                                        onChange={changeBackgroundType}
                                        optionList={getBackgroundTypeList({
                                            strict: language['input.background-type.strict.label'],
                                            fit: language['input.background-type.fit.label'],
                                            full: language['input.background-type.full.label'],
                                            frame: language['input.background-type.frame.label'],
                                        })}
                                        value={backgroundType}
                                    />
                                </div>}
                            </div>
                        </BackgroundInputGroup>
                    </div>
                </StyledBaseFillPickerContainer>
            </div>}
            placement="bottom"
        >
            <PopoverButton
                className="background-label"
                $softMode={softMode}
                $active={hasBackground}
            >
                <div
                    className="background-preview"
                    style={{ backgroundColor: hasBackground ? opacity.baseFill : DEFAULT_BASE_FILL_COLOR }}
                >
                    {hasBackground
                        ? background || backgroundData
                            ? <img
                                className="background-image-preview"
                                src={backgroundSource === 'online'
                                    ? background
                                    : backgroundData}
                                alt="Background"
                            />
                            : null
                        : <BorderOuterOutlined className="no-background-icon" />}
                </div>
                <span>{language['input.background.label']}</span>
            </PopoverButton>
        </Popover>
        <OpacityPicker
            value={opacity}
            onChange={setOpacity}
        />
        <FrameBlendingPanel
            onTainted={onTainted}
            receivingCanvas={overlayReceivingCanvas}
            onFrameChange={onFrameChange}
            onCropChange={onCropChange}
            onSourceLoaded={onSourceLoaded}
        />
        {showCreativeOption && <PopoverButton
            tabIndex={0}
            $softMode={softMode}
            $active={isCustomCardLayout}
            className="frame-layout-button"
            onClick={() => setFrameCoordinateVisible(true)}
            onKeyDown={e => {
                if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === '  ') {
                    setFrameCoordinateVisible(true);

                    return false;
                }
            }}
        >
            <div className="button-label">
                {language['input.frame-coordinate.label']}
            </div>
        </PopoverButton>}
        <Modal
            visible={frameCoordinateVisible}
            onCancel={() => setFrameCoordinateVisible(false)}
            width={380}
            closable={false}
            footer={null}
            className="global-input-overlay frame-coordinate-overlay layout-picker-overlay"
        >
            <FrameCoordinatePanel
                ref={frameCoordinateRef}
            />
        </Modal>
    </StyledLayoutPickerContainer>;
});