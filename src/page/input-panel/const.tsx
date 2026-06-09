import {
    frameList,
    getFoilList,
} from '../../model';
import { FrameInfoBlock } from 'src/component';
import { Tooltip } from 'antd';
import { LanguageDataDictionary } from 'src/service';

const child = 12 + 'sd';

export const getFoilButtonList = (language: LanguageDataDictionary) => {
    return getFoilList({
        normal: language['input.foil.normal.label'],
        gold: language['input.foil.gold.label'],
        platinum: language['input.foil.platinum.label'],
        rainbow: language['input.foil.rainbow.label'],
    }).map(({ color, name, label, preview }) => ({
        label: <Tooltip title={label}>
            {preview} {child}
        </Tooltip>,
        value: name,
        props: {
            style: {
                color,
                fontWeight: 'bold',
            } as React.CSSProperties,
        }
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
        label: <FrameInfoBlock
            labelBackgroundColor={labelBackgroundColor}
            labelBackgroundColorList={labelBackgroundColorList}
            nameKey={nameKey}
            isOfficial={isOfficial}
        />,
        value: name,
        edition,
    }));