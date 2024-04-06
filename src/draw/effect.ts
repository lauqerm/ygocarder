import { FontSize, monsterFontList, BoxSize, monsterSizeList, CondenseTolerantMap } from '../const';
import { CanvasConst, CondenseType, UP_RATIO } from '../model';
import { splitEffect, createCondenser, quoteConvert } from '../util';

const {
    // height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
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
    const bulletSymbolWidth = 15 * UP_RATIO;
    const specialSymbol = '#@∞';
    const breakableSymbol = '\\s-/';
    const spaceSymbol = ' ';
    if (!ctx || !content) return effectSizeLevel;

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
    const paragraphList = effectBody.split('\n');

    const tokenizer = new RegExp(`([${specialSymbol}${breakableSymbol}])`, 'g');
    const specialSymbolReg = new RegExp(specialSymbol, 'g');

    while (effectSizeLevel < fontList.length) {
        const { fontSize, lineHeight, lineCount } = fontList[effectSizeLevel];
        const { left, width: basedWidth, top } = sizeList[effectSizeLevel];
        const width = isNormal ? basedWidth - 2 : basedWidth;
        const condenser = createCondenser();
        let effectiveRatio = 1000;

        const maxLine = Math.max(paragraphList.length, lineCount);

        ctx.font = `${isNormal ? 'italic' : ''} ${fontSize}px MatrixBook`;
        ctx.textAlign = 'left';

        const switchFont = (worker: () => void) => {
            const tempFont = ctx.font;
            const largeSize = fontSize * 1.15;
            ctx.font = tempFont.replace('MatrixBook', 'matrix').replace(`${fontSize}`, `${largeSize}`);
            worker();
            ctx.font = tempFont;
        };

        // [CREATE SENTENCE ON EACH LINE]
        let lineList: { text: string, width: number, isLast: boolean }[] = [];
        const createSentence = () => {
            lineList = [];

            return paragraphList.reduce((prev, curr) => {
                // The width is "expand" based on condense ratio so all the calculation does not need to be scaled
                const condenseRatio = condenser.getMedian() / 1000;
                const hypoWidth = width / condenseRatio;
                const tokenizedText = curr.split(tokenizer);
                let currentLineCount = 1;
                let wordList: string[] = [];
                let totalWidth = 0;

                for (const tokenText of tokenizedText) {
                    let tokenWidth = 0;
                    /**
                     * Bullet symbol không chịu ảnh hưởng bởi condense ratio, tham khảo "Agave Dragon"
                     */
                    if (tokenText === bulletSymbol) {
                        tokenWidth = bulletSymbolWidth / condenseRatio;
                    }
                    /**
                     * Some special symbol required different font
                     */
                    else if (specialSymbolReg.test(tokenText)) {
                        switchFont(() => tokenWidth = ctx.measureText(tokenText).width);
                    } else {
                        tokenWidth = ctx.measureText(tokenText).width;
                    }
                    if (totalWidth + tokenWidth > hypoWidth) {
                        // If the next token cause overflow, wrap it down
                        /**
                         * Cần chú ý "câu" được cấu thành bởi tất cả ký tự KHÔNG bao gồm khoảng trắng, vì kích thước
                         * khoản trắng sẽ tùy vào phần không gian còn lại của dòng (dòng căng đều hai bên - justify).
                         */
                        const sentence = wordList.join('').trim();
                        // Calculate the line width as if the bullet is wider
                        const fullStringSplittedByBullet = sentence.split(bulletSymbol);
                        lineList.push({
                            text: sentence,
                            width: fullStringSplittedByBullet.reduce((prev, curr) => prev + ctx.measureText(curr).width, 0)
                                + (fullStringSplittedByBullet.length - 1) * bulletSymbolWidth / condenseRatio,
                            isLast: false,
                        });
                        totalWidth = tokenWidth;
                        wordList = [tokenText];
                        currentLineCount += 1;
                    } else {
                        totalWidth += tokenWidth;
                        wordList.push(tokenText);
                    }
                }

                const sentence = wordList.join('').trim();
                const fullStringSplittedByBullet = sentence.split(bulletSymbol);
                lineList.push({
                    text: sentence,
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
            ctx.arc(edge + 7 * UP_RATIO, baseline - 5.5 * UP_RATIO, 5.5 * UP_RATIO, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#003300';
            ctx.stroke();
        };
        const tolerantValue = tolerantPerSentence[`${paragraphList.length}`] ?? tolerantPerSentence['3'];
        if ((effectiveRatio < tolerantValue)
            && effectSizeLevel < fontList.length - 1
        ) {
            effectSizeLevel += 1;
        } else {
            ctx.clearRect(0, 0, CanvasWidth, 750 * UP_RATIO);
            let baseline = top + lineHeight;
            /** Material luôn nằm trong 1 dòng duy nhất và có hệ số condense riêng so với phần còn lại của effect, tham
             * khảo "Galaxy-Eyes Cipher X Dragon"
             */
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
             *   * Draw text with predefined ratio (factor in special symbol and effect bullet) - Vì dòng cuối cùng chưa
             * chắc đã fill hết không gian, nên ta không customize độ dài của white space.
             * * No:
             *   * Calculate total meaningful content width (text, special symbol, effect bullet)
             *   * Calculate space content by subtract total width with meaningful content width
             *   * Distribute space content to each individual space
             *   * Draw text with predefined ratio and widened space
             */
            const sigmoidRatio = effectiveRatio / 1000; // Fancy way to force ratio in to 0-1 range
            lineList.forEach(({
                text,
                isLast,
            }) => {
                const condenseRatio = isLast
                    ? Math.min(sigmoidRatio, 1)
                    : sigmoidRatio;

                ctx.scale(condenseRatio, 1);
                /**
                 * "splitter" regex split string into two types:
                 * * Normal text, that is, any words or characters (EVEN empty string) that can be draw normally without any proccessing
                 * * Special character that need special procession before they can be draw
                 * 
                 * By nature of the regex, the result will guaranteed to look like this:
                 * 
                 * `[normal, special, normal, special, normal, special, ...]`
                 * 
                 * It is easy to see that normal text will always stand at odd indices, while special text stand at even ones
                 */
                if (isLast) {
                    const splitter = new RegExp(`([${bulletSymbol}${specialSymbol}])`, 'g');
                    const tokenList = text.split(splitter);

                    tokenList.reduce((prev, cur, index) => {
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
                                edge += bulletSymbolWidth;
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
                    const splitter = new RegExp(`([${bulletSymbol}${specialSymbol}${spaceSymbol}])`, 'g');
                    const tokenList = text.split(splitter);
                    const spaceNextToBulletSet: Set<number> = new Set();
                    let nonSpaceWidth = 0;
                    let spaceCount = 0;

                    tokenList.forEach((entry, index) => {
                        if (entry === spaceSymbol) {
                            /**
                             * Space right next to bullet is treated differently and do not count toward space counter, also their position is
                             * saved
                             */
                            if (tokenList[index - 2] === bulletSymbol) {
                                spaceNextToBulletSet.add(index - 2);
                                nonSpaceWidth += ctx.measureText(entry).width * condenseRatio;
                            } else {
                                spaceCount += 1;
                            }
                        } else if (entry === bulletSymbol) {
                            nonSpaceWidth += bulletSymbolWidth;
                        } else if (specialSymbolReg.test(entry)) {
                            switchFont(() => nonSpaceWidth += ctx.measureText(entry).width * condenseRatio);
                        } else {
                            nonSpaceWidth += ctx.measureText(entry).width * condenseRatio;
                        }
                    });
                    // Split text by "space", then distribute remaining width to those spaces, resulting in "widen" space
                    const spaceWidth = spaceCount > 0 ? (width - nonSpaceWidth) / spaceCount : 0;

                    tokenList.reduce((prev, cur, index) => {
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
                                edge += bulletSymbolWidth;
                                ctx.scale(condenseRatio, 1);
                                /**
                                 * If this bullet is followed by a white space, we draw this white space with normal condensed font size instead of
                                 * auto-distributed size because bullet naturally form a list. So we must guarantee the space between bullet and
                                 * the text next to it must be the same accross all the line so it look perfectly aligned. Tham khảo "Agave Dragon"
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

            /** Condition của Flavor Text không in nghiêng, tham khảo "Summoned Skull" */
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
};