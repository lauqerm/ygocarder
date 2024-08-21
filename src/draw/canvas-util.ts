import { CanvasConst, FinishInformation, FinishMap } from 'src/model';

const { height: CanvasHeight, width: CanvasWidth } = CanvasConst;

export const randomDarkColor = () => '#000000'.replace(/0/g, () => (~~(Math.random() * 12 + 2)).toString(16));

/** Vẽ một vệt thẳng để làm mốc, bị ảnh hưởng bởi xRatio */
export const drawMarker = ({
    ctx,
    color = randomDarkColor(), width,
    offset = 4,
    trueEdge, baseline,
    xRatio,
}: {
    ctx: CanvasRenderingContext2D,
    color?: string, width: number,
    offset?: number,
    trueEdge: number, baseline: number,
    xRatio: number,
}) => {
    const currentFillStyle = ctx.fillStyle;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(trueEdge / xRatio, baseline + 1 + Math.random() * offset, width / xRatio, 2);
    ctx.fill();
    ctx.fillStyle = currentFillStyle;
};

/** Nguyên tắc về letterSpacing:
 * * LetterSpacing được tính theo tỷ lệ độ dài chữ cái. Default là 0.
 * * 2 chữ cái liên tiếp nhau có độ dài là x và y, nếu LetterSpacing là 0 thì chúng đứng sát nhau.
 * * Với LetterSpacing =/= 0, mỗi chữ được tăng (giảm) chiều dài bằng một nửa tỷ lệ LetterSpacing, như vậy hai chữ ghép lại sẽ tạo thành
 * tỷ lệ LetterSpacing chuẩn. Ví dụ LetterSpacing là 0.5, thì mỗi chữ sẽ có thêm khoảng cách bằng 50% độ dài con chữ.
 */
export const fillTextLeftWithSpacing = (
    ctx: CanvasRenderingContext2D | null | undefined,
    str: string,
    letterSpacing: number,
    edge: number,
    baseline: number,
    option?: {
        stroke?: boolean,
    }
) => {
    if (ctx && str) {
        const { stroke = false } = option ?? {};
        ctx.textAlign = 'left';
        const charList = str.split('');
        let curLeft = edge;

        charList.forEach(char => {
            ctx.fillText(char, curLeft, baseline);
            if (stroke) ctx.strokeText(char, curLeft, baseline);
            curLeft += ctx.measureText(char).width * (2 + letterSpacing) / 2;
        });

        return curLeft;
    }
    return 0;
};
export const fillTextRightWithSpacing = (
    ctx: CanvasRenderingContext2D | null | undefined,
    str: string,
    letterSpacing: number,
    edge: number,
    baseline: number,
    option?: {
        stroke?: boolean,
    }
) => {
    if (ctx && str) {
        const { stroke = false } = option ?? {};
        ctx.textAlign = 'right';
        const charList = str.split('');
        let curRight = edge;

        charList.forEach((c, index) => {
            const char = charList[charList.length - index - 1];
            ctx.fillText(char, curRight, baseline);
            if (stroke) ctx.strokeText(char, curRight, baseline);
            curRight -= ctx.measureText(char).width * (2 + letterSpacing) / 2;
        });
        return curRight;
    };
    return edge;
};

export const clearCanvas = (
    ctx: CanvasRenderingContext2D | null | undefined,
    width = CanvasWidth,
    height = CanvasHeight,
): ctx is CanvasRenderingContext2D => {
    if (ctx) {
        ctx.clearRect(0, 0, width, height);

        return true;
    };
    return false;
};

export const getFinishIterator = (
    finish: string[],
    finishMap: Record<string, FinishInformation> = FinishMap,
) => {
    return async (
        ctx?: CanvasRenderingContext2D | null,
        name?: string,
        caller?: (finishType: string) => Promise<any>,
    ) => {
        if (!ctx || !Array.isArray(finish) || finish.length <= 0) return Promise.resolve();
        for (const finishType of finish) {
            const finishInformation = finishMap[finishType];
            if (caller && finishMap[finishType]) {
                const { partInstructionMap } = finishInformation;
                const instructionList = name ? partInstructionMap[name] ?? [] : [];

                if (instructionList.length) {
                    for (const { blendMode = 'source-over', opacity = 1 } of instructionList) {
                        ctx.globalCompositeOperation = blendMode;
                        ctx.globalAlpha = opacity;

                        await caller(finishType);
                    }
                } else {
                    await caller(finishType);
                }
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = 'source-over';
            }
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
    };
};