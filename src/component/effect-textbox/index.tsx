import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { compareFloat, px2pt, scaleCalc } from '../../util';
import { TextBoxSizeList } from '../../model';
import './effect-textbox.scss';

const defaultSizeList: TextBoxSizeList[] = [
    { fontSize: 16.41, lineHeight: 16.73 },
    { fontSize: 13.88, lineHeight: 14.52 },
    { fontSize: 16.41, lineHeight: 16.73 },
    { fontSize: 16.41, lineHeight: 16.73 },
    { fontSize: 16.41, lineHeight: 16.73 },
];
export type EffectTextBox = {
	value?: string,
    name?: string,
    zoom?: number,
    sizeList?: TextBoxSizeList[],
}
export const EffectTextBox = ({
    name,
    value = '',
    zoom = 1,
    sizeList = defaultSizeList,
}: EffectTextBox) => {
    const [, setRefresh] = useState(0);
    const refresh = (message?: string | number) => {
        if (message !== undefined) console.log(message);
        setRefresh(cur => cur + 1);
    };
    const [size, setSize] = useState(0);
    const boxRef = useRef({
        prevValue: '',
        lowerRatio: 0,
        upperRatio: 1000,
        medianRatio: 1000,
        lastEffetiveRatio: 1000,
    });
    const scaleRef = useRef({
        scaleRatio: 1,
        translatePercent: '0%',
    });
    const containerRef = useRef<HTMLDivElement>(null);
    const measurerRef = useRef<HTMLDivElement>(null);

    const calculateMaxLength = () => {
        const parentRef = containerRef?.current?.parentElement;
        if (measurerRef.current && containerRef.current && parentRef) {
            // Container size is subjected to canvas zoom
            const {
                width: containerWidth,
            } = containerRef.current.getBoundingClientRect();
            const {
                height: parentHeight,
            } = parentRef.getBoundingClientRect();
            const maxTextLine = Math.round(px2pt(parentHeight) / (lineHeight * zoom));
            const maxTextLength = maxTextLine * containerWidth;
            return maxTextLength;
        }
        return 0;
    };
    const calculateTextLength = () => {
        if (measurerRef.current && containerRef.current) {
            // Font size and line height are subjected to canvas zoom
            const {
                lineHeight
            } = sizeList[size] ?? sizeList[0];
            const {
                height: containerHeight,
                width: containerWidth,
                left: containerLeft,
            } = containerRef.current.getBoundingClientRect();
            const {
                left: measurerLeft,
            } = measurerRef.current.getBoundingClientRect();

            const lastLineLength = measurerLeft - containerLeft;
            const totalLine = Math.round(px2pt(containerHeight) / (lineHeight * zoom));
            const textLength = (totalLine - 1) * containerWidth + lastLineLength;
            return textLength;
        }
        return 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const currentBoxRef = boxRef.current;
        if (currentBoxRef.prevValue !== value) {
            currentBoxRef.upperRatio = 1000;
            currentBoxRef.lowerRatio = 0;
            currentBoxRef.prevValue = value;
            refresh();
        } else {
            const lengthDiff = calculateTextLength() - calculateMaxLength();
            if (lengthDiff > 0) {
                const newMedian = (currentBoxRef.medianRatio + currentBoxRef.lowerRatio) / 2;

                currentBoxRef.upperRatio = currentBoxRef.medianRatio;
                currentBoxRef.medianRatio = newMedian;
                scaleRef.current = scaleCalc(newMedian, 1000);
                refresh();
            } else if (lengthDiff < 0) {
                const newMedian = (currentBoxRef.medianRatio + currentBoxRef.upperRatio) / 2;

                currentBoxRef.lastEffetiveRatio = currentBoxRef.medianRatio;
                currentBoxRef.lowerRatio = currentBoxRef.medianRatio;
                if (Math.abs(currentBoxRef.medianRatio - newMedian) > 1) {
                    currentBoxRef.medianRatio = newMedian;
                    scaleRef.current = scaleCalc(newMedian, 1000);
                    refresh();
                } else {
                    if (currentBoxRef.medianRatio < 650) {
                        currentBoxRef.upperRatio = 1000;
                        currentBoxRef.lowerRatio = 0;
                        setSize(cur => cur + 1);
                    } else {
                        console.log(`${name} FINISHED RESIZE AS`, currentBoxRef.medianRatio);
                        currentBoxRef.medianRatio = currentBoxRef.lastEffetiveRatio;
                    }
                }
            }
        }
    });

    const {
        fontSize,
        lineHeight
    } = sizeList[size] ?? sizeList[0];
    const {
        scaleRatio,
        translatePercent,
    } = scaleRef.current;
    return <>
        <button onClick={() => {
            console.log(scaleRef.current);
            refresh();
        }}>Ref</button>
        <div className={`preview preview-${name}`}>
            <div ref={containerRef}
                className={`effect-textbox effect-textbox-${name}`}
                style={{
                    transform: `scaleX(${scaleRatio}) translateX(${translatePercent})`,
                    width: `${100 / scaleRatio}%`,
                    fontSize: `${fontSize}pt`,
                    lineHeight: `${lineHeight}pt`,
                }}
            >
                {value}<div ref={measurerRef} className="lastline-measure" />
            </div>
        </div>
    </>;
};