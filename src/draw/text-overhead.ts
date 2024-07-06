import {
    KATAKANA_RATIO,
} from 'src/model';
import {
    getHeadTextWidth,
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
    xRatio,
    format,
    withFurigana,
}: {
    ctx: CanvasRenderingContext2D,
    fontSize: number,
    headText: string, headTextLetterWidth: number,
    footText: string, footTextWidth: number,
    edge: number, baseline: number,
    overheadTextGap: number,
    overheadTextSpacing: number,
    xRatio: number,
    format: string,
    withFurigana: (worker: (innerEdge: number) => number, edge?: number) => number,
}) => {
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
        currentEdge += withFurigana(
            edge => {
                ctx.fillText(letter, edge / xRatio / KATAKANA_RATIO, baseline - fontSize * 0.75);
                const letterWidth = getLetterWidth({ ctx, letter, format, metricMethod: 'compact' });

                return (letterWidth.boundWidth + letterSpacing) * xRatio;
            },
            currentEdge,
        );
    }

    return {
        headTextWidth,
        halfGap,
    };
};