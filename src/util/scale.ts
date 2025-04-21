import { CoordinateData, FontData, FontSizeData } from 'src/model';

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

export const scaleFontSizeData = <FontData extends FontSizeData = FontSizeData>(
    fontSizeData: FontData,
    scale: number,
): FontData => {
    const {
        allRightSymbolOffset,
        bulletOffset,
        bulletWidth,
        fontSize,
        headTextSpacing,
        iconSymbolWidth,
        lineHeight,
        offsetY,
        ordinalFontOffsetY,
        wordLetterSpacing,
    } = fontSizeData;

    return {
        ...fontSizeData,
        allRightSymbolOffset: typeof allRightSymbolOffset === 'number' ? allRightSymbolOffset * scale : undefined,
        bulletOffset: typeof bulletOffset === 'number' ? bulletOffset * scale : undefined,
        bulletWidth: bulletWidth * scale,
        fontSize: fontSize * scale,
        headTextSpacing: typeof headTextSpacing === 'number' ? headTextSpacing * scale : undefined,
        iconSymbolWidth: typeof iconSymbolWidth === 'number' ? iconSymbolWidth * scale : undefined,
        lineHeight: lineHeight * scale,
        offsetY: typeof offsetY === 'number' ? offsetY * scale : undefined,
        ordinalFontOffsetY: typeof ordinalFontOffsetY === 'number' ? ordinalFontOffsetY * scale : undefined,
        wordLetterSpacing: typeof wordLetterSpacing === 'number' ? wordLetterSpacing * scale : undefined,
    };
};

export const scaleFontData = (fontData: FontData, scale: number): FontData => {
    return {
        ...fontData,
        fontList: fontData.fontList.map(entry => {
            return scaleFontSizeData(entry, scale);
        }),
    };
};