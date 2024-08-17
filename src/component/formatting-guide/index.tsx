import { Button, Drawer } from 'antd';
import { memo, useState } from 'react';
import styled from 'styled-components';
import { BulbFilled } from '@ant-design/icons';
import './formatting-guide.scss';

const StyledCode = styled.span`
    background: #333333;
    padding: 0.1rem 0.15rem;
    border: 1px solid #4e84a4;
    border-radius: 3px;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;
const StyledPanel = styled.div`
    display: grid;
    grid-template-columns: 615fr 703fr;
    gap: 0.5rem;
    padding: 0.5rem 0;
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
        padding: 0.1rem 0.5rem;
        background: #505050;
        border-radius: 5px 0 0 0;
        box-shadow: 0 0 1px 1px #222222;
    }
    > img {
        max-width: 100%;
        border: 1px solid #222222;
        border-radius: 4px;
    }
`;
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

export const FormattingHelpDrawer = memo(() => {
    const [modalOpen, setDrawerOpen] = useState(false);

    return <>
        <Drawer
            footer={null}
            visible={modalOpen}
            width={'60%'}
            title={<div className="overlay-title">Formatting Guide <Button
                size="small"
                type="primary"
                onClick={() => {
                    setDrawerOpen(false);
                }}
            >Close</Button></div>}
            className="formattting-guide-overlay"
            onClose={() => {
                setDrawerOpen(false);
            }}
        >
            <div>
                <p>
                    Formatting should work out-of-the-box, but in case you need to fine-tune your cards, here are some additional formatting syntax.
                    <br />
                    The behavior may be differents base on the input.
                </p>
                <h2>Non-breakable line</h2>
                Wrap a line of text inside a <StyledCode>{'['}</StyledCode> and <StyledCode>{']'}</StyledCode> to prevent the text from breaking down into multiple lines.
                <br />
                If hotkeys are allowed, you can wrap your desired text and press <StyledCode>{'Ctrl 1'}</StyledCode> or <StyledCode>{'⌘ 1'}</StyledCode>.
                <StyledPanel className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-1-raw.jpg`}
                        caption="Input"
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-1-preview.jpg`}
                        caption="Output"
                    />
                </StyledPanel>
                <h2>Non-breakable text</h2>
                Wrap a piece of text inside a <StyledCode>{'{'}</StyledCode> and <StyledCode>{'}'}</StyledCode> to prevent the text from breaking down into multiple lines.
                <br />
                If hotkeys are allowed, you can wrap your desired text and press <StyledCode>{'Ctrl 2'}</StyledCode> or <StyledCode>{'⌘ 2'}</StyledCode>.
                <StyledPanel className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-2-raw.jpg`}
                        caption="Input"
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-2-preview.jpg`}
                        caption="Output"
                    />
                </StyledPanel>
                <h2>Ruby</h2>
                Put a <StyledCode>{'|'}</StyledCode> in between of a non-breakable text to annotate the text with small letters above it.
                <br />
                If hotkeys are allowed, you can wrap your desired text and press <StyledCode>{'Ctrl 3'}</StyledCode> or <StyledCode>{'⌘ 3'}</StyledCode>.
                <StyledPanel className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-3-raw.jpg`}
                        caption="Input"
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-3-preview.jpg`}
                        caption="Output"
                    />
                </StyledPanel>
                <h2>Compressable Ruby</h2>
                Put a <StyledCode>{'||'}</StyledCode> in between of a non-breakable text to annotate it compressable small letters that does not try to extend beyond the text below it.
                <br />
                If hotkeys are allowed, you can wrap your desired text and press <StyledCode>{'Ctrl 4'}</StyledCode> or <StyledCode>{'⌘ 4'}</StyledCode>.
                <StyledPanel className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-4-raw.jpg`}
                        caption="Input"
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-4-preview.jpg`}
                        caption="Output"
                    />
                </StyledPanel>
                <h2>Non-compressable text</h2>
                Wrap a piece of text inside a <StyledCode>{'{{'}</StyledCode> and <StyledCode>{'}}'}</StyledCode> to prevent the text from being compressed.
                <br />
                If hotkeys are allowed, you can wrap your desired text and press <StyledCode>{'Ctrl 5'}</StyledCode> or <StyledCode>{'⌘ 5'}</StyledCode>.
                <StyledPanel className="panel-figure">
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-raw' }}
                        alt={'non-breakable line raw'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-5-raw.jpg`}
                        caption="Input"
                    />
                    <ImageWithCaption
                        containerProps={{ className: 'panel-box box-preview' }}
                        alt={'non-breakable line preview'}
                        src={`${process.env.PUBLIC_URL}/asset/image/syntax/syntax-5-preview.jpg`}
                        caption="Output"
                    />
                </StyledPanel>
            </div>
        </Drawer>
        <Button
            className="formatting-help-button"
            onClick={() => {
                setDrawerOpen(true);
            }} type="primary"
        >
            Formatting Help <BulbFilled />
        </Button>
    </>;
});