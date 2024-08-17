import styled from 'styled-components';
import { InputTrainStyle } from './input-train.styled';

const StyledRadioTrainContainer = styled.div`
    ${InputTrainStyle}
`;
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
    return <StyledRadioTrainContainer className={['ant-radio-group ant-radio-group-outline radio-train', className].join(' ')}>
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
    </StyledRadioTrainContainer>;
};