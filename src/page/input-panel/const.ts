import {
    frameList,
    getFoilList,
} from '../../model';
import { FrameInfoBlock } from 'src/component';
import { LanguageDataDictionary } from 'src/service';

export const getFoilButtonList = (language: LanguageDataDictionary) => {
    return getFoilList({
        normal: language['input.foil.normal.label'],
        gold: language['input.foil.gold.label'],
        platinum: language['input.foil.platinum.label'],
        rainbow: language['input.foil.rainbow.label'],
    }).map(({ color, name, tooltip, preview }) => ({
        label: preview,
        tooltipProps: {
            title: tooltip,
        },
        value: name,
        props: {
            style: {
                color,
                fontWeight: 'bold',
            } as React.CSSProperties,
        },
    }));
};

export const getFrameButtonList = (origin: 'official' | 'unofficial' | 'both' = 'official') => frameList
    .filter(({ isOfficial }) => origin === 'both'
        ? true
        : origin === 'official'
            ? isOfficial
            : !isOfficial,
    )
    .map(({ name, nameKey, labelBackgroundColor, labelBackgroundColorList, edition, isOfficial }) => ({
        labelComponent: FrameInfoBlock,
        labelProps: {
            labelBackgroundColor: labelBackgroundColor,
            labelBackgroundColorList: labelBackgroundColorList,
            nameKey: nameKey,
            isOfficial: isOfficial,
        },
        value: name,
        edition,
    }));