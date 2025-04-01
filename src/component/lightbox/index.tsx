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
    width: ${CanvasWidth}px;
    height: ${CanvasHeight}px;
    overflow: hidden;
    position: relative;
    line-height: 0;
    .card-lightbox-control {
        position: absolute;
        z-index: 1;
        top: var(--spacing);
        right: var(--spacing);
        user-select: none;
        text-align: right;
        .action-list {
            display: inline-flex;
            gap: var(--spacing-xs);
        }
        .control-info {
            background-color: var(--main-level-1);
            padding: var(--spacing-xs);
            margin-top: var(--spacing-xs);
            border-radius: var(--br);
            border: var(--bw) solid var(--sub-level-1);
            line-height: 1;
            box-shadow: var(--bs-1);
        }
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
        <div className="control-info">
            {scale && <>×{
                scale < 1 ? `1/${Math.round(1 / scale * 10) / 10}` : (Math.round(scale * 10) / 10)
            }</>}&nbsp;({width} × {height})
        </div>
    </div>;
};

export type Lightbox = {
    globalScale: number,
};
export type LightboxRef = {
    setVisible: (dispatcher: (cur: boolean) => boolean) => void,
    draw: (targetCanvas: HTMLCanvasElement) => void,
    refresh: () => void,
    getCanvasKey: () => number,
};
export const Lightbox = forwardRef<LightboxRef, Lightbox>(({
    globalScale,
}, ref) => {
    const [lightboxVisible, setLightboxVisible] = useState(false);
    const [canvasKey, setCanvasKey] = useState(0);
    const lightboxCanvasRef = useRef<HTMLCanvasElement>(null);
    const lightboxRef = useRef<ReactZoomPanPinchContentRef>(null);
    const [scale, setScale] = useState(() => 1 / globalScale);

    useImperativeHandle(ref, () => ({
        setVisible: setLightboxVisible,
        draw: targetCanvas => {
            lightboxCanvasRef.current?.getContext('2d')?.drawImage(
                targetCanvas,
                0,
                0,
            );
        },
        refresh: () => setCanvasKey(cnt => cnt + 1),
        getCanvasKey: () => canvasKey,
    }));

    useEffect(() => {
        lightboxRef.current?.resetTransform();
    }, [globalScale]);

    return <Modal
        width={`${CanvasWidth + 15 * 2}px`}
        wrapClassName="card-lightbox-overlay"
        visible={lightboxVisible}
        forceRender={true}
        onCancel={() => setLightboxVisible(false)}
        footer={null}
    >
        <StyledLightboxContainer
            className="card-lightbox-container"
        >
            <TransformWrapper ref={lightboxRef}
                initialScale={1 / globalScale}
                initialPositionX={0}
                initialPositionY={0}
                minScale={1 / globalScale}
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
                            wrapperStyle={{ maxWidth: CanvasWidth, maxHeight: CanvasHeight, lineHeight: 0 }}
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
        </StyledLightboxContainer>
    </Modal>;
});