import { StyledDropdown } from 'src/component';
import styled from 'styled-components';
import { RadioTrain, TrainGridStyle } from './input-train';

export const StyledPendulumFrameContainer = styled(StyledDropdown.Container)`
    padding: 5px;
    .radio-train {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        .radio-train-input-group {
            gap: var(--spacing);
        }
    }
    .ant-checkbox-wrapper {
        color: var(--color-heavy);
    }
    .frame-auto-checkbox {
        margin-bottom: 5px;
    }
    ${TrainGridStyle}
`;

export const StyledInputLabelWithButton = styled.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`;

export const StyledNameSetIdInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    .card-info-sub-family {
        padding-right: 1em;
        margin-right: 1em;
        border-right: 1px solid #ccc;
        &:empty {
            padding: 0;
            margin: 0;
            border: none;
        }
    }
`;

export const StyledFormatRadioTrain = styled(RadioTrain)`
    &.radio-train {
        .ant-radio-button-wrapper-checked {
            &.ocg-button {
                background-color: var(--main-red-scale);
                border-color: var(--sub-red-scale);
                &:not([class*=" ant-radio-button-wrapper-disabled"]).ant-radio-button-wrapper:first-child {
                    border-right-color: var(--sub-red-scale);
                }
                &:not(.ant-radio-button-wrapper-disabled):first-child {
                    border-color: var(--sub-red-scale);
                }
                &:hover {
                    background-color: var(--sub-red-scale);
                    color: var(--color-heavy);
                }
            }
            &.tcg-button {
                background-color: var(--main-blue-scale);
                border-color: var(--sub-blue-scale);
                &:hover {
                    background-color: var(--sub-blue-scale);
                    color: var(--color-heavy);
                }
            }
        }
        .ocg-button {
            color: var(--color-heavy);
            &:hover {
                color: var(--sub-red-scale);
            }
        }
        .tcg-button {
            color: var(--color-heavy);
            &:hover {
                color: var(--sub-blue-scale);
            }
        }
    }
`;