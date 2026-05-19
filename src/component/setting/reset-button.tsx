import { Modal, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { resetOfflineData } from '../../pwa';

export function ResetOfflineDataButton() {
  const handleClick = () => {
    Modal.confirm({
      title: 'Reset offline data?',
      icon: <DeleteOutlined style={{ color: '#ff4d4f' }} />,
      content: (
        <div>
          <p>This will:</p>
          <ul style={{ paddingLeft: 20 }}>
            <li>Delete all cached images, fonts, and app files</li>
            <li>Unregister the service worker</li>
            <li>Reload the page fresh from the network</li>
          </ul>
          <p>
            <strong>Your saved card designs are not affected.</strong> Use this
            if the app is behaving strangely or refusing to update.
          </p>
        </div>
      ),
      okText: 'Reset and reload',
      okButtonProps: { danger: true },
      cancelText: 'Cancel',
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
      Reset offline data
    </Button>
  );
}