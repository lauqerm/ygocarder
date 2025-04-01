import {
    analyzeHeadText,
    getTextWorker,
} from './text-util';
import { getLetterWidth } from './letter';
import { RUBY_BONUS_RATIO } from 'src/model';

/** Fill head text, by furigana rules, they have their own scaling space so they do not necessarily respect current ratio of the foot text. This function receive true coordinations.
 * 
 * Head text has four cases of compression:
 * * Case 1: They do not condense at all, this is the default case for single-letter foot text.
 * * Case 2: They condense with a smaller rate compare to foot text, this is the default case for multiple-letters foot text.
 * * Case 3: They condense because the head text is way wider than the foot text, especially in the case of single-letter foot text.
 * * Case 4: They condense because overflow mode is explicitly set to `condense` by compressable ruby syntax. This prevent them from growth out of foot text's boundary, and has the highest priority, but only apply in the case of multiple-letters foot text.
*/
export const fillHeadText = ({
    ctx,
    fontSize,
    edge, baseline,
    headText, headTextLetterWidth,
    footText, footTextWidth,
    headTextGap,
    headTextSpacing,
    headTextHeightRatio,
    headTextBold,
    headTextGapRatio,
    globalScale,
    xRatio,
    fontStyle,
    textWorker,
    fitFootText,
    headTextOverflow,
}: {
    ctx: CanvasRenderingContext2D,
    fontSize: number,
    headText: string, headTextLetterWidth: number,
    footText: string, footTextWidth: number,
    edge: number, baseline: number,
    headTextGap: number,
    headTextSpacing: number,
    headTextHeightRatio: number,
    headTextBold: boolean,
    headTextGapRatio: number,
    globalScale: number,
    xRatio: number,
    fontStyle: string,
    textWorker: ReturnType<typeof getTextWorker>,
    fitFootText: boolean,
    headTextOverflow: 'normal' | 'condense',
}) => {
    const { applyFuriganaFont, stopApplyFuriganaFont, resetScale, applyScale } = textWorker;
    /** Custom ratio for case 2 */
    const externalHeadTextXRatio = (headTextOverflow === 'condense' && footText.length > 1)
        ? Math.min(1, xRatio + RUBY_BONUS_RATIO)
        : 0;
    const {
        gapPadding,
        letterSpacing,
        trueHeadTextWidth,
        halfGap,
        alignment,
        headTextXRatio,
    } = analyzeHeadText({
        headText, headTextLetterWidth,
        footText, footTextWidth: footTextWidth * xRatio,
        headTextGap, headTextSpacing: headTextSpacing * xRatio,
        gapPadding: fontSize * headTextGapRatio,
        fitFootText,
        sentenceXRatio: xRatio,
        xRatio: externalHeadTextXRatio,
    });
    const overflow = trueHeadTextWidth > footTextWidth * xRatio;

    if (headText.length === 0) return {
        trueHeadTextWidth,
        halfGap,
    };

    /** Custom ratio for case 4 */
    const baseLoneTokenRatio = fitFootText
        ? Math.min(1, footTextWidth * xRatio / trueHeadTextWidth)
        : 1;

    /** Priority: Case 4 => Case 3 and 2, in practice, case 2 and 3 are usually mutual exclusive, because case 2 currently only apply in card's name, while all case 3 only happens in card's effect. */
    const finalizedRatio = fitFootText
        ? baseLoneTokenRatio
        : (externalHeadTextXRatio && alignment === 'center')
            ? externalHeadTextXRatio
            : headTextXRatio;

    let currentEdge = edge;
    resetScale();
    if (fitFootText || finalizedRatio) {
        applyScale(finalizedRatio, 1);
        currentEdge = edge / finalizedRatio;
    }

    if (alignment === 'center') {
        currentEdge += gapPadding;
        /** Adjust head text's drawing position to fit case. */
        if (!overflow) {
            currentEdge += (footTextWidth * xRatio - trueHeadTextWidth) / 2;
        } else if (finalizedRatio > baseLoneTokenRatio) {
            currentEdge += (footTextWidth * xRatio / finalizedRatio - trueHeadTextWidth) / 2 / finalizedRatio;
        }
    } else {
        currentEdge += letterSpacing / 2;
    }

    for (const letter of headText) {
        /** `getLetterWidth` does not run properly in the case of bold font, so we must turn it off when calculating text width, before turn in on again and draw the actual text. */
        applyFuriganaFont();
        const { width, boundWidth } = getLetterWidth({ ctx, letter, fontStyle, metricMethod: 'furigana', xRatio: 1, globalScale });
        const boundingOffset = (width - boundWidth) / 2;
        stopApplyFuriganaFont();

        applyFuriganaFont(headTextBold);
        ctx.fillText(letter, currentEdge - boundingOffset, baseline - fontSize * headTextHeightRatio);
        stopApplyFuriganaFont();
        currentEdge += (boundWidth + letterSpacing);
    }
    if (fitFootText || finalizedRatio) {
        resetScale();
    }
    applyScale(xRatio, 1);

    return {
        trueHeadTextWidth,
        halfGap,
    };
};