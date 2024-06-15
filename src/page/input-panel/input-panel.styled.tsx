import { StyledDropdown } from 'src/component';
import styled from 'styled-components';

export const StyledPendulumFrameContainer = styled(StyledDropdown.Container)`
    padding: 5px;
    .radio-train {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        .radio-train-input-group {
            gap: 10px;
        }
    }
    .ant-checkbox-wrapper {
        color: #ffffffcc;
    }
    .frame-auto-checkbox {
        margin-bottom: 5px;
    }
`;