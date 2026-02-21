import { Button, Input, InputNumber, Modal } from 'antd';
import { forwardRef, useState, useImperativeHandle } from 'react';
import { Quill } from 'react-quill';
import { TotalImagePresetMap } from 'src/model';
import styled from 'styled-components';

export type ImageBlotValue = {
    set?: string,
    src?: string,
    width?: string,
    height?: string,
    offsetx?: string,
    offsety?: string,
    name?: string,
};
export const ImageMemory = (() => {
    const imageMemory: Record<string, Record<string, ImageBlotValue>> = {};

    return {
        all: (id: string) => imageMemory[id] ?? {},
        set: (id: string, name: string, value: ImageBlotValue) => {
            imageMemory[id] = imageMemory[id] || {};
            imageMemory[id][name] = { set: id, ...value };
        },
        modify: (id: string, name: string, value: Partial<ImageBlotValue>) => {
            imageMemory[id] = imageMemory[id] || {};
            imageMemory[id][name] = { ...imageMemory[id][name], ...value };
        },
        get: (id?: string, name?: string | null): ImageBlotValue | undefined => {
            if (!name || !id) return undefined;
            return imageMemory[id]?.[name];
        },
        delete: (id: string) => {
            delete imageMemory[id];
        },
    };
})();

const quillFontSize = 14;
const Image = Quill.import('formats/image');
export const IMAGE_HANDLER = 'insertImage';
class ImageBlot extends Image {
    static value(domNode: HTMLImageElement) {
        return {
            src: domNode.getAttribute('src') ?? undefined,
            set: domNode.getAttribute('data-set') ?? undefined,
            name: domNode.getAttribute('data-name') ?? undefined,
            width: domNode.getAttribute('data-width') ?? undefined,
            height: domNode.getAttribute('data-height') ?? undefined,
            offsetx: domNode.getAttribute('data-offsetx') ?? undefined,
            offsety: domNode.getAttribute('data-offsety') ?? undefined,
        };
    }
    static create(value: string | ImageBlotValue) {
        const node: HTMLImageElement = super.create(value);
        if (typeof value === 'string') {
            const sanitizedValue = this.sanitize(value);
            const source = value.startsWith('http')
                ? sanitizedValue
                : `${process.env.PUBLIC_URL}/asset/image/${(TotalImagePresetMap[sanitizedValue] ?? `${sanitizedValue}.png`)}`;
            node.setAttribute('src', source);
            node.setAttribute('style', `max-width: ${quillFontSize}px;`);
            return node;
        }

        const validValue = (value: unknown): value is string => typeof value === 'string' && value !== '';
        const {
            name,
            set,
        } = value;
        const memoizedImage = ImageMemory.get(set, name) ?? ({} as ImageBlotValue);
        const src = memoizedImage.src ?? value.src;
        const width = memoizedImage.width ?? value.width;
        const height = memoizedImage.height ?? value.height;
        const offsetx = memoizedImage.offsetx ?? value.offsetx;
        const offsety = memoizedImage.offsety ?? value.offsety;
        const richTextOffsetToCanvasOffsetRatio = 2;
        if (typeof src === 'string') {
            const sanitizedSrc: string = this.sanitize(src);
            const source = sanitizedSrc.startsWith('http') || sanitizedSrc.includes('/asset/image/')
                ? sanitizedSrc
                : `${process.env.PUBLIC_URL}/asset/image/${(TotalImagePresetMap[sanitizedSrc] ?? `${sanitizedSrc}.png`)}`;
            node.setAttribute('src', source);
        }
        if (typeof name === 'string') node.setAttribute('data-name', name);
        if (typeof set === 'string') node.setAttribute('data-set', set);
        let style = '';
        if (validValue(width)) {
            style += `max-width: ${(parseInt(width) || 0) / richTextOffsetToCanvasOffsetRatio}px;`;
            node.setAttribute('data-width', width);
        } else style += `width: ${quillFontSize}px;`;
        if (validValue(height)) {
            node.setAttribute('data-height', height);
            style += `height: ${(parseInt(height) || 0) / richTextOffsetToCanvasOffsetRatio}px;`;
        }
        if (validValue(offsetx)) {
            node.setAttribute('data-offsetx', offsetx);
            style += `left: ${(parseInt(offsetx) || 0) / richTextOffsetToCanvasOffsetRatio}px;`;
        }
        if (validValue(offsety)) {
            node.setAttribute('data-offsety', offsety);
            style += `top: ${(parseInt(offsety) || 0) / richTextOffsetToCanvasOffsetRatio}px;`;
        }
        node.setAttribute('style', style);
        return node;
    }
};
Quill.register(ImageBlot);

