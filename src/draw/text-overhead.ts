import {
    analyzeHeadText,
    getTextWorker,
} from './text-util';
import { getLetterWidth } from './letter';
import { GAP_PADDING_RATIO, RUBY_BONUS_RATIO } from 'src/model';

/** Vẽ các ký tự overhead (furigana) */
export const fillHeadText = ({
    ctx,
    fontSize,
    edge, baseline,
    headText, headTextLetterWidth,
    footText, footTextWidth,
    headTextGap,
    headTextSpacing,
    headTextHeightRatio,
    xRatio,
    format,
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
    xRatio: number,
    format: string,
    textWorker: ReturnType<typeof getTextWorker>,
    fitFootText: boolean,
    headTextOverflow: 'normal' | 'condense',
}) => {
    const { applyFuriganaFont, stopApplyFuriganaFont, resetScale, applyScale } = textWorker;
    const externalHeadTextXRatio = (headTextOverflow === 'condense' && footText.length > 1) ? Math.min(1, xRatio + RUBY_BONUS_RATIO) : 0;
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
        gapPadding: fontSize * GAP_PADDING_RATIO,
        fitFootText,
        xRatio: externalHeadTextXRatio,
    });
    const overflow = trueHeadTextWidth > footTextWidth * xRatio;

    if (headText.length === 0) return {
        trueHeadTextWidth,
        halfGap,
    };

    const baseLoneTokenRatio = fitFootText
        ? Math.min(1, footTextWidth * xRatio / trueHeadTextWidth)
        : 1;
    const loneTokenRatio = fitFootText
        ? baseLoneTokenRatio
        : (externalHeadTextXRatio && alignment === 'center')
            ? externalHeadTextXRatio
            : headTextXRatio;

    let currentEdge = edge;
    resetScale();
    if (fitFootText || loneTokenRatio) {
        applyScale(loneTokenRatio, 1);
        currentEdge = edge / loneTokenRatio;
    }

    if (alignment === 'center') {
        currentEdge += gapPadding;
        if (!overflow) {
            currentEdge += (footTextWidth * xRatio - trueHeadTextWidth) / 2;
        } else if (loneTokenRatio > baseLoneTokenRatio) {
            currentEdge += (footTextWidth * xRatio / loneTokenRatio - trueHeadTextWidth) / 2 / loneTokenRatio;
        }
    } else {
        currentEdge += letterSpacing / 2;
    }

    for (const letter of headText) {
        applyFuriganaFont();
        const { width, boundWidth } = getLetterWidth({ ctx, letter, format, metricMethod: 'furigana', xRatio: 1 });
        const boundingOffset = (width - boundWidth) / 2;
        stopApplyFuriganaFont();

        applyFuriganaFont(true);
        ctx.fillText(letter, currentEdge - boundingOffset, baseline - fontSize * headTextHeightRatio);
        stopApplyFuriganaFont();
        currentEdge += (boundWidth + letterSpacing);
    }
    if (fitFootText || loneTokenRatio) {
        resetScale();
    }
    applyScale(xRatio, 1);

    return {
        trueHeadTextWidth,
        halfGap,
    };
};