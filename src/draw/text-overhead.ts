import {
    KATAKANA_RATIO,
} from 'src/model';
import {
    getHeadTextWidth,
    getTextWorker,
} from './text-util';
import { getLetterWidth } from './letter';

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
    const { applyFuriganaFont, stopApplyFuriganaFont } = textWorker;
    const {
        letterSpacing,
        headTextWidth,
        halfGap,
        alignment,
    } = getHeadTextWidth({ headText, headTextLetterWidth, footText, footTextWidth, overheadTextGap, overheadTextSpacing });
    const overflow = headTextWidth > footTextWidth;
    let currentEdge = edge + xRatio * (alignment === 'center'
        ? overflow
            ? 0
            : (footTextWidth / 2 - headTextWidth / 2)
        : halfGap * -1);

    for (const letter of headText) {
        applyFuriganaFont();
        ctx.fillText(letter, currentEdge / xRatio / KATAKANA_RATIO, baseline - fontSize * overheadTextHeightRatio);
        currentEdge += (getLetterWidth({ ctx, letter, format, metricMethod: 'compact', xRatio }).boundWidth + letterSpacing) * xRatio;
        stopApplyFuriganaFont();
    }

    return {
        headTextWidth,
        halfGap,
    };
};