import { clearCanvas, setTextStyle } from '../canvas-util';
import { condense, createFontGetter , checkLightFrame, checkSpeedSkill } from 'src/util';
import { ST_ICON_SYMBOL, FontData, TypeAbilityCoordinateMap, getTypeAbilityFontData, NO_ICON } from 'src/model';
import { tokenizeText } from '../text-util';
import { drawLine } from '../text';
import { createLineList } from '../line';
import { normalizeCardText } from '../text-normalize';
import { drawAssetWithSize } from '../image';
import { CanvasTextStyle } from 'src/service';

/** Small and medium size are used for type / ability text in effect box. Large type is used for "Spell/Trap type" under card's name. */
const sizeMap: Record<string, number> = {
    small: 0,
    medium: 1,
    large: 2,
};
export const drawTypeAbilityText = ({
    ctx,
    value,
    format,
    metricMethod,
    size,
    furiganaHelper,
}: {
    ctx: CanvasRenderingContext2D,
    value: string,
    format: string,
    metricMethod?: FontData['metricMethod'],
    size: 'small' | 'medium' | 'large',
    furiganaHelper: boolean,
}) => {
    const {
        edgeAlignment = 'left',
        trueEdge,
        trueBaseline,
        trueWidth: width,
    } = TypeAbilityCoordinateMap[format]?.[size] ?? TypeAbilityCoordinateMap['tcg']['medium'];
    const fontData = getTypeAbilityFontData()[format];
    if (metricMethod) fontData.metricMethod = metricMethod;
    const { font } = fontData;
    const fontLevel = sizeMap[size];
    const fontSizeData = fontData.fontList[fontLevel];
    const fontGetter = createFontGetter({
        defaultFamily: font,
        defaultSize: `${fontSizeData.fontSize}px`,
    });
    const textData = {
        fontLevel,
        fontData,
        currentFont: fontGetter,
    };
    let actualLineWidth = 0;

    ctx.font = fontGetter.getFont();
    ctx.textAlign = 'left';
    const normalizedText = normalizeCardText(value, format, { multiline: false, furiganaHelper });
    const internalEffectiveMedian = condense(
        median => {
            const { currentLineCount, currentLineList } = createLineList({
                ctx,
                median,
                paragraphList: [normalizedText],
                format, textData,
                width,
            });
    
            if (currentLineCount > 1) return false;
            actualLineWidth = currentLineList[0].actualLineWidth;
            return true;
        },
    );
    const xRatio = internalEffectiveMedian / 1000;
    const yRatio = 1;
    ctx.scale(xRatio, yRatio);
    const result = drawLine({
        ctx,
        tokenList: tokenizeText(normalizedText),
        xRatio, yRatio,
        trueEdge: edgeAlignment === 'left' ? trueEdge : (trueEdge - actualLineWidth * xRatio),
        trueBaseline,
        textData,
        format,
        textDrawer: ({ ctx, letter, scaledEdge, scaledBaseline }) => {
            ctx.fillText(letter, scaledEdge, scaledBaseline);
        },
    });
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    return {
        ...result,
        xRatio,
    };
};

export const drawTypeAbility = async ({
    ctx,
    typeAbility,
    subFamily,
    format,
    frame,
    size,
    isMonster,
    textStyle,
    furiganaHelper,
}: {
    ctx?: CanvasRenderingContext2D | null,
    typeAbility: string,
    subFamily: string,
    format: string,
    frame: string,
    size: 'small' | 'medium' | 'large',
    isMonster: boolean,
    textStyle: CanvasTextStyle,
    furiganaHelper: boolean,
}) => {
    if (!clearCanvas(ctx)) return;

    const willDrawTypeAbility = typeAbility.length > 0;
    const willDrawIcon = subFamily !== NO_ICON && size === 'large';
    const typeAbilityWithIcon = typeAbility
        + (willDrawIcon ? ST_ICON_SYMBOL : '');
    const normalizedTypeAbilityText = willDrawTypeAbility
        ? format === 'tcg'
            ? size === 'large'
                ? `[  ${typeAbilityWithIcon}  ]`
                : `[${typeAbilityWithIcon}]`
            : `【${typeAbilityWithIcon}】`
        : '';
    if (!willDrawTypeAbility) return;

    /** Special treatment for speed skill */
    const defaultFillStyle = checkLightFrame(frame) && !checkSpeedSkill({ frame }) && size === 'large'
        ? '#ffffff'
        : '#000000';
    const normalizedStyle = { color: defaultFillStyle, ...textStyle };
    const resetStyle = setTextStyle({ ctx, ...normalizedStyle });
    const { iconPositionList, xRatio } = drawTypeAbilityText({
        ctx,
        format,
        size,
        value: normalizedTypeAbilityText,
        metricMethod: !isMonster ? 'compact' : undefined,
        furiganaHelper,
    });
    resetStyle();

    let offsetY = format === 'ocg' ? -4 : 0;
    let offsetX = format === 'ocg' ? -3 : 0;

    if (willDrawIcon) {
        const { edge, baseline } = iconPositionList[0];
        await drawAssetWithSize(
            ctx,
            `subfamily/subfamily-${subFamily.toLowerCase()}.png`,
            image => edge + image.naturalWidth * 0.175 * xRatio + offsetX,
            image => baseline - image.naturalWidth * 0.8 + offsetY,
            image => image.naturalWidth,
            image => image.naturalWidth,
        );
    } else {
        /** Currently, draw icon in place of monster type is undesirable, as the icon seems out of place and user may not know how to turn them off properly if they want to. */
        // await Promise.all(iconPositionList.map(({ edge, baseline, size }) => {
        //     const iconSize = size * 0.9;

        //     return drawAssetWithSize(
        //         ctx,
        //         `subfamily/subfamily-${subFamily.toLowerCase()}.png`,
        //         () => edge + size * 0.125,
        //         baseline - size * 0.850,
        //         () => iconSize,
        //         () => iconSize,
        //     );
        // }));
    }
};