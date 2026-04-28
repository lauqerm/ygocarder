import { CanvasConst } from 'src/model';
import { useSetting, useGlobal } from 'src/service';
import { CardCanvasGroupContainer, CardPreviewContainer } from './card-canvas.styled';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { CardCanvas, CardCanvasRef } from './unconnected-card-canvas';
import { clearCanvas } from 'src/draw';

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;

export const MasterCardCanvas = forwardRef<CardCanvasRef, CardCanvas>(({
    children,
    lightBoxCanvasKey,
    lightboxRef,
    onMount,
}, ref) => {
    const {
        globalScale,
    } = useSetting(useShallow(({ setting: {
        globalScale,
    } }) => ({
        globalScale,
    })));
    const [resetCanvasCounter] = useGlobal('resetCanvasCounter');
    const exportCanvasRef = useRef<HTMLCanvasElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const frameCanvasRef = useRef<HTMLCanvasElement>(null);
    const cardIconCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumScaleCanvasRef = useRef<HTMLCanvasElement>(null);
    const pendulumEffectCanvasRef = useRef<HTMLCanvasElement>(null);
    const typeCanvasRef = useRef<HTMLCanvasElement>(null);
    const effectCanvasRef = useRef<HTMLCanvasElement>(null);
    const nameCanvasRef = useRef<HTMLCanvasElement>(null);
    const statCanvasRef = useRef<HTMLCanvasElement>(null);
    const setIdCanvasRef = useRef<HTMLCanvasElement>(null);
    const passwordCanvasRef = useRef<HTMLCanvasElement>(null);
    const creatorCanvasRef = useRef<HTMLCanvasElement>(null);
    const stickerCanvasRef = useRef<HTMLCanvasElement>(null);
    const finishCanvasRef = useRef<HTMLCanvasElement>(null);
    const artworkCanvasRef = useRef<HTMLCanvasElement>(null);
    const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);

    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current === false) {
            didMountRef.current = true;
            onMount({
                type: 'master',
                canvasMap: {
                    artworkCanvasRef,
                    backgroundCanvasRef,
                    exportCanvasRef,
                    frameCanvasRef,
                    cardIconCanvasRef,
                    pendulumScaleCanvasRef,
                    pendulumEffectCanvasRef,
                    typeCanvasRef,
                    effectCanvasRef,
                    nameCanvasRef,
                    statCanvasRef,
                    setIdCanvasRef,
                    passwordCanvasRef,
                    creatorCanvasRef,
                    stickerCanvasRef,
                    finishCanvasRef,
                    lightboxRef,
                    previewCanvasRef,
                },
            });
        }
    }, [lightboxRef, onMount]);

    useImperativeHandle(ref, () => ({
        prepare: () => {
            const ctx = exportCanvasRef.current?.getContext('2d');
            if (ctx) {
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.imageSmoothingQuality = 'high';
                clearCanvas(ctx);
            }
        }
    }));

    return <CardPreviewContainer className="card-preview-container">
        {children}
        {/** Preview canvas is used to display a presentable card for user, in contrast of the actual rendered card below.
         * The reason is because when the card become bigger, we must resize it down to display it fully, which lead to a blurry or too sharp image. Canvas resizing is better than css resizing, so we use a separate smaller canvas to preview, but forward all user-action through it so user can still copy the card as full-size.
         */}
        <canvas
            key={`${lightBoxCanvasKey + 0.2}`}
            id="preview-canvas"
            ref={previewCanvasRef}
            width={CanvasWidth}
            height={CanvasHeight}
        />
        <CardCanvasGroupContainer className="card-canvas-group">
            <canvas
                key={`${lightBoxCanvasKey + 0.1}`}
                id="export-canvas"
                ref={exportCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            {/** Overlay guarding seems very janky, cursor should suffix for now */}
            <div id="export-canvas-guard" onContextMenu={e => e.preventDefault()}>
                {/* <div className="canvas-guard-alert">Generating...</div> */}
            </div>
            <canvas id="frameCanvas"
                key={`${lightBoxCanvasKey} ${resetCanvasCounter}`}
                className={`${lightBoxCanvasKey}`}
                ref={frameCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="nameCanvas"
                ref={nameCanvasRef}
                width={CanvasWidth * globalScale}
                height={148 * globalScale}
            />
            <canvas id="cardIconCanvas"
                ref={cardIconCanvasRef}
                width={CanvasWidth * globalScale}
                height={222 * globalScale}
            />
            <canvas id="pendulumScaleCanvas"
                ref={pendulumScaleCanvasRef}
                width={CanvasWidth * globalScale}
                height={920 * globalScale}
            />
            <canvas id="pendulumEffectCanvas"
                ref={pendulumEffectCanvasRef}
                width={CanvasWidth * globalScale}
                height={920 * globalScale}
            />
            <canvas id="typeCanvas"
                ref={typeCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="effectCanvas"
                ref={effectCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="statCanvas"
                ref={statCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="setIdCanvas"
                ref={setIdCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="passwordCanvas"
                ref={passwordCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="creatorCanvas"
                ref={creatorCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="stickerCanvas"
                ref={stickerCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas id="finishCanvas"
                ref={finishCanvasRef}
                width={CanvasWidth * globalScale}
                height={CanvasHeight * globalScale}
            />
            <canvas className="crop-canvas"
                ref={artworkCanvasRef}
            />
            <canvas className="crop-canvas"
                ref={backgroundCanvasRef}
            />
        </CardCanvasGroupContainer>
    </CardPreviewContainer>;
});