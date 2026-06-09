/** Code split component, do not import this file into barrel. */
import { Modal } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { CanvasConst } from 'src/model';
import {
    TransformWrapper,
    TransformComponent,
    ReactZoomPanPinchContentRef,
} from 'react-zoom-pan-pinch';
import styled from 'styled-components';
import { ZoomInOutlined, ZoomOutOutlined, FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { CardActionButton } from '../atom';

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;
const StyledLightboxContainer = styled.div`
    position: relative;
    line-height: 0;
    .lightbox-guard {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        align-items: center;
        justify-content: center;
        z-index: 101;
        background-color: #ffffff33;
        width: 100%;
        height: 100%;
        .anticon {
            font-size: var(--fs-4xl);
        }
    }
    .card-lightbox-control {
        user-select: none;
        text-align: right;
        margin-bottom: var(--spacing-sm);
        .action-list {
            display: inline-flex;
            gap: var(--spacing-xs);
        }
        .control-info {
            background-color: var(--main-level-1);
            padding: var(--spacing-xs);
            align-content: center;
            border-radius: var(--br);
            border: var(--bw) solid var(--sub-level-1);
            line-height: 1;
            box-shadow: var(--bs-1);
        }
        .control-container {
            display: grid;
            grid-template-columns: 1fr 150px max-content;
            gap: var(--spacing-xs);
        }
    }
    .lightbox-children-container {
        margin-bottom: var(--spacing);
    }
    .card-lightbox-content {
        cursor: grab;
    }
`;

const MAX_ZOOM = 4;
const Controls = ({
    zoomIn,
    zoomOut,
    resetTransform,
    setTransform,
    scale,
    globalScale,
    width,
    height,
}: ReactZoomPanPinchContentRef & {
    scale: number,
    globalScale: number,
    width: number,
    height: number,
}) => {
    return <div className="control-container">
        <div />
        <div className="control-info">
            {scale && <>×{
                scale < 1 ? `1/${Math.round(1 / scale * 10) / 10}` : (Math.round(scale * 10) / 10)
            }</>}&nbsp;({width} × {height})
        </div>
        <div className="action-list">
            <CardActionButton disabled={scale >= MAX_ZOOM} onClick={() => {
                zoomIn();
            }}>
                <ZoomInOutlined />
            </CardActionButton>
            <CardActionButton disabled={scale <= 1 / globalScale} onClick={() => {
                zoomOut();
            }}>
                <ZoomOutOutlined />
            </CardActionButton>
            <CardActionButton onClick={() => {
                resetTransform();
            }}>
                <FullscreenExitOutlined />
            </CardActionButton>
            <CardActionButton onClick={() => {
                setTransform(
                    -Math.max(0, width - CanvasWidth) / 2,
                    -Math.max(0, height - CanvasHeight) / 2,
                    1,
                );
            }}>
                <FullscreenOutlined />
            </CardActionButton>
        </div>
    </div>;
};

export type Lightbox = {
    globalScale: number,
    children?: React.ReactNode,
};
export type LightboxRef = {
    setBusy: (dispatcher: (cur: boolean) => boolean) => void,
    setVisible: (dispatcher: (cur: boolean) => boolean) => void,
    draw: (targetCanvas: HTMLCanvasElement) => void,
    refresh: () => void,
    resetTransform: () => void,
    getCanvasKey: () => number,
};
export const Lightbox = forwardRef<LightboxRef, Lightbox>(({
    globalScale,
    children,
}, ref) => {
    const [lightboxVisible, setLightboxVisible] = useState(false);
    const [lightboxBusy, setLightboxBusy] = useState(false);
    const [canvasKey, setCanvasKey] = useState(0);
    const lightboxCanvasRef = useRef<HTMLCanvasElement>(null);
    const lightboxRef = useRef<ReactZoomPanPinchContentRef>(null);
    const [scale, setScale] = useState(() => 1 / globalScale);
    const [neutralScale, setNeutralScale] = useState(() => 1);

    useImperativeHandle(ref, () => ({
        setVisible: status => {
            setLightboxVisible(status);
            /** Wait for animation to play out */
            setTimeout(() => {
                lightboxRef.current?.resetTransform();
            }, 200);
        },
        setBusy: status => {
            setLightboxBusy(status);
        },
        draw: targetCanvas => {
            lightboxCanvasRef.current?.getContext('2d')?.drawImage(
                targetCanvas,
                0,
                0,
            );
        },
        resetTransform: () => {
            lightboxRef.current?.resetTransform();
        },
        refresh: () => {
            setCanvasKey(cnt => cnt + 1);
        },
        getCanvasKey: () => canvasKey,
    }));
    const padding = 15;
    const cardContainer = document.querySelector('.app-container');
    const currentResize = cardContainer
        ? Math.round(
            Math.min(1, (cardContainer.clientWidth - padding * 2) / CanvasWidth) * 100
        ) / 100
        : 1;

    useEffect(() => {
        setNeutralScale(currentResize / globalScale);
        setScale(currentResize / globalScale);
    }, [globalScale, currentResize]);

    useEffect(() => {
        lightboxRef.current?.resetTransform();
    }, [globalScale]);

    useEffect(() => {
        lightboxRef.current?.setTransform(0, 0, neutralScale);
    }, [neutralScale]);

    return <Modal
        width={`${CanvasWidth * currentResize + padding * 2}px`}
        wrapClassName="card-lightbox-overlay"
        visible={lightboxVisible}
        forceRender={true}
        onCancel={() => setLightboxVisible(false)}
        footer={null}
    >
        <StyledLightboxContainer
            className="card-lightbox-container"
        >
            <div className="lightbox-children-container">
                {children}
            </div>
            <TransformWrapper ref={lightboxRef}
                initialScale={neutralScale}
                initialPositionX={0}
                initialPositionY={0}
                minScale={neutralScale}
                maxScale={MAX_ZOOM}
                onTransformed={ref => {
                    setScale(ref.state.scale);
                }}
            >
                {({ ...utils }) => {
                    return <>
                        <div
                            className="card-lightbox-control"
                        >
                            <Controls
                                {...utils}
                                scale={scale}
                                globalScale={globalScale}
                                width={CanvasWidth * globalScale}
                                height={CanvasHeight * globalScale}
                            />
                        </div>
                        <TransformComponent
                            wrapperClass="card-lightbox-content"
                            wrapperStyle={{ maxWidth: CanvasWidth * currentResize, maxHeight: CanvasHeight * currentResize, lineHeight: 0 }}
                        >
                            <canvas key={canvasKey + 0.1}
                                id="lightbox-canvas"
                                ref={lightboxCanvasRef}
                                width={CanvasWidth * globalScale}
                                height={CanvasHeight * globalScale}
                            />
                        </TransformComponent>
                    </>;
                }}
            </TransformWrapper>
            {lightboxBusy && <div className="lightbox-guard" onContextMenu={e => e.preventDefault()}>
                <div className="canvas-guard-alert">Generating...</div>
            </div>}
        </StyledLightboxContainer>
    </Modal>;
});