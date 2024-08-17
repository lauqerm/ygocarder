import { useEffect, useRef, useState } from 'react';
import WebFont from 'webfontloader';
import { useCard } from './use-card';
import { useShallow } from 'zustand/react/shallow';

export type UseOCGFont = {
    onBeforeLoad: () => void,
    onActive: () => void,
    onInactive: () => void,
    onFontInactive: (familyName: string, fvd: string) => void,
}
export const useOCGFont = ({
    onActive,
    onBeforeLoad,
    onFontInactive,
    onInactive,
}: UseOCGFont) => {
    const {
        font,
        format,
    } = useCard(useShallow(state => ({
        format: state.card.format,
        font: state.card.nameStyle.font,
    })));
    const [styleContent, setStyleContent] = useState('');

    const ocgReady = useRef(false);
    const loadAttempt = useRef(0);
    useEffect(() => {
        if (
            (format === 'ocg' || font === 'OCG')
            && ocgReady.current === false
            && loadAttempt.current <= 3
        ) {
            loadAttempt.current += 1;
            setStyleContent(`${process.env.PUBLIC_URL}/asset/ocg-font.css`);
            onBeforeLoad();

            WebFont.load({
                custom: {
                    families: [
                        'DFHSGothic-W3-WIN-RKSJ-H',
                        'DFKakuTaiHiStd-W4',
                        'FOT-Rodin Pro M',
                        'Yu-Gi-Oh! DF Leisho 3',
                    ],
                    urls: ['asset/ocg-font.css'],
                },
                active: () => {
                    ocgReady.current = true;
                    onActive();
                },
                inactive: () => {
                    ocgReady.current = true;
                    onInactive();
                },
                fontinactive: onFontInactive,
            });
        }
    }, [format, font, onActive, onBeforeLoad, onFontInactive, onInactive]);

    return {
        styleContent,
    };
};