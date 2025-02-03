import { FrameInfoMap, InternalCard, LinkIndentList, LinkRotateList, NO_ICON } from 'src/model';
import { checkMonster, getCardIconFromFrame, mergeClass, normalizeCardName } from 'src/util';
import { CopyOutlined, CloseOutlined, DownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Popconfirm, Tooltip } from 'antd';
import { LanguageDataDictionary } from 'src/service';
import { useState } from 'react';

const ThumbSize = 56;
const StyledCardThumb = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    border-bottom: var(--bw) solid var(--sub-level-3);
    background-color: var(--main-level-1);
    cursor: pointer;
    position: relative;
    &.active {
        background-color: var(--main-level-5);
    }
    &:hover {
        background-color: var(--sub-level-5);
    }
    .right-slot {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: var(--spacing-sm);
        line-height: 1;
        overflow: hidden;
        padding: var(--spacing-xs);
        border-left: var(--bw) solid var(--main-level-3);
        .first-row {
            &:empty:before {
                content: "\\00a0";
            }
        }
        .second-row {
            display: flex;
            column-gap: var(--spacing-xs);
            align-items: center;
            .card-icon {
                width: 1em;
            }
            .attribute-icon {
                width: 1em;
            }
            .star-content {
                width: 30px;
            }
        }
        .third-row {
            display: flex;
        }
    }
    .left-slot {
        --link-arrow-icon-size: 16px;
        --link-arrow-border-size: 6px;
        --link-arrow-container-size: 8px;
        --link-arrow-half-size: 13px;
        --link-arrow-margin-inline: calc(var(--link-arrow-half-size) - var(--link-arrow-icon-size) / 2);
        --link-arrow-margin-block: calc(var(--link-arrow-half-size) - var(--link-arrow-border-size) / 2);
        line-height: 0;
        position: relative;
        .card-art-container {
            cursor: default;
            display: inline-block;
            width: ${ThumbSize}px;
            overflow: hidden;
            box-shadow: var(--bs-1);
            margin: var(--spacing-xs);
            position: relative;
            z-index: 1;
            top: 50%;
            transform: translateY(calc(-50% - var(--spacing-xs)));
        }
        .card-art {
            display: inline-block;
            box-shadow: var(--bs-1);
        }
        .card-frame {
            width: 100%;
            height: 50%;
            position: absolute;
            left: 0;
            &.top-frame {
                top: 0;
            }
            &.bottom-frame {
                top: 50%;
            }
        }
        .thumb-link-marker-icon {
            display: inline-block;
            width: 0;
            height: 0;
            top: 18px;
            left: 18px;
            border-style: solid;
            position: absolute;
            z-index: 3;
            margin: var(--link-arrow-margin-block) var(--link-arrow-margin-inline);
            border-width: 0 var(--link-arrow-container-size) var(--link-arrow-container-size) var(--link-arrow-container-size);
            border-color: transparent transparent #dadada transparent;
            &:after {
                content: '';
                display: inline-block;
                position: absolute;
                height: 0;
                width: 0;
                top: 0;
                left: calc(-1 * var(--link-arrow-border-size));
                border-style: solid;
                border-width: 0 var(--link-arrow-border-size) var(--link-arrow-border-size) var(--link-arrow-border-size);
                border-color: transparent transparent #484848 transparent;
                transform: translateY(1px);
                z-index: 2;
            }
            &.marker-checked:after {
                border-color: transparent transparent var(--main-link-marker) transparent;
            }
        }
    }
    .action-slot {
        display: none;
        padding: var(--spacing-xs);
        position: absolute;
        top: 0;
        right: 0;
        background: var(--main-level-3);
        height: 100%;
        box-shadow: 0 0 3px 0 #222222;
        cursor: default;
        &.force-visible {
            display: block;
        }
        .action-container {
            display: inline-grid;
            grid-template-columns: max-content;
            gap: var(--spacing-xs);
        }
        .action-button {
            cursor: pointer;
            &.action-duplicate:hover {
                color: var(--main-active);
            }
            &.action-delete:hover {
                color: var(--main-danger);
            }
            &.action-download:hover {
                color: var(--main-online);
            }
        }
    }
    &:hover {
        .action-slot {
            display: block;
        }
    }
