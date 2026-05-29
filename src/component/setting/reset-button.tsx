import { Modal, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { resetOfflineData } from '../../pwa';
import { useLanguage } from 'src/service';

export function ResetOfflineDataButton() {
    const language = useLanguage();
    const handleClick = () => {
        Modal.confirm({
            title: language['setting.option.reset-offline-data.title'],
            icon: <DeleteOutlined style={{ color: 'var(--main-danger)' }} />,
            content: (
                <div>
                    <p>{language['setting.option.reset-offline-data.content.lead']}</p>
                    <ul>
                        <li>{language['setting.option.reset-offline-data.content.first-result']}</li>
                        <li>{language['setting.option.reset-offline-data.content.second-result']}</li>
                        <li>{language['setting.option.reset-offline-data.content.third-result']}</li>
                    </ul>
                    <br />
                    <p>
                        <strong>{language['setting.option.reset-offline-data.content.emphasis']}</strong> {language['setting.option.reset-offline-data.content.guide']}
                    </p>
                </div>
            ),
            okText: language['setting.option.reset-offline-data.proceed.label'],
            okButtonProps: { danger: true },
            cancelText: language['generic.cancel.label'],
            onOk: async () => {
                const result = await resetOfflineData();
                console.info('[pwa] reset complete', result);
                // Force a network reload so the SW re-registers fresh
                window.location.reload();
            },
        });
    };

    return (
        <Button danger icon={<DeleteOutlined />} onClick={handleClick}>
            {language['setting.option.reset-offline-data.label']}
        </Button>
    );
};