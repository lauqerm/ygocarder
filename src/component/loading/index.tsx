import { Spin } from 'antd';
import './loading.scss';

export const Loading = () => {
    return <Spin />;
};
Loading.FullView = () => {
    return <div className="loading-fullview">
        <Spin size="large" />
    </div>;
};