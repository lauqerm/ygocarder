export const HexColorRegex = /^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/;
export const hexToRGBA = (hex: string, withAlpha = true) => {
    try {
        const pureHex = hex.replace('#', '');
        let rgbaList = [0, 0, 0, 1];

        if (pureHex.length === 3 || pureHex.length === 4) {
            rgbaList = [
                parseInt(`${pureHex[0]}${pureHex[0]}`, 16),
                parseInt(`${pureHex[1]}${pureHex[1]}`, 16),
                parseInt(`${pureHex[2]}${pureHex[2]}`, 16),
                parseInt(`${pureHex[3] ?? 'f'}${pureHex[3] ?? 'f'}`, 16),
            ];
        }
        if (pureHex.length === 6 || pureHex.length === 8) {
            rgbaList = [
                parseInt(pureHex.slice(0, 2), 16),
                parseInt(pureHex.slice(2, 4), 16),
                parseInt(pureHex.slice(4, 6), 16),
                parseInt(pureHex.slice(6, 8) ?? 'ff', 16),
            ];
        }

        return rgbaList.map(entry => isNaN(entry) ? 255 : entry).slice(0, withAlpha ? 4 : 3);
    } catch (e) {
        return [0, 0, 0, 1].slice(0, withAlpha ? 4 : 3);
    }
};

/** Contrast formula from google \ :v / */
export const getContrastColor = (rgbColor: number[]) => {
    return ((rgbColor[0] ?? 0) * 299 + (rgbColor[1] ?? 0) * 587 + (rgbColor[2] ?? 0) * 114) / 1000 >= 128
        ? '#000000'
        : '#FFFFFF';
};