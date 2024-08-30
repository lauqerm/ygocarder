import {
    CanvasConst,
    CondenseType,
    EffectFontData,
    CoordinateData,
    EffectCoordinateData,
    CondenseTolerantMap,
    FontData,
    TCGVanillaTypeStatFontList,
    DefaultTCGNormalFontData,
} from '../../model';
import { condense, createFontGetter } from '../../util';
import { createLineList } from '../line';
import { drawLine } from '../text';
import { analyzeLine } from '../text-analyze';
import { normalizeCardText, splitEffect } from '../text-normalize';
import { tokenizeText } from '../text-util';

/** Sections inside effect box (stats and type) will affect the amount of line and applicaable font size use for the text. */
export const getEffectSizeAndCoordinate = ({
    format,
    isNormal,
    statInEffect,
    typeInEffect,
}: {
    format: string,
    statInEffect: boolean,
    typeInEffect: boolean,
    isNormal: boolean,
}) => {
    const coordinateKey = [format, typeInEffect ? 'type' : '', statInEffect ? 'stat' : '']
        .filter(entry => entry !== '').join('-');
    const fontDataKey = [format, typeInEffect ? 'type' : '', statInEffect ? 'stat' : '']
        .filter(entry => entry !== '').join('-');

    let fontData = EffectFontData[fontDataKey];
    if (statInEffect && typeInEffect && isNormal && format === 'tcg') {
        fontData = DefaultTCGNormalFontData;
        fontData.fontList = TCGVanillaTypeStatFontList;
    }

    return {
        fontData,
        sizeList: EffectCoordinateData[coordinateKey],
    };
};

