import React from 'react';
import './radio-train.scss';

export type RadioTrain = {
    className?: string,
    value: string,
    optionList: { label: React.ReactNode, value: string | number, props?: React.LabelHTMLAttributes<HTMLLabelElement> }[],
    onChange: (value: string | number) => void,
    children?: React.ReactNode,
}
export const RadioTrain = ({
    onChange,
    value: activeValue,
    optionList,
    children,
    className,
}: RadioTrain) => {
    return <div className={['ant-radio-group ant-radio-group-outline radio-train', className].join(' ')}>
        {children && <label className="standalone-addon ant-input-group-addon">{children}</label>}
        <div className="radio-train-input-group">
            {optionList.map(({ value, props, label }) => {
                const { className } = props ?? {};
                const isChecked = `${value}` === `${activeValue}`;

                return <label key={value}
                    {...props}
                    className={`ant-radio-button-wrapper ${isChecked ? 'ant-radio-button-wrapper-checked' : ''} ${className}`}
                    onClick={() => onChange(value)}
                >
                    <span className={`ant-radio-button ${isChecked ? 'ant-radio-button-checked' : ''}`}>
                        <span className="ant-radio-button-inner"></span>
                    </span>
                    <span className="label">{label}</span>
                </label>;
            })}
        </div>
    </div>;
};

export type CheckboxTrain = {
    className?: string,
    value: string[],
    optionList: { label: React.ReactNode, value: string | number, props?: React.LabelHTMLAttributes<HTMLLabelElement> }[],
    onChange: (value: (string | number)[]) => void,
    children?: React.ReactNode,
}
export const CheckboxTrain = ({
    onChange,
    value,
    optionList,
    children,
    className,
}: CheckboxTrain) => {
    return <div className={['ant-radio-group ant-radio-group-outline radio-train', className].join(' ')}>
        {children && <label className="standalone-addon ant-input-group-addon">{children}</label>}
        <div className="radio-train-input-group">
            {optionList.map(entry => {
                const isChecked = Array.isArray(value) ? value.includes(`${entry.value}`) : false;

                return <label key={entry.value}
                    {...entry.props}
                    className={`ant-radio-button-wrapper ${isChecked ? 'ant-radio-button-wrapper-checked' : ''}`}
                    onClick={() => {
                        onChange(isChecked
                            ? value.filter(currentValue => `${entry.value}` !== currentValue)
                            : [...value, `${entry.value}`]);
                    }}
                >
                    <span className={`ant-radio-button ${isChecked ? 'ant-radio-button-checked' : ''}`}>
                        <span className="ant-radio-button-inner"></span>
                    </span>
                    <span className="label">{entry.label}</span>
                </label>;
            })}
        </div>
    </div>;
};