import { Button, Collapse, Drawer } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { BulbFilled, SettingFilled } from '@ant-design/icons';
import { useLanguage } from 'src/service';
import { CopiableCode, StyledCode } from '../atom';
import './formatting-guide.scss';
import { AttributeList, ExtraAttributeList, IconList, IconTypeAttributeMap, IconTypeMap, RegionMap } from 'src/model';
import React from 'react';

const { Panel } = Collapse;
const StyledContainer = styled.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`;
const StyledImageSection = styled.div`
    display: grid;
    grid-template-columns: 615fr 703fr;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) 0;
    overflow: hidden;
    .panel-box {
        min-width: 0;
        position: relative;
        overflow: hidden;
    }
`;
const StyledImageWithCaptionContainer = styled.div`
    min-width: 0;
    position: relative;
    overflow: hidden;
    .caption {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: var(--spacing-px) var(--spacing-sm);
        background: var(--main-level-5);
        border-radius: var(--br-lg) 0 0 0;
        box-shadow: var(--bs-block);
    }
    > img {
        max-width: 100%;
        border: var(--bw) solid var(--sub-level-1);
        border-radius: var(--br-lg);
    }
`;
const SpecialPathContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    .special-path-item {
        display: grid;
        grid-template-columns: 20px 180px;
        gap: var(--spacing-xs);
        align-items: center;
        img {
            max-width: 20px;
            max-height: 20px;
        }
    }
    + .path-container {
        margin-top: var(--spacing);
    }
`;
type ImagePathPreview = { path: string, imagePath: string };
const ImagePathPreview = ({ path, imagePath }: ImagePathPreview) => {
    return <div className="special-path-item">
        <div className="image">
            <img src={`${process.env.PUBLIC_URL}/asset/image/${imagePath}.png`} alt={path} />
        </div>
        <div className="path">
            <CopiableCode data={path}>{path}</CopiableCode>
        </div>
    </div>;
};
export type ImageWithCaption = {
    caption?: React.ReactNode,
    containerProps?: React.HTMLAttributes<HTMLDivElement>,
} & React.ImgHTMLAttributes<HTMLImageElement>;
export const ImageWithCaption = ({
    caption,
    containerProps,
    alt,
    ...rest
}: ImageWithCaption) => {
    const { className } = containerProps ?? {};

    return <StyledImageWithCaptionContainer className={`image-with-caption ${className}`}>
        <img alt={alt} {...rest} />
        <div className="caption">{caption}</div>
    </StyledImageWithCaptionContainer>;
};

