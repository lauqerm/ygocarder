import React from 'react';
import { TextBoxFontSize } from '../../model';
import { TypeAbilityLine } from '../type-ability';
import { SelfResizeBox } from './self-resize-box';
import './textbox.scss';

export const defaultMonsterFontList: TextBoxFontSize[] = [
    { fontSize: 16.41, lineHeight: 16.74 },
    { fontSize: 13.88, lineHeight: 14.53 },
    { fontSize: 11.5, lineHeight: 11.7 },
];
export const defaultSTFontList: TextBoxFontSize[] = [
    { fontSize: 16.41, lineHeight: 16.74 },
    { fontSize: 13.46, lineHeight: 14.28 },
    { fontSize: 13.46, lineHeight: 14.28 },
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
    isFlavorText?: boolean,
    type?: 'st' | 'monster',
    size?: {
        width: number,
        height: number,
    },
    onLineChange?: (lineCount: number) => void,
}
export const TextBox = ({
    name,
    forceLine,
    forceCondense,
    value = '',
    typeAbilityValue = [],
    type = 'monster',
    zoom = 1,
    fontList = defaultMonsterFontList,
    isFlavorText = false,
    className = '',
    size = {
        width: 464.57,
        height: 102.36,
    },
    onLineChange = () => {},
}: TextBox) => {
    const {
        height,
        width,
    } = size;

    return <>
        {type === 'monster' && <div className={`preview preview-type-ability preview-type-ability-${'normal'}`}>
            <TypeAbilityLine scaleRatio={zoom} typeAbility={typeAbilityValue} size={'normal'} />
        </div>}
        <div className={`textbox-container textbox-container-${name} ${className ?? ''}`} style={{
            width: `${width}px`,
            height: `${height}px`,
        }}>
            <SelfResizeBox
                zoom={zoom}
                fontList={fontList}
                sizeData={{ width, height }}
                value={value}
            />
        </div>
    </>;
};
export { TextBoxTitle } from './title';