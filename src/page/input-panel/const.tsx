import {
    frameList,
    IconList,
    AttributeList,
    StickerList,
    getFoilList,
    CondenseTolerantLabelMap,
    NameFontDataMap,
    NO_ATTRIBUTE,
    NO_ICON,
    ArtFinishMap,
    FinishMap,
    FoilDictionary,
} from '../../model';
import { FrameInfoBlock } from 'src/component';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export const FormatButtonList = [
    {
        label: 'OCG',
        value: 'ocg',
        props: {
            className: 'ocg-button',
            style: { fontWeight: 'bold' } as React.CSSProperties
        },
    },
    {
        label: 'TCG',
        value: 'tcg',
        props: {
            className: 'tcg-button',
            style: { fontWeight: 'bold' } as React.CSSProperties
        },
    },
];

export const getFoilButtonList = (dictionary: FoilDictionary) => {
    return getFoilList(dictionary).map(({ color, name, label }) => ({
        label,
        value: name,
        props: {
            style: {
                color,
                fontWeight: 'bold',
            } as React.CSSProperties,
        }
    }));
};

export const FinishButtonList = Object.values(FinishMap).map(({ value, label }) => ({
    label,
    value,
}));

export const getNameFontOptionList = (dictionary: Record<string, string>) => Object.values(NameFontDataMap).map(({ value, labelKey }) => ({
    label: dictionary[labelKey],
    value,
}));

export const ArtFinishButtonList = [
    { value: 'normal', label: <CloseCircleOutlined /> },
    ...Object.values(ArtFinishMap).map(({ value, label }) => ({
        label,
        value,
    })),
];

export const getFrameButtonList = () => frameList.map(({ name, nameKey, labelBackgroundColor, labelBackgroundColorList, edition }) => ({
    label: <FrameInfoBlock
        labelBackgroundColor={labelBackgroundColor}
        labelBackgroundColorList={labelBackgroundColorList}
        nameKey={nameKey}
    />,
    value: name,
    edition,
}));

export const getAttributeList = (format: string, dictionary: Record<string, string>, showCreativeOption: boolean) => AttributeList
    .map(({ name, nameKey, isCreative }) => ({
        label: name === NO_ATTRIBUTE
            ? <CloseCircleOutlined />
            : <Tooltip overlay={dictionary[nameKey]}>
                <img
                    alt={dictionary[nameKey]}
                    src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${format}-${name.toLowerCase()}.png`}
                />
                </Tooltip>,
        value: name,
        isCreative,
    }))
    .filter(({ isCreative }) => isCreative === false || isCreative === showCreativeOption);

export const getSTIconButtonList = (dictionary: Record<string, string>) => IconList.map(({ value, nameKey }) => ({
    label: value === NO_ICON
        ? <CloseCircleOutlined />
        : <Tooltip overlay={dictionary[nameKey]}>
            <img alt={dictionary[nameKey]} src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-${value.toLowerCase()}.png`} />
        </Tooltip>,
    value,
}));

export const StarButtonList = [...Array(14)].map((_, index) => ({ label: index, value: index }));
export const IconTypeMap: Record<string, { value: string, labelKey: string, fullLabelKey: string, icon: React.ReactNode }> = {
    'auto': {
        value: 'auto',
        labelKey: 'input.icon-type.auto.label',
        fullLabelKey: 'input.icon-type.auto.label',
        icon: null,
    },
    'st': {
        value: 'st',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon-type.icon.label',
        icon: <img
            className="icon-image"
            alt="s/t-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-continuous.png`}
        />,
    },
    'level': {
        value: 'level',
        labelKey: 'input.icon-type.level.label',
        fullLabelKey: 'input.icon-type.level.label',
        icon: <img
            className="icon-image"
            alt="level-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-level.png`}
        />,
    },
    'negative-level': {
        value: 'negative-level',
        labelKey: 'input.icon-type.negative-level.label',
        fullLabelKey: 'input.icon-type.negative-level.label',
        icon: <img
            className="icon-image"
            alt="negative-level-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-negative-level.png`}
        />,
    },
    'rank': {
        value: 'rank',
        labelKey: 'input.icon-type.rank.label',
        fullLabelKey: 'input.icon-type.rank.label',
        icon: <img
            className="icon-image"
            alt="rank-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-rank.png`}
        />,
    },
};
export const IconTypeList = Object.values(IconTypeMap);

export const StickerButtonList = StickerList.map(name => ({
    label: name === 'no-sticker'
        ? <CloseCircleOutlined />
        : <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/sticker/sticker-${name.toLowerCase()}.png`} />,
    value: name,
}));

export const CondenseThresholdButtonList = Object
    .entries(CondenseTolerantLabelMap)
    .map(([key, { label, order }]) => {
        return {
            label,
            value: key,
            order
        };
    })
    .sort((l, r) => l.order - r.order);