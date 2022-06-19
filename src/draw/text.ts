import { FontSize, monsterFontList, BoxSize, monsterSizeList } from '../const';
import { CondenseType, defaultTextStyle, TextStyle } from '../model';
import { splitEffect, createCondenser, quoteConvert } from '../util';

export const drawName = (
    ctx: CanvasRenderingContext2D | null | undefined,
    value: string,
    edge: number,
    baseline: number,
    maxWidth: number,
    style: TextStyle,
) => {
    if (ctx && value) {
        ctx.fillStyle = style.fillStyle;
        if (style.hasShadow) {
            ctx.shadowColor = style.shadowColor;
            ctx.shadowOffsetY = style.shadowOffsetY;
            ctx.shadowOffsetX = style.shadowOffsetX;
            ctx.shadowBlur = style.shadowBlur;
        }
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
        }
        ctx.fillStyle = defaultTextStyle.fillStyle;
        ctx.shadowColor = defaultTextStyle.shadowColor;
        ctx.shadowOffsetY = defaultTextStyle.shadowOffsetY;
        ctx.shadowOffsetX = defaultTextStyle.shadowOffsetX;
        ctx.shadowBlur = defaultTextStyle.shadowBlur;
    }
};

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

const CondenseTolerantMap = {
    strict: {
        '1': 645,
        '2': 665,
        '3': 685,
    },
    loose: {
        '1': 700,
        '2': 710,
        '3': 720,
    },
    veryLoose: {
        '1': 740,
        '2': 770,
        '3': 800,
    }
};
export const drawEffect = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isPendulumEffect = false,
    isNormal = false,
    fontList: FontSize[] = monsterFontList,
    sizeList: BoxSize[] = monsterSizeList,
    condenseTolerant: CondenseType = 'strict',
) => {
    let effectSizeLevel = 0;
    const bulletSymbol = '●';
    const bulletSymbolWidth = 15;
    const specialSymbol = '#@∞';
    const breakableSymbol = '\\s-';
    const spaceSymbol = ' ';
    if (ctx && content) {
        const normalizedContent = quoteConvert(content.trim());
        const tolerantPerSentence: Record<string, number> = CondenseTolerantMap[condenseTolerant] ?? CondenseTolerantMap['strict'];
        const {
            body: effectBody,
            flavorCondition: effectFlavorCondition,
            material: effectMaterial,
        } = isPendulumEffect
            ? {
                body: normalizedContent,
                flavorCondition: '',
                material: '',
            }
            : splitEffect(normalizedContent, isNormal);

        const additionalLineCount = (effectMaterial.length > 0 ? 1 : 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
        const sentencizeText = effectBody.split('\n');
        
        const tokenizer = new RegExp(`([${specialSymbol}${breakableSymbol}])`, 'g');
        const specialSymbolReg = new RegExp(specialSymbol, 'g');

        while (effectSizeLevel < fontList.length) {
            const { fontSize, lineHeight, lineCount } = fontList[effectSizeLevel];
            const { left, width: basedWidth, top } = sizeList[effectSizeLevel];
            const width = isNormal ? basedWidth - 2 : basedWidth;
            const condenser = createCondenser();
            let effectiveRatio = 1000;

            const maxLine = Math.max(sentencizeText.length, lineCount);

            ctx.font = `${isNormal ? 'italic' : ''} ${fontSize}px MatrixBook`;
            ctx.textAlign = 'left';

            const switchFont = (func: () => void) => {
                const tempFont = ctx.font;
                const largeSize = fontSize * 1.15;
                ctx.font = tempFont.replace('MatrixBook', 'matrix').replace(`${fontSize}`, `${largeSize}`);
                func();
                ctx.font = tempFont;
            };

            // [CREATE SENTENCE ON EACH LINE]
            let lineList: { text: string, width: number, isLast: boolean }[] = [];
            const createSentence = () => {
                lineList = [];

                return sentencizeText.reduce((prev, curr) => {
                    // The width is "expand" based on condense ratio so all the calculate does not need to be scaled
                    const condenseRatio = condenser.getMedian() / 1000;
                    const hypoWidth = width / condenseRatio;
                    const tokenizedText = curr.split(tokenizer);
                    let currentLineCount = 1;
                    let tokenSentence: string[] = [];
                    let totalWidth = 0;

                    for (let cnt = 0; cnt < tokenizedText.length; cnt++) {
                        let tokenWidth = 0;
                        /**
                         * If bullet symbol is met, it will become "wider" based on condense ratio
                         * so that when the whole line is condense, bullet symbol's width become
                         * "normal", as if it were not condensed
                         */
                        if (tokenizedText[cnt] === bulletSymbol) tokenWidth = bulletSymbolWidth / condenseRatio;
                        /**
                         * Some special symbol required different font
                         */
                        else if (specialSymbolReg.test(tokenizedText[cnt])) {
                            switchFont(() => {
                                tokenWidth = ctx.measureText(tokenizedText[cnt]).width;
                            });
                        } else tokenWidth = ctx.measureText(tokenizedText[cnt]).width;
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
                            tokenSentence = [tokenizedText[cnt]];
                            currentLineCount += 1;
                        } else {
                            totalWidth += tokenWidth;
                            tokenSentence.push(tokenizedText[cnt]);
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

            // [FIND SUITABLE CONDENSE RATIO]
            while (condenser.getIterateCount() >= 0) {
                if (condenser.getIterateCount() <= 0) {
                    // When out of iteration, return the concluded median
                    effectiveRatio = condenser.getMedian();
                    break;
                } else {
                    const lineCount = createSentence();

                    if (lineCount > maxLine) {
                        // If overflow, lower the median and apply it
                        condenser.searchDown();
                    } else {
                        if (condenser.getMedian() === 1000) break;
                        else effectiveRatio = condenser.reverseSearch();
                    }
                }
            }

            // [START DRAWING]
            const drawBullet = (ctx: CanvasRenderingContext2D, edge: number, baseline: number) => {
                ctx.beginPath();
                ctx.arc(edge + 7, baseline - 5.5, 5.5, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#003300';
                ctx.stroke();
            };
            const tolerantValue = tolerantPerSentence[`${sentencizeText.length}`] ?? tolerantPerSentence['3'];
            if ((effectiveRatio < tolerantValue)
            && effectSizeLevel < fontList.length - 1) {
                effectSizeLevel += 1;
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

                /**
                 * Is it last line?
                 * * Yes:
                 *   * Draw text with predefined ratio (factor in special symbol and effect bullet)
                 * * No:
                 *   * Calculate total meaningful content width (text, special symbol, effect bullet)
                 *   * Calculate space content by subtract total width with meaningful content width
                 *   * Distribute space content to each individual space
                 *   * Draw text with predefined ratio and widened space
                 */
                const sigmoidRatio = effectiveRatio / 1000; // Fancy way to force ratio in to 0-1 range
                lineList.forEach(({
                    text,
                    width: actualWidth,
                    isLast,
                }) => {
                    const condenseRatio = isLast
                        ? Math.min(sigmoidRatio, 1)
                        : sigmoidRatio;

                    ctx.scale(condenseRatio, 1);
                    if (isLast) {
                        const splitter = new RegExp(`([${bulletSymbol}${specialSymbol}])`, 'g');
                        const splittedText = text.split(splitter);

                        splittedText.reduce((prev, cur, index) => {
                            let edge = prev;

                            // Normal text
                            if (index % 2 === 0) {
                                ctx.fillText(cur, edge / condenseRatio, baseline);
                                edge += ctx.measureText(cur).width * condenseRatio;
                            } else {
                                // Special bullet
                                if (cur === bulletSymbol) {
                                    ctx.scale(1 / condenseRatio, 1);
                                    drawBullet(ctx, edge, baseline);
                                    edge += 15;
                                    ctx.scale(condenseRatio, 1);
                                } else {
                                    switchFont(() => {
                                        ctx.fillText(cur, edge / condenseRatio, baseline);
                                        edge += ctx.measureText(cur).width * condenseRatio;
                                    });
                                }
                            }

                            return edge;
                        }, left);
                    } else {
                        /**
                         * This regex split string into two types:
                         * * Normal text, that is, any words or characters (EVEN empty string) that can be draw normally without any proccessing
                         * * Special character that need special procession before they can be draw
                         * 
                         * By nature of the regex, the result will guaranteed to look like this:
                         * 
                         * `[normal, special, normal, special, normal, special, ...]`
                         * 
                         * It is easy to see that normal text will always stand at odd indices, while special text stand at even ones
                         */
                        const splitter = new RegExp(`([${bulletSymbol}${specialSymbol}${spaceSymbol}])`, 'g');
                        const spaceSeparatedText = text.split(splitter);
                        const spaceNextToBulletSet: Set<number> = new Set();
                        let nonSpaceWidth = 0;
                        let spaceCount = 0;

                        spaceSeparatedText.forEach((entry, index) => {
                            if (entry === spaceSymbol) {
                                /**
                                 * Space right next to bullet is treated differently and do not count toward space counter, also their position is
                                 * saved
                                 */
                                if (spaceSeparatedText[index - 2] === bulletSymbol) {
                                    spaceNextToBulletSet.add(index - 2);
                                    nonSpaceWidth += ctx.measureText(entry).width * condenseRatio;
                                } else {
                                    spaceCount += 1;
                                }
                            } else if (entry === bulletSymbol) {
                                nonSpaceWidth += 15;
                            } else if (specialSymbolReg.test(entry)) {
                                switchFont(() => nonSpaceWidth += ctx.measureText(entry).width * condenseRatio);
                            } else {
                                nonSpaceWidth += ctx.measureText(entry).width * condenseRatio;
                            }
                        });
                        // Split text by "space", then distribute remaining width to those spaces, resulting in "widen" space
                        const spaceWidth = spaceCount > 0 ? (width - nonSpaceWidth) / spaceCount : 0;

                        spaceSeparatedText.reduce((prev, cur, index) => {
                            let edge = prev;

                            // Normal text
                            if (index % 2 === 0) {
                                ctx.fillText(cur, edge / condenseRatio, baseline);
                                edge += ctx.measureText(cur).width * condenseRatio;
                            } else {
                                // Special bullet
                                if (cur === bulletSymbol) {
                                    ctx.scale(1 / condenseRatio, 1);
                                    drawBullet(ctx, edge, baseline);
                                    edge += 15;
                                    ctx.scale(condenseRatio, 1);
                                    /**
                                     * If this bullet is followed by a white space, we draw this white space with normal condensed font size instead of
                                     * auto-distributed size because bullet naturally form a list. So we must guarantee the space between bullet and
                                     * the text next to it must be the same accross all the line so it look perfectly aligned.
                                     */
                                    if (spaceNextToBulletSet.has(index)) {
                                        ctx.fillText(spaceSymbol, edge / condenseRatio, baseline);
                                        edge += ctx.measureText(spaceSymbol).width * condenseRatio;
                                    }
                                } else if (cur === spaceSymbol) {
                                    /**
                                     * Since we already has special treatment for space next to bullet, ignore it for normal space processing.
                                     */
                                    if (!spaceNextToBulletSet.has(index - 2)) edge += spaceWidth;
                                } else {
                                    switchFont(() => {
                                        ctx.fillText(cur, edge / condenseRatio, baseline);
                                        edge += ctx.measureText(cur).width * condenseRatio;
                                    });
                                }
                            }

                            return edge;
                        }, left);
                    }
                    ctx.scale(1 / condenseRatio, 1);
                    baseline += lineHeight;
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

        return effectSizeLevel;
    }
    return effectSizeLevel;
};