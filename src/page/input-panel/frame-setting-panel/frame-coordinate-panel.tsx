import { InputNumber } from 'antd';
import { forwardRef, Fragment, useEffect, useRef, useState } from 'react';
import Moveable from 'react-moveable';
import { IconButton } from 'src/component';
import { CanvasConst, MoveableRegionList, MoveableRegionMap, parseCoordinate } from 'src/model';
import { useCard, useLanguage } from 'src/service';
import { mergeClass } from 'src/util';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { VerticalAlignMiddleOutlined } from '@ant-design/icons';

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
        grid-template-rows: max-content max-content max-content 1fr;
        gap: var(--spacing);
        align-items: center;
        label {
            display: block;
            margin-bottom: var(--spacing-xxs);
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
    const changeCoordinate = (coordinate: typeof currentCoordinate) => {
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
    };

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) changeCoordinate(currentCoordinate);
        }, 500);

        return () => {
            relevant = false;
        };
    }, [currentCoordinate]);

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
                        }) => {
                            const { width, height } = CanvasConst[name];
                            return <Fragment key={name}>
                                <MoveableTarget
                                    className={mergeClass(
                                        'move-target',
                                        `moveable-region-${name}`,
                                        currentCoordinate.name === name ? 'active-target' : '',
                                    )}
                                    onMouseDown={() => {
                                        const regionCoordinate = parseCoordinate(coordinateMap[name], CanvasConst[name]);
                                        setCurrentCoordinate({
                                            ...regionCoordinate,
                                            name,
                                            useDefault: coordinateMap[name] ? false : true,
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
                                        setCurrentCoordinate(cur => ({ ...cur, width: e.width, y: e.height, useDefault: false }));
                                        e.target.style.width = `${e.width}px`;
                                        e.target.style.height = `${e.height}px`;
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
                    <label>{language['input.frame-coordinate.top']}</label>
                    <InputNumber
                        disabled={currentCoordinate.name === 'none'}
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
                    <label>{language['input.frame-coordinate.left']}</label>
                    <InputNumber
                        disabled={currentCoordinate.name === 'none'}
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
                                const target = document.querySelector(`.moveable-region-${name}`) as HTMLDivElement | null;
                                if (target) {
                                    target.style.width = `${nextCoordinate.width}px`;
                                    target.style.height = `${nextCoordinate.height}px`;
                                    target.style.transform = `translate(${nextCoordinate.x}px, calc(${nextCoordinate.y}px)`;
                                    moveableMapRef.current[name]?.updateRect();
                                }
                            }}
                        >{language['generic.reset.label']}</IconButton>
                    </div>}
                </div>
            </div>
        </FrameCoordinatePanelContainer>
    );
});