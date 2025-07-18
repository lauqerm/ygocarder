import { getNavigationProps, HexColorRegex, mergeClass, resolveFrameStyle } from 'src/util';
import { StyledPendulumFrameContainer } from '../input-panel.styled';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useCard, useLanguage, WithLanguage } from 'src/service';
import { getFoilButtonList, getFrameButtonList } from '../const';
import { Button, Checkbox } from 'antd';
import { FrameInfoBlock, HorizontalSketchPicker, RadioTrain } from 'src/component';
import styled from 'styled-components';
import { CanvasConst, DefaultFrameInfo, DyeIndexMap, Foil, FoilMap, FrameDyeList, FrameInfoMap, FramePositionMap, getDefaultDyeList } from 'src/model';
import { useShallow } from 'zustand/react/shallow';

const {
    width,
    height,
} = CanvasConst;
const FrameLayoutContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    ${StyledPendulumFrameContainer} {
        border: none;
        box-shadow: none;
        padding: 0;
    }
    .visual-preview-container {
        color: var(--color-heavy);
        width: 110px; // Alignment
        text-align: center;
        label {
            display: block;
            padding-bottom: var(--spacing-xxs);
        }
        .frame-info-block {
			height: 30px; // Alignment
			line-height: 28px; // Alignment with border 1px
            border: var(--bw) solid var(--sub-level-1);
            background-color: var(--main-level-1);
            margin-bottom: var(--spacing-xs);
            cursor: pointer;
            .frame-info-block-label {
                padding: 0 var(--spacing-xs);
            }
            &.active {
                border: var(--bw) dashed var(--main-level-2);
            }
            &:hover {
                border: var(--bw) solid var(--main-level-2);
            }
        }
    }
