import { getNavigationProps, mergeClass, resolveFrameStyle } from 'src/util';
import { StyledPendulumFrameContainer } from '../input-panel.styled';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { FramePreset, useCard, useCarderDb, useGlobal, useLanguage } from 'src/service';
import { getFoilButtonList, getFrameButtonList } from '../const';
import { Button, Checkbox } from 'antd';
import { FrameInfoBlock, HorizontalSketchPicker, RadioTrain } from 'src/component';
import styled from 'styled-components';
import { CanvasConst, DefaultFrameInfo, DyeIndexMap, FrameDyeList, FrameInfoMap, FramePositionMap, getDefaultDyeList } from 'src/model';
import { useShallow } from 'zustand/react/shallow';
import { FramePresetPanel } from './frame-preset-panel';
import { CardLayoutPreview } from './card-layout-preview';
import { v4 as uuid } from 'uuid';

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
    .frame-action {
        .ant-btn {
            width: 100%;
            & + .ant-btn {
                margin-top: var(--spacing-xs);
            }
        }
    }
    .frame-preset-panel {
        grid-column: -1 / 1;
        margin-top: var(--spacing-sm);
        display: grid;
        grid-template-columns: repeat(auto-fit, 55px);
        row-gap: var(--spacing-sm);
        padding-top: var(--spacing-sm);
        border-top: var(--bw) solid var(--sub-level-3);
    }
    .frame-preset-option {
        display: inline-block;
        line-height: 1.25;
        text-align: center;
        .anticon {
            cursor: pointer;
            &:hover {
                color: var(--sub-danger);
            }
        }
    }
`;

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
    const { db } = useCarderDb();
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
    const [, setFramePresetList] = useGlobal('layoutPresetList');
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
                onLayoutSelect={key => setActiveLayout(key)}
                dyeList={dyeList}
                foil={foil}
                language={language}
                vertical={true}
            />
            <div className="frame-action">
                <Button
                    size="small"
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
                    {language['generic.reset.label']}
                </Button>
                <Button
                    size="small"
                    type="primary"
                    onClick={async () => {
                        const key = uuid();
                        const value: FramePreset = {
                            foil,
                            frame,
                            leftFrame,
                            pendulumFrame,
                            pendulumRightFrame,
                            rightFrame,
                            effectStyle: { background: effectBackground },
                            pendulumStyle: { background: pendulumEffectBackground },
                            dyeList: [...dyeList],
                        };
                        if (db) {
                            const tx = db.transaction('presetLayoutStore', 'readwrite');
                            await db.put('presetLayoutStore', { key, content: JSON.stringify(value) });
                            await tx.done;
                        }
                        setFramePresetList(cur => [
                            ...cur,
                            {
                                key,
                                content: value,
                            },
                        ]);
                    }}
                >
                    {language['input.advanced-frame.save.label']}
                </Button>
            </div>
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
        <FramePresetPanel
            language={language}
            isPendulum={isPendulum}
            onActive={content => {
                const {
                    dyeList,
                    foil,
                    frame,
                    pendulumFrame,
                    leftFrame,
                    pendulumRightFrame,
                    rightFrame,
                    effectStyle,
                    pendulumStyle,
                } = content;
                onFrameChange(frame);
                changeBottomLeftFrame(pendulumFrame);
                changeBottomRightFrame(pendulumRightFrame);
                changeTopLeftFrame(leftFrame);
                changeTopRightFrame(rightFrame);
                changeEffectBackground(effectStyle.background);
                changePendulumEffectBackground(pendulumStyle.background);
                changeFoil(foil);
                changeDyeList(dyeList);
            }}
        />
    </FrameLayoutContainer>;
});

export * from './frame-behavior-setting-panel';
export * from './card-layout-preview';