const {
    width: CanvasWidth,
} = CanvasConst;
export const drawEffect = ({
    ctx,
    content,
    isNormal = false,
    fontData = EffectFontData.tcg,
    sizeList = EffectCoordinateData['tcg-type'],
    condenseTolerant = 'strict',
    format,
    furiganaHelper,
}: {
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isNormal?: boolean,
    fontData?: FontData,
    sizeList?: CoordinateData[],
    condenseTolerant?: CondenseType,
    format: string,
    furiganaHelper: boolean,
}) => {
    let effectSizeLevel = 0;
    if (!ctx || !content) return effectSizeLevel;

    const normalizedContent = normalizeCardText(content.trim(), format, { furiganaHelper });
    const tolerancePerSentence: Record<string, number> = format === 'tcg'
        ? CondenseTolerantMap[condenseTolerant] ?? CondenseTolerantMap['strict']
        : {
            '1': 800,
            '2': 800,
            '3': 800,
        };
    const {
        effectText,
        effectFlavorCondition,
        fullLineList,
    } = splitEffect(normalizedContent, isNormal);

    const additionalLineCount = (fullLineList.length ?? 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
    const paragraphList = effectText ? effectText.split('\n') : [];

    const { font, fontList } = fontData;
    const yRatio = 1;
    /** We basically go through each font size, then iterating the content multiple time with different condense ratio until the text is both fit inside the max amount of lines AND the ratio is larger than the current limit threshold. */
    while (effectSizeLevel < fontList.length) {
        const fontSizeData = fontList[effectSizeLevel];
        const {
            fontSize,
            lineHeight,
            lineCount,
        } = fontSizeData;
        const {
            trueEdge,
            trueWidth: trueWidthStart,
            trueBaseline: trueBaselineStart,
        } = sizeList[effectSizeLevel] ?? sizeList[sizeList.length - 1];
        const width = (isNormal && format === 'tcg') ? trueWidthStart - 2 : trueWidthStart;

        const currentFont = createFontGetter();
        ctx.font = currentFont
            .setStyle(isNormal && format === 'tcg' ? 'italic' : '')
            .setWeight(format === 'tcg' ? '' : '')
            .setSize(fontSize)
            .setFamily(font)
            .getFont();
        ctx.textAlign = 'left';
        const textData = {
            fontData,
            fontLevel: effectSizeLevel,
            currentFont,
        };
        // [CREATE SENTENCE ON EACH LINE]
        let lineListWithRatio: { line: string, isLast: boolean, effectiveMedian: number }[] = [];

        // [FIND SUITABLE CONDENSE RATIO]
        const effectiveMedian = condense(
            median => {
                const { currentLineList, currentLineCount } = createLineList({
                    ctx,
                    median,
                    paragraphList,
                    additionalLineCount,
                    format, textData,
                    width,
                });
                lineListWithRatio = currentLineList;

                if (currentLineCount > lineCount) return false;
                return true;
            },
            200,
        );

        // [START DRAWING]
        /** Usually effect only consist of 1 or 2 paragraphs, but in TCG they try to put each bullet clause in a new line, resulting many more. Still we don't know if having different tolerance based on amount of paragraph is correct or not, since it is very hard to survey the condensation of a real card. */
        const tolerantValue = tolerancePerSentence[`${paragraphList.length}`] ?? tolerancePerSentence['3'];
        if (
            (effectiveMedian < tolerantValue)
            && (effectSizeLevel < fontList.length - 1)
        ) {
            effectSizeLevel += 1;
        } else {
            ctx.clearRect(0, 0, CanvasWidth, 1111);

            let trueBaseline = trueBaselineStart + lineHeight;
            /** Naturally, non-brekable lines have their own condense ratio. */
            const fullLineListWithRatio = fullLineList.map(line => {
                return {
                    line,
                    isLast: true,
                    effectiveMedian: condense(
                        median => {
                            const { currentLineCount } = createLineList({
                                ctx,
                                median,
                                paragraphList: [line],
                                format, textData,
                                width,
                            });
    
                            if (currentLineCount > 1) return false;
                            return true;
                        },
                    )
                };
            });

            /** Draw each line based on their token list and corresponding ratio. */
            [
                ...fullLineListWithRatio,
                ...lineListWithRatio,
            ].forEach(({
                line,
                isLast,
                effectiveMedian,
            }) => {
                const xRatio = effectiveMedian / 1000;
                const { tokenList, spaceWidth } = analyzeLine({ ctx, line, xRatio, format, isLast, textData, width });

                ctx.scale(xRatio, yRatio);
                drawLine({
                    ctx,
                    tokenList,
                    xRatio, yRatio,
                    trueEdge, trueBaseline,
                    spaceWidth,
                    textData,
                    format,
                });
                trueBaseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });

            /** Condition clause of flavor text in TCG cards do not use italic font style ("Summoned Skull" TCG). */
            if (effectFlavorCondition.length > 0) {
                const internalEffectiveMedian = condense(
                    median => {
                        const { currentLineCount } = createLineList({
                            ctx,
                            median,
                            paragraphList: [effectFlavorCondition],
                            format, textData,
                            width,
                        });

                        if (currentLineCount > 1) return false;
                        return true;
                    },
                );
                const xRatio = internalEffectiveMedian / 1000;

                ctx.scale(xRatio, yRatio);
                ctx.font = currentFont.setStyle('').getFont();
                let tokenList = tokenizeText(effectFlavorCondition);
                /** We use two new line character to identify condition clause among flavor text. Because in normal case the user will try to put in many new lines to ensure that the condition clause is placed at bottom of the card text.
                 * 
                 * But this method has a caveat: For example if current line limit is 6, and the flavor text already take 5 lines. If user put the condition clause at line 6, it is indistinguishable from a normal paragraph, and therefore drawn with italic font. But if user put a new line between, it will force the draw function to increase the line limit into 7.
                 * 
                 * To combat this, we perform a simple remove that additional new line, that means if conditional clause is present, two new lines in textare actually result only one new line. This does not create much hassle since user rarely notice this behavior.
                 * */
                tokenList = tokenList[0] === '\n'
                    ? tokenList.slice(1)
                    : tokenList;
                drawLine({
                    ctx,
                    tokenList,
                    xRatio, yRatio,
                    trueEdge, trueBaseline,
                    textData,
                    format,
                });
                trueBaseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            break;
        }
    }

    return effectSizeLevel;
};