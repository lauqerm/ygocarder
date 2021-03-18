export const drawAD = (
    ctx: CanvasRenderingContext2D | null | undefined,
    $value: string | number,
    edge: number,
    baseline: number,
) => {
    if (ctx) {
        ctx.font = '25px MatrixBoldSmallCaps';
        ctx.textAlign = 'right';
        const value = `${$value}`;
        const atkWidth = ctx.measureText(value).width;

        if (atkWidth > 0) {
            const condenseRatio = Math.min(49.94 / atkWidth, 1);

            ctx.scale(condenseRatio, 1);
            ctx.fillText(value, (edge + 49.94) / condenseRatio, baseline);
            ctx.scale(1 / condenseRatio, 1);
        }
    }
};

export * from './util';