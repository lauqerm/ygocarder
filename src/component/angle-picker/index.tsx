import { AnglePicker } from 'react-linear-gradient-picker';
import styled from 'styled-components';

/** The container must contain this class to spread inner styling to angle picker component */
export const ANGLE_PICKER_CLASSNAME = 'controls-wrapper';
const AnglePickerContainer = styled.div`
    .ap {
        background-color: var(--color-heavy);
        .apc {
            width: 8px;
        }
        .aph {
            width: 8px;
            height: 8px;
        }
    }
    .ai {
        margin: 0;
        margin-top: var(--spacing-sm);
        background: var(--main-slider);
        justify-content: space-between;
        line-height: 1.4;
        span {
            background: var(--main-secondary);
            padding-left: var(--spacing);
            padding-right: var(--spacing);
            &:hover {
                background: var(--sub-secondary);
            }
        }
        span,
        input {
            color: var(--color-heavy);
        }
    }
`;

export type CircularAnglePicker = AnglePicker & {
    children?: React.ReactChild,
};
export const CircularAnglePicker = ({
    children,
    ...rest
}: CircularAnglePicker) => {
    return <AnglePickerContainer className="angle-picker-container">
        {children}
        <AnglePicker {...rest} />
    </AnglePickerContainer>;
};