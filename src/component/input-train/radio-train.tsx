import styled from 'styled-components';
import { InputTrainStyle } from './input-train.styled';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { getNavigationProps } from 'src/util';
import { Tooltip } from 'antd';

declare module 'react' {
    function forwardRef<T, P = Record<string, unknown>>(
        render: (props: P, ref: React.Ref<T>) => JSX.Element | null
    ): (props: P & React.RefAttributes<T>) => JSX.Element | null;
}

const StyledRadioTrainContainer = styled.div`
    ${InputTrainStyle}
`;
export type RadioTrainRef = {
    focus: () => void,
}
export type RadioTrain<Value = string | number, LabelComponent extends React.ComponentType<Record<string, unknown>> = React.ComponentType<Record<string, unknown>>> = {
    className?: string,
    strict?: boolean,
    value: Value,
    optionList: ({
        value: Value,
        tooltipProps?: React.ComponentProps<typeof Tooltip>,
        props?: React.LabelHTMLAttributes<HTMLLabelElement>,
    } & ({
        labelComponent: LabelComponent,
        labelProps: React.ComponentProps<LabelComponent>,
    } | {
        label: React.ReactNode,
    }))[],
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
            {optionList.map((entry, index) => {
                const { value, props, tooltipProps } = entry;
                const className = props?.className;
                const isChecked = strict
                    ? value === activeValue
                    : `${value}` === `${activeValue}`;
                const labelNode = 'label' in entry
                    ? entry.label
                    : (() => {
                        const LabelComponent = entry.labelComponent;
                        return <LabelComponent {...entry.labelProps} />;
                    })();

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
                        <span className="label">{labelNode}</span>
                    </label>
                </Tooltip>;
            })}
        </div>
        {suffix}
    </StyledRadioTrainContainer>;
};
export const RadioTrain = forwardRef(UnrefRadioTrain);