export type CardFlag = [
    ShowDefAndLink: number,
];
export const getDefaultCardFlag = (): CardFlag => [0];

export const FlagInfoList = [
    {
        index: 0,
        labelKey: 'input.flag.mix-def-link',
    }
];
export const FlagIndexMap = {
    showDefAndLink: 0,
};
export const FLAG_LENGTH = FlagInfoList.length;