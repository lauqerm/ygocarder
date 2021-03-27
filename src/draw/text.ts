import { FontSize, monsterFontList, BoxSize, monsterSizeList } from '../const';
import { splitEffect, createCondenser, quoteConvert } from '../util';

export const drawName = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
    maxWidth: number,
) => {
    if (ctx) {
        const splittedText = quoteConvert(value).split(/([^&A-Za-z0-9\-/\s()])/g);
        const contentWidth = splittedText
            .reduce((prev, cur, index) => {
                if (index % 2 === 0) ctx.font = '64.59px MatrixRegularSmallCaps';
                else ctx.font = '54.59px matrix';

                return prev + ctx.measureText(cur).width;
            }, 0);

        // ctx.fillText(value, edge, baseline, maxWidth);
        if (contentWidth > 0) {
            const condenseRatio = Math.min(maxWidth / contentWidth, 1);
            ctx.scale(condenseRatio, 1);
            splittedText
                .reduce((prev, cur, index) => {
                    if (index % 2 === 0) ctx.font = '64.59px MatrixRegularSmallCaps';
                    else ctx.font = 'small-caps 54.59px matrix';
    
                    ctx.fillText(cur, prev / condenseRatio, baseline);
                    return prev + ctx.measureText(cur).width * condenseRatio;
                }, edge);
            ctx.scale(1 / condenseRatio, 1);
            ctx.fillStyle = '#000000';
        }
    }
};

export const drawScale = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
) => {
    if (ctx) {
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

export const drawEffect = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isPendulumEffect = false,
    isNormal = false,
    fontList: FontSize[] = monsterFontList,
    sizeList: BoxSize[] = monsterSizeList,
) => {
    const normalizedContent = quoteConvert(content);
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
                body: normalizedContent,
                flavorCondition: '',
                material: '',
            } : splitEffect(normalizedContent, isNormal);

        const additionalLineCount = (effectMaterial.length > 0 ? 1 : 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
        const sentencizeText = effectBody.split('\n');
        const bulletSymbol = '●';
        const bulletSymbolWidth = 15;

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
                    // The width is "expand" based on condense ratio so all the calculate does not need to be scaled
                    const condenseRatio = condenser.getMedian() / 1000;
                    const hypoWidth = width / condenseRatio;
                    const tokenizeText = curr.split(/([\s-])/g);
                    let currentLineCount = 1;
                    let tokenSentence: string[] = [];
                    let totalWidth = 0;

                    for (let cnt = 0; cnt < tokenizeText.length; cnt++) {
                        /**
                         * If bullet symbol is met, it will become "wider" based on condense ratio
                         * so that when the whole line is condense, bullet symbol's width become
                         * "normal", as if it were not condensed
                         */
                        const tokenWidth = tokenizeText[cnt] === bulletSymbol
                            ? bulletSymbolWidth / condenseRatio
                            : ctx.measureText(tokenizeText[cnt]).width;
                        if (totalWidth + tokenWidth > hypoWidth) {
                            // If the next token cause overflow, wrap it down
                            const fullString = tokenSentence.join('').trim();
                            // Calculate the line width as if the bullet is wider
                            const fullStringSplittedByBullet = fullString.split(bulletSymbol);
                            lineList.push({
                                text: fullString,
                                width: fullStringSplittedByBullet.reduce((prev, curr) => prev + ctx.measureText(curr).width, 0)
                                    + (fullStringSplittedByBullet.length - 1) * bulletSymbolWidth / condenseRatio,
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
                    const fullStringSplittedByBullet = fullString.split(bulletSymbol);
                    lineList.push({
                        text: fullString,
                        width: fullStringSplittedByBullet.reduce((prev, curr) => prev + ctx.measureText(curr).width, 0)
                            + (fullStringSplittedByBullet.length - 1) * bulletSymbolWidth / condenseRatio,
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
                ctx?.clearRect(0, 0, 549, 750);
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
                lineList.forEach(({
                    text,
                    width: actualWidth,
                    isLast,
                }) => {
                    const condenseRatio = isLast
                        ? Math.min(sigmoidRatio, 1)
                        : Math.min(width / actualWidth, 1);

                    if (condenseRatio <= 1) {
                        ctx.scale(condenseRatio, 1);
                        const splittedText = text.split(bulletSymbol);

                        splittedText.reduce((prev, cur, index) => {
                            let edge = prev;
                            ctx.fillText(cur, edge / condenseRatio, baseline);
                            edge += ctx.measureText(cur).width * condenseRatio;

                            // Draw special bullet
                            if (index < splittedText.length - 1) {
                                ctx.scale(1 / condenseRatio, 1);
                                ctx.beginPath();
                                ctx.arc(edge + 7, baseline - 5.5, 5.5, 0, 2 * Math.PI, false);
                                ctx.fill();
                                ctx.lineWidth = 1;
                                ctx.strokeStyle = '#003300';
                                ctx.stroke();
                                ctx.scale(condenseRatio, 1);
                                edge += 15;
                            };

                            return edge;
                        }, left);
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