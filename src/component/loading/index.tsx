import { Spin } from 'antd';
import styled from 'styled-components';

const StyledLoadingFullViewContainer = styled.div`
    display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(#fafafaaa, #fafafaaa);
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const Loading = () => {
    return <Spin />;
};
Loading.FullView = () => {
    return <StyledLoadingFullViewContainer className="loading-fullview">
        <Spin size="large" />
    </StyledLoadingFullViewContainer>;
};