import { Checkbox } from 'antd';
import React, { useState } from 'react';
import { CompactPicker } from 'react-color';
import { CloseOutlined } from '@ant-design/icons';
import { TextStyle, TextStyleType } from '../../../model';
import './style-picker.scss';

export type StylePicker = {
    defaultType: TextStyleType,
	defaultValue: TextStyle,
	onChange: (type: TextStyleType, style: TextStyle) => void,
}
export const StylePicker = React.memo(({
    defaultType,
    defaultValue,
    onChange,
}: StylePicker) => {
    // const [isExpand, setExpand] = useState(false);
    const [type, setType] = useState(defaultType);
    const [value, setValue] = useState(defaultValue);
    const [isVisible, setVisible] = useState(false);

    return <div className="style-picker">
        <div className="style-picker-preview" onClick={() => setVisible(cur => !cur)}>
	  		<div className="style-picker-display" style={{ background: `${type === 'auto' ? 'white' : value.fillStyle}` }}>
                {type === 'auto' ? 'Auto' : <>&nbsp;</>}
            </div>
        </div>
        {isVisible
            ? <div className="style-picker-overlay" style={{ position: 'absolute', zIndex: 2 }}>
                <div className="style-picker-mask" onClick={() => setVisible(false)} />
                <div className="style-picker-auto">
                    <Checkbox value={'auto'} checked={type === 'auto'} onChange={() => {
                        const newType = type === 'auto' ? 'custom' : 'auto';
                        setType(newType);
                        onChange(newType, value);
                    }}>Auto</Checkbox>
                    <CloseOutlined className="style-picker-close" onClick={() => setVisible(false)} />
                </div>
                <div className={'custom-style-picker'}>
                    {type === 'auto' && <div className="disable-overlay" />}
                    <h2>Text Color</h2>
                    <CompactPicker color={value.fillStyle} onChange={color => {
                        setType('custom');
                        setValue(cur => {
                            const newStyle = {
                                ...cur,
                                fillStyle: color.hex,
                            };

                            onChange('custom', newStyle);
                            return newStyle;
                        });
                    }} />
                </div>
            </div>
            : null}
    </div>;
}, () => true);