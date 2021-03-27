import { Checkbox } from 'antd';
import React, { useState } from 'react';
import { CompactPicker } from 'react-color';
import { CloseOutlined } from '@ant-design/icons';
import './color-picker.scss';

export type ColorPicker = {
	defaultValue: string,
	onChange: (color: string) => void,
}
export const ColorPicker = React.memo(({
    defaultValue,
    onChange,
}: ColorPicker) => {
    const [value, setValue] = useState(defaultValue);
    const [isVisible, setVisible] = useState(false);

    return <div className="color-picker">
        <div className="color-picker-preview" onClick={() => setVisible(cur => !cur)}>
	  		<div className="color-picker-display" style={{ background: `${value === 'auto' ? 'linear-gradient(45deg, black, white)' : value}` }} />
        </div>
        {isVisible
            ? <div className="color-picker-overlay" style={{ position: 'absolute', zIndex: 2 }}>
                <div className="color-picker-mask" onClick={() => setVisible(false)} />
                <div className="color-picker-auto">
                    <Checkbox value={'auto'} checked={value === 'auto'} onChange={() => {
                        setValue(value === 'auto' ? '#000000' : 'auto');
                        onChange(value === 'auto' ? '#000000' : 'auto');
                    }}>Auto</Checkbox>
                    <CloseOutlined className="color-picker-close" onClick={() => setVisible(false)} />
                </div>
                <CompactPicker color={value} onChange={color => {
                    setValue(color.hex);
                    onChange(color.hex);
                }} />
            </div>
            : null}
    </div>;
}, () => true);