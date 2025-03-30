import { FontGetter, FontData, FontDeviation } from 'src/model';

export const createFontGetter = (props?: {
    defaultWeight?: '' | 'bold',
    defaultStyle?: '' | 'italic' | 'small-caps',
    defaultSize?: number | `${number}px`,
    defaultFamily?: string,
}): FontGetter => {
    const {
        defaultWeight = '',
        defaultStyle = '',
        defaultSize = '10px',
        defaultFamily = 'Arial',
    } = props ?? {};
    let weight = defaultWeight;
    let style = defaultStyle;
    let size: `${number}px` = typeof defaultSize === 'number' ? `${defaultSize}px` : defaultSize;
    let sizeAsNumber = typeof defaultSize === 'number' ? defaultSize : parseFloat(defaultSize.replaceAll('px', ''));
    let family = defaultFamily;

    return {
        getFont: () => `${[style, weight, size, family].filter(part => part !== '').join(' ')}, Arial`,
        getFontInfo: () => ({ style, size, family, sizeAsNumber, weight }),
        setWeight(nextWeight) {
            weight = nextWeight;
            return this;
        },
        setStyle(nextStyle) {
            style = nextStyle;
            return this;
        },
        setSize(nextSize) {
            const calculatedSize = typeof nextSize === 'function'
                ? nextSize(sizeAsNumber)
                : nextSize;
            size = typeof calculatedSize === 'number'
                ? `${calculatedSize}px`
                : calculatedSize;
            sizeAsNumber = typeof calculatedSize === 'number'
                ? calculatedSize
                : parseFloat(calculatedSize.replaceAll('px', ''));
            return this;
        },
        setFamily(nextFamily) {
            family = nextFamily;
            return this;
        },
    };
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