`;
const CardLayoutContainer = styled.div<{ $width: number, $height: number, $hoverable: boolean }>`
    /** Ensure even width */
    --layout-width: ${props => Math.round(props.$width / 2) * 2}px;
    --layout-height: ${props => props.$height}px;
    display: inline-block;
    width: var(--layout-width);
    height: var(--layout-height);
    box-shadow: 0 0 2px 0 #202020;
    position: relative;
    background: var(--main-level-2);
    button {
        border: none;
    }
    .overlay-patch {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .dye-patch {
        position: absolute;
        z-index: 1;
        top: 10%;
        left: 50%;
        min-width: 6px;
        min-height: 6px;
        width: ${props => props.$width / 6}px;
        height: ${props => props.$width / 6}px;
        border-radius: var(--br-lg);
        transform: translateX(-50%);
    }
    .card-layout {
        position: absolute;
        cursor: pointer;
        padding: 0;
        &.unmodified .overlay-patch {
            background: var(--gradient-diagonal-stripe);
        }
    }
    .partial-layout {
        background-clip: padding-box;
        ${props => props.$hoverable
        ? `
                border: var(--bw) solid var(--main-level-1);
                &.active {
                    border: var(--bw) dashed var(--main-level-1);
                }
                &:hover {
                    border: var(--bw) dashed var(--main-level-2);
                }
            `
        : ''}
    }
    .float-layout {
        ${props => props.$hoverable
        ? `
                border: var(--bw) solid var(--main-level-1);
                &.active {
                    border: var(--bw) dashed var(--main-level-2);
                    box-shadow: 0 0 1px 0 var(--main-level-1);
                }
                &:hover {
                    border: var(--bw) solid var(--main-level-2);
                    box-shadow: 0 0 1px 0 var(--main-level-1);
                }
            `
        : ''}
    }
    /** For Zarc's gradient */
    .partial-layout {
        background-size: 200%;
    }
    .top-left {
        width: 50%; height: 50%;
        top: 0; left: 0;
    }
    .top-right {
        width: 50%; height: 50%;
        top: 0; left: 50%;
        background-position-x: 100%;
    }
    .bottom-left {
        width: 50%; height: 50%;
        top: 50%; left: 0;
    }
    .bottom-right {
        width: 50%; height: 50%;
        top: 50%; left: 50%;
        background-position-x: 100%;
    }
    /** Background width is slightly reduced to help active bottom frames easier */
    .effect-background {
        width: 80%;
        height: 20%;
        bottom: 5%;
        left: 10%;
        background-size: 125%;
        background-position-x: 50%;
    }
    .pendulum-effect-background {
        width: 80%;
        height: 13%;
        bottom: 28%;
        left: 10%;
        background-size: 125%;
        background-position-x: 50%;
    }
    &.is-vertical {
        margin-bottom: var(--spacing-3xl);
        .float-layout.foil {
            width: 100%;
            left: 0;
            bottom: -22.5%;
            font-size: var(--fs-sm);
            background-color: var(--main-level-1);
        }
    }
    &.is-horizontal {
        margin-right: var(--spacing-lg);
        .float-layout.foil {
            width: 50%;
            height: 80%;
            top: 10%;
            right: -60%;
            font-size: 0;
            background-color: var(--main-level-1);
        }
    }
`;

export type CardLayoutPreview = {
    tabIndex?: number,
    width: number,
    height: number,
    baseLayoutState?: Record<string, string | undefined>,
    resolvedLayoutState: Record<string, string | undefined>,
    isPendulum: boolean,
    activeLayout?: string,
    dyeList: string[],
    foil: Foil,
    onClick?: (key: string) => void,
    vertical?: boolean,
} & WithLanguage;
export const CardLayoutPreview = ({
    tabIndex = 0,
    width,
    height,
    baseLayoutState,
    resolvedLayoutState,
    isPendulum,
    activeLayout,
    dyeList,
    foil,
    onClick,
    language,
    vertical = false,
}: CardLayoutPreview) => {
    return <CardLayoutContainer
        $width={width}
        $height={height}
        $hoverable={!!onClick}
        className={mergeClass('card-layout-container', vertical ? 'is-vertical' : 'is-horizontal')}
    >
        {[
            { key: 'topLeftFrame', className: 'card-layout partial-layout top-left' },
            { key: 'topRightFrame', className: 'card-layout partial-layout top-right' },
            { key: 'bottomLeftFrame', className: 'card-layout partial-layout bottom-left' },
            { key: 'bottomRightFrame', className: 'card-layout partial-layout bottom-right' },
            { key: 'effectBackground', className: 'card-layout float-layout effect-background' },
            { key: 'pendulumEffectBackground', className: 'card-layout float-layout pendulum-effect-background' },
        ].map(({ className, key }) => {
            const frame = resolvedLayoutState[key];
            const dyeIndex = DyeIndexMap[key];
            const dyeColor = dyeIndex == null ? undefined : dyeList[DyeIndexMap[key]];

            if (!frame) return null;
            if (!isPendulum && key === 'pendulumEffectBackground') return null;
            const {
                labelBackgroundColor,
                labelBackgroundImage,
            } = FrameInfoMap[frame] ?? {};
            return <button key={key}
                {...tabIndex < 0 ? {} : { tabIndex }}
                className={mergeClass(
                    className,
                    key === activeLayout ? 'active' : '',
                    baseLayoutState?.[key] === 'auto' ? 'unmodified' : '',
                )}
                onClick={() => onClick?.(key)}
                style={labelBackgroundImage
                    ? { backgroundImage: labelBackgroundImage }
                    : { backgroundColor: labelBackgroundColor }
                }
            >
                <div
                    className="overlay-patch"
                    style={dyeColor
                        ? {
                            boxShadow: `0 0 0 ${Math.round(width / 16)}px ${dyeColor} inset`,
                        }
                        : {}}
                />
            </button>;
        })}
        <button
            {...tabIndex < 0 ? {} : { tabIndex }}
            className={mergeClass(
                'card-layout float-layout foil',
                'foil' === activeLayout ? 'active' : '',
            )}
            onClick={() => onClick?.('foil')}
            style={{ boxShadow: `0 0 0 2px ${HexColorRegex.test(dyeList[DyeIndexMap.foil])
                ? dyeList[DyeIndexMap.foil]
                : FoilMap[foil].color} inset` }}
        >
            {language['input.foil.label']}
        </button>
    </CardLayoutContainer>;
};

type FramelayoutSettingPanelRef = {
    focus: () => void,
};
export type FramelayoutSettingPanel = {
    isPendulum: boolean,
    pendulumFrame: string,
    frameList: ReturnType<typeof getFrameButtonList>,
    onFrameChange: (frame: string) => void,
    onCancel: () => void,
};
export const FrameLayoutSettingPanel = forwardRef<FramelayoutSettingPanelRef, FramelayoutSettingPanel>(({
    frameList,
    onFrameChange,
    onCancel,
}, ref) => {
    const language = useLanguage();
    const {
        isPendulum,
        foil,
        frame,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        effectBackground, pendulumEffectBackground,
        dyeList,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            isPendulum,
            foil,
            frame,
            leftFrame, rightFrame,
            pendulumFrame, pendulumRightFrame,
            dyeList,
            effectStyle,
            pendulumStyle,
        },
        setCard,
        getUpdater,
    }) => ({
        isPendulum,
        foil,
        frame,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        effectBackground: effectStyle.background,
        pendulumEffectBackground: pendulumStyle.background,
        dyeList,
        setCard,
        getUpdater,
    })));
    const recentCustomPendulumFrame = useRef({
        topLeftFrame: pendulumFrame === 'auto' ? 'spell' : pendulumFrame,
        topRightFrame: pendulumFrame === 'auto' ? 'spell' : pendulumFrame,
        bottomLeftFrame: pendulumFrame === 'auto' ? 'spell' : pendulumFrame,
        bottomRightFrame: pendulumFrame === 'auto' ? 'spell' : pendulumFrame,
        effectBackground: pendulumFrame === 'auto' ? 'spell' : pendulumFrame,
        pendulumEffectBackground: pendulumFrame === 'auto' ? 'spell' : pendulumFrame,
    });
    const [focus, setFocus] = useState(0);
    const [activeLayout, setActiveLayout] = useState('frame');
    const frameLayoutMainId = 'frame-layout-main';
    const foilButtonList = useMemo(() => getFoilButtonList({
        normal: language['input.foil.normal.label'],
        gold: language['input.foil.gold.label'],
        platinum: language['input.foil.platinum.label'],
    }), [language]);

    useEffect(() => {
        /** Avoid confusion */
        if (activeLayout === 'pendulumEffectBackground' && !isPendulum) setActiveLayout('frame');
    }, [activeLayout, isPendulum]);

    useImperativeHandle(ref, () => ({
        focus: () => document.getElementById(frameLayoutMainId)?.focus(),
    }));

    const changeFoil = useMemo(() => getUpdater('foil'), [getUpdater]);
    const changeBottomLeftFrame = useMemo(() => getUpdater('pendulumFrame'), [getUpdater]);
    const changeBottomRightFrame = useMemo(() => getUpdater('pendulumRightFrame'), [getUpdater]);
    const changeTopLeftFrame = useMemo(() => getUpdater('leftFrame'), [getUpdater]);
    const changeTopRightFrame = useMemo(() => getUpdater('rightFrame'), [getUpdater]);
    const changeEffectBackground = (background: string) => setCard(currentCard => {
        const nextEffectStyle = { ...currentCard.effectStyle };
        nextEffectStyle.background = background;

        return {
            ...currentCard,
            effectStyle: nextEffectStyle,
        };
    });
    const changePendulumEffectBackground = (background: string) => setCard(currentCard => {
        const nextPendulumEffectStyle = { ...currentCard.pendulumStyle };
        nextPendulumEffectStyle.background = background;

        return {
            ...currentCard,
            pendulumStyle: nextPendulumEffectStyle,
        };
    });
    const changeDyeList = useMemo(() => getUpdater('dyeList'), [getUpdater]);
    const changeDye = (color: string, name: string) => setCard(currentCard => {
        const position = DyeIndexMap[name];

        if (typeof position !== 'number') return currentCard;
        const nextDyeList = [...currentCard.dyeList] as FrameDyeList;
        nextDyeList[position] = color;

        return {
            ...currentCard,
            dyeList: nextDyeList,
        };
    });
    const changeLayout = (layoutValue: string) => {
        if (activeLayout === 'bottomLeftFrame') changeBottomLeftFrame(layoutValue);
        if (activeLayout === 'bottomRightFrame') changeBottomRightFrame(layoutValue);
        if (activeLayout === 'topLeftFrame') changeTopLeftFrame(layoutValue);
        if (activeLayout === 'topRightFrame') changeTopRightFrame(layoutValue);
        if (activeLayout === 'effectBackground') changeEffectBackground(layoutValue);
        if (activeLayout === 'pendulumEffectBackground') changePendulumEffectBackground(layoutValue);
    };

    const layoutState = {
        frame,
        topLeftFrame: leftFrame,
        topRightFrame: rightFrame,
        bottomLeftFrame: pendulumFrame,
        bottomRightFrame: pendulumRightFrame,
        effectBackground,
        pendulumEffectBackground,
    };
    const activeFrame = layoutState[activeLayout];
    const resolvedLayoutStyle = resolveFrameStyle(layoutState, isPendulum);
    const dyeColor = DyeIndexMap[activeLayout];
    return <FrameLayoutContainer>
        <div className="visual-preview-container">
            <label>{language['input.advanced-frame.main.label']}</label>
            <FrameInfoBlock
                id={frameLayoutMainId}
                tabIndex={0}
                className={activeLayout === 'frame' ? 'active' : ''}
                {...FrameInfoMap[frame] ?? DefaultFrameInfo}
                onClick={() => setActiveLayout('frame')}
            />
            <label>{language['input.advanced-frame.detailed.label']}</label>
            <CardLayoutPreview
                width={Math.round(width / 20) * 2}
                height={Math.round(height / 20) * 2}
                isPendulum={isPendulum}
                baseLayoutState={layoutState}
                resolvedLayoutState={resolvedLayoutStyle}
                activeLayout={activeLayout}
                onClick={key => setActiveLayout(key)}
                dyeList={dyeList}
                foil={foil}
                language={language}
                vertical={true}
            />
            <Button
                size="small"
                type="primary"
                onClick={() => {
                    changeBottomLeftFrame('auto');
                    changeBottomRightFrame('auto');
                    changeTopLeftFrame('auto');
                    changeTopRightFrame('auto');
                    changeEffectBackground('auto');
                    changePendulumEffectBackground('auto');
                    changeFoil('normal');
                    changeDyeList(getDefaultDyeList());
                }}
            >
                {language['button.reset.label']}
            </Button>
        </div>
        <div>
            <StyledPendulumFrameContainer
                className="pendulum-frame-picker"
                {...getNavigationProps({
                    stopPropagation: true,
                    optionLength: frameList.length,
                    setFocus,
                    onTrigger: () => {
                        if (focus >= 0) changeLayout(frameList[focus].value);
                    },
                    onCancel,
                })}
            >
                <div className="frame-part-name">
                    {language[FramePositionMap[activeLayout]?.labelKey]}
                </div>
                {/** Avoid collapsing in case of frame */}
                {activeLayout !== 'foil' && <Checkbox
                    className={mergeClass('inline-input', activeLayout === 'frame' ? 'checkbox-disabled' : '')}
                    checked={activeFrame === 'auto'}
                    disabled={activeLayout === 'frame'}
                    onChange={e => {
                        changeLayout(e.target.checked ? 'auto' : (recentCustomPendulumFrame.current[activeLayout] ?? 'auto'));
                    }}
                >{language['input.frame.auto']}</Checkbox>}
                {activeLayout === 'foil'
                    ? <RadioTrain className="foil-radio" value={foil} onChange={changeFoil} optionList={foilButtonList}>
                        <span>{language['input.foil.label']}</span>
                    </RadioTrain>
                    : <RadioTrain
                        className="frame-radio"
                        value={activeFrame}
                        onChange={value => {
                            if (activeLayout === 'frame') onFrameChange(value);
                            else changeLayout(value);
                        }}
                        optionList={frameList}
                    />}
                {typeof dyeColor === 'number' && <HorizontalSketchPicker
                    value={dyeList[dyeColor]}
                    onChange={color => {
                        if (color !== dyeList[dyeColor]) changeDye(color, activeLayout);
                    }}
                >
                    {language['input.advanced-frame.dye']}
                </HorizontalSketchPicker>}
            </StyledPendulumFrameContainer>
        </div>
    </FrameLayoutContainer>;
});

export * from './frame-behavior-setting-panel';