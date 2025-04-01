import {
    OCGAlphabetRegex,
    MAX_LINE_REVERSE_INDENT,
    START_OF_LINE_ALPHABET_OFFSET,
    TextData,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
} from 'src/model';
import { tokenizeText } from './text-util';
import { analyzeToken } from './text-analyze';

/** Turn a paragraph into a list of lines with provided ratio (median). Basically we test with some ratio until reach a desirable list. Each line contains the information about its content, its actual width and whether or not it is the last line of a paragraph. Easy to see that actual width of all tokens on a line is always smaller or equal to the hypothesis width of the line. */
export const createLineList = ({
    ctx,
    median,
    paragraphList,
    additionalLineCount = 0,
    width,
    format,
    textData,
    globalScale,
}: {
    ctx: CanvasRenderingContext2D,
    median: number,
    width: number,
    paragraphList: string[],
    additionalLineCount?: number,
    format: string,
    textData: TextData,
    globalScale: number,
}) => {
    const { fontData, fontLevel } = textData;
    const { letterSpacing } = fontData.fontList[fontLevel];
    const currentLineList: { line: string, isLast: boolean, effectiveMedian: number, actualLineWidth: number }[] = [];
    const currentLineCount = paragraphList.reduce((accumulatedLineCount, curr) => {
        // Calculate hypothesis canvas width with the provided median ratio
        const baseXRatio = (median <= 100 ? 100 : median) / 1000;
        const scaledWidth = width / baseXRatio;
        const tokenList = tokenizeText(curr, true);
        let addedLineCount = 1;
        let wordList: string[] = [];
        let currentLineWidth = 0;
        let currentGap = 0;
        let unCompressedFlag = 0;

        for (let cnt = 0, xRatio = baseXRatio; cnt < tokenList.length; cnt++) {
            const token = tokenList[cnt];
            const nextToken = tokenList[cnt + 1];
            /** Because NB_UNCOMPRESS control letters may affect multiple lines, but we want to reduce the dependencies between each line as much as possible (in other words, each line should not know about the line below or above it).
             * To solve this, we will automatically add a NB_UNCOMPRESS_END letter to the end of a sentence, if it has an unclosed NB_UNCOMPRESS_START letter somewhere. Then we will add a NB_UNCOMPRESS_START letter immediately at the start of the next line.
             * Control letters do not get draw so this will not affect the calculation result.
             */
            if (token === NB_UNCOMPRESSED_START) {
                unCompressedFlag += 1;
                xRatio = 1;
            } else if (token === NB_UNCOMPRESSED_END) {
                unCompressedFlag -= 1;
                xRatio = baseXRatio;
            }
            let {
                leftMostLetter,
                totalWidth,
                rightGap,
                leftGap,
            } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: currentGap, format, letterSpacing, textData, globalScale });

            /** First token of a line may have the head text overflow to the left of the paragraph. On one hand we ensure that the foot text of that token does not overflow, on the other hand we also ensure that the head text cannot overflow too far so it overlap with the section's border (if any).
             */
            const indent = cnt === 0
                ? (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT * globalScale / xRatio, leftGap) * -1 : 0)
                    + (OCGAlphabetRegex.test(leftMostLetter) ? START_OF_LINE_ALPHABET_OFFSET * globalScale : 0)
                : 0;
            let tokenWidth = totalWidth / (unCompressedFlag > 0 ? baseXRatio : 1) + indent;
            /** Last token is not allowed to become overflow (no known cases said otherwise). */
            if (currentLineWidth + tokenWidth > scaledWidth) {
                let line = wordList.join('').trim();
                if (unCompressedFlag > 0) line = line + NB_UNCOMPRESSED_END;
                if (unCompressedFlag < 0) line = NB_UNCOMPRESSED_START + line;
                unCompressedFlag = 0;
                currentLineList.push({
                    line,
                    effectiveMedian: median,
                    isLast: false,
                    actualLineWidth: currentLineWidth,
                });
                /** If the next token is gonna made the line become overflow, we will create a new line with it becoming the first token. We also re-calulate the width of that token since now the right side of it is not the "previous token" anymore, but the edge of a new line. */
                let {
                    totalWidth,
                    rightGap,
                    leftGap,
                } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: 0, format, textData, globalScale });
                /** Of course we also re-calculate overflow possibility. */
                const indent = (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT * globalScale / xRatio, leftGap) * -1 : 0)
                    + (OCGAlphabetRegex.test(leftMostLetter) ? START_OF_LINE_ALPHABET_OFFSET * globalScale : 0);
                let tokenWidth = totalWidth + indent;
                currentLineWidth = tokenWidth;
                currentGap = rightGap;
                wordList = [token];
                addedLineCount += 1;
            } else {
                currentLineWidth += tokenWidth;
                currentGap = rightGap;
                wordList.push(token);
            }
        }

        /** If no more tokens left in the sentence, wrap them into the last line. */
        let line = wordList.join('').trim();
        if (unCompressedFlag > 0) line = line + NB_UNCOMPRESSED_END;
        if (unCompressedFlag < 0) line = NB_UNCOMPRESSED_START + line;
        unCompressedFlag = 0;
        currentLineList.push({
            line,
            effectiveMedian: median,
            isLast: true,
            actualLineWidth: currentLineWidth,
        });

        return accumulatedLineCount + addedLineCount;
    }, 0) + (additionalLineCount ?? 0);

    return { currentLineList, currentLineCount };
};