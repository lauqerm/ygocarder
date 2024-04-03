import React from 'react';
import './checkbox-train.scss';

export type CheckboxTrain = {
    className?: string,
    value: string,
    optionList: { label: React.ReactNode, value: string | number, props?: React.LabelHTMLAttributes<HTMLLabelElement> }[],
    onChange: (value: string | number) => void,
    children?: React.ReactNode,
}
export const CheckboxTrain = ({
    onChange,
    value,
    optionList,
    children,
    className,
}: CheckboxTrain) => {
    return <div className={['ant-radio-group ant-radio-group-outline checkbox-train', className].join(' ')}>
        {children && <label className="standalone-addon ant-input-group-addon">{children}</label>}
        <div className="checkbox-train-input-group">
            {optionList.map(entry => {
                const isChecked = `${entry.value}` === `${value}`;

                return <label key={entry.value}
                    {...entry.props}
                    className={`ant-radio-button-wrapper ${isChecked ? 'ant-radio-button-wrapper-checked' : ''}`}
                    onClick={() => {
                        onChange(entry.value);
                    }}
                >
                    <span className={`ant-radio-button ${isChecked ? 'ant-radio-button-checked' : ''}`}>
                        <span className="ant-radio-button-inner"></span>
                    </span>
                    <span>{entry.label}</span>
                </label>;
            })}
        </div>
    </div>;
};