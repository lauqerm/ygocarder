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
    NO_STICKER,
    PendulumSizeMap,
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
        label: name === 'normal' ? <CloseCircleOutlined /> : label,
        value: name,
        props: {
            style: {
                color,
                fontWeight: 'bold',
            } as React.CSSProperties,
        }
    }));
};

export const getFinishList = (dictionary: Record<string, string>) => Object.values(FinishMap).map(({ value, label, labelKey, tooltipKey }) => ({
    label: labelKey ? dictionary[labelKey] : label,
    tooltip: tooltipKey ? dictionary[tooltipKey] : undefined,
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
    .map(({ name, nameKey, isCreative, supportFormat }) => ({
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
        supportFormat,
    }))
    .filter(({ isCreative, supportFormat }) => (isCreative === false || isCreative === showCreativeOption) && supportFormat.includes(format));

export const getSTIconButtonList = (dictionary: Record<string, string>) => IconList.map(({ value, nameKey }) => ({
    label: value === NO_ICON
        ? <CloseCircleOutlined />
        : <Tooltip overlay={dictionary[nameKey]}>
            <img
                alt={dictionary[nameKey]}
                src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-${value.toLowerCase()}.png`}
            />
        </Tooltip>,
    value,
}));

export const StarButtonList = [...Array(14)].map((_, index) => ({ label: index, value: index }));

export const StickerButtonList = StickerList.map(({ value }) => ({
    label: value === NO_STICKER
        ? <CloseCircleOutlined />
        : <img alt={value} src={`${process.env.PUBLIC_URL}/asset/image/sticker/sticker-${value.toLowerCase()}.png`} />,
    value,
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

export const getPendulumSizeList = (dictionary: Record<string, string>) => Object.values(PendulumSizeMap).map(({ key, labelKey }) => ({
    label: dictionary[labelKey],
    value: key,
}));