import { Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import './link-marker.scss';

export type LinkMarkChooser = {
    defaultValue?: string[],
    onChange?: (value: string[]) => void,
};
export const LinkMarkChooser = ({
    defaultValue = [],
    onChange = () => {},
}: LinkMarkChooser) => {
    const [choosenArrow, setChoosenArrow] = useState(defaultValue);
    const rotateMap = [-45, 0, 45, -90, 0, 90, -135, 180, 135];

    const literalChoosenArrow = JSON.stringify(choosenArrow);
    useEffect(() => {
        onChange(choosenArrow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [literalChoosenArrow]);

    return <div className="link-marker-chooser">
        <div className="title">
            Link Arrows
        </div>
        <div className="container">
            {[...Array(9)].map((entry, index) => {
                const normalizedIndex = `${index + 1}`;

                if (normalizedIndex === '5') return <Tooltip key="5" overlay="Reset">
                    <div className="link-marker-reset" onClick={() => {
                        setChoosenArrow([]);
                    }}>R</div>
                </Tooltip>;

                return <div key={normalizedIndex}
                    className={`link-marker-button marker-${index + 1} ${choosenArrow.includes(normalizedIndex) ? 'marker-checked' : ''}`}
                    onClick={() => {
                        setChoosenArrow(cur => {
                            let newMap = [...cur];

                            if (newMap.includes(normalizedIndex)) newMap = newMap.filter(entry => entry !== normalizedIndex);
                            else newMap.push(normalizedIndex);

                            return newMap;
                        });
                    }}
                >
                    <div className={`link-marker-icon link-marker-icon-${index + 1}`} style={{ transform: `rotate(${rotateMap[index]}deg)` }} />
                </div>;
            })}
        </div>
    </div>;
};