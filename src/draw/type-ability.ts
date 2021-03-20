import { TypeSize } from '../const';

type Aligment = 'left' | 'right';
export const drawBracketTemplate = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    size: TypeSize,
    alignment: Aligment,
) => {
    return (edge: number) => {
        if (ctx) {
            const {
                top: baseline,
                bracketSize: { char: bracketChar, bracketOffsetTop }
            } = size;
            const alignmentOffset = alignment === 'left' ? 1 : -1;

            ctx.font = `bold ${bracketChar}px stone-serif-bold`;
            ctx.textAlign = alignment;
            ctx.fillText(content, edge, baseline - bracketOffsetTop);
            return edge + ctx.measureText(content).width * alignmentOffset;
        }
        return edge;
    };
};
export const drawIconSpaceTemplate = (
    ctx: CanvasRenderingContext2D | null | undefined,
    size: TypeSize,
    alignment: Aligment,
) => {
    return (edge: number) => {
        if (ctx) {
            const { iconSpace } = size;
            const alignmentOffset = alignment === 'left' ? 1 : -1;

            return edge + iconSpace * alignmentOffset;
        }
        return edge;
    };
};
export const drawBracketSpaceTemplate = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    size: TypeSize,
    alignment: Aligment,
) => {
    return (edge: number) => {
        if (ctx) {
            const { top: baseline, bracketSize: { bracketSpace } } = size;
            const alignmentOffset = alignment === 'left' ? 1 : -1;

            ctx.font = `bold ${bracketSpace}px stone-serif-bold`;
            ctx.textAlign = alignment;
            ctx.fillText(content, edge, baseline);
            return edge + ctx.measureText(content).width * alignmentOffset;
        }
        return edge;
    };
};
export const drawTextTemplate = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isLast = false,
    size: TypeSize,
    alignment: Aligment,
) => {
    const {
        top: baseline,
        spaceSize: { frontSpace, char: spaceChar, behindSpace },
        upperCaseScale,
        upperCaseSize,
        lowerCaseScale,
        lowerCaseSize,
        spaceScale,
    } = size;
    const alignmentOffset = alignment === 'left' ? 1 : -1;
    const drawSlashTemplate = (
        ctx: CanvasRenderingContext2D,
        baseOffset: number,
    ) => {
        let totalOffset = baseOffset;
        ctx.font = `bold ${frontSpace}px stone-serif-bold`;
        ctx.fillText(' ', totalOffset, baseline);
        totalOffset += ctx.measureText(' ').width * alignmentOffset;
	
        ctx.font = `oblique bold ${spaceChar}px stone-serif-bold`;
        ctx.scale(0.65, 1);
        ctx.fillText('/', totalOffset / 0.65, baseline);
        totalOffset += ctx.measureText('/').width * 0.65 * alignmentOffset;
        ctx.scale(1 / 0.65, 1);
	
        ctx.font = `bold ${behindSpace}px stone-serif-bold`;
        ctx.fillText(' ', totalOffset, baseline);
        totalOffset += ctx.measureText(' ').width * alignmentOffset;
        return totalOffset;
    };

    return (left: number) => {
        let totalOffset = left;
        if (ctx) {
            ctx.textAlign = alignment;

            if (!isLast && alignment === 'right') totalOffset = drawSlashTemplate(ctx, totalOffset);
            content
                .split('')
                .forEach((c, index, arr) => {
                    const char = alignment === 'left' ? arr[index] : arr[arr.length - 1 - index];
                    if (/[A-Z]/.test(char)) {
                        ctx.font = `bold ${upperCaseSize}px stone-serif-bold`;
                        ctx.scale(upperCaseScale, 1);
                        ctx.fillText(char, totalOffset / upperCaseScale, baseline);
                        totalOffset += ctx.measureText(char).width * upperCaseScale * alignmentOffset;
                        ctx.scale(1 / upperCaseScale, 1);
                    } else if (/\s/.test(char)) {
                        ctx.font = `bold ${lowerCaseSize}px stone-serif-bold`;
                        ctx.scale(spaceScale, 1);
                        ctx.fillText(char, totalOffset / spaceScale, baseline);
                        totalOffset += ctx.measureText(char).width * spaceScale * alignmentOffset;
                        ctx.scale(1 / spaceScale, 1);
                    } else {
                        const upperChar = char.toLocaleUpperCase();
                        ctx.font = `bold ${lowerCaseSize}px stone-serif-bold`;
                        ctx.scale(lowerCaseScale, 1);
                        ctx.fillText(upperChar, totalOffset / lowerCaseScale, baseline);
                        totalOffset += ctx.measureText(upperChar).width * lowerCaseScale * alignmentOffset;
                        ctx.scale(1 / lowerCaseScale, 1);
                    }
                });
            if (!isLast && alignment === 'left') totalOffset = drawSlashTemplate(ctx, totalOffset);
            return totalOffset;
        }
        return totalOffset;
    };
};