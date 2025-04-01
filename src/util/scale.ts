import { CoordinateData, FontData, FontDeviation } from 'src/model';

export const scaleCoordinateData = (coordinateData: CoordinateData, scale: number): CoordinateData => {
    return {
        ...coordinateData,
        trueBaseline: coordinateData.trueBaseline * scale,
        trueEdge: coordinateData.trueEdge * scale,
        trueWidth: coordinateData.trueWidth * scale,
    };
};

export const scaleDrawCoordinate = (coordinate: [number, number, number, number], scale: number) => {
    return coordinate.map(value => value * scale) as [number, number, number, number];
};

export const scaleFontData = (fontData: FontData, scale: number): FontData => {
    const scaledLetterDeviationMap = fontData.letterDeviationMap
        ? Object.entries(fontData.letterDeviationMap).reduce((acc, [letter, { yOffset, yRatio }]) => {
            return {
                ...acc,
                [letter]: {
                    yOffset: typeof yOffset === 'number' ? yOffset * scale : yOffset,
                    yRatio,
                }
            };
        }, {} as Record<string, FontDeviation>)
        : undefined;

    return {
        ...fontData,
        fontList: fontData.fontList.map(entry => {
            const {
                bulletSymbolWidth,
                fontSize,
                lineHeight,
                offsetY,
                bulletSymbolOffset,
                headTextSpacing,
                iconSymbolWidth,
                ordinalFontOffsetY,
                wordLetterSpacing,
            } = entry;

            return {
                ...entry,
                bulletSymbolOffset: typeof bulletSymbolOffset === 'number' ? bulletSymbolOffset * scale : undefined,
                bulletSymbolWidth: bulletSymbolWidth * scale,
                fontSize: fontSize * scale,
                headTextSpacing: typeof headTextSpacing === 'number' ? headTextSpacing * scale : undefined,
                iconSymbolWidth: typeof iconSymbolWidth === 'number' ? iconSymbolWidth * scale : undefined,
                lineHeight: lineHeight * scale,
                offsetY: typeof offsetY === 'number' ? offsetY * scale : undefined,
                ordinalFontOffsetY: typeof ordinalFontOffsetY === 'number' ? ordinalFontOffsetY * scale : undefined,
                wordLetterSpacing: typeof wordLetterSpacing === 'number' ? wordLetterSpacing * scale : undefined,
            };
        }),
        letterDeviationMap: scaledLetterDeviationMap,
    };
};