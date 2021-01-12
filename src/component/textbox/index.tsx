import React, { useEffect, useRef, useState } from 'react';
import { px2pt, scaleCalc } from '../../util';
import { TextBoxFontSize } from '../../model';
import { TextBoxTitle } from './title';
import { Loading } from '../loading';
import './textbox.scss';

const defaultFontList: TextBoxFontSize[] = [
    { fontSize: 16.41, lineHeight: 16.73 },
    { fontSize: 13.88, lineHeight: 14.52 },
    { fontSize: 12.1, lineHeight: 12.77 },
    { fontSize: 10.88, lineHeight: 11.41 },
    { fontSize: 9.78, lineHeight: 10.21 },
];
export type TextBox = {
	value?: string,
    name?: string,
    className?: string,
    zoom?: number,
    fontList?: TextBoxFontSize[],
    isFlavorText?: boolean,
    size?: {
        width: number,
        height: number,
    },
    onLineChange?: (lineCount: number) => void,
}
export const TextBox = ({
    name,
    value = '',
    zoom = 1,
    fontList = defaultFontList,
    isFlavorText = false,
    className = '',
    size = {
        width: 464.29,
        height: 103.35,
    },
    onLineChange = () => {},
}: TextBox) => {
    const {
        height,
        width,
    } = size;
    const [, setRefresh] = useState(0);
    const refresh = (message?: string | number) => {
        if (message !== undefined) console.log(message);
        setRefresh(cur => cur + 1);
    };
    const [loading, setLoadingState] = useState(false);
    const loadingRef = useRef(0);
    const setLoading = async (value: boolean) => {
        loadingRef.current += 1;
        const currentIteration = loadingRef.current;
        if (value === false) await (new Promise(resolve => setTimeout(resolve, 500)));
        if (currentIteration === loadingRef.current) setLoadingState(value);
    };
    const [font, setFont] = useState(0);
    const boxRef = useRef({
        content: '',
        title: '',
        footer: '',
        prevValue: '',
        lowerRatio: 0,
        upperRatio: 1000,
        medianRatio: 1000,
        lastEffetiveRatio: 1000,
        iterationCount: 30,
    });
    const contentScaleRef = useRef({
        scaleRatio: 1,
        translatePercent: '0%',
    });
    const containerRef = useRef<HTMLDivElement>(null);
    const measurerRef = useRef<HTMLDivElement>(null);

    const calculateMaxLine = () => {
        const parentRef = containerRef?.current?.parentElement;
        if (parentRef) {
            // Container size is subjected to canvas zoom
            const { height: parentHeight } = parentRef.getBoundingClientRect();
            const maxTextLine = Math.round(px2pt(parentHeight) / (lineHeight * zoom));

            return maxTextLine;
        }
        return 1;
    };
    const calculateMaxContentLength = () => {
        if (containerRef.current) {
            // Container size is subjected to canvas zoom
            const { width: containerWidth } = containerRef.current.getBoundingClientRect();
            const maxTextLine = calculateMaxLine();
            const maxTextLength = maxTextLine * containerWidth;

            return maxTextLength;
        }
        return 1;
    };
    const calculateContentLength = () => {
        if (measurerRef.current && containerRef.current) {
            // Font size and line height are subjected to canvas zoom
            const { lineHeight } = fontList[font] ?? fontList[0];
            const {
                height: containerHeight,
                width: containerWidth,
                left: containerLeft,
            } = containerRef.current.getBoundingClientRect();
            const { left: measurerLeft } = measurerRef.current.getBoundingClientRect();
            const lastLineLength = measurerLeft - containerLeft;
            const totalLine = Math.round(px2pt(containerHeight) / (lineHeight * zoom));
            const textLength = (totalLine - 1) * containerWidth + lastLineLength;

            return textLength;
        }
        return 1;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const currentBoxRef = boxRef.current;
        const prevValue = currentBoxRef.prevValue;
        const materialsRegex = /^(\[([^\]]*)\][^\S\r\n]*)?(\n?[\w\W]*)$/gm;
        const flavorConditionRegex = /\n(\([\w\W]*\))\s*$/gm;
        if (prevValue !== value) {
            boxRef.current = {
                ...boxRef.current,
                upperRatio: 1000,
                lowerRatio: 0,
                prevValue: value,
                iterationCount: 30,
            };
            const materialExec = materialsRegex.exec(value);
            const material = materialExec?.[2] ?? '';
            const cardEffect = (materialExec?.[3] ?? '');
            const flavorConditionExec = flavorConditionRegex.exec(cardEffect);

            try {
                if (flavorConditionExec !== null) {
                    const flavorCondition = flavorConditionExec[1];
                    const effectWithoutCondition = cardEffect.replace(flavorCondition, '\n');

                    if (effectWithoutCondition.trim().length !== 0) {
                        boxRef.current = {
                            ...boxRef.current,
                            title: material,
                            content: effectWithoutCondition,
                            footer: flavorCondition,
                        };
                    } else throw new Error('NO FLAVOR CONDITION');
                } else throw new Error('NO FLAVOR CONDITION');
            } catch (e) {
                boxRef.current = {
                    ...boxRef.current,
                    title: material,
                    content: cardEffect,
                    footer: '',
                };
            }

            setFont(0);
            setLoading(true);
            refresh();
        } else {
            if (currentBoxRef.iterationCount === 0) {
                currentBoxRef.iterationCount -= 1;
                currentBoxRef.medianRatio = currentBoxRef.lastEffetiveRatio;
                refresh();
            } else if (currentBoxRef.iterationCount > 0) {
                currentBoxRef.iterationCount -= 1;
                const lengthDiff = calculateContentLength() - calculateMaxContentLength();
                if (lengthDiff > 0) {
                    const newMedian = (currentBoxRef.medianRatio + currentBoxRef.lowerRatio) / 2;

                    currentBoxRef.upperRatio = currentBoxRef.medianRatio;
                    currentBoxRef.medianRatio = newMedian;
                    contentScaleRef.current = scaleCalc(newMedian, 1000);
                    refresh();
                } else if (lengthDiff < 0) {
                    const newMedian = (currentBoxRef.medianRatio + currentBoxRef.upperRatio) / 2;

                    currentBoxRef.lastEffetiveRatio = currentBoxRef.medianRatio;
                    currentBoxRef.lowerRatio = currentBoxRef.medianRatio;
                    if (Math.abs(currentBoxRef.medianRatio - newMedian) > 1) {
                        currentBoxRef.medianRatio = newMedian;
                        contentScaleRef.current = scaleCalc(newMedian, 1000);
                        refresh();
                    } else {
                        if (currentBoxRef.medianRatio < 680 && fontList[font + 1] !== undefined) {
                            currentBoxRef.upperRatio = 1000;
                            currentBoxRef.lowerRatio = 0;
                            currentBoxRef.iterationCount = 30;
                            setFont(cur => cur + 1);
                        } else {
                            // console.log(`${name} FINISHED RESIZE AS`, currentBoxRef.medianRatio);
                            currentBoxRef.medianRatio = currentBoxRef.lastEffetiveRatio;
                            onLineChange(calculateMaxLine());
                            setLoading(false);
                        }
                    }
                } else setLoading(false);
            }
        }
    });

    const {
        fontSize,
        lineHeight
    } = fontList[font] ?? fontList[0];
    const {
        scaleRatio: contentScaleRatio,
        translatePercent: contentTranslatePercent,
    } = contentScaleRef.current;
    const {
        title,
        content,
        footer,
    } = boxRef.current;
    return <div className={`preview preview-${name} ${className ?? ''}`} style={{
        width: `${width}pt`,
        height: `${height}pt`,
    }}>
        {loading && <Loading.FullView />}
        <TextBoxTitle key="title"
            name={name}
            zoom={zoom}
            font={{
                fontSize,
                lineHeight
            }}
            value={title}
        />
        <div ref={containerRef}
            className={`textbox textbox-${name} ${isFlavorText ? 'vanilla' : ''}`}
            style={{
                transform: `scaleX(${contentScaleRatio}) translateX(${contentTranslatePercent})`,
                width: `${100 / contentScaleRatio}%`,
                fontSize: `${fontSize}pt`,
                lineHeight: `${lineHeight}pt`,
            }}
        >
            {content}<div ref={measurerRef} className="measurer" />
        </div>
        <TextBoxTitle key="footer"
            atFoot
            name={name}
            zoom={zoom}
            font={{
                fontSize,
                lineHeight
            }}
            value={footer}
        />
    </div>;
};
TextBox.Title = TextBoxTitle;