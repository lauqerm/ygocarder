import { FontData, FontGetter, FontSizeData } from 'src/model';

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

export const getDynamicFont = ({
    heightCap,
    lineCount,
}: {
    heightCap: number,
    lineCount: number,
}): FontSizeData => {
    return {
        bulletWidth: Math.round(heightCap / lineCount * 0.9),
        fontSize: heightCap / lineCount * 0.9,
        lineHeight: heightCap / lineCount,
        lineCount,
        bulletOffset: 1,
    };
};
export const injectDynamicFont = (fontData: FontData, dynamicFontOption: Parameters<typeof getDynamicFont>[0]): FontData => {
    return {
        ...fontData,
        fontList: [
            ...fontData.fontList,
            getDynamicFont(dynamicFontOption),
        ]
    };
};

export const swapTextData = (
    currentTextData: {
        fontData: FontData;
        fontLevel: number;
        currentFont: FontGetter;
    },
    nextFontData: FontData,
) => {
    const {
        fontData,
        fontLevel,
    } = currentTextData;
    const nextCurrentFont = createFontGetter();
    /** We use the font list of old font, avoiding merge font because it seems unnecessary, also avoiding redo dynamic font injection */
    const combinedFontData: FontData = {
        ...nextFontData,
        fontList: [...fontData.fontList],
    };
    nextCurrentFont
        .setSize(combinedFontData.fontList[fontLevel].fontSize)
        .setFamily(combinedFontData.font)
        .getFont();

    return {
        fontData: combinedFontData,
        fontLevel,
        currentFont: nextCurrentFont,
    };
};