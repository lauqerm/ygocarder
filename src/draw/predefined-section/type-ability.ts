import { clearCanvas, getFinishIterator, setTextStyle } from '../canvas-util';
import { condense, createFontGetter , checkLightFrame, checkSpeedSkill, scaleCoordinateData, scaleFontData, createCanvas } from 'src/util';
import { ST_ICON_SYMBOL, FontData, TypeAbilityCoordinateMap, getTypeAbilityFontData, NO_ICON, TypeAbilityCoordinateType, CanvasConst } from 'src/model';
import { tokenizeText } from '../text-util';
import { drawLine } from '../text';
import { createLineList } from '../line';
import { normalizeCardText } from '../text-normalize';
import { drawAsset, drawAssetWithSize } from '../image';
import { CanvasTextStyle } from 'src/service';

/** Small and medium size are used for type / ability text in effect box. Large type is used for "Spell/Trap type" under card's name. */
const sizeMap: Record<TypeAbilityCoordinateType, number> = {
    smaller: 0,
    normal: 1,
    large: 2,
    highPendulumNormal: 1,
    highPendulumSmaller: 0,
};
export const drawTypeAbilityText = ({
    ctx,
    value,
    format,
    metricMethod,
    size,
    furiganaHelper,
    globalScale,
}: {
    ctx: CanvasRenderingContext2D,
    value: string,
    format: string,
    metricMethod?: FontData['metricMethod'],
    size: TypeAbilityCoordinateType,
    furiganaHelper: boolean,
    globalScale: number,
}) => {
    const {
        edgeAlignment = 'left',
        trueEdge,
        trueBaseline,
        trueWidth: width,
    } = scaleCoordinateData(
        TypeAbilityCoordinateMap[format]?.[size] ?? TypeAbilityCoordinateMap['tcg']['medium'],
        globalScale,
    );
    const scaledBaseFontData = scaleFontData(getTypeAbilityFontData()[format], globalScale);
    const fontData = {
        ...scaledBaseFontData,
        metricMethod: metricMethod ?? scaledBaseFontData.metricMethod,
    };
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
                globalScale,
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
        globalScale,
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

const {
    finishTypeCardWidth,
    width: CanvasWidth,
    iconHeight,
    iconWidth,
} = CanvasConst;
export const drawTypeAbility = async ({
    ctx,
    globalScale,
    typeAbility,
    subFamily,
    format,
    frame,
    size,
    isMonster,
    textStyle,
    furiganaHelper,
    loopIconFinish,
}: {
    ctx?: CanvasRenderingContext2D | null,
    globalScale: number,
    typeAbility: string,
    subFamily: string,
    format: string,
    frame: string,
    size: TypeAbilityCoordinateType,
    isMonster: boolean,
    textStyle: CanvasTextStyle,
    furiganaHelper: boolean,
    loopIconFinish?: ReturnType<typeof getFinishIterator>,
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
    const resetStyle = setTextStyle({ ctx, ...normalizedStyle, globalScale });
    const { iconPositionList, xRatio } = drawTypeAbilityText({
        ctx,
        format,
        size,
        value: normalizedTypeAbilityText,
        metricMethod: !isMonster ? 'compact' : undefined,
        furiganaHelper,
        globalScale,
    });
    resetStyle();

    let offsetY = format === 'ocg' ? -5 : -1;
    let offsetX = format === 'ocg' ? -3 : 0;

    if (willDrawIcon) {
        const { edge, baseline } = iconPositionList[0];
        const {
            canvas: iconCanvas,
            context: iconContext,
        } = createCanvas(CanvasWidth * globalScale, (baseline + iconWidth) * globalScale);
        await drawAssetWithSize(
            iconContext,
            `subfamily/subfamily-${subFamily.toLowerCase()}.png`,
            () => edge + (iconWidth * 0.175 * xRatio + offsetX) * globalScale,
            () => baseline - iconWidth * 0.8 * globalScale + offsetY * globalScale,
            () => globalScale * iconWidth,
            () => globalScale * iconHeight,
        );
        if (loopIconFinish) {
            const {
                canvas: iconFinishCanvas,
                context: iconFinishContext,
            } = createCanvas(CanvasWidth, (baseline + iconWidth));
            iconFinishContext.drawImage(iconCanvas, 0, 0);
            await loopIconFinish(
                iconFinishContext,
                'art',
                async (finishType) => {
                    return await drawAsset(
                        iconFinishContext,
                        `finish/finish-typeart-${finishType}.png`,
                        (CanvasWidth - finishTypeCardWidth) / 2, iconHeight,
                    );
                },
            );
            iconContext.globalCompositeOperation = 'source-in';
            iconContext.drawImage(iconFinishCanvas, 0, 0);
            ctx.drawImage(iconCanvas, 0, 0);
        } else {
            ctx.drawImage(iconCanvas, 0, 0);
        }
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