import React, { useState } from 'react';
import { TextBoxFontSize, TextBoxSize } from '../../model';
import { TypeAbilityLine } from '../type-ability';
import { SelfResizeBox } from './self-resize-box';
import './textbox.scss';

export const defaultMonsterFontList: TextBoxFontSize[] = [
    { fontSize: 17, lineHeight: 17 },
    { fontSize: 14, lineHeight: 14 },
    { fontSize: 11, lineHeight: 11 },
];
export const defaultPendulumFontList: TextBoxFontSize[] = [
    { fontSize: 16.41, lineHeight: 16.44 },
    { fontSize: 16.41, lineHeight: 16.44 },
    // { fontSize: 13.88, lineHeight: 14.53 },
];
export const defaultMonsterVanillaFontList: TextBoxFontSize[] = [
    { fontSize: 16.74, lineHeight: 17.01 },
    { fontSize: 16.74, lineHeight: 17.01 },
    { fontSize: 16.74, lineHeight: 17.01 },
];
export const defaultPendulumSizeList: TextBoxSize[] = [
    { width: 375, height: 82, top: 504.5, left: 87.05 },
    { width: 375, height: 82, top: 504.5, left: 87.05 },
    // { width: 378.17, height: 90.25, top: 507.89, left: 87.05 },
];
export const defaultMonsterSizeList: TextBoxSize[] = [
    { width: 464.57, height: 102.36, top: 621, left: 43.89 },
    { width: 463.90, height: 105.34, top: 624, left: 43.89 },
    { width: 463.90, height: 105.34, top: 624, left: 43.89 },
];
export const defaultMonsterTypeAblitySizeList: TextBoxSize[] = [
    { width: 465.06, height: 24.77, top: 602.03, left: 41.97 },
    { width: 465.06, height: 23.32, top: 601.80, left: 41.97 },
    { width: 465.06, height: 23.32, top: 601.80, left: 41.97 },
];
export const defaultSTFontList: TextBoxFontSize[] = [
    { fontSize: 16.41, lineHeight: 16.74 },
    { fontSize: 13.46, lineHeight: 14.28 },
];
export const defaultSTSizeList: TextBoxSize[] = [
    { width: 464.43, height: 139.68, top: 605.36, left: 43.89 },
    { width: 463.90, height: 145.75, top: 605.64, left: 43.89 },
];

export type TextBox = {
    value?: string,
    typeAbilityValue?: string[],
    forceLine?: number,
    forceCondense?: number,
    name?: string,
    className?: string,
    zoom?: number,
    fontList?: TextBoxFontSize[],
    sizeList?: TextBoxSize[],
    isFlavorText?: boolean,
    type?: 'st' | 'monster',
    sizeChangeThreshold?: number,
} & Pick<SelfResizeBox, 'onRatioChange' | 'onSizeChange'>;
export const TextBox = ({
    name,
    forceLine,
    forceCondense,
    value = '',
    typeAbilityValue = [],
    type = 'monster',
    zoom = 1,
    fontList = defaultMonsterFontList,
    sizeList = defaultMonsterSizeList,
    isFlavorText = false,
    className = '',
    sizeChangeThreshold = 645,
    onSizeChange = () => {},
    onRatioChange = () => {},
}: TextBox) => {
    const [currentSize, setSize] = useState(0);
    const { top, left } = sizeList[currentSize];
    const {
        top: typeTop,
        left: typeLeft,
        width: typeWidth,
        height: typeHeight,
    } = defaultMonsterTypeAblitySizeList[currentSize];

    return <>
        {(type === 'monster' && typeAbilityValue.length > 0) && <div className={'preview preview-type-ability'}
            style={{
                top: typeTop,
                left: typeLeft,
                width: typeWidth,
                height: typeHeight,
            }}>
            <TypeAbilityLine scaleRatio={zoom} typeAbility={typeAbilityValue} size={currentSize === 0 ? 'normal' : 'small'} />
        </div>}
        <div className={`textbox-container textbox-container-${name} ${isFlavorText ?? 'flavor-text'} ${className ?? ''}`}
            style={{ top, left, paddingRight: 5, paddingBottom: 5 }}
        >
            <SelfResizeBox
                isFlavorText={isFlavorText}
                fontList={isFlavorText ? defaultMonsterVanillaFontList : fontList}
                sizeList={sizeList}
                value={value}
                sizeChangeThreshold={sizeChangeThreshold}
                onSizeChange={value => {
                    setSize(value);
                    onSizeChange(value);
                }}
                onRatioChange={onRatioChange}
            />
        </div>
    </>;
};
export { TextBoxTitle } from './title';