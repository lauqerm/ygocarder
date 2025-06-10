import { getNavigationProps, mergeClass, resolveFrameStyle } from 'src/util';
import { StyledPendulumFrameContainer } from '../input-panel.styled';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useCard, useLanguage } from 'src/service';
import { getFrameButtonList } from '../const';
import { Button, Checkbox } from 'antd';
import { FrameInfoBlock, RadioTrain } from 'src/component';
import styled from 'styled-components';
import { CanvasConst, FrameInfoMap, FramePositionMap } from 'src/model';
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
    padding: var(--spacing-xs);
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
            padding-bottom: var(--spacing-xs);
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
    --layout-width: ${props => props.$width}px;
    --layout-height: ${props => props.$height}px;
    display: inline-block;
    width: var(--layout-width);
    height: var(--layout-height);
    box-shadow: 0 0 2px 0 #202020;
    position: relative;
    background: var(--main-level-2);
    .overlay-patch {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .card-layout {
        position: absolute;
        cursor: pointer;
        &.unmodified .overlay-patch {
            background: repeating-linear-gradient(
                45deg,
                #44444466,
                #44444466 8px,
                #00000000 8px,
                #00000000 12px
            );
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
`;

export type CardLayoutPreview = {
    width: number,
    height: number,
    baseLayoutState?: Record<string, string | undefined>,
    resolvedLayoutState: Record<string, string | undefined>,
    isPendulum: boolean,
    activeLayout?: string,
    onClick?: (key: string) => void,
};
export const CardLayoutPreview = ({
    width,
    height,
    baseLayoutState,
    resolvedLayoutState,
    isPendulum,
    activeLayout,
    onClick,
}: CardLayoutPreview) => {
    return <CardLayoutContainer $width={width} $height={height} $hoverable={!!onClick}>
        {[
            { key: 'topLeftFrame', className: 'card-layout partial-layout top-left' },
            { key: 'topRightFrame', className: 'card-layout partial-layout top-right' },
            { key: 'bottomLeftFrame', className: 'card-layout partial-layout bottom-left' },
            { key: 'bottomRightFrame', className: 'card-layout partial-layout bottom-right' },
            { key: 'effectBackground', className: 'card-layout float-layout effect-background' },
            { key: 'pendulumEffectBackground', className: 'card-layout float-layout pendulum-effect-background' },
        ].map(({ className, key }) => {
            const frame = resolvedLayoutState[key];

            if (!frame) return null;
            if (!isPendulum && key === 'pendulumEffectBackground') return null;
            const {
                labelBackgroundColor,
                labelBackgroundImage,
            } = FrameInfoMap[frame];
            return <div key={key}
                tabIndex={0}
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
                />
            </div>;
        })}
    </CardLayoutContainer>;
};

type FramelayoutPickerRef = {
    focus: () => void,
};
export type FramelayoutPicker = {
    isPendulum: boolean,
    pendulumFrame: string,
    frameList: ReturnType<typeof getFrameButtonList>,
    onFrameChange: (frame: string) => void,
    onCancel: () => void,
};
export const FrameLayoutPicker = forwardRef<FramelayoutPickerRef, FramelayoutPicker>(({
    frameList,
    onFrameChange,
    onCancel,
}, ref) => {
    const language = useLanguage();
    const {
        isPendulum,
        frame,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        effectBackground, pendulumEffectBackground,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            isPendulum,
            frame,
            leftFrame, rightFrame,
            pendulumFrame, pendulumRightFrame,
            effectStyle,
            pendulumStyle,
        },
        setCard,
        getUpdater,
    }) => ({
        isPendulum,
        frame,
        leftFrame, rightFrame,
        pendulumFrame, pendulumRightFrame,
        effectBackground: effectStyle.background,
        pendulumEffectBackground: pendulumStyle.background,
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
    const inputRef = useRef<HTMLInputElement>(null);
    const [focus, setFocus] = useState(0);
    const [activeLayout, setActiveLayout] = useState('frame');

    useEffect(() => {
        /** Avoid confusion */
        if (activeLayout === 'pendulumEffectBackground' && !isPendulum) setActiveLayout('frame');
    }, [activeLayout, isPendulum]);

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
    }));

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
    return <FrameLayoutContainer>
        <div className="visual-preview-container">
            <label>{language['input.advanced-frame.main.label']}</label>
            <FrameInfoBlock
                className={activeLayout === 'frame' ? 'active' : ''}
                {...FrameInfoMap[frame]}
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
                <Checkbox ref={inputRef}
                    className={mergeClass('inline-input', activeLayout === 'frame' ? 'checkbox-disabled' : '')}
                    checked={activeFrame === 'auto'}
                    disabled={activeLayout === 'frame'}
                    onChange={e => {
                        changeLayout(e.target.checked ? 'auto' : (recentCustomPendulumFrame.current[activeLayout] ?? 'auto'));
                    }}
                >{language['input.frame.auto']}</Checkbox>
                <Checkbox ref={inputRef}
                    className={mergeClass('inline-input', activeLayout === 'frame' ? 'checkbox-disabled' : '')}
                    checked={activeFrame === 'transparent'}
                    disabled={activeLayout === 'frame'}
                    onChange={e => {
                        changeLayout(e.target.checked ? 'transparent' : (recentCustomPendulumFrame.current[activeLayout] ?? 'transparent'));
                    }}
                >{language['input.frame.transparent']}</Checkbox>
                <RadioTrain
                    className="frame-radio"
                    value={activeFrame}
                    onChange={value => {
                        if (activeLayout === 'frame') onFrameChange(value);
                        else changeLayout(value);
                    }}
                    optionList={frameList}
                />
            </StyledPendulumFrameContainer>
        </div>
    </FrameLayoutContainer>;
});