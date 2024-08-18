// import { useCallback, useEffect, useState } from 'react';
// import Moveable from 'react-moveable';
// import { EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import './char-picker.scss';

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
	.char-picker {
		z-index: 1;
		display: grid;
        grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
		.handler,
		.ant-btn {
			background-color: #4a4a4d;
			color: #ffffffcc;
			text-shadow: 0 1px #222;
			font-family: Segoe UI Symbol, sans-serif;
			border: 1px solid var(--sub-level-1);
			border-radius: 0;
			padding: 0 10px;
			height: 25px;
			+ .ant-btn {
				border-left-width: 0;
			}
			&:hover {
				background-color: #585863;
			}
			&:first-child {
				border-radius: 3px 0 0 3px;
			}
			&:last-child {
				border-radius: 0 3px 3px 0;
			}
		}
		.handler {
			cursor: grabbing;
			background-color: #585863;
			height: unset;
			font-size: 20px;
			height: 20px;
			line-height: 1;
			padding: 0;
			text-align: center;
		}
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

    return <StyledCharPickerContainer className="char-picker-container">
        {<div id={'char-picker'} className="char-picker">
            {/* <div className="handler">
                <EllipsisOutlined />
            </div> */}
            {[
                '∞',
                '☆',
                '●',
                '©',
                '™',
                'Ɐ',
                'Я',
            ].map(entry => {
                return <button key={entry} className="ant-btn" onClick={() => internalOnPick(entry)}>{entry}</button>;
            })}
        </div>}
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