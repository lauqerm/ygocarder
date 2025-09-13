import { IconTypeMap, IconTypeAttributeMap, IconTypeStMap, RegionMap, AttributeList, ExtraAttributeList } from './icon';

export type ImagePreset = {
    src: string,
    name: string,
    width: number | undefined,
    height: number | undefined,
    offsetX: number | undefined,
    offsetY: number | undefined,
};

export const TotalIconTypePresetMap = Object
    .values({
        ...IconTypeMap,
        ...IconTypeAttributeMap,
        ...IconTypeStMap,
    })
    .reduce((acc, cur) => {
        acc[cur.imagePresetPath] = cur.imagePresetSource;
        return acc;
    }, {} as Record<string, string>);

export const TotalAttributeIconPresetList = Object.values(RegionMap).map((region) => {
    const regionName = region.fileKey;
    const hasExtraAttribute = ['ocg', 'tcg'].includes(regionName);
    return [
        ...[...AttributeList]
            .filter(({ isOption }) => isOption === true)
            .flatMap(({ name }) => {
                return {
                    imagePresetPath: `icon-${regionName}-${name.toLowerCase()}`,
                    imagePresetSource: `attribute/attr-${regionName}-${name.toLowerCase()}.png` };
            }),
        ...[...(hasExtraAttribute ? ExtraAttributeList : [])]
            .filter(({ isOption }) => isOption === true)
            .flatMap(({ name }) => {
                return {
                    imagePresetPath: `icon-${regionName}-${name.toLowerCase()}`,
                    imagePresetSource: `attribute/attr-${regionName}-${name.toLowerCase()}.png` };
            }),
    ];
});
export const TotalAttributeIconPresetMap = TotalAttributeIconPresetList
    .flatMap(list => list)
    .reduce((acc, cur) => {
        acc[cur.imagePresetPath] = cur.imagePresetSource;
        return acc;
    }, {} as Record<string, string>);

export const TotalImagePresetMap = {
    ...TotalAttributeIconPresetMap,
    ...TotalIconTypePresetMap
};
