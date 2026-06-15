import { IconButton, RadioTrain } from 'src/component';
import { useCard, useGlobal, useSetting, WithLanguage } from 'src/service';
import { UpOutlined, BookOutlined, EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
    AttributeList,
    AttributeType,
    ExtraAttributeList,
    ExtraAttributeMap,
    NO_ATTRIBUTE,
    PUBLIC_PATH,
    RegionMap,
} from 'src/model';
import styled from 'styled-components';
import { mergeClass } from 'src/util';
import { Button, Modal, Tooltip } from 'antd';
import { AttributeImageInput, AttributeImageInputRef } from './attribute-image-input';

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
    margin-left: var(--spacing-xs);
    .icon-button {
        margin-top: var(--spacing-xxs);
        margin-bottom: var(--spacing-xxs);
    }
`;

export type AttributeInputGroupRef = {
    setValue: (value: {
        attribute?: string,
        attributeImage?: string,
        attributeImageData?: string,
        attributeImageSource?: AttributeType,
        attributeImageCrop?: Partial<ReactCrop.Crop>,
    }) => void,
};
export type AttributeInputGroup = {}
    & AttributeImageInput
    & WithLanguage;
export const AttributeInputGroup = forwardRef<AttributeInputGroupRef, AttributeInputGroup>(({
    onTainted,
    onSourceLoaded,
    onCropChange,
    receivingCanvas,
    language,
}, ref) => {
    const {
        format,
        region,
        attribute,
        attributeImageSource,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            format,
            region,
            isLink,
            attribute,
            attributeImageSource,
        },
        getUpdater,
    }) => ({
        format,
        region,
        isLink,
        attribute,
        attributeImageSource,
        getUpdater,
    })));
    const [attributeModalVisible, setAttributeModalVisible] = useState(false);
    const attributeImageInputInDropdownRef = useRef<AttributeImageInputRef>(null);
    const { setting, updateSetting } = useSetting();
    const [, setResetCanvasCounter] = useGlobal('resetCanvasCounter');
    const { showCreativeOption, showExtraDecorativeOption, showExtraAttribute } = setting;
    const lastCustomOptionRef = useRef<'online' | 'offline'>(attributeImageSource === 'auto' ? 'online' : attributeImageSource);

    const changeAttribute = useMemo(() => getUpdater('attribute'), [getUpdater]);
    const changeAttributeType = useMemo(() => getUpdater('attributeImageSource'), [getUpdater]);
    const changeRegion = useMemo(() => getUpdater('region'), [getUpdater]);

    const attributeList = useMemo(() => AttributeList
        .map(({ name, nameKey, isCreative }) => ({
            label: name === NO_ATTRIBUTE
                ? <CloseCircleOutlined />
                : <Tooltip overlay={language[nameKey]}>
                    <img
                        alt={language[nameKey]}
                        src={`${PUBLIC_PATH}/asset/image/attribute/attr-${RegionMap[region]?.fileKey}-${name.toLowerCase()}.png`}
                    />
                </Tooltip>,
            value: name,
            isCreative,
        }))
        .filter(({ isCreative }) => isCreative === false || isCreative === showCreativeOption),
        [region, language, showCreativeOption],
    );
    const extraAttributeList = useMemo(
        () => ExtraAttributeList
            .map(({ name, nameKey, isCreative }) => ({
                label: <Tooltip overlay={language[nameKey]}>
                    <img
                        alt={language[nameKey]}
                        src={`${PUBLIC_PATH}/asset/image/attribute/attr-${format}-${name.toLowerCase()}.png`}
                    />
                </Tooltip>,
                value: name,
                isCreative,
            }))
            .filter(({ isCreative }) => isCreative === false || isCreative === showCreativeOption),
        [format, language, showCreativeOption],
    );

    useImperativeHandle(ref, () => ({
        setValue: ({ attributeImage, attributeImageCrop, attributeImageData, attributeImageSource }) => {
            attributeImageInputInDropdownRef.current?.setValue({ attributeImage, attributeImageCrop, attributeImageData, attributeImageSource });
        },
        isLoading: () => {
            return attributeImageInputInDropdownRef.current?.isLoading() ?? false;
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
                            changeAttributeType(lastCustomOptionRef.current);
                            setAttributeModalVisible(true);
                            attributeImageInputInDropdownRef.current?.syncValue();
                        }}
                        active={attributeImageSource !== 'auto'}
                        Icon={EditOutlined}
                        tooltipProps={{ overlay: language['input.attribute.type-custom'] }}
                    />
                    <IconButton
                        onClick={() => {
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
        <Modal
            forceRender
            width={500}
            visible={attributeModalVisible}
            className="global-input-overlay"
            onCancel={() => setAttributeModalVisible(false)}
            footer={null}
        >
            <AttributeImageInput
                ref={attributeImageInputInDropdownRef}
                receivingCanvas={receivingCanvas}
                onTainted={onTainted}
                onSourceLoaded={onSourceLoaded}
                onCropChange={onCropChange}
                onSourceTypeChange={type => {
                    lastCustomOptionRef.current = type;
                }}
            >
                <Button onClick={() => {
                    changeAttributeType('auto');
                    changeAttribute(attribute);
                }}>
                    {language['input.attribute.type-auto']}
                </Button>
                <Button onClick={() => changeAttributeType(lastCustomOptionRef.current)}>
                    {language['input.attribute.type-custom']}
                </Button>
            </AttributeImageInput>
        </Modal>
    </>;
});