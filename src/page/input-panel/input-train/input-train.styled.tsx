import { css } from 'styled-components';

export const InputTrainStyle = css`
    display: flex;
    .radio-train-input-group {
        display: flex;
        flex: 1 1 auto;
    }
    .ant-radio-button-wrapper {
        user-select: none;
    }
    .ant-radio-button-wrapper:first-child,
    .ant-radio-button-wrapper:last-child {
        border-radius: 0;
    }
    .ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked):first-child {
        border-left-color: var(--sub-level-1);
    }
`;

export const TrainGridStyle = css`
    .radio-train-input-group {
		display: flex;
		flex-wrap: wrap;
		column-gap: 5px;
		row-gap: 5px;
		box-shadow: none;
		border-radius: none;
		.ant-radio-button-wrapper:first-child,
		.ant-radio-button-wrapper:last-child {
			border-radius: 0;
		}
		.ant-radio-button-wrapper {
			flex: 1;
			text-transform: capitalize;
			white-space: nowrap;
			border: none;
			box-shadow: 0 0 0 1px var(--sub-level-1);
			padding: 0;
			min-width: 90px;
			height: 28px;
			line-height: 28px;
			text-align: center;
			text-shadow: none;
			font-size: 13px;
			&:hover {
				outline: 1px solid var(--main-active);
				outline-offset: 1px;
			}
			&::before {
				display: none;
			}
		}
		.ant-radio-button-wrapper-checked {
			outline: 1px solid var(--main-active);
			outline-offset: 1px;
		}
	}
`;