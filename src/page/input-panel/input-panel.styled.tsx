import { RadioTrain, StyledDropdown } from 'src/component';
import styled from 'styled-components';
import { TrainGridStyle } from './input-train';

export const StyledPendulumFrameContainer = styled(StyledDropdown.Container)`
    padding: var(--spacing-xs);
    position: relative;
    .radio-train {
        display: flex;
        flex-wrap: wrap;
        max-width: 550px;
        .radio-train-input-group {
            gap: var(--spacing);
        }
    }
    .ant-checkbox-wrapper {
        color: var(--color-heavy);
    }
    .frame-auto-checkbox {
        margin-bottom: var(--spacing-xs);
    }
    .frame-switch-mode {
        position: absolute;
        top: var(--spacing-xs);
        right: var(--spacing-xs);
        cursor: pointer;
        line-height: 1.35;
        padding: 0 var(--spacing-xs);
        border-radius: var(--br);
        background: var(--main-primary);
        border: var(--bw) solid var(--main-active);
        &:hover {
            background: var(--sub-primary);
        }
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
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
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