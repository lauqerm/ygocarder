import { Checkbox, InputNumber, Popover, Tooltip } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { CompactPicker } from 'react-color';
import {
    BackgroundType,
    getBackgroundTypeList,
    CardOpacity,
    DEFAULT_BASE_FILL_COLOR,
    OpacityList,
    getDefaultCardOpacity,
    DefaultColorList,
} from 'src/model';
import styled from 'styled-components';
import { BackgroundInputGroup, BackgroundInputGroupRef } from './background-input-group';
import { CombinedSliderContainer, GuardedSlider, ImageCropper, RadioTrain, SolidLabel } from 'src/component';
import { useCard, useLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { BorderOuterOutlined } from '@ant-design/icons';
import './layout-picker.scss';

const StyledBoundlessOverlay = styled.span`
    white-space: pre-line;
`;
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
                box-shadow: 0 0 2px 0 #222222;
            }
        }
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

export type LayoutPicker = {
    defaultValue: Partial<CardOpacity>,
    onChange: (opacity: CardOpacity) => void,
} & Pick<ImageCropper, 'receivingCanvas' | 'onTainted' | 'onCropChange' | 'onSourceLoaded'>;
export type OpacityPickerRef = {
    setValue: (opacity: Partial<CardOpacity> & {
        background?: string,
        backgroundData?: string,
        backgroundSource?: string,
        backgroundCrop?: Partial<ReactCrop.Crop>,
        backgroundType?: BackgroundType,
    }) => void,
    isLoading: () => boolean,
};
export const LayoutPicker = forwardRef<OpacityPickerRef, LayoutPicker>(({
    receivingCanvas,
    defaultValue,
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
        getUpdater,
        hasBackground,
        isPendulum,
        setCard,
    } = useCard(useShallow(({
        card: {
            background,
            backgroundData,
            backgroundSource,
            backgroundType,
            hasBackground,
            isPendulum,
        },
        setCard,
        getUpdater,
    }) => ({
        background,
        backgroundData,
        backgroundSource,
        backgroundType,
        getUpdater,
        hasBackground,
        isPendulum,
        setCard,
    })));
    const [backgroundInputVisible, setBackgroundInputVisible] = useState(true);
    const [backgroundInputHidden, setBackgroundInputHidden] = useState(true);
    const [opacity, setOpacity] = useState(() => ({ ...getDefaultCardOpacity(), ...defaultValue }));
    const backgroundInputRef = useRef<BackgroundInputGroupRef>(null);

    const changeBackgroundType = useMemo(() => getUpdater('backgroundType'), [getUpdater]);
    const changeHasBackground = useCallback((e: any) => setCard(currentCard => {
        const nextValue = e.target.checked;

        return { ...currentCard, hasBackground: nextValue };
    }), [setCard]);

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                onChange(opacity);
            }
        }, 500);

        return () => {
            relevant = false;
        };
        /** No need to depend on callback */
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        }
    }));

    const noBackground = (background ?? '').length === 0
        && (backgroundInputRef.current?.hasImage() !== true);
    return <StyledLayoutPickerContainer className="card-opacity-slider-container">
        <Tooltip
            overlayClassName="long-tooltip-overlay"
            title={<StyledBoundlessOverlay>
                {language['input.opacity.boundless.tooltip']}
            </StyledBoundlessOverlay>}
        >
            <SolidLabel className="background-label">
                <Checkbox
                    className="art-frame"
                    onChange={value => setOpacity(cur => ({ ...cur, boundless: value.target.checked }))}
                    checked={opacity.boundless}
                >
                    &nbsp;{language['input.opacity.boundless.label']}
                </Checkbox>
            </SolidLabel>
        </Tooltip>
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
                        'custom-style-picker',
                        noBackground ? 'overlay-no-background-image' : ''
                    ].join(' ')}
                >
                    <h3 className={`custom-style-expand ${hasBackground ? '' : 'inactive'}`}>
                        <Checkbox
                            checked={hasBackground}
                            onChange={e => {
                                changeHasBackground(e);
                            }}
                        >{language['input.background.toggle-label']}</Checkbox>
                        <br />
                        <i>{language['input.background.description']}</i>
                    </h3>
                    <div className={`background-picker ${hasBackground ? '' : 'overlay-no-background'}`}>
                        <BackgroundInputGroup
                            ref={backgroundInputRef}
                            receivingCanvas={receivingCanvas}
                            onSourceLoaded={onSourceLoaded}
                            onTainted={onTainted}
                            onCropChange={onCropChange}
                            backgroundColor={opacity.baseFill}
                        >
                            <div className="layout-picker-panel">
                                <div className="layout-picker-subpanel color-section">
                                    <h2>{language['input.background-color.label']}</h2>
                                    <CompactPicker
                                        colors={DefaultColorList}
                                        color={opacity.baseFill}
                                        onChangeComplete={color => {
                                            setOpacity(cur => ({ ...cur, baseFill: color.hex }));
                                        }}
                                    />
                                </div>
                                {!noBackground && <div className="layout-picker-subpanel type-section">
                                    <h2>{language['input.background-type.label']}</h2>
                                    <RadioTrain
                                        className="background-type-picker"
                                        onChange={changeBackgroundType}
                                        optionList={getBackgroundTypeList({
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
            <SolidLabel className="background-label">
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
                {language['input.background.label']}
            </SolidLabel>
        </Popover>
        {OpacityList.map(({ labelKey, type, subType, tooltipKey }) => {
            if (type === 'pendulum' && !isPendulum) return null;
            const activable = !!subType;
            const isActive = subType && opacity[subType];
            return <CombinedSliderContainer key={type}
                className={[
                    'card-opacity-slider',
                    isActive ? '' : 'inactive',
                ].join(' ')}
            >
                <SolidLabel className="slider-label">
                    {activable && <Tooltip
                        title={tooltipKey
                            ? language[tooltipKey] ?? null
                            : null}
                        overlayClassName="long-tooltip-overlay"
                    >
                        <Checkbox
                            checked={isActive}
                            onChange={e => subType && setOpacity(cur => ({ ...cur, [subType]: e.target.checked }))}
                        />
                    </Tooltip>}
                    {language[labelKey]}
                </SolidLabel>
                <InputNumber
                    size="small"
                    min={0}
                    max={100}
                    onChange={value => setOpacity(cur => ({ ...cur, [type]: typeof value === 'number' ? value : 100 }))}
                    value={opacity[type] ?? 100}
                />
                <GuardedSlider
                    min={0}
                    max={100}
                    step={5}
                    onChange={value => setOpacity(cur => ({ ...cur, [type]: value }))}
                    value={opacity[type] ?? 100}
                />
                <div className="slider-padding" />
            </CombinedSliderContainer>;
        })}
    </StyledLayoutPickerContainer>;
});