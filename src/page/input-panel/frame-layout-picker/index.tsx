import { getNavigationProps, resolveFrameStyle } from 'src/util';
import { StyledPendulumFrameContainer } from '../input-panel.styled';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useLanguage } from 'src/service';
import { getFrameButtonList } from '../const';
import { Checkbox } from 'antd';
import { RadioTrain } from 'src/component';
import styled from 'styled-components';
import { CanvasConst, FrameInfoMap } from 'src/model';
import { DoubleLeftOutlined } from '@ant-design/icons';

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
    .frame-switch-mode {
        top: 0;
        right: 0;
    }
    ${StyledPendulumFrameContainer} {
        border: none;
        box-shadow: none;
        padding: 0;
    }
`;
const CardLayoutContainer = styled.div`
    // Ensure the card layout is always even-sized
    --layout-width: ${Math.round(width / 20) * 2}px;
    --layout-height: ${Math.round(height / 20) * 2}px;
    display: inline-block;
    width: var(--layout-width);
    height: var(--layout-height);
    box-shadow: 0 0 2px 0 #202020;
    position: relative;
    background: var(--main-level-2);
    .card-layout {
        position: absolute;
        cursor: pointer;
        background-clip: padding-box;
        border: var(--bw) solid var(--main-level-1);
        &:hover {
            border: var(--bw) dashed var(--main-level-2);
        }
        &.active {
            border: var(--bw) dashed var(--main-level-1);
        }
    }
    .float-layout {
        &:hover {
            border: var(--bw) solid var(--main-level-1);
            box-shadow: 0 0 1px 0 var(--main-level-2);
        }
        &.active {
            border: var(--bw) dashed var(--main-level-1);
            box-shadow: 0 0 1px 0 var(--main-level-2);
        }
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

type FramelayoutPickerRef = {
    focus: () => void,
};
export type FramelayoutPicker = {
    isPendulum: boolean,
    pendulumFrame: string,
    frameList: ReturnType<typeof getFrameButtonList>,
    onChange: (layoutData: Record<string, string | undefined>) => void,
    onCancel: () => void,
    onSwitchMode: (mode: 'standard' | 'advanced') => void,
};
export const FrameLayoutPicker = forwardRef<FramelayoutPickerRef, FramelayoutPicker>(({
    isPendulum,
    frameList,
    pendulumFrame,
    onChange,
    onCancel,
    onSwitchMode,
}, ref) => {
    const language = useLanguage();
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
    const [activeLayout, setActiveLayout] = useState('topLeftFrame');
    const [layoutState, setLayoutState] = useState<Record<string, string | undefined>>({
        topLeftFrame: 'normal',
        topRightFrame: 'effect',
        bottomLeftFrame: 'xyz',
        bottomRightFrame: 'synchro',
        effectBackground: 'spell',
        pendulumEffectBackground: 'trap',
    });

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
    }));

    useEffect(() => {
        onChange(layoutState);
    }, [layoutState]);

    const changeLayout = (layout: string) => {
        setLayoutState(cur => {
            return {
                ...cur,
                [activeLayout]: layout,
            };
        });
    };

    const activeFrame = layoutState[activeLayout];
    const resolvedLayoutStyle = resolveFrameStyle(layoutState, isPendulum);
    return <FrameLayoutContainer>
        <div>
            <CardLayoutContainer>
                {[
                    { key: 'topLeftFrame', className: 'card-layout partial-layout top-left' },
                    { key: 'topRightFrame', className: 'card-layout partial-layout top-right' },
                    { key: 'bottomLeftFrame', className: 'card-layout partial-layout bottom-left' },
                    { key: 'bottomRightFrame', className: 'card-layout partial-layout bottom-right' },
                    { key: 'effectBackground', className: 'card-layout float-layout effect-background' },
                    { key: 'pendulumEffectBackground', className: 'card-layout float-layout pendulum-effect-background' },
                ].map(({ className, key }) => {
                    const frame = resolvedLayoutStyle[key];

                    if (!frame) return null;
                    if (!isPendulum && key === 'pendulumEffectBackground') return null;
                    const {
                        labelBackgroundColor,
                        labelBackgroundImage,
                    } = FrameInfoMap[frame];
                    return <div key={key}
                        tabIndex={0}
                        className={`${className} ${key === activeLayout ? 'active' : ''}`}
                        onClick={() => setActiveLayout(key)}
                        style={labelBackgroundImage
                            ? { backgroundImage: labelBackgroundImage }
                            : { backgroundColor: labelBackgroundColor }
                        }
                    />;
                })}
            </CardLayoutContainer>
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
                <Checkbox ref={inputRef}
                    className="frame-auto-checkbox"
                    checked={activeFrame === 'auto'}
                    onChange={e => {
                        changeLayout(e.target.checked ? 'auto' : (recentCustomPendulumFrame.current[activeLayout] ?? 'auto'));
                    }}
                >{language['input.frame.auto']}</Checkbox>
                <div className="frame-switch-mode" onClick={() => onSwitchMode('standard')}>
                    {language['input.frame.standard.label']} <DoubleLeftOutlined />
                </div>
                <RadioTrain
                    className="frame-radio"
                    value={activeFrame}
                    onChange={changeLayout}
                    optionList={frameList}
                />
            </StyledPendulumFrameContainer>
        </div>
    </FrameLayoutContainer>;
});