import { ImagePreset } from 'src/model';
import styled from 'styled-components';
import { Copiable, StyledMono } from '../atom';
import { Popconfirm } from 'antd';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { WithLanguage } from 'src/service';

const MAX_PRESET_IMAGE_WIDTH = 140;
const MAX_PRESET_IMAGE_HEIGHT = 60;
const StyledImagePresetContainer = styled.div`
    --max-image-height: ${MAX_PRESET_IMAGE_HEIGHT}px;
    display: grid;
    grid-template-rows: ${MAX_PRESET_IMAGE_HEIGHT}px 22px 1fr;
    text-align: center;
    .image-preview {
        align-content: space-around;
        height: var(--max-image-height);
        img {
            max-width: ${MAX_PRESET_IMAGE_WIDTH}px;
            max-height: var(--max-image-height);
        }
    }
    .image-info {
        display: flex;
        gap: var(--spacing-xxs);
        align-items: center;
        .image-name {
            flex: 1 1 auto;
        }
        .anticon {
            cursor: pointer;
            &.anticon-close:hover {
                color: var(--sub-danger);
            }
            &.anticon-edit:hover {
                color: var(--sub-info);
            }
        }
    }
`;

export type ImagePresetOption = {
    imagePreset: ImagePreset,
    onEdit?: () => void,
    onDelete?: () => void,
} & WithLanguage;
export const ImagePresetOption = ({
    language,
    imagePreset,
    onDelete,
    onEdit,
}: ImagePresetOption) => {
    const {
        src,
        name,
        width,
        height,
        offsetX,
        offsetY,
    } = imagePreset;
    const normalizedOffsetX = typeof offsetX === 'number'
        ? offsetX > 0 ? `+${offsetX}` : offsetX
        : '0';
    const normalizedOffsetY = typeof offsetY === 'number'
        ? offsetY > 0 ? `+${offsetY}` : offsetY
        : '0';

    return <StyledImagePresetContainer>
        <div className="image-preview">
            <img src={src} alt={name} />
        </div>
        <div>
            {width ?? 'auto'} × {height ?? 'auto'}
            {typeof offsetX === 'number' || typeof offsetY === 'number'
                ? ` (${normalizedOffsetX}, ${normalizedOffsetY})`
                : null}
        </div>
        <div className="image-info">
            <div className="image-name">
                <Copiable data={name} container={StyledMono}>{name}</Copiable>
            </div>
            {onDelete && <Popconfirm
                title={language['generic.delete.label']}
                okText={language['generic.yes.label']}
                cancelText={language['generic.no.label']}
                onConfirm={() => onDelete()}
            >
                <CloseOutlined />
            </Popconfirm>}
            {onEdit && <EditOutlined onClick={() => onEdit()} />}
        </div>
    </StyledImagePresetContainer>;
};