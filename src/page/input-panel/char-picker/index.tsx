import { useCallback, useEffect, useState } from 'react';
import Moveable from 'react-moveable';
import { EllipsisOutlined } from '@ant-design/icons';
import './char-picker.scss';

function insertAtCursor(target: HTMLTextAreaElement, myValue: string) {
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

export type CharPicker = {
    targetId: string,
    onPick?: (value: string) => void,
}
export const CharPicker = ({
    targetId = '',
    onPick = () => {},
}: CharPicker) => {
    const [target, setTarget] = useState<HTMLElement | null>(null);
    const internalOnPick = (char: string) => {
        const inputTarget = document.getElementById(targetId) as HTMLTextAreaElement;
        if (inputTarget) {
            const { value } = insertAtCursor(inputTarget, char);

            onPick(value);
        }
    };

    useEffect(() => {
        setTarget(document.getElementById('char-picker'));
    }, []);

    const onDrag = useCallback(({
        target,
        left, top,
        transform,
    }) => {
        target!.style.left = `${left}px`;
        target!.style.top = `${top}px`;
        target!.style.transform = transform;
    }, []);

    return <div className="char-picker-container">
        {<div id={'char-picker'} className="char-picker">
            <div className="handler">
                <EllipsisOutlined />
            </div>
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
        <Moveable
            target={target}
            container={null}

            /* Resize event edges */
            edge={false}

            /* draggable */
            draggable={true}
            throttleDrag={0}
            onDrag={onDrag}
        />
    </div>;
};