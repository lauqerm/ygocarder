import { Checkbox, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useLanguage } from 'src/service';
import styled from 'styled-components';
import { mergeClass } from 'src/util';

const StyledLinkMarkChooser = styled.div`
    --link-arrow-size: 20px;
    font-weight: 500;
    color: var(--color-vendor);
    text-shadow: var(--ts);
    padding: var(--spacing-sm);
    background-color: var(--main-level-4);
    box-shadow: var(--bs-block);
    border-radius: var(--br-lg);
    .title {
        line-height: 0;
        margin-bottom: var(--spacing-sm);
    }
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: 90px;
        height: 90px;
        column-gap: 0;
        row-gap: 0;
        background-color: var(--main-level-1);
        box-shadow: 0 0 2px 1px #141414 inset;
        border-radius: var(--br-lg);
        margin: auto;
        .link-marker-icon {
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: var(--spacing) var(--spacing-xs);
            border-width: 0 var(--spacing) var(--spacing) var(--spacing);
            border-color: transparent transparent #484848 transparent;
        }
        .link-marker-button.marker-checked .link-marker-icon {
            border-color: transparent transparent var(--sub-active) transparent;
        }
    }
    .link-marker-reset {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .link-marker-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        .anticon {
            font-size: var(--link-arrow-size);
        }
    }
    .marker-checked {
        color: var(--sub-active);
    }
    &.chooser-disabled {
        .container {
            background-color: var(--main-level-4);
            box-shadow: 0 0 0 1px var(--sub-level-4) inset;
        }
    }
    &.chooser-active {
        .link-marker-reset,
        .link-marker-button {
            cursor: pointer;
            border-radius: var(--br-lg);
            &:hover {
                background-color: var(--sub-level-1);
            }
        }
    }
`;

export type LinkMarkChooser = {
    active: boolean,
    defaultValue?: string[],
    onChange?: (value: string[]) => void,
    onStatusChange: (status: boolean) => void,
};
export const LinkMarkChooser = ({
    active,
    defaultValue = [],
    onChange = () => {},
    onStatusChange,
}: LinkMarkChooser) => {
    const [choosenArrow, setChoosenArrow] = useState(defaultValue);
    const rotateMap = [-45, 0, 45, -90, 0, 90, -135, 180, 135];
    const language = useLanguage();

    const literalChoosenArrow = JSON.stringify(choosenArrow);
    useEffect(() => {
        onChange(choosenArrow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [literalChoosenArrow]);

    return <StyledLinkMarkChooser className={mergeClass('link-marker-chooser', active ? 'chooser-active' : 'chooser-disabled')}>
        <div className="title">
            <Checkbox
                checked={active}
                onChange={e => onStatusChange(e.target.checked)}
            >{language['link-picker.label']}</Checkbox>
        </div>
        <div className="container">
            {[...Array(9)].map((_, index) => {
                const normalizedIndex = `${index + 1}`;

                if (normalizedIndex === '5') return <Tooltip
                    key="5"
                    overlay={active ? language['link-picker.reset.tooltip'] : null}
                >
                    <div className="link-marker-reset" onClick={() => {
                        if (active) setChoosenArrow([]);
                    }}>
                        <CloseCircleOutlined />
                    </div>
                </Tooltip>;

                return <div key={normalizedIndex}
                    className={`link-marker-button marker-${index + 1} ${choosenArrow.includes(normalizedIndex) ? 'marker-checked' : ''}`}
                    onClick={() => {
                        if (active) setChoosenArrow(cur => {
                            let newMap = [...cur];

                            if (newMap.includes(normalizedIndex)) newMap = newMap.filter(entry => entry !== normalizedIndex);
                            else newMap.push(normalizedIndex);

                            return newMap;
                        });
                    }}
                >
                    <div
                        className={`link-marker-icon link-marker-icon-${index + 1}`}
                        style={{ transform: `rotate(${rotateMap[index]}deg) translateY(-1px)` }}
                    />
                </div>;
            })}
        </div>
    </StyledLinkMarkChooser>;
};