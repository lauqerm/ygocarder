import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { CardTextArea, CardTextAreaRef } from './card-text-area';
import styled from 'styled-components';
import { Switch } from 'antd';
import { InputRichText, InputRichTextRef } from '../input-rich-text';
import { useCard } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { v4 as uuid } from 'uuid';
import { CharPicker } from '../char-picker';

const MixedCardTextContainer = styled.div`
    .raw-text-input {
        border-top: var(--bw) solid var(--sub-level-1);
        border-radius: var(--br) var(--br) 0 0;
        .toolbar {
            background-color: var(--main-level-4);
            height: 24px; // Align with rich text toolbar
            border-radius: var(--br) var(--br) 0 0;
            border-right: var(--bw) solid var(--sub-level-1);
            border-left: var(--bw) solid var(--sub-level-1);
            text-align: right;
        }
        .mode-switch {
            display: inline-flex;
            gap: var(--spacing-xs);
            line-height: 16px;
            padding: var(--spacing-xxs);
            margin: var(--spacing-xxs);
        }
        textarea {
            border-radius: 0 0 var(--br) var(--br);
        }
    }
`;

export type MixedCardTextInputRef = {
    setValue: (nextValue: string) => void,
    getPickerRef: () => null | CharPicker,
};
export type MixedCardTextInput = CardTextArea;
export const MixedCardTextInput = forwardRef<MixedCardTextInputRef, MixedCardTextInput>(({
    id,
    className,
    defaultValue,
    onTakePicker,
    ...rest
}, ref) => {
    const commonProps = {
        className,
        defaultValue,
        onTakePicker,
    };
    const [inputId] = useState(() => id ?? uuid());
    const [type, setType] = useState<'raw' | 'html'>('html');
    const rawInputRef = useRef<CardTextAreaRef>(null);
    const richInputRef = useRef<InputRichTextRef>(null);
    const {
        format,
        furiganaHelper,
    } = useCard(useShallow(({
        card: {
            format,
            furiganaHelper,
        },
    }) => ({
        format,
        furiganaHelper,
    })));

    useImperativeHandle(ref, () => ({
        setValue: value => type === 'html'
            ? rawInputRef.current?.setValue(value)
            : rawInputRef.current?.setValue(value),
        getPickerRef: () => (type === 'html'
            ? richInputRef.current?.getPickerRef()
            : rawInputRef.current?.getPickerRef()) ?? null,
    }));

    return <MixedCardTextContainer>
        {type === 'raw' && <div className="raw-text-input">
            <div className="toolbar">
                <div className="mode-switch">
                    <Switch
                        size="small"
                        checked={false}
                        onChange={checked => setType(checked ? 'html' : 'raw')}
                    />
                    <span>Advanced Mode</span>
                </div>
            </div>
            <CardTextArea
                ref={rawInputRef}
                id={id}
                {...commonProps}
                {...rest}
            />
        </div>}
        {type === 'html' && <InputRichText
            ref={richInputRef}
            {...commonProps}
            id={inputId}
            format={format}
            furiganaHelper={furiganaHelper}
            // defaultValue={'Effect\n[2+<img src="https://i.postimg.cc/NFQSRSzT/effect-monster.png" offsetY="-4" /> with <b>different names</b>]\n{{Fiend/<b>Link</b>/<i>Effect</i>}} / You cannot {Summon||Special} <img name="monster" src="https://i.postimg.cc/RZ0mk6G3/monster.png" offsetY="-4" />, except <img src="icon-fire" /><img name="monster" />. You can only use each of the following effects of "Promethean Princess, Bestower of Flames" once per turn. During your {MP|Main Phase}: You can {Summon||Special} 1 <img src="icon-fire" /><img name="monster" /> from your {<img name="gy" src="https://i.postimg.cc/Pr4159Hv/gy.png" />.} If a <img name="monster" /> is Special Summoned to your opponent\'s field, while this card is in your <img name="gy" /> (except during the {Damage Step}): You can target 1 <img src="icon-fire" /><img name="monster" /> you control and 1 <img name="monster" /> your opponent controls; destroy them, and if you do, {Summon||Special} this card.\n[[ATK: 2700 / Link-3]]\n[Left / Bottom / Right] - PHNI-EN052 | <i>Speed Duel</i>'}
            onChange={(carder, html, delta) => console.log('onchange', carder, html, delta)}
            onChangeMode={() => setType('raw')}
        />}
    </MixedCardTextContainer>;
});