export const MAX_IMAGE_DIMENSION = 100;
const ImageModifierModalContainer = styled(Modal)`
    .ant-modal-header {
        padding: var(--spacing) var(--spacing-lg);
    }
    .ant-modal-close-x {
        line-height: 43px; // Alignment
    }
    .input-group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--spacing-xs);
        margin-bottom: var(--spacing);
        .ant-input-affix-wrapper {
            grid-column: 1 / -1;
        }
        .ant-input-number {
            width: unset;
        }
    }
    .input-footer {
        display: flex;
        justify-content: flex-end;
        gap: var(--spacing-xs);
    }
`;
export type ImageModifierModalRef = {
    open: (
        node: HTMLImageElement,
        onChange: (nextNodeData: ImageBlotValue) => void,
    ) => void,
};
export type ImageModifierModal = {
};
export const ImageModifierModal = forwardRef<ImageModifierModalRef, ImageModifierModal>((_, ref) => {
    const [visible, setVisible] = useState(false);
    const [imageUpdater, setImageUpdater] = useState<(nextNodeData: ImageBlotValue) => void>(() => () => { });
    const [nodeData, setNodeData] = useState<ImageBlotValue>({});
    const updateNodeData = (field: keyof ImageBlotValue, value: string | number | undefined) => {
        setNodeData(cur => ({ ...cur, [field]: value == null ? undefined : String(value) }));
    };
    const commonImageNumberProps = {
        max: MAX_IMAGE_DIMENSION,
        min: -MAX_IMAGE_DIMENSION,
        step: 1,
    };
    const commonInputProps = {
        size: 'small' as const,
        allowClear: true,
    };

    useImperativeHandle(ref, () => ({
        open: (node, onChange) => {
            setNodeData({
                src: node.getAttribute('src') ?? undefined,
                name: node.getAttribute('data-name') ?? undefined,
                width: node.getAttribute('data-width') ?? undefined,
                height: node.getAttribute('data-height') ?? undefined,
                offsetx: node.getAttribute('data-offsetx') ?? undefined,
                offsety: node.getAttribute('data-offsety') ?? undefined,
            });
            setImageUpdater(() => onChange);
            setVisible(true);
        },
    }));

    return <ImageModifierModalContainer
        title="Modify Image"
        className="global-overlay"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
    >
        <div className="input-group">
            <Input
                placeholder="Reusable Name"
                value={nodeData.name}
                onChange={value => {
                    const currentName = value.target.value;
                    updateNodeData('name', currentName);
                }}
                {...commonInputProps}
            />
            <Input
                placeholder="Image URL"
                value={nodeData.src}
                onChange={e => updateNodeData('src', e.target.value)}
                {...commonInputProps}
            />
            <InputNumber
                placeholder="Width"
                value={nodeData.width == null ? undefined : parseInt(nodeData.width)}
                onChange={value => updateNodeData('width', value)}
                {...commonImageNumberProps}
                {...commonInputProps}
            />
            <InputNumber
                placeholder="Offset X"
                value={nodeData.offsetx == null ? undefined : parseInt(nodeData.offsetx)}
                onChange={value => updateNodeData('offsetx', value)}
                {...commonImageNumberProps}
                {...commonInputProps}
            />
            <InputNumber
                placeholder="Offset Y"
                value={nodeData.offsety == null ? undefined : parseInt(nodeData.offsety)}
                onChange={value => updateNodeData('offsety', value)}
                {...commonImageNumberProps}
                {...commonInputProps}
            />
        </div>
        <div className="input-footer">
            <Button
                size="small"
                onClick={() => setVisible(false)}
            >
                Cancel
            </Button>
            <Button
                size="small"
                type="primary"
                onClick={() => {
                    imageUpdater(nodeData);
                    setVisible(false);
                }}
            >
                Update
            </Button>
        </div>
    </ImageModifierModalContainer>;
});