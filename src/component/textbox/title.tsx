import { useEffect, useRef, useState } from 'react';
import { px2pt, scaleCalc } from '../../util';
import { TextBoxSize } from '../../model';
import './textbox.scss';

const defaultSize: TextBoxSize = { fontSize: 16.41, lineHeight: 16.73 };
export type TextBoxTitle = {
	value?: string,
    name?: string,
    zoom?: number,
    size?: TextBoxSize,
    atFoot?: boolean,
    hiddenPad?: {
        char: string,
        length: number,
    }
}
export const TextBoxTitle = ({
    name,
    value = '',
    zoom = 1,
    size = defaultSize,
    atFoot = false,
    hiddenPad,
}: TextBoxTitle) => {
    const [, setRefresh] = useState(0);
    const refresh = (message?: string | number) => {
        if (message !== undefined) console.log(message);
        setRefresh(cur => cur + 1);
    };
    const boxRef = useRef({
        content: '',
        prevValue: '',
        lowerRatio: 0,
        upperRatio: 1000,
        medianRatio: 1000,
        lastEffetiveRatio: 1000,
        iterationCount: 20,
        test: 0,
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
        if (containerRef.current) return containerRef.current.getBoundingClientRect().width;
        return 1;
    };
    const calculateContentLength = () => {
        if (measurerRef.current && containerRef.current) {
            // Font size and line height are subjected to canvas zoom
            const { left: containerLeft } = containerRef.current.getBoundingClientRect();
            const { left: measurerLeft } = measurerRef.current.getBoundingClientRect();
            const lastLineLength = measurerLeft - containerLeft;
            const textLength = lastLineLength;

            return textLength;
        }
        return 1;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const currentBoxRef = boxRef.current;
        const prevValue = currentBoxRef.prevValue;
        if (prevValue !== value) {
            boxRef.current = {
                ...boxRef.current,
                upperRatio: 1000,
                lowerRatio: 0,
                prevValue: value,
                content: value,
                iterationCount: 20,
            };

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
                    // console.log(`${name} FINISHED RESIZE AS`, currentBoxRef.medianRatio);
                        currentBoxRef.medianRatio = currentBoxRef.lastEffetiveRatio;
                        // currentBoxRef.test = calculateMaxContentLength() - calculateContentLength();

                    }
                }
            }
        }
    });

    const {
        fontSize,
        lineHeight
    } = size;
    const {
        scaleRatio,
        translatePercent,
    } = contentScaleRef.current;
    const { content, test } = boxRef.current;
    const {
        char = '0',
        length: padThreshold = 0,
    } = hiddenPad ?? {};
    const padLength = Math.max(0, padThreshold - content.length);
    const line = calculateMaxLine();
    return <div ref={containerRef}
        className={`textbox-title textbox-title-${name} ${atFoot ? 'textbox-footer' : ''}`}
        style={{
            transform: `scaleX(${scaleRatio}) translateX(${translatePercent})`,
            width: `${100 / scaleRatio}%`,
            fontSize: `${fontSize}pt`,
            lineHeight: `${lineHeight}pt`,
            // left: `${test}px`,
            ...(atFoot ? {
                height: `${lineHeight}pt`,
                top: `calc(${(line - 1)} * ${lineHeight}pt)`
            } : {}),
        }}
    >
        <span className="hidden-pad">{padLength > 0 ? ''.padStart(padLength, char) : ''}</span>
        {content}
        <div ref={measurerRef} className="lastline-measure" />
    </div>;
};