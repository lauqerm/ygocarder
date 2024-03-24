export const drawScale = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
) => {
    if (ctx && value) {
        const digitList = `${value}`.split('');
        let totalWidth = 0;

        digitList.forEach(digit => {
            totalWidth += (digit === '1' ? ctx.measureText(digit).width * 0.65 : ctx.measureText(digit).width);
        });
        let accLeft = edge - totalWidth / 2;

        digitList.forEach(digit => {
            ctx.fillText(digit, digit === '1' ? accLeft - 3 : accLeft, baseline);
            accLeft += (digit === '1' ? ctx.measureText(digit).width * 0.65 : ctx.measureText(digit).width);
        });
    }
};