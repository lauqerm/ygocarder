// import { useCallback, useEffect, useState } from 'react';
// import Moveable from 'react-moveable';
// import { EllipsisOutlined } from '@ant-design/icons';
import { Explanation, StyledPopMarkdown } from 'src/component';
import { useLanguage } from 'src/service';
import styled from 'styled-components';

export function insertAtCursor(target: HTMLTextAreaElement, myValue: string) {
    //IE support
    if ((document as any).selection) {
        target.focus();
        const sel = (document as any).selection.createRange();
        sel.text = myValue;

        return {
            value: target.value,
            position: 0,
        };
    }
    //MOZILLA and others
    else if (target.selectionStart || target.selectionStart === 0) {
        const startPos = target.selectionStart;
        const endPos = target.selectionEnd;
        target.value = target.value.substring(0, startPos)
            + myValue
            + target.value.substring(endPos, target.value.length);
        target.selectionStart = startPos + myValue.length;
        target.selectionEnd = startPos + myValue.length;
        target.focus();

        return {
            value: target.value,
            position: startPos + myValue.length,
        };
    } else {
        target.value += myValue;

        return {
            value: target.value,
            position: 0,
        };
    }
}

const StyledCharPickerContainer = styled.div`
    z-index: 10;
    display: inline-grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    column-gap: var(--spacing-sm);

    .char-picker {
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
        button.ant-btn {
            padding: 0;
        }
        .handler,
        .ant-btn {
            background-color: var(--main-level-1);
            color: var(--color-heavy);
            text-shadow: var(--ts);
            font-family: Segoe UI Symbol, sans-serif;
            border: 1px solid var(--sub-level-1);
            border-radius: 0;
            padding: 0 var(--spacing);
            + .ant-btn {
                border-left-width: 0;
            }
            &:hover {
                color: var(--main-active);
            }
            &:first-child {
                border-radius: var(--br) 0 0 var(--br);
            }
            &:last-child {
                border-radius: 0 var(--br) var(--br) 0;
            }
        }
        /** Currently char picker no longer movable */
        /* .handler {
            cursor: grabbing;
            background-color: var(--main-level-2);
            height: unset;
            font-size: var(--fs-xl);
            height: var(--fs-xl);
            line-height: 1;
            padding: 0;
            text-align: center;
        } */
    }
    .moveable-control-box {
        .moveable-control.moveable-origin,
        .moveable-line.moveable-direction {
            border-color: transparent;
            background: none;
        }
    }
`;

/** The dragging experience is not good. Currently turn it off for now and glue it into effect's textarea. */
export type CharPicker = {
    targetId: string,
    onPick?: (value: string, letter: string) => void,
}
export const CharPicker = ({
    targetId = '',
    onPick = () => {},
}: CharPicker) => {
    const language = useLanguage();
    // const [target, setTarget] = useState<HTMLElement | null>(null);
    const internalOnPick = (letter: string) => {
        const inputTarget = document.getElementById(targetId) as HTMLTextAreaElement;
        if (inputTarget) {
            const { value } = insertAtCursor(inputTarget, letter);

            onPick(value, letter);
        }
    };

    // useEffect(() => {
    //     setTarget(document.getElementById('char-picker'));
    // }, []);

    // const onDrag = useCallback(({
    //     target,
    //     left, top,
    //     transform,
    // }) => {
    //     target!.style.left = `${left}px`;
    //     target!.style.top = `${top}px`;
    //     target!.style.transform = transform;
    // }, []);

    /** No tabIndex here because this is not an essential input, but rather a QoL component */
    return <StyledCharPickerContainer tabIndex={-1} className="char-picker-container">
        {<div id={'char-picker'} className="char-picker">
            {/* <div className="handler">
                <EllipsisOutlined />
            </div> */}
            {[
                '∞',
                '☆',
                '★',
                '●',
                '©',
                '™',
                'Ɐ',
                'Я',
                'Ø',
                '※',
            ].map(entry => {
                return <button key={entry}
                    tabIndex={-1}
                    className="ant-btn"
                    onClick={() => internalOnPick(entry)}
                >{entry}</button>;
            })}
        </div>}
        <div className="char-picker-guideline">
            <Explanation
                content={<StyledPopMarkdown>
                    {language['input.char-picker.guide.header']}
                    <ul>
                        <li>{language['input.char-picker.guide.instruction-1']}</li>
                        <li>{language['input.char-picker.guide.instruction-2']}</li>
                    </ul>
                </StyledPopMarkdown>}
            />
        </div>
        {/* <Moveable
            target={target}
            container={null}
            edge={false}
            draggable={true}
            throttleDrag={0}
            onDrag={onDrag}
        /> */}
    </StyledCharPickerContainer>;
};