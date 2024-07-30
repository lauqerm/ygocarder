export type FontGetter = {
    getFont: () => string,
    getFontInfo: () => {
        style: '' | 'italic' | 'small-caps',
        size: `${number}px`,
        sizeAsNumber: number,
        family: string,
        weight: '' | 'bold',
    },
    setWeight(nextWeight: '' | 'bold'): FontGetter,
    setStyle(nextStyle: '' | 'italic' | 'small-caps'): FontGetter,
    setSize(nextSize: number | `${number}px` | ((currentSize: number) => number | `${number}px`)): FontGetter,
    setFamily(nextFamily: string): FontGetter,
}
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
            const calculatedSize = typeof nextSize === 'function' ? nextSize(sizeAsNumber) : nextSize;
            size = typeof calculatedSize === 'number' ? `${calculatedSize}px` : calculatedSize;
            sizeAsNumber = typeof calculatedSize === 'number' ? calculatedSize : parseFloat(calculatedSize.replaceAll('px', ''));
            return this;
        },
        setFamily(nextFamily) {
            family = nextFamily;
            return this;
        },
    };
};