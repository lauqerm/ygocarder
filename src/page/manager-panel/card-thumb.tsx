import {
    CanvasConst,
    CardArtCanvasCoordinate,
    FrameInfoMap,
    getArtCanvasCoordinate,
    InternalCard,
    LinkIndentList,
    LinkRotateList,
    NO_ICON,
} from 'src/model';
import { checkMonster, checkSpeedSkill, getCardIconFromFrame, mergeClass, normalizeCardName } from 'src/util';
import { CopyOutlined, CloseOutlined, DownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Popconfirm, Tooltip } from 'antd';
import { LanguageDataDictionary } from 'src/service';
import { useEffect, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';

const THUMB_ART_SIZE = 56;
export const THUMB_SIZE = 68;
const {
    height: cardHeight,
    width: cardWidth,
    cardBorder,
} = CanvasConst;
const THUMB_TO_CARD_RATIO = THUMB_SIZE / cardWidth;
const StyledCardThumb = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    border: var(--bw) solid var(--main-level-1);
    border-top-color: transparent;
    background-color: #333333;
    cursor: pointer;
    position: relative;
    z-index: 1;
    height: ${THUMB_SIZE}px;
    font-size: var(--fs-thumb);
    &.alternative-color {
        background-color: #282828;
    }
    &.active {
        background-color: #484848;
        border-color: var(--main-active);
        box-shadow: var(--bs-2);
        z-index: 2;
    }
    &:hover {
        border-color: var(--sub-active);
    }
    .right-slot {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: var(--spacing-xxs);
        line-height: 1.25;
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
            .padding {
                flex: 1;
            }
            .card-icon {
                width: 1em;
            }
            .attribute-icon {
                width: 1em;
            }
            .star-content {
                flex: 0 0 30px;
                &.tuner {
                    color: var(--main-online);
                }
            }
        }
        .third-row {
            display: flex;
            .set-id {
                flex: 1;
                text-align: right;
            }
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
        width: ${THUMB_SIZE}px;
        overflow: hidden;
        .card-art-container {
            cursor: pointer;
            display: inline-block;
            max-height: ${THUMB_ART_SIZE}px;
            overflow: hidden;
            box-shadow: var(--bs-1);
            position: relative;
            z-index: 1;
        }
        .card-art {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
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
            top: 19px;
            left: 20px;
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
        .pendulum-scale {
            position: absolute;
            bottom: 0;
            text-align: center;
            width: 18px;
            line-height: 1;
            z-index: 3;
            font-size: var(--fs-sm);
            background-color: #eaeaea;
            box-shadow: var(--bs-1);
            padding: var(--spacing-xxs) 0;
            &.red-scale {
                right: 0;
                color: var(--main-red-scale);
                border-radius: var(--br-lg) 0 0 0;
            }
            &.blue-scale {
                left: 0;
                color: var(--main-blue-scale);
                border-radius: 0 var(--br-lg) 0 0;
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
    index: number,
    card: InternalCard,
    active: boolean,
    language: LanguageDataDictionary,
    onDuplicate: (card: InternalCard) => void,
    onDownload: (card: InternalCard) => void,
    onSelect: (card: InternalCard) => void,
    onDelete: (id: string) => void,
    style?: React.CSSProperties,
}
export const CardThumb = ({
    index,
    card,
    active,
    language,
    onDuplicate,
    onSelect,
    onDelete,
    onDownload,
    style,
}: CardThumb) => {
    const [actionVisible, setActionVisible] = useState<boolean>(false);
    const {
        art,
        artCrop,
        artFit,
        artSource,
        atk,
        attribute,
        background,
        backgroundCrop,
        backgroundFit,
        cardIcon,
        def,
        format,
        frame,
        backgroundType,
        hasBackground,
        isLink,
        isPendulum,
        linkMap,
        name,
        pendulumFrame,
        opacity,
        pendulumScaleBlue,
        pendulumScaleRed,
        setId,
        star,
        subFamily,
        typeAbility,
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
    const normalizedCardIconType = cardIcon === 'auto' ? getCardIconFromFrame(frame) : cardIcon;
    const normalizedCardIcon = normalizedCardIconType === 'st'
        ? subFamily
        : normalizedCardIconType;
    const isMonster = checkMonster(card);
    const isSpeedSkill = checkSpeedSkill(card);
    const statInEffect = (pendulumFrame !== 'auto' || isPendulum)
        ? !!(atk || def || (isLink && linkMap.length))
        : isMonster;
    const joinedTypeAbility = typeAbility.join(' / ');
    const canvasCoordinate = getArtCanvasCoordinate(isPendulum, opacity);
    const {
        artFrameHeight,
        artFrameWidth,
    } = canvasCoordinate;

    return <StyledCardThumb
        className={mergeClass(
            'truncate',
            active ? 'active' : '',
            index % 2 === 0 ? 'alternative-color' : '',
        )}
        onClick={() => onSelect(card)}
        style={style}
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
                    width: artFrameWidth * THUMB_TO_CARD_RATIO,
                    height: artFrameHeight * THUMB_TO_CARD_RATIO,
                    top: (cardHeight - cardWidth) / 2 / 2 * THUMB_TO_CARD_RATIO,
                    left: (cardWidth - artFrameWidth) / 2 * THUMB_TO_CARD_RATIO,
                }}
            >
                {hasBackground && <DelayedImage
                    className="background-art"
                    artLink={background ?? 'https://imgur.com/pdSVzUZ.png'}
                    name={normalizedCardName + ' - background'}
                    fit={backgroundFit}
                    crop={backgroundCrop}
                    canvasCoordinate={getArtCanvasCoordinate(isPendulum, {
                        ...opacity,
                        boundless: backgroundType === 'fit' ? false : true,
                    })}
                />}
                <DelayedImage
                    className="foreground-art"
                    artLink={normalizedCardArt}
                    name={normalizedCardName}
                    fit={artFit}
                    crop={artCrop}
                    canvasCoordinate={canvasCoordinate}
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
            {isPendulum && <div className="pendulum-scale blue-scale">{pendulumScaleBlue}</div>}
            {isPendulum && <div className="pendulum-scale red-scale">{pendulumScaleRed}</div>}
        </div>
        <div className="right-slot truncate">
            <div className="first-row truncate">
                {normalizedCardName}
            </div>
            <div className="second-row truncate">
                {isSpeedSkill || attribute === 'NONE'
                    ? null
                    : <img className="attribute-icon"
                        src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${format}-${attribute.toLowerCase()}.png`}
                        alt="Icon"
                    />}
                {typeAbility.length > 0 && <div className="truncate">{joinedTypeAbility}</div>}
                {normalizedCardIconType !== 'st' && <div className="padding" />}
                {(!isLink && normalizedCardIcon !== NO_ICON && normalizedCardIconType !== 'none') && <img
                    className="card-icon"
                    src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-${normalizedCardIcon.toLowerCase()}.png`}
                    alt="Icon"
                />}
                {(!isLink && !isSpeedSkill && normalizedCardIconType !== 'st') && <span
                    className={mergeClass('star-content truncate', joinedTypeAbility.toLowerCase().includes('tuner') ? 'tuner' : '')}
                >
                    {typeof star === 'number'
                        ? star
                        : star !== ''
                            ? `"${star}"`
                            : ''}
                </span>}
            </div>
            <div className="third-row truncate">
                {statInEffect && <div>
                    {atk}
                </div>}
                {statInEffect ? <div>&nbsp;/&nbsp;</div> : <div>&nbsp;</div>}
                {statInEffect && <div>
                    {isLink ? `Link ${linkMap.length}` : def}
                </div>}
                {setId && <div className="set-id">{setId}</div>}
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

const calculateThumbArtStyle = (
    imageWidth: number,
    imageHeight: number,
    canvasCoordinate: CardArtCanvasCoordinate,
    baseCrop?: Partial<ReactCrop.Crop>,
    fit?: boolean,
) => {
    const {
        artWidth,
        artY,
        ratio,
        artFrameWidth,
        artFrameY,
    } = canvasCoordinate;
    const {
        width,
        height,
        x,
        y,
    } = (fit
        ? { ...baseCrop, width: 100, height: 100, x: 0, y: 0 }
        : baseCrop) ?? {};

    const thumbArtXGap = artWidth === artFrameWidth
        ? 0
        : (cardWidth - artFrameWidth) / 2 - cardBorder;
    const thumbArtYGap = artFrameY - artY;

    const thumbArtWidth = artWidth * THUMB_TO_CARD_RATIO;
    const thumbArtHeight = artWidth / ratio * THUMB_TO_CARD_RATIO;

    const croppedWidth = imageWidth * ((width ?? 0) / 100);
    const croppedHeight = imageHeight * ((height ?? 0) / 100);

    const thumbToCroppedWidthRatio = thumbArtWidth / (croppedWidth <= 0 ? 1 : croppedWidth);
    const thumbToCroppedHeightRatio = thumbArtHeight / (croppedHeight <= 0 ? 1 : croppedHeight);

    const thumbImageWidth = imageWidth * thumbToCroppedWidthRatio;
    const thumbImageHeight = imageHeight * thumbToCroppedHeightRatio;

    const croppedLeft = -imageWidth * ((x ?? 0) / 100) * thumbToCroppedWidthRatio;
    const croppedTop = -imageHeight * ((y ?? 0) / 100) * thumbToCroppedWidthRatio;

    return {
        top: croppedTop,
        left: croppedLeft,
        width: thumbImageWidth,
        height: fit ? thumbImageHeight : undefined,
        transform: `translateX(${
            - thumbArtXGap * THUMB_TO_CARD_RATIO
        }px) translateY(${
            - thumbArtYGap * THUMB_TO_CARD_RATIO
        }px)`,
    };
};
/** The image should not load instantly to avoid stagnant request when user scroll through their card list. Also to prevent sudden image change when cropper reconciliate. */
type DelayedImage = {
    artLink: string,
    name: string,
    crop?: Partial<ReactCrop.Crop>,
    fit?: boolean,
    canvasCoordinate: CardArtCanvasCoordinate,
    className?: string,
    style?: React.CSSProperties,
};
const DelayedImage = ({
    artLink,
    name,
    crop: baseCrop,
    className,
    fit,
    canvasCoordinate,
    style,
}: DelayedImage) => {
    const [internalLink, setInternalLink] = useState('https://imgur.com/pdSVzUZ.png');
    const imageRef = useRef<HTMLImageElement>(null);
    const [calculatedStyle, setCalculatedStyle] = useState(() => calculateThumbArtStyle(
        imageRef.current?.naturalWidth ?? 1,
        imageRef.current?.naturalHeight ?? 1,
        canvasCoordinate,
        baseCrop,
        fit,
    ));
    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                setInternalLink(artLink);
            }
        }, 500);

        return () => {
            relevant = false;
        };
    }, [artLink]);

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                setCalculatedStyle(calculateThumbArtStyle(
                    imageRef.current?.naturalWidth ?? 1,
                    imageRef.current?.naturalHeight ?? 1,
                    canvasCoordinate,
                    baseCrop,
                    fit,
                ));
            }
        }, 500);

        return () => {
            relevant = false;
        };
    }, [baseCrop, canvasCoordinate, fit]);

    return <img ref={imageRef}
        className={mergeClass('card-art', className)}
        src={internalLink}
        alt={name}
        style={{
            ...calculatedStyle,
            ...style,
        }}
        onLoad={() => {
            setCalculatedStyle(calculateThumbArtStyle(
                imageRef.current?.naturalWidth ?? 1,
                imageRef.current?.naturalHeight ?? 1,
                canvasCoordinate,
                baseCrop,
                fit,
            ));
        }}
    />;
};