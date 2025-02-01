import { Card, FrameInfoMap, LinkIndentList, LinkRotateList, NO_ICON } from 'src/model';
import { getCardIconFromFrame, mergeClass, normalizeCardName } from 'src/util';
import styled from 'styled-components';

const ThumbSize = 56;
const StyledCardThumb = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    border-top: var(--bw) solid var(--sub-level-3);
    border-bottom: var(--bw) solid var(--sub-level-3);
    background-color: var(--main-level-1);
    cursor: pointer;
    &.active {
        background-color: var(--main-level-4);
    }
    &:hover {
        background-color: var(--sub-level-4);
    }
    .right-slot {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: var(--spacing-sm);
        line-height: 1;
        overflow: hidden;
        padding: var(--spacing-xs);
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
`;
export type CardThumb = {
    card: Card,
    active: boolean,
}
export const CardThumb = ({
    card,
    active,
}: CardThumb) => {
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
    // console.log('🚀 ~ artCrop:', star, cardIcon, normalizedCardIcon, subFamily, normalizedCardIconType);

    return <StyledCardThumb className={mergeClass(active ? 'active' : '')}>
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
                <div>
                    {atk}
                </div>
                {(atk || def) ? <div>&nbsp;/&nbsp;</div> : <div>&nbsp;</div>}
                <div>
                    {isLink ? `Link ${linkMap.length}` : def}
                </div>
            </div>
        </div>
    </StyledCardThumb>;
};