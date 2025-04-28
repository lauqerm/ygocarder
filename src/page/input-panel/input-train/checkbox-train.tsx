import styled from 'styled-components';
import { useState } from 'react';
import { getNavigationProps } from 'src/util';
import { InputTrainStyle } from 'src/component';
import { Tooltip } from 'antd';

const StyledCheckboxTrainContainer = styled.div`
    ${InputTrainStyle}
`;
export type CheckboxTrain = {
    className?: string,
    value: string[],
    optionList: { label: React.ReactNode, value: string | number, tooltip?: string, props?: React.LabelHTMLAttributes<HTMLLabelElement> }[],
    onChange: (value: (string | number)[]) => void,
    children?: React.ReactNode,
}
export const CheckboxTrain = ({
    onChange,
    value: activeValue,
    optionList,
    children,
    className,
}: CheckboxTrain) => {
    const [focus, setFocus] = useState(-1);
    const optionLength = optionList.length;

    return <StyledCheckboxTrainContainer
        className={['ant-radio-group ant-radio-group-outline checkbox-train', className].join(' ')}
    >
        {children && <label className="standalone-addon ant-input-group-addon">{children}</label>}
        <div
            className="checkbox-train-input-group"
            {...getNavigationProps({
                setFocus,
                optionLength,
                onTrigger: () => {
                    const target = optionList[focus];
                    if (target) {
                        const isChecked = Array.isArray(activeValue) ? activeValue.includes(`${target.value}`) : false;
                        onChange(isChecked
                            ? activeValue.filter(currentValue => `${target.value}` !== currentValue)
                            : [...activeValue, `${target.value}`]);
                    }
                },
            })}
        >
            {optionList.map((entry, index) => {
                const { label, value, props, tooltip } = entry;
                const isChecked = Array.isArray(activeValue) ? activeValue.includes(`${value}`) : false;
                const children = <label key={value}
                    {...props}
                    className={[
                        'ant-radio-button-wrapper',
                        isChecked ? 'ant-radio-button-wrapper-checked' : '',
                        focus === index ? 'checkbox-train-focused' : '',
                    ].join(' ')}
                    onClick={() => {
                        onChange(isChecked
                            ? activeValue.filter(currentValue => `${value}` !== currentValue)
                            : [...activeValue, `${value}`]);
                    }}
                >
                    <span className={`ant-radio-button ${isChecked ? 'ant-radio-button-checked' : ''}`}>
                        <span className="ant-radio-button-inner"></span>
                    </span>
                    <span className="label">{label}</span>
                </label>;

                return tooltip
                    ? <Tooltip title={tooltip}>{children}</Tooltip>
                    : children;
            })}
        </div>
    </StyledCheckboxTrainContainer>;
};