import styled from 'styled-components';
import { InputTrainStyle } from './input-train.styled';

const StyledCheckboxTrainContainer = styled.div`
    ${InputTrainStyle}
`;
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
    return <StyledCheckboxTrainContainer
        className={['ant-radio-group ant-radio-group-outline radio-train', className].join(' ')}
    >
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
    </StyledCheckboxTrainContainer>;
};