`;
export type CardThumb = {
    card: InternalCard,
    active: boolean,
    language: LanguageDataDictionary,
    onDuplicate: (card: InternalCard) => void,
    onDownload: (card: InternalCard) => void,
    onSelect: (card: InternalCard) => void,
    onDelete: (id: string) => void,
}
export const CardThumb = ({
    card,
    active,
    language,
    onDuplicate,
    onSelect,
    onDelete,
    onDownload,
}: CardThumb) => {
    const [actionVisible, setActionVisible] = useState<boolean>(false);
    const {
        name,
        art,
        artCrop,
        artSource,
        artFit,
        frame,
        pendulumFrame,
        attribute,
        typeAbility,
        cardIcon,
        star,
        atk,
        def,
        linkMap,
        isLink,
        isPendulum,
        format,
        subFamily,
    } = card;
    const normalizedCardName = normalizeCardName(name);
    const normalizedBottomFrame = pendulumFrame === 'auto'
        ? isPendulum
            ? 'spell'
            : frame
        : pendulumFrame;
    const normalizedCardArt = (artSource === 'offline' || !art)
        ? 'https://i.imgur.com/jjtCuG5.png'
        : art;
    const {
        width,
        height,
        x,
        y,
        aspect,
    } = artCrop;
    const normalizedCardIconType = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;
    const normalizedCardIcon = normalizedCardIconType === 'st'
        ? subFamily
        : normalizedCardIconType;
    const isMonster = checkMonster(card);
    const statInEffect = (pendulumFrame !== 'auto' || isPendulum)
        ? !!(atk || def || (isLink && linkMap.length))
        : isMonster;

    return <StyledCardThumb
        className={mergeClass('truncate', active ? 'active' : '')}
        onClick={() => onSelect(card)}
    >
        <div
            className="left-slot"
        >
            <div className="card-frame top-frame"
                style={{
                    backgroundColor: FrameInfoMap[frame]?.labelBackgroundColor,
                    backgroundImage: FrameInfoMap[frame]?.labelBackgroundImage,
                }}
            />
            <div className="card-frame bottom-frame"
                style={{
                    backgroundColor: FrameInfoMap[normalizedBottomFrame]?.labelBackgroundColor,
                    backgroundImage: FrameInfoMap[normalizedBottomFrame]?.labelBackgroundImage,
                }}
            />
            <a
                className="card-art-container"
                href={normalizedCardArt}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.preventDefault()}
                style={{
                    height: ThumbSize / (aspect ?? 1),
                }}
            >
                <img
                    className="card-art"
                    src={normalizedCardArt}
                    alt={normalizedCardName}
                    style={{
                        width: artFit
                            ? ThumbSize
                            : ThumbSize / ((width ?? 1) / 100),
                        height: artFit
                            ? ThumbSize
                            : ThumbSize / ((height ?? 1) / 100) / (aspect ?? 1),
                        transform: artFit
                            ? 'none'
                            : `translateX(-${x ?? 0}%) translateY(-${y ?? 0}%)`,
                    }}
                />
            </a>
            {isLink && [...Array(9)].map((_, index) => {
                if (index === 4) return null;
                return <div key={`link-${index}`}
                    className={mergeClass(
                        `thumb-link-marker-icon thumb-link-marker-icon-${index + 1}`,
                        linkMap.includes(`${index + 1}`) ? 'marker-checked' : '')}
                    style={{ transform: `rotate(${LinkRotateList[index]}deg) translateY(${LinkIndentList[index]}px)` }}
                />;
            })}
        </div>
        <div className="right-slot truncate">
            <div className="first-row truncate">
                {normalizedCardName}
            </div>
            <div className="second-row truncate">
                {attribute === 'NONE'
                    ? null
                    : <img className="attribute-icon"
                        src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${format}-${attribute.toLowerCase()}.png`}
                        alt="Icon"
                    />}
                <div className="truncate">{typeAbility.join('/')}</div>
                {(!isLink && normalizedCardIcon !== NO_ICON && normalizedCardIconType !== 'none') && <img className="card-icon"
                        src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-${normalizedCardIcon}.png`}
                        alt="Icon"
                    />}
                {(!isLink && normalizedCardIconType !== 'st') && <span className="star-content truncate">{star}</span>}
            </div>
            <div className="third-row truncate">
                {statInEffect && <div>
                    {atk}
                </div>}
                {statInEffect ? <div>&nbsp;/&nbsp;</div> : <div>&nbsp;</div>}
                {statInEffect && <div>
                    {isLink ? `Link ${linkMap.length}` : def}
                </div>}
            </div>
        </div>
        <div className={mergeClass('action-slot', actionVisible ? 'force-visible' : '')} onClick={e => e.stopPropagation()}>
            <div className="action-container">
                <Tooltip placement="left" title={language['manager.button.duplicate.tooltip']}>
                    <CopyOutlined className="action-button action-duplicate" onClick={() => onDuplicate(card)} />
                </Tooltip>
                <Tooltip placement="left" title={language['manager.button.download.tooltip']}>
                    <DownloadOutlined className="action-button action-download" onClick={() => onDownload(card)} />
                </Tooltip>
                <Popconfirm
                    placement="left"
                    title={language['manager.button.delete.label']}
                    onVisibleChange={status => setActionVisible(status)}
                    onConfirm={() => onDelete(card.id)}
                    okText={language['manager.button.delete.confirm.label']}
                    cancelText={language['manager.button.delete.cancel.label']}
                >
                    <Tooltip placement="left" title={language['manager.button.delete.tooltip']}>
                        <CloseOutlined className="action-button action-delete" />
                    </Tooltip>
                </Popconfirm>
            </div>
        </div>
    </StyledCardThumb>;
};