export const FormattingHelpDrawer = () => {
    const [modalOpen, setDrawerOpen] = useState(false);
    const language = useLanguage();

    return <>
        <Drawer
            footer={null}
            visible={modalOpen}
            width={'60%'}
            title={<div className="overlay-title">{language['guide.format.label']}&nbsp;&nbsp;<Button
                size="small"
                type="primary"
                onClick={() => {
                    setDrawerOpen(false);
                }}
            >{language['generic.close.label']}</Button></div>}
            className="formattting-guide-overlay"
            onClose={() => {
                setDrawerOpen(false);
            }}
        >
            <StyledContainer>
                <p>
                    {language['guide.format.introduction'](<SettingFilled key="icon" />)}.
                </p>
                <h2>{language['guide.format.section-1.label']}</h2>
                {language['guide.format.section-1.content'](
                    <StyledCode key="open-tag">{'['}</StyledCode>,
                    <StyledCode key="close-tag">{']'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+1'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+1'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-1-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-1-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-6.label']}</h2>
                {language['guide.format.section-6.content'](
                    <StyledCode key="open-tag">{'[['}</StyledCode>,
                    <StyledCode key="close-tag">{']]'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+Shift+1'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+Shift+1'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'justified non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-6-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'justified non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-6-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-2.label']}</h2>
                {language['guide.format.section-2.content'](
                    <StyledCode key="open-tag">{'{'}</StyledCode>,
                    <StyledCode key="close-tag">{'}'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+2'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+2'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-2-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-2-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-3.label']}</h2>
                {language['guide.format.section-3.content'](
                    <StyledCode key="separator">{'|'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+3'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+3'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-3-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-3-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-4.label']}</h2>
                {language['guide.format.section-4.content'](
                    <StyledCode key="separator">{'||'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+4'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+4'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-4-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-4-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-5.label']}</h2>
                {language['guide.format.section-5.content'](
                    <StyledCode key="open-tag">{'{{'}</StyledCode>,
                    <StyledCode key="close-tag">{'}}'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+5'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+5'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-5-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-5-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-7.label']}</h2>
                {language['guide.format.section-7.content'](
                    <StyledCode key="open-tag">{'<i>'}</StyledCode>,
                    <StyledCode key="close-tag">{'</i>'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+I'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+I'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'italic text raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-7-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'italic text preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-7-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-8.label']}</h2>
                {language['guide.format.section-8.content'](
                    <StyledCode key="open-tag">{'<b>'}</StyledCode>,
                    <StyledCode key="close-tag">{'</b>'}</StyledCode>,
                    <StyledCode key="hotkey">{'Ctrl+B'}</StyledCode>,
                    <StyledCode key="hokey-alternative">{'⌘+B'}</StyledCode>,
                )}
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'bold text raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-8-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'bold text preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-8-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
                <h2>{language['guide.format.section-9.label']}</h2>
                {language['guide.format.section-9.content'](
                    <StyledCode key="open-tag">{'<img />'}</StyledCode>,
                )}
                <Collapse ghost>
                    <Panel
                        key="sample-option"
                        header={<div>
                            {language['guide.format.section-9.special-path.content']}
                        </div>}
                    >
                        {[
                            <SpecialPathContainer key="subfamily-st">
                                {[...(Object.values(IconTypeMap).filter(({ isOption }) => isOption === true).flatMap(({ value }) => {
                                    const path = `subfamily-${value === 'st' ? 'icon-list' : value}`;
                                    return <ImagePathPreview key={path} path={path} imagePath={`/subfamily/${path}`} />;
                                }))]}
                            </SpecialPathContainer>,
                            <SpecialPathContainer key="subfamily-icon">
                                {[...(IconList.filter(({ isOption }) => isOption === true).flatMap(({ value }) => {
                                    const path = `subfamily-${value.toLowerCase()}`;
                                    return <ImagePathPreview key={path} path={path} imagePath={`/subfamily/${path}`} />;
                                }))]}
                            </SpecialPathContainer>,
                            <SpecialPathContainer key="subfamily-attribute">
                                {[...(Object.values(IconTypeAttributeMap).flatMap(({ value }) => {
                                    const path = `subfamily-${value}`;
                                    return <ImagePathPreview key={path} path={path} imagePath={`/subfamily/${path}`} />;
                                }))]}
                            </SpecialPathContainer>,
                            ...(Object.values(RegionMap).flatMap((region) => {
                                const regionName = region.fileKey;
                                const hasExtraAttribute = ['ocg', 'tcg'].includes(regionName);
                                return <SpecialPathContainer key={regionName} className="path-container">
                                    {[
                                        ...[...AttributeList]
                                            .filter(({ isOption }) => isOption === true)
                                            .flatMap(({ name }) => {
                                                return { path: `attr-${regionName}-${name.toLowerCase()}` };
                                            }),
                                        ...[...(hasExtraAttribute ? ExtraAttributeList : [])]
                                            .filter(({ isOption }) => isOption === true)
                                            .flatMap(({ name }) => {
                                                return { path: `attr-${regionName}-${name.toLowerCase()}` };
                                            }),
                                    ].map(({ path }) => {
                                        return <ImagePathPreview key={path} path={path} imagePath={`/attribute/${path}`} />;
                                    })}
                                </SpecialPathContainer>;
                            })),
                        ]}
                    </Panel>
                </Collapse>
                <StyledImageSection className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'image raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-9-raw.jpg`}
                        caption={language['guide.format.caption.input']}
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'image preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-9-preview.jpg`}
                        caption={language['guide.format.caption.output']}
                    />
                </StyledImageSection>
            </StyledContainer>
        </Drawer>
        <Button
            className="formatting-help-button"
            type="primary"
            onClick={() => {
                setDrawerOpen(true);
            }}
        >
            {language['guide.format.label']} <BulbFilled />
        </Button>
    </>;
};