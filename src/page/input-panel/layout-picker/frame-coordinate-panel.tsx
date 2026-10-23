import { InputNumber } from 'antd';
import { forwardRef, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import Moveable from 'react-moveable';
import { IconButton } from 'src/component';
import { CanvasConst, MoveableRegionList, MoveableRegionMap, parseCoordinate } from 'src/model';
import { useCard, useLanguage } from 'src/service';
import { mergeClass } from 'src/util';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { VerticalAlignMiddleOutlined, RedoOutlined } from '@ant-design/icons';

const {
    width,
    height,
} = CanvasConst;
const FrameCoordinatePanelContainer = styled.div`
    --moveable-scale: 0.3;
    display: grid;
    grid-template-columns: calc(var(--moveable-scale) * ${width}px) 1fr;
    gap: var(--spacing);
    .moveable-area-container {
        position: relative;
        height: calc(var(--moveable-scale) * ${height}px);
    }
    .moveable-area-resizer {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 0 0;
        transform: scale(var(--moveable-scale));
        overflow: hidden;
    }
    .control-panel {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content max-content max-content max-content 1fr;
        gap: var(--spacing);
        align-items: center;
        label {
            margin-bottom: var(--spacing-xs);
            display: grid;
            align-items: center;
            grid-template-columns: 1fr max-content;
            gap: var(--spacing-xs);
            .hidden {
                visibility: none;
            }
        }
        .ant-input-number {
            width: 100%;
        }
        .control-panel-action {
            align-self: start;
        }
        .control-panel-button {
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-xs);
            > * {
                min-width: 24px; // Alignment
            }
            .icon-button {
                margin: 0;
            }
        }
        .action-vertical-align {
            .anticon {
                transform: rotate(90deg);
            }
        }
    }
`;
const CardMovableContainer = styled.div`
    position: relative;
    box-shadow: var(--bs-2);
    background-color: var(--main-level-1);
`;
const MoveableTarget = styled.div`
    position: absolute;
    border: var(--bw-lg) solid var(--sub-active);
    cursor: pointer;
    &:hover {
        background-color: var(--sub-active);
    }
    &.active-target {
        background-color: var(--main-active);
    }
`;
/** Ensure that the region never completely out of the card frame */
const BOUND_PADDING = 80;
export type FrameCoordinatePanelRef = Record<string, never>;
export const FrameCoordinatePanel = forwardRef(() => {
    const language = useLanguage();
    const [currentCoordinate, setCurrentCoordinate] = useState({
        name: 'none' as 'none' | keyof typeof MoveableRegionMap,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        minWidth: 0,
        minHeight: 0,
        resizable: false,
        useDefault: true,
    });
    const moveableMapRef = useRef<Record<string, Moveable>>({});
    const {
        coordinateMap,
        setCard,
    } = useCard(useShallow(({
        card: {
            coordinateMap,
        },
        setCard,
    }) => ({
        coordinateMap,
        setCard,
    })));
    const changeCoordinate = useCallback((coordinate: typeof currentCoordinate) => {
        setCard(currentCard => {
            const nextCoordinate = [
                coordinate.x,
                coordinate.y,
                coordinate.width,
                coordinate.height,
            ].join('|');
            const nextCoordinateMap = { ...currentCard.coordinateMap, [coordinate.name]: nextCoordinate };
            if (coordinate.useDefault) delete nextCoordinateMap[coordinate.name];

            return {
                ...currentCard,
                coordinateMap: nextCoordinateMap,
            };
        });
    }, [setCard]);
    const changeTarget = (name: string, transformer: (target: HTMLDivElement) => void) => {
        const target = document.querySelector(`.moveable-region-${name}`) as HTMLDivElement | null;
        if (target) {
            transformer(target);
            moveableMapRef.current[name]?.updateRect();
        }
    };

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) changeCoordinate(currentCoordinate);
        }, 500);

        return () => {
            relevant = false;
        };
    }, [changeCoordinate, currentCoordinate]);

    useEffect(() => {
        for (const target of MoveableRegionList) {
            const { name } = target;
            const currentCoordinate = parseCoordinate(coordinateMap[name], CanvasConst[name]);
            const targetElement = document.querySelector(`.moveable-region-${name}`) as HTMLDivElement | null;
            if (targetElement) {
                targetElement.style.width = `${currentCoordinate.width}px`;
                targetElement.style.height = `${currentCoordinate.height}px`;
                targetElement.style.transform = `translate(${currentCoordinate.x}px, calc(${currentCoordinate.y}px)`;
            }
        }
    }, []);

    const commonProps = {
        resizable: false,
        snappable: true,
        draggable: true,
        keepRatio: true,
        throttleDrag: 1,
        startDragRotate: 0,
        throttleDragRotate: 0,
    };
    const commontResetButtonProps = {
        Icon: RedoOutlined,
        tooltipProps: {
            title: language['generic.reset.tooltip'],
        },
    };
    const activeRegionName = currentCoordinate.name;
    return (
        <FrameCoordinatePanelContainer className="frame-coordinate-panel">
            <div className="moveable-area-container">
                <div className="moveable-area-resizer">
                    <CardMovableContainer className="container" style={{
                        width: `${width}px`,
                        height: `${height}px`,
                    }}>
                        {MoveableRegionList.map(({
                            name,
                            resizable,
                        }) => {
                            const allowResize = activeRegionName === name && resizable;
                            const { width, height, minWidth, minHeight } = CanvasConst[name];
                            return <Fragment key={name}>
                                <MoveableTarget
                                    className={mergeClass(
                                        'move-target',
                                        `moveable-region-${name}`,
                                        activeRegionName === name ? 'active-target' : '',
                                    )}
                                    onMouseDown={() => {
                                        const defaultCoordinate = CanvasConst[name];
                                        const regionCoordinate = parseCoordinate(coordinateMap[name], defaultCoordinate);
                                        setCurrentCoordinate({
                                            ...regionCoordinate,
                                            name,
                                            useDefault: coordinateMap[name] ? false : true,
                                            minHeight: defaultCoordinate.minHeight,
                                            minWidth: defaultCoordinate.minWidth,
                                            resizable: defaultCoordinate.resizable,
                                        });
                                    }}
                                />
                                <Moveable
                                    ref={node => {
                                        if (node) moveableMapRef.current[name] = node;
                                        else delete moveableMapRef.current[name];
                                    }}
                                    target={`.moveable-region-${name}`}
                                    edgeDraggable={false}
                                    {...commonProps}
                                    resizable={allowResize}
                                    keepRatio={allowResize ? false : true}
                                    edge={[]}
                                    bounds={{
                                        'left': -width + BOUND_PADDING,
                                        'top': -height + BOUND_PADDING,
                                        'right': -width + BOUND_PADDING,
                                        'bottom': -height + BOUND_PADDING,
                                        'position': 'css',
                                    }}
                                    onDrag={e => {
                                        setCurrentCoordinate(cur => ({ ...cur, x: e.translate[0], y: e.translate[1], useDefault: false }));
                                        e.target.style.transform = e.transform;
                                    }}
                                    onResize={e => {
                                        setCurrentCoordinate(cur => ({ ...cur, width: e.width, height: e.height, useDefault: false }));
                                        e.target.style.width = `${Math.max(minWidth, e.width)}px`;
                                        e.target.style.height = `${Math.max(minHeight, e.height)}px`;
                                        e.target.style.transform = e.drag.transform;
                                    }}
                                />
                            </Fragment>;
                        })}
                    </CardMovableContainer>
                </div>
            </div>
            <div className="control-panel">
                <h3>{language['input.frame-coordinate.label']}</h3>
                <div>
                    <label>
                        {language['input.frame-coordinate.top']}
                        <IconButton
                            {...commontResetButtonProps}
                            containerProps={{ className: (activeRegionName === 'none') ? 'hidden' : '' }}
                            onClick={() => {
                                setCurrentCoordinate(cur => {
                                    if (currentCoordinate.y !== CanvasConst[activeRegionName].y) {
                                        return { ...cur, y: CanvasConst[activeRegionName].y, useDefault: false };
                                    }
                                    return cur;
                                });
                                changeTarget(activeRegionName, target => {
                                    target.style.transform = `translate(${currentCoordinate.x}px, calc(${CanvasConst[activeRegionName].y}px)`;
                                });
                            }}
                        />
                    </label>
                    <InputNumber
                        disabled={activeRegionName === 'none'}
                        value={currentCoordinate.y}
                        onChange={value => {
                            setCurrentCoordinate(cur => {
                                if (typeof value === 'number' && cur.y !== value) {
                                    return { ...cur, y: value, useDefault: false };
                                }
                                return cur;
                            });
                        }}
                    />
                </div>
                <div>
                    <label>
                        {language['input.frame-coordinate.left']}
                        <IconButton
                            {...commontResetButtonProps}
                            containerProps={{ className: (activeRegionName === 'none') ? 'hidden' : '' }}
                            onClick={() => {
                                setCurrentCoordinate(cur => {
                                    if (currentCoordinate.x !== CanvasConst[activeRegionName].x) {
                                        return { ...cur, x: CanvasConst[activeRegionName].x, useDefault: false };
                                    }
                                    return cur;
                                });
                                changeTarget(activeRegionName, target => {
                                    target.style.transform = `translate(${CanvasConst[activeRegionName].x}px, calc(${currentCoordinate.y}px)`;
                                });
                            }}
                        />
                    </label>
                    <InputNumber
                        disabled={activeRegionName === 'none'}
                        value={currentCoordinate.x}
                        onChange={value => {
                            setCurrentCoordinate(cur => {
                                if (typeof value === 'number' && cur.x !== value) {
                                    return { ...cur, x: value, useDefault: false };
                                }
                                return cur;
                            });
                        }}
                    />
                </div>
                <div>
                    <label>
                        {language['input.frame-coordinate.width']}
                        <IconButton
                            {...commontResetButtonProps}
                            containerProps={{ className: (activeRegionName === 'none' || !currentCoordinate.resizable) ? 'hidden' : '' }}
                            onClick={() => {
                                setCurrentCoordinate(cur => {
                                    if (currentCoordinate.width !== CanvasConst[activeRegionName].width) {
                                        return { ...cur, width: CanvasConst[activeRegionName].width, useDefault: false };
                                    }
                                    return cur;
                                });
                                changeTarget(activeRegionName, target => {
                                    target.style.width = `${CanvasConst[activeRegionName].width}px`;
                                });
                            }}
                        />
                    </label>
                    <InputNumber
                        disabled={activeRegionName === 'none' || !currentCoordinate.resizable}
                        value={currentCoordinate.width}
                        onChange={value => {
                            setCurrentCoordinate(cur => {
                                if (typeof value === 'number' && cur.width !== value) {
                                    return { ...cur, width: value, useDefault: false };
                                }
                                return cur;
                            });
                        }}
                    />
                </div>
                <div>
                    <label>
                        {language['input.frame-coordinate.height']}
                        <IconButton
                            {...commontResetButtonProps}
                            containerProps={{ className: (activeRegionName === 'none' || !currentCoordinate.resizable) ? 'hidden' : '' }}
                            onClick={() => {
                                setCurrentCoordinate(cur => {
                                    if (currentCoordinate.height !== CanvasConst[activeRegionName].height) {
                                        return { ...cur, height: CanvasConst[activeRegionName].height, useDefault: false };
                                    }
                                    return cur;
                                });
                                changeTarget(activeRegionName, target => {
                                    target.style.height = `${CanvasConst[activeRegionName].height}px`;
                                });
                            }}
                        />
                    </label>
                    <InputNumber
                        disabled={activeRegionName === 'none' || !currentCoordinate.resizable}
                        value={currentCoordinate.height}
                        onChange={value => {
                            setCurrentCoordinate(cur => {
                                if (typeof value === 'number' && cur.height !== value) {
                                    return { ...cur, height: value, useDefault: false };
                                }
                                return cur;
                            });
                        }}
                    />
                </div>
                <div className="control-panel-action">
                    {currentCoordinate.name !== 'none' && <div className="control-panel-button">
                        <IconButton
                            tooltipProps={{
                                title: language['image-cropper.button.center-horizontal.tooltip'],
                            }}
                            containerProps={{ className: 'action-horizontal-align' }}
                            onClick={() => {
                                const name = currentCoordinate.name;
                                if (name === 'none') return;
                                const nextCoordinate = {
                                    ...currentCoordinate,
                                    y: (height - currentCoordinate.height) / 2,
                                };
                                setCurrentCoordinate(nextCoordinate);
                                const target = document.querySelector(`.moveable-region-${name}`) as HTMLDivElement | null;
                                if (target) {
                                    target.style.transform = `translate(${nextCoordinate.x}px, calc(${nextCoordinate.y}px)`;
                                    moveableMapRef.current[name]?.updateRect();
                                }
                            }}
                        >
                            <VerticalAlignMiddleOutlined />
                        </IconButton>
                        <IconButton
                            tooltipProps={{
                                title: language['image-cropper.button.center-vertical.tooltip'],
                            }}
                            containerProps={{ className: 'action-vertical-align' }}
                            onClick={() => {
                                const name = currentCoordinate.name;
                                if (name === 'none') return;
                                const nextCoordinate = {
                                    ...currentCoordinate,
                                    x: (width - currentCoordinate.width) / 2,
                                };
                                setCurrentCoordinate(nextCoordinate);
                                const target = document.querySelector(`.moveable-region-${name}`) as HTMLDivElement | null;
                                if (target) {
                                    target.style.transform = `translate(${nextCoordinate.x}px, calc(${nextCoordinate.y}px)`;
                                    moveableMapRef.current[name]?.updateRect();
                                }
                            }}
                        >
                            <VerticalAlignMiddleOutlined />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                const name = currentCoordinate.name;
                                if (name === 'none') return;
                                const nextCoordinate = {
                                    useDefault: true,
                                    ...CanvasConst[name],
                                };
                                setCurrentCoordinate(nextCoordinate);
                                changeTarget(name, target => {
                                    target.style.width = `${nextCoordinate.width}px`;
                                    target.style.height = `${nextCoordinate.height}px`;
                                    target.style.transform = `translate(${nextCoordinate.x}px, calc(${nextCoordinate.y}px)`;
                                });
                            }}
                        >{language['generic.reset.label']}</IconButton>
                    </div>}
                </div>
            </div>
        </FrameCoordinatePanelContainer>
    );
});