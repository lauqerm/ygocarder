import styled from 'styled-components';
import { InputTrainStyle } from './input-train.styled';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { getNavigationProps } from 'src/util';

const StyledRadioTrainContainer = styled.div`
    ${InputTrainStyle}
`;
export type RadioTrainRef = {
    focus: () => void,
}
export type RadioTrain = {
    className?: string,
    value: string,
    optionList: { label: React.ReactNode, value: string | number, props?: React.LabelHTMLAttributes<HTMLLabelElement> }[],
    onChange: (value: string | number) => void,
    children?: React.ReactNode,
}
export const RadioTrain = forwardRef<RadioTrainRef, RadioTrain>(({
    onChange,
    value: activeValue,
    optionList,
    children,
    className,
}, ref) => {
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
            {optionList.map(({ value, props, label }, index) => {
                const { className } = props ?? {};
                const isChecked = `${value}` === `${activeValue}`;

                return <label key={value}
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
                </label>;
            })}
        </div>
    </StyledRadioTrainContainer>;
});