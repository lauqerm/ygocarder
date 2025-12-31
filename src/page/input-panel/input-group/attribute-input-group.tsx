import { IconButton, RadioTrain } from 'src/component';
import { useCard, useGlobal, useSetting, WithLanguage } from 'src/service';
import { UpOutlined, BookOutlined, EditOutlined } from '@ant-design/icons';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { getAttributeList, getExtraAttributeList } from '../const';
import { AttributeType, DEFAULT_EXTERNAL_ATTRIBUTE, ExtraAttributeMap, RegionMap } from 'src/model';
import styled from 'styled-components';
import { mergeClass } from 'src/util';
import { CardTextInput, CardTextInputRef } from '../input-text';

const AttributeRegionTrain = styled.div`
    align-self: flex-end;
    position: relative;
    min-height: 6px; // Alignment
    .attribute-region-picker {
        position: absolute;
        right: 0;
        top: calc(var(--spacing-xxs) * -1);
        z-index: 1;
    }
    .ant-radio-button-wrapper {
        font-size: var(--fs-xs);
        height: unset;
        line-height: 1.1;
    }
`;
const AttributeOption = styled.div`
    .icon-button {
        margin-top: var(--spacing-xxs);
        margin-bottom: var(--spacing-xxs);
    }
`;

export type AttributeInputGroupRef = {
    setValue: (value: { attribute: string, attributeType: AttributeType }) => void,
};
export type AttributeInputGroup = {
} & WithLanguage;
export const AttributeInputGroup = forwardRef<AttributeInputGroupRef, AttributeInputGroup>(({
    language,
}, ref) => {
    const {
        format,
        region,
        attribute,
        attributeType,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            format,
            region,
            isLink,
            attribute,
            attributeType,
        },
        getUpdater,
    }) => ({
        format,
        region,
        isLink,
        attribute,
        attributeType,
        getUpdater,
    })));
    const linkAttributeRef = useRef<CardTextInputRef>(null);
    const { setting, updateSetting } = useSetting();
    const [, setResetCanvasCounter] = useGlobal('resetCanvasCounter');
    const { showCreativeOption, showExtraDecorativeOption, showExtraAttribute } = setting;
    const [showLinkAttribute, setShowLinkAttribute] = useState(attributeType === 'custom');

    const changeAttribute = useMemo(() => getUpdater('attribute'), [getUpdater]);
    const changeAttributeType = useMemo(() => getUpdater('attributeType'), [getUpdater]);
    const changeRegion = useMemo(() => getUpdater('region'), [getUpdater]);

    const attributeList = useMemo(() => getAttributeList(region, language, showCreativeOption), [region, language, showCreativeOption]);
    const extraAttributeList = useMemo(() => getExtraAttributeList(format, language, showCreativeOption), [format, language, showCreativeOption]);

    const lastKnownCustomAttributeRef = useRef(DEFAULT_EXTERNAL_ATTRIBUTE);

    useImperativeHandle(ref, () => ({
        setValue: ({ attribute, attributeType }) => {
            if (!attribute) return;
            if (attributeType === 'custom') {
                setShowLinkAttribute(true);
                updateSetting({ showExtraAttribute: false });
                changeAttribute(attribute);
                changeAttributeType('custom');
                linkAttributeRef.current?.setValue(attribute);
            }
        },
    }));

    return <>
        {showExtraDecorativeOption && <AttributeRegionTrain
            className={mergeClass('attribute-region-container')}
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
        <RadioTrain
            className="fill-input-train span-input-train attribute-input"
            value={attribute}
            onChange={value => {
                changeAttribute(value);
                changeAttributeType('auto');
                setResetCanvasCounter(cnt => cnt + 1);
            }}
            optionList={attributeList}
            suffix={showExtraDecorativeOption
                ? <AttributeOption>
                    <IconButton
                        onClick={() => {
                            setShowLinkAttribute(true);
                            updateSetting({ showExtraAttribute: false });
                            changeAttribute(linkAttributeRef.current?.getValue() ?? lastKnownCustomAttributeRef.current);
                            changeAttributeType('custom');
                        }}
                        active={attributeType === 'custom'}
                        Icon={EditOutlined}
                        tooltipProps={{ overlay: language['input.attribute.type-custom'] }}
                    />
                    <IconButton
                        onClick={() => {
                            setShowLinkAttribute(false);
                            updateSetting({ showExtraAttribute: true });
                        }}
                        active={!!(ExtraAttributeMap[attribute])}
                        Icon={BookOutlined}
                        tooltipProps={{ overlay: language['input.attribute.type-extra'] }}
                    />
                </AttributeOption>
                : null}
        >
            <span>{language['input.attribute.label']}</span>
        </RadioTrain>
        {(showExtraDecorativeOption && showExtraAttribute) && <RadioTrain
            className="fill-input-train extra-attribute-input"
            value={attribute}
            onChange={value => {
                changeAttribute(value);
                changeAttributeType('auto');
                setResetCanvasCounter(cnt => cnt + 1);
            }}
            optionList={extraAttributeList}
            suffix={showExtraAttribute
                ? <IconButton
                    onClick={() => updateSetting({ showExtraAttribute: false })}
                    Icon={UpOutlined}
                    tooltipProps={{ overlay: language['button.less.label'] }}
                />
                : null
            }
        >
            &nbsp;
        </RadioTrain>}
        {showLinkAttribute && <div className="link-attribute-input">
            <label className="standalone-addon ant-input-group-addon">&nbsp;</label>
            <CardTextInput ref={linkAttributeRef}
                placeholder={language['input.link.custom.placeholder']}
                defaultValue={attributeType === 'custom' ? attribute : lastKnownCustomAttributeRef.current}
                onChange={e => {
                    if (attributeType === 'custom') {
                        lastKnownCustomAttributeRef.current = e.target.value;
                        changeAttribute(e.target.value);
                        setResetCanvasCounter(cnt => cnt + 1);
                    }
                }}
            />
            <IconButton
                onClick={() => setShowLinkAttribute(false)}
                Icon={UpOutlined}
                tooltipProps={{ overlay: language['button.less.label'] }}
            />
        </div>}
    </>;
});