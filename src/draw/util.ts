export const fillTextLeftWithSpacing = (
    ctx: CanvasRenderingContext2D | null | undefined,
    str: string,
    letterSpacingRatio: number,
    edge: number,
    baseline: number,
) => {
    if (ctx) {
        const charList = str.split('');
        let curLeft = edge;

        charList.forEach(char => {
            ctx.fillText(char, curLeft, baseline);
            curLeft += ctx.measureText(char).width * (1 + (letterSpacingRatio / 2));
        });
    }
};
export const fillTextRightWithSpacing = (
    ctx: CanvasRenderingContext2D | null | undefined,
    str: string,
    letterSpacingRatio: number,
    edge: number,
    baseline: number,
) => {
    if (ctx) {
        const charList = str.split('');
        let curRight = edge;

        charList.forEach((c, index) => {
            const char = charList[charList.length - index - 1];
            ctx.fillText(char, curRight, baseline);
            curRight -= ctx.measureText(char).width * (1 + (letterSpacingRatio / 2));
        });
    }
};