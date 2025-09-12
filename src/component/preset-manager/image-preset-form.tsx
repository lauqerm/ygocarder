import { Button, Col, Form, Input, InputNumber, Modal, notification, Row } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { ImagePreset } from 'src/model';
import { WithLanguage } from 'src/service';
import styled from 'styled-components';

const ImagePresetFormContainer = styled(Form.Item)`
    &.ant-form-item {
        margin-bottom: calc(-3/2 * var(--spacing));
        margin-top: var(--spacing);
        margin-left: calc(-3/2 * var(--spacing));
        margin-right: calc(-3/2 * var(--spacing));
        padding: var(--spacing);
        border-top: var(--bw) solid var(--sub-level-1);
        .ant-form-item-control-input-content {
            display: flex;
            justify-content: end;
            gap: var(--spacing);
        }
    }
`;

export type ImagePresetFormRef = {
    edit: (key: string, data: ImagePreset) => void,
};
export type ImagePresetForm = {
    onSubmit: (data: ImagePreset) => void,
    onEdit: (key: string, data: ImagePreset) => void,
} & WithLanguage;
export const ImagePresetForm = forwardRef<ImagePresetFormRef, ImagePresetForm>(({
    onSubmit,
    onEdit,
    language,
}, ref) => {
    const [form] = Form.useForm();
    const [editKey, setEditKey] = useState('');
    const [visible, setVisible] = useState(false);
    const turnOffForm = () => {
        setVisible(false);
        setEditKey('');
        form.resetFields();
    };

    useImperativeHandle(ref, () => ({
        edit: (key, data) => {
            form.setFieldsValue(data);
            setEditKey(key);
            setVisible(true);
        }
    }));

    return <>
        <Button
            className="formatting-help-button"
            type="primary"
            size="small"
            onClick={() => {
                setVisible(true);
            }}
        >
            {language['preset.form.image.add.label']}
        </Button>
        <Modal
            visible={visible}
            width={400}
            className="global-overlay"
            footer={() => null}
            onCancel={() => turnOffForm()}
        >
            <Form
                form={form}
                name="image-preset"
                layout="vertical"
                size="middle"
                onFinish={value => {
                    if (typeof editKey === 'string' && editKey !== '') {
                        onEdit(editKey, value);
                    } else {
                        onSubmit(value);
                    }
                    turnOffForm();
                }}
                onFinishFailed={() => {
                    notification.error({
                        message: language['error.preset-import.message'],
                        description: language['error.preset-import.description'],
                    });
                }}
                autoComplete="off"
            >
                <Form.Item
                    label={language['preset.form.image.src.label']}
                    name="src"
                    rules={[{ required: true, message: language['form.required'] }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={language['preset.form.image.name.label']}
                    name="name"
                    rules={[{ required: true, message: language['form.required'] }]}
                >
                    <Input />
                </Form.Item>
                <div>{language['form.default']}</div>

                <Row gutter={10}>
                    <Col span={12}>
                        <Form.Item
                            label={language['preset.form.image.width.label']}
                            name="width"
                        >
                            <InputNumber step={1} min={0} max={800} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={language['preset.form.image.height.label']}
                            name="height"
                        >
                            <InputNumber step={1} min={0} max={800} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={10}>
                    <Col span={12}>
                        <Form.Item
                            label={language['preset.form.image.offset-x.label']}
                            name="offsetX"
                        >
                            <InputNumber step={1} min={-200} max={200} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={language['preset.form.image.offset-y.label']}
                            name="offsetY"
                        >
                            <InputNumber step={1} min={-200} max={200} />
                        </Form.Item>
                    </Col>
                </Row>
                <ImagePresetFormContainer>
                    <Button onClick={() => turnOffForm()}>
                        {language['form.dismiss']}
                    </Button>
                    <Button type="primary" htmlType="submit">
                        {language['form.submit']}
                    </Button>
                </ImagePresetFormContainer>
            </Form>
        </Modal>
    </>;
});