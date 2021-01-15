import React from 'react';
import { TextBox } from '../textbox';
import './type-ability.scss';

const { Title } = TextBox;

const TypeAbilitySpace = ({ type }: { type?: string }) => <span className={`type-ability-space ${type}-space`}> </span>;
const TypeAbilitySlash = ({ type }: { type?: string }) => <span className={`type-ability-slash ${type}-slash`}>/</span>;
const TypeAbilityBracket = ({
    type,
    children,
}: { type?: string, children: React.ReactNode }) => <span className={`type-ability-bracket ${type}-bracket`}>{children}</span>;

export type TypeAbilityLine = {
	scaleRatio: number,
	size: 'normal' | 'small',
	typeAbility: string[],
}
export const TypeAbilityLine = ({
    scaleRatio,
    size = 'normal',
    typeAbility = [],
}: TypeAbilityLine) => {
    return <Title name="type-ability" zoom={scaleRatio} value={`[ ${typeAbility.join(' / ')} ]`}
        defaultMaxScaleRatio={1.075}
        font={size === 'normal'
            ? {
                fontSize: 17.72,
                lineHeight: 17.72 * 1.2,
            }: {
                fontSize: 16.41,
                lineHeight: 16.41 * 1.2,
            }}
    >
        <TypeAbilityBracket type={size}>[</TypeAbilityBracket>
        <TypeAbilitySpace type="small" />
        {typeAbility
            .reduce<string[]>((acc, cur) => {
                if (acc.length === 0) acc.push(cur);
                else {
                    acc.push('/');
                    acc.push(cur);
                }
                return acc;
            }, [])
            .map(entry => {
                if (entry === '/') return <React.Fragment key={`${entry}slash`}>
                    <TypeAbilitySpace type={size} />
                    <TypeAbilitySlash type={size} />
                    <TypeAbilitySpace type={size} />
                </React.Fragment>;
                const firstChar = entry[0];
                const restChars = entry.slice(1);

                return <span key={entry}>
                    <span key={'first'} style={{
                        fontSize: size === 'normal' ? '21pt' : '19.69pt',
                    }}>
                        {firstChar}
                    </span>
                    <span key={'second'} style={{
                        textTransform: 'uppercase',
                    }}>{restChars}</span>
                </span>;
            })}
        <TypeAbilitySpace type="small" />
        <TypeAbilityBracket type={size}>]</TypeAbilityBracket>
    </Title>;
};