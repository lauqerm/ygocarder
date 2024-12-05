import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { StyledPredefinedContainer, StyledPredefinedOption } from './style-picker.styled';
import { NameStyle, PresetNameStyle, PresetNameStyleList } from 'src/model';
import { getNavigationProps, mergeClass } from 'src/util';
import { Tooltip } from 'antd';

export type PredefinedOptionGridRef = {
    focus: () => void,
};
export type PredefinedOptionGrid = {
    active: boolean,
    value: Partial<NameStyle>,
    onClick: (value: {
        key: PresetNameStyle,
        label: string,
        image: string,
        value: Partial<NameStyle>,
    }) => void,
    onCancel?: () => void,
};
export const PredefinedOptionGrid = forwardRef<PredefinedOptionGridRef, PredefinedOptionGrid>(({
    active,
    value,
    onClick,
    onCancel,
}, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [focus, setFocus] = useState(0);

    useImperativeHandle(ref, () => ({
        focus: () => containerRef.current?.focus(),
    }));

    return <StyledPredefinedContainer ref={containerRef}
        {...getNavigationProps({
            stopPropagation: true,
            optionLength: PresetNameStyleList.length,
            setFocus,
            onTrigger: () => {
                if (focus >= 0) onClick(PresetNameStyleList[focus]);
            },
            onCancel: () => {
                onCancel?.();
            }
        })}
    >
        {PresetNameStyleList.map((entry, index) => {
            const { key, image, label } = entry;

            return <StyledPredefinedOption key={key}
                className={mergeClass(
                    'preset-item',
                    value.preset === key && active ? 'menu-active' : '',
                    focus === index ? 'preset-item-focused' : '',
                )}
                onClick={e => {
                    e.stopPropagation();
                    onClick(entry);
                }}
            >
                {/** Tooltip currently is not really helpful, and gives poor UX */}
                <Tooltip title={label} placement="right">
                <img
                    className="preset-preview"
                    src={`${process.env.PUBLIC_URL}/${image}`}
                    alt={label}
                />
                </Tooltip>
            </StyledPredefinedOption>;
        })}
    </StyledPredefinedContainer>;
});