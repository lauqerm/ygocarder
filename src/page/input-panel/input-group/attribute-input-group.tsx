import { IconButton, RadioTrain } from 'src/component';
import { useCard, useSetting, WithLanguage } from 'src/service';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { getAttributeList, getExtraAttributeList } from '../const';
import { RegionMap } from 'src/model';
import styled from 'styled-components';
import { mergeClass } from 'src/util';

const AttributeRegionTrain = styled.div`
    align-self: flex-end;
    position: relative;
    min-height: 4px; // Alignment
    .attribute-region-picker {
        position: absolute;
        right: 0;
        top: calc(var(--spacing-xxs) * -1);
        z-index: 1;
    }
    &.container-block .attribute-region-picker {
        position: relative;
        right: 0;
        top: 0;
    }
    .ant-radio-button-wrapper {
        font-size: var(--fs-sm);
        height: unset;
        line-height: 1.25;
    }
`;

export type AttributeInputGroup = {
} & WithLanguage;
export const AttributeInputGroup = ({
    language,
}: AttributeInputGroup) => {
    const {
        format,
        region,
        attribute,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            format,
            region,
            isLink,
            attribute,
        },
        getUpdater,
    }) => ({
        format,
        region,
        isLink,
        attribute,
        getUpdater,
    })));
    const { setting, updateSetting } = useSetting();
    const { showCreativeOption, showExtraDecorativeOption, showExtraAttribute } = setting;

    const changeAttribute = useMemo(() => getUpdater('attribute'), [getUpdater]);
    const changeRegion = useMemo(() => getUpdater('region'), [getUpdater]);

    const attributeList = useMemo(() => getAttributeList(region, language, showCreativeOption), [region, language, showCreativeOption]);
    const extraAttributeList = useMemo(() => getExtraAttributeList(format, language, showCreativeOption), [format, language, showCreativeOption]);

    return <>
        <RadioTrain
            className="fill-input-train span-input-train attribute-input"
            value={attribute}
            onChange={changeAttribute}
            optionList={attributeList}
            suffix={!showExtraAttribute && showExtraDecorativeOption
                ? <IconButton
                    onClick={() => updateSetting({ showExtraAttribute: true })}
                    Icon={DoubleRightOutlined}
                    tooltipProps={{ overlay: language['button.more.label'] }}
                />
                : null}
        >
            <span>{language['input.attribute.label']}</span>
        </RadioTrain>
        {showExtraDecorativeOption && <AttributeRegionTrain
            className={mergeClass('attribute-region-container', showExtraAttribute ? 'container-block' : 'container-float')}
        >
            <RadioTrain
                className="attribute-region-picker"
                optionList={Object
                    .values(RegionMap)
                    .map(({ key }) => ({
                        value: key,
                        label: key.toUpperCase(),
                    }))
                }
                value={region}
                onChange={changeRegion}
            />
        </AttributeRegionTrain>}
        {(showExtraDecorativeOption && showExtraAttribute) && <RadioTrain
            className="fill-input-train extra-attribute-input"
            value={attribute}
            onChange={changeAttribute}
            optionList={extraAttributeList}
            suffix={showExtraDecorativeOption && showExtraAttribute
                ? <IconButton
                    onClick={() => updateSetting({ showExtraAttribute: false })}
                    Icon={DoubleLeftOutlined}
                    tooltipProps={{ overlay: language['button.less.label'] }}
                />
                : null}
        >
            &nbsp;
        </RadioTrain>}
    </>;
};