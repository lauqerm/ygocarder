import styled from 'styled-components';
import { InputTrainStyle } from './input-train.styled';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { getNavigationProps } from 'src/util';
import { Tooltip } from 'antd';

declare module 'react' {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: React.Ref<T>) => JSX.Element | null
    ): (props: P & React.RefAttributes<T>) => JSX.Element | null;
}

const StyledRadioTrainContainer = styled.div`
    ${InputTrainStyle}
`;
export type RadioTrainRef = {
    focus: () => void,
}
export type RadioTrain<Value = string | number> = {
    className?: string,
    strict?: boolean,
    value: Value,
    optionList: {
        label: React.ReactNode,
        value: Value,
        tooltipProps?: React.ComponentProps<typeof Tooltip>,
        props?: React.LabelHTMLAttributes<HTMLLabelElement>,
    }[],
    onChange: (value: Value) => void,
    children?: React.ReactNode,
    suffix?: React.ReactNode,
}
const UnrefRadioTrain = <Value extends string | number = string | number>({
    onChange,
    value: activeValue,
    optionList,
    children,
    suffix,
    className,
    strict = false,
}: RadioTrain<Value>, ref: React.ForwardedRef<RadioTrainRef>) => {
    const [focus, setFocus] = useState(-1);
    const internalRef = useRef<HTMLDivElement>(null);
    const optionLength = optionList.length;

    useImperativeHandle(ref, () => ({
        focus: () => internalRef.current?.focus(),
    }));

    return <StyledRadioTrainContainer
        className={['ant-radio-group ant-radio-group-outline radio-train', className].join(' ')}
    >
        {children && <label className="standalone-addon ant-input-group-addon">{children}</label>}
        <div ref={internalRef}
            className="radio-train-input-group"
            {...getNavigationProps({
                setFocus,
                optionLength,
                onTrigger: () => {
                    const target = optionList[focus];
                    if (target) {
                        onChange(target.value);
                    }
                },
            })}
        >
            {optionList.map(({ value, props, label, tooltipProps }, index) => {
                const { className } = props ?? {};
                const isChecked = strict
                    ? value === activeValue
                    : `${value}` === `${activeValue}`;

                return <Tooltip key={value} overlay={null} {...tooltipProps}>
                    <label
                        {...props}
                        className={[
                            'ant-radio-button-wrapper',
                            isChecked ? 'ant-radio-button-wrapper-checked' : '',
                            className ?? '',
                            focus === index ? 'radio-train-focused' : '',
                        ].join(' ')}
                        onClick={() => onChange(value)}
                    >
                        <span className={`ant-radio-button ${isChecked ? 'ant-radio-button-checked' : ''}`}>
                            <span className="ant-radio-button-inner"></span>
                        </span>
                        <span className="label">{label}</span>
                    </label>
                </Tooltip>;
            })}
        </div>
        {suffix}
    </StyledRadioTrainContainer>;
};
export const RadioTrain = forwardRef(UnrefRadioTrain);