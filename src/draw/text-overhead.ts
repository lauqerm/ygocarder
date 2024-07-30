import {
    getHeadTextWidth,
    getTextWorker,
} from './text-util';
import { getLetterWidth } from './letter';
import { GAP_PADDING_RATIO } from 'src/model';

/** Vẽ các ký tự overhead (furigana) */
export const fillHeadText = ({
    ctx,
    fontSize,
    edge, baseline,
    headText, headTextLetterWidth,
    footText, footTextWidth,
    overheadTextGap,
    overheadTextSpacing,
    overheadTextHeightRatio,
    xRatio,
    format,
    textWorker,
}: {
    ctx: CanvasRenderingContext2D,
    fontSize: number,
    headText: string, headTextLetterWidth: number,
    footText: string, footTextWidth: number,
    edge: number, baseline: number,
    overheadTextGap: number,
    overheadTextSpacing: number,
    overheadTextHeightRatio: number,
    xRatio: number,
    format: string,
    textWorker: ReturnType<typeof getTextWorker>,
}) => {
    const { applyFuriganaFont, stopApplyFuriganaFont, resetScale, applyScale } = textWorker;
    const {
        gapPadding,
        letterSpacing,
        headTextWidth,
        halfGap,
        alignment,
    } = getHeadTextWidth({
        headText, headTextLetterWidth,
        footText, footTextWidth: footTextWidth * xRatio,
        overheadTextGap, overheadTextSpacing: overheadTextSpacing * xRatio,
        gapPadding: fontSize * GAP_PADDING_RATIO,
    });
    const overflow = headTextWidth > footTextWidth * xRatio;

    if (headText.length === 0) return {
        headTextWidth,
        halfGap,
    };

    resetScale();
    let currentEdge = edge;

    if (alignment === 'center') {
        currentEdge += gapPadding;
        if (!overflow) {
            currentEdge += (footTextWidth * xRatio - headTextWidth) / 2;
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
        ctx.fillText(letter, currentEdge - boundingOffset, baseline - fontSize * overheadTextHeightRatio);
        stopApplyFuriganaFont();
        currentEdge += (boundWidth + letterSpacing);
    }
    applyScale(xRatio, 1);

    return {
        headTextWidth,
        halfGap,
    };
};