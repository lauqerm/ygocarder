import { useEffect, useRef, useState } from 'react';
import { scaleCalc } from '../../util';
import { TextBoxFontSize } from '../../model';
import './textbox.scss';

const defaultSize: TextBoxFontSize = { fontSize: 16.41, lineHeight: 16.73 };
export type TextBoxTitle = {
	value?: string,
    name?: string,
    className?: string,
    zoom?: number,
    defaultMaxScaleRatio?: number,
    font?: TextBoxFontSize,
    atFoot?: boolean,
    alignment?: 'left' | 'right',
    children?: React.ReactNode,
}
export const TextBoxTitle = ({
    name,
    value = '',
    className = '',
    zoom = 1,
    defaultMaxScaleRatio = 1,
    font = defaultSize,
    atFoot = false,
    alignment = 'left',
    children,
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
        upperRatio: -1,
        medianRatio: -1,
        lastEffetiveRatio: -1,
        iterationCount: 20,
    });
    const contentScaleRef = useRef({
        scaleRatio: -1,
        translatePercent: '0%',
    });
    const containerRef = useRef<HTMLDivElement>(null);
    const measureRightRef = useRef<HTMLDivElement>(null);
    const measureLeftRef = useRef<HTMLDivElement>(null);

    const calculateMaxLine = () => {
        const parentRef = containerRef?.current?.parentElement;
        if (parentRef) {
            // Container size is subjected to canvas zoom
            const { height: parentHeight } = parentRef.getBoundingClientRect();
            const maxTextLine = Math.round(parentHeight / (lineHeight * zoom));

            return maxTextLine;
        }
        return 1;
    };
    const calculateMaxContentLength = () => {
        if (containerRef.current) return containerRef.current.getBoundingClientRect().width;
        return 1;
    };
    const calculateContentLength = () => {
        if (measureLeftRef.current && measureRightRef.current && containerRef.current) {
            // Font size and line height are subjected to canvas zoom
            const { left: rightMeasurer } = measureRightRef.current.getBoundingClientRect();
            const { left: leftMeasurer } = measureLeftRef.current.getBoundingClientRect();
            const lastLineLength = rightMeasurer - leftMeasurer;
            const textLength = lastLineLength;

            return textLength;
        }
        return 1;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const currentBoxRef = boxRef.current;
        const prevValue = currentBoxRef.prevValue;
        if (contentScaleRef.current.scaleRatio < -1) return;
        if (prevValue !== value) {
            boxRef.current = {
                ...boxRef.current,
                upperRatio: defaultMaxScaleRatio * 1000,
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
                    }
                }
            }
        }
    });
    useEffect(() => {
        boxRef.current = {
            ...boxRef.current,
            medianRatio: defaultMaxScaleRatio * 1000,
            upperRatio: defaultMaxScaleRatio * 1000,
            lastEffetiveRatio: defaultMaxScaleRatio * 1000,
        };
        contentScaleRef.current = scaleCalc(defaultMaxScaleRatio);
        refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        fontSize,
        lineHeight
    } = font;
    const {
        scaleRatio,
        translatePercent,
    } = contentScaleRef.current;
    const { content } = boxRef.current;
    const line = calculateMaxLine();
    return <div ref={containerRef}
        className={`textbox-title textbox-title-${name} textbox-title-${alignment} ${atFoot ? 'textbox-footer' : ''} ${className ?? ''}`}
        style={{
            transform: `scaleX(${scaleRatio}) translateX(${translatePercent})`,
            width: `${100 / scaleRatio}%`,
            fontSize: `${fontSize}px`,
            lineHeight: `${lineHeight}px`,
            ...(atFoot ? {
                height: `${lineHeight}px`,
                top: `calc(${(line - 1)} * ${lineHeight}px)`
            } : {}),
        }}
    >
        <div ref={measureLeftRef} className="measurer" />
        {children !== undefined ? children : content}
        <div ref={measureRightRef} className="measurer" />
    </div>;
};