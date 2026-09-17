import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { drawFitGlyph, letterAtlas, probe } from './util';

const Container = styled.div`
    canvas {
        border: 2px solid purple;
        background-color: #9b65b2;
    }
`;

export const TestGlyphFit = () => {
    const [refreshCnt, setRefreshCnt] = useState(0);

    useEffect(() => {
        const globalScale = 1;
        const xRatio = 0.4;
        const fillStyle = 'green';
        const str = '0123456789';//OPQRSTUVWXYZ';
        const canvas = document.getElementById('canvas-4') as HTMLCanvasElement | null;
        const controlCanvas = document.getElementById('canvas-3') as HTMLCanvasElement | null;
        if (!canvas || !controlCanvas) return;

        const ctx = canvas.getContext('2d');
        const controlCtx = controlCanvas.getContext('2d');
        if (!ctx || !controlCtx) return;
        ctx.save();
        ctx.scale(xRatio, 1);
        ctx.fillStyle = fillStyle;
        ctx.font = `${globalScale * 91}px MatrixRegularSmallCaps, Times New Roman`;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        controlCtx.save();
        controlCtx.scale(xRatio, 1);
        controlCtx.font = `${globalScale * 91}px MatrixRegularSmallCaps, Times New Roman`;
        controlCtx.fillStyle = fillStyle;
        controlCtx.clearRect(0, 0, canvas.width, canvas.height);
        const lineMap = {
            '1': {
                origin: 0,
                medium: 34 * globalScale,
                high: 45 * globalScale,
                low: -2 * globalScale,
            },
            '2': {
                origin: 0,
                medium: 69 * globalScale,
                high: 91 * globalScale,
                low: -4 * globalScale,
            },
        };
        const base = 60 * globalScale;
        const baseCanvas = document.getElementById('canvas-2') as HTMLCanvasElement | null;
        const adjustedCanvas = document.getElementById('canvas-7') as HTMLCanvasElement | null;
        for (let i = 0; i < str.length; i++) {
            const edge = 10 + 55 * i * globalScale;
            const letter = str[i];
            const drawable = drawFitGlyph({
                ctx,
                globalScale,
                baseCanvas,
                adjustedCanvas,
                letter,
                xRatio,
                yRatio: 1,
                edge,
                base,
                line: lineMap[`${globalScale}`],
                setupContext: ctx => {
                    ctx.scale(xRatio, 1);
                    ctx.fillStyle = fillStyle;
                    ctx.font = `${globalScale * 91}px MatrixRegularSmallCaps, Times New Roman`;
                }
            });
            if (!drawable) {
                ctx.fillText(letter, edge, base);
            }
            controlCtx.fillText(letter, edge, base);
        }
        ctx.restore();
        controlCtx.restore();

    }, [refreshCnt]);

    useEffect(() => {
        const globalScale = 1;
        const letterRowList = [
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'abcdefghijklmnopqrstuvwxyz',
            '0123456789',
        ];
        const canvas = document.getElementById('canvas-5') as HTMLCanvasElement | null;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${globalScale * 91}px MatrixRegularSmallCaps, Times New Roman`;
        ctx.lineWidth = 2;
        for (let l = 0; l < letterRowList.length; l++) {
            const letterRow = letterRowList[l];
            for (let i = 0; i < letterRow.length; i++) {
                const letter = letterRow[i];
                const x = i * 60 + 1;
                const y = (l + 1) * 90;
                ctx.strokeRect(x, 0, 60, y);
                ctx.fillText(letter, x - 1, y - 25);
                const entry = letterAtlas[letter];
                probe({
                    canvas,
                    topX: entry.topX + x,
                    topStart: l * 90 + 1,
                    bottomX: entry.bottomX + x,
                    bottomStart: y - 2,
                    debug: true,
                });
            }
        }
    }, [refreshCnt]);

    return <Container>
        <div>
            <button onClick={() => setRefreshCnt(cnt => cnt + 1)}>Refresh</button>
        </div>
        <div key={refreshCnt + 0} id="debug"></div>
        <hr />
        <canvas key={refreshCnt + 4} id="canvas-4" width={1600} height={250} />
        <canvas key={refreshCnt + 3} id="canvas-3" width={1600} height={250} />
        <canvas key={refreshCnt + 2} id="canvas-2" width={1600} height={250} />
        <canvas key={refreshCnt + 7} id="canvas-7" width={1600} height={250} />
        <canvas key={refreshCnt + 5} id="canvas-5" width={1600} height={300} />
    </Container>;
};