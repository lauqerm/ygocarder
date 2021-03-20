import { FontSize, monsterFontList, BoxSize, monsterSizeList } from '../const';
import { splitEffect, createCondenser } from '../util';

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

export const fillTextLeftWithLimit = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    edge: number,
    baseline: number,
    maxWidth: number,
) => {
    if (ctx) {
        const contentWidth = ctx.measureText(content).width;

        if (contentWidth > 0) {
            const condenseRatio = Math.min(maxWidth / contentWidth, 1);
            ctx.scale(condenseRatio, 1);
            ctx.fillText(content, edge / condenseRatio, baseline);
            ctx.scale(1 / condenseRatio, 1);
            ctx.fillStyle = '#000000';
        }
    }
};

export const drawEffect = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isPendulumEffect = false,
    isNormal = false,
    fontList: FontSize[] = monsterFontList,
    sizeList: BoxSize[] = monsterSizeList,
) => {
    let effectIndexSize = 0;
    if (ctx) {
        const tolerantPerSentence: Record<string, number> = {
            '1': 645,
            '2': 665,
            '3': 685,
        };
        const {
            body: effectBody,
            flavorCondition: effectFlavorCondition,
            material: effectMaterial,
        } = isPendulumEffect
            ? {
                body: content,
                flavorCondition: '',
                material: '',
            } : splitEffect(content, isNormal);

        const additionalLineCount = (effectMaterial.length > 0 ? 1 : 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
        const sentencizeText = effectBody.split('\n');

        while(effectIndexSize < fontList.length) {
            const { fontSize, lineHeight, lineCount } = fontList[effectIndexSize];
            const { left, width, top } = sizeList[effectIndexSize];
            const condenser = createCondenser();
            let effectiveRatio = 1000;
            const maxLine = Math.max(sentencizeText.length, lineCount);
            ctx.font = `${isNormal ? 'italic' : ''} ${fontSize}px MatrixBook`;
            ctx.textAlign = 'left';

            let lineList: { text: string, width: number, isLast: boolean }[] = [];
            const isOverflow = () => {
                lineList = [];

                return sentencizeText.reduce((prev, curr) => {
                    const hypoWidth = width / (condenser.getMedian() / 1000);
                    const tokenizeText = curr.split(/([\s-])/g);
                    let currentLineCount = 1;
                    let tokenSentence: string[] = [];
                    let totalWidth = 0;
                    for (let cnt = 0; cnt < tokenizeText.length; cnt++) {
                        const tokenWidth = ctx.measureText(tokenizeText[cnt]).width;
                        if (totalWidth + tokenWidth > hypoWidth) {
                            const fullString = tokenSentence.join('').trim();
                            lineList.push({
                                text: fullString,
                                width: ctx.measureText(fullString).width,
                                isLast: false,
                            });
                            totalWidth = tokenWidth;
                            tokenSentence = [tokenizeText[cnt]];
                            currentLineCount += 1;
                        } else {
                            totalWidth += tokenWidth;
                            tokenSentence.push(tokenizeText[cnt]);
                        }
                    }

                    const fullString = tokenSentence.join('').trim();
                    lineList.push({
                        text: fullString,
                        width: ctx.measureText(fullString).width,
                        isLast: true,
                    });
    
                    return prev + currentLineCount;
                }, 0) + additionalLineCount;
            };

            while (condenser.getIterateCount() >= 0) {
                if (condenser.getIterateCount() <= 0) {
                    // When out of iteration, return the concluded median
                    effectiveRatio = condenser.getMedian();
                    break;
                } else {
                    const lineCount = isOverflow();

                    if (lineCount > maxLine) {
                        // If overflow, lower the median and apply it
                        condenser.searchDown();
                    } else {
                        if (condenser.getMedian() === 1000) break;
                        else effectiveRatio = condenser.reverseSearch();
                    }
                }
            }

            if (effectiveRatio < (tolerantPerSentence[`${sentencizeText.length}`] ?? tolerantPerSentence['3'])) {
                effectIndexSize += 1;
            } else {
                let baseline = top + lineHeight;
                if (effectMaterial.length > 0) {
                    let actualWidth = ctx.measureText(effectMaterial).width;
                    let condenseRatio = Math.min(width / actualWidth, 1);

                    ctx.scale(condenseRatio, 1);
                    ctx.fillText(effectMaterial, left / condenseRatio, baseline);
                    baseline += lineHeight;
                    ctx.scale(1 / condenseRatio, 1);
                }

                const sigmoidRatio = effectiveRatio / 1000; // Fancy way to force ratio in to 0-1 range
                lineList.forEach(({ text, width: actualWidth, isLast }, index) => {
                    const condenseRatio = isLast
                        ? Math.min(sigmoidRatio, 1)
                        : width / actualWidth;

                    if (condenseRatio <= 1) {
                        ctx.scale(condenseRatio, 1);
                        ctx.fillText(text, left / condenseRatio, baseline);
                        baseline += lineHeight;
                        ctx.scale(1 / condenseRatio, 1);
                    } else {
                        const spaceSeparatedText = text.split(' ');
                        ctx.scale(1, 1);
                        let currentLeft = left;
                        let widthPerEntry: number[] = [];

                        spaceSeparatedText.forEach(entry => {
                            widthPerEntry.push(ctx.measureText(entry).width);
                        });
                        // Split text by "space", then distribute remaining width to those spaces, resulting in "widen" space
                        const spaceWidth = (width - widthPerEntry.reduce((prev, cur) => prev + cur, 0)) / (spaceSeparatedText.length - 1);

                        spaceSeparatedText.forEach((entry, index) => {
                            ctx.fillText(entry, currentLeft, baseline);
                            currentLeft += widthPerEntry[index] + spaceWidth;
                        });
                        baseline += lineHeight;
                    }
                });

                if (effectFlavorCondition.length > 0) {
                    let actualWidth = ctx.measureText(effectFlavorCondition).width;
                    let condenseRatio = Math.min(width / actualWidth, 1);

                    ctx.font = `${fontSize}px MatrixBook`;
                    ctx.scale(condenseRatio, 1);
                    ctx.fillText(effectFlavorCondition, left / condenseRatio, baseline);
                    baseline += lineHeight;
                    ctx.scale(1 / condenseRatio, 1);
                }
                break;
            }
        }

        return effectIndexSize;
    }
    return effectIndexSize;
};