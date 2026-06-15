import { Card, getDefaultMseCard, MseCard } from 'src/model';
import { checkMonster } from './categorize';
import { normalizeCardName } from './normalize';

// const parseMse = <Result extends Record<string, unknown> = MseFile>(text: string): Result => {
//     const lines = text.split(/\r?\n/);

//     const root = {};
//     const stack = [{ indent: -1, obj: root }];

//     function parseValue(value) {
//         value = value.trim();

//         // Empty value
//         if (value === '') return null;

//         // Quoted string
//         if (/^".*"$/.test(value)) {
//             return value.slice(1, -1);
//         }

//         // Boolean
//         if (value === 'true') return true;
//         if (value === 'false') return false;

//         // Number
//         if (!isNaN(value) && value !== '') {
//             return Number(value);
//         }

//         // Preserve special expressions like local_image_file(...)
//         return value;
//     }

//     for (const rawLine of lines) {
//         if (!rawLine.trim()) continue;

//         // Count indentation (tabs OR 4 spaces)
//         const indent = rawLine.match(/^\s*/)?.[0].length ?? 0;
//         const line = rawLine.trim();

//         const colonIndex = line.indexOf(':');
//         if (colonIndex === -1) continue;

//         const key = line.slice(0, colonIndex).trim();
//         const valuePart = line.slice(colonIndex + 1);

//         // Move up stack when indentation decreases
//         while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
//             stack.pop();
//         }

//         const parent = stack[stack.length - 1].obj;

//         // If no value → nested object
//         if (valuePart.trim() === '') {
//             const newObj = {};

//             // Handle repeated keys as arrays
//             if (parent[key] !== undefined) {
//                 if (!Array.isArray(parent[key])) {
//                     parent[key] = [parent[key]];
//                 }
//                 parent[key].push(newObj);
//             } else {
//                 parent[key] = newObj;
//             }

//             // If array, descend into latest item
//             const target = Array.isArray(parent[key])
//                 ? parent[key][parent[key].length - 1]
//                 : parent[key];

//             stack.push({
//                 indent,
//                 obj: target
//             });

//         } else {
//             const value = parseValue(valuePart);

//             // Repeated scalar keys → array
//             if (parent[key] !== undefined) {
//                 if (!Array.isArray(parent[key])) {
//                     parent[key] = [parent[key]];
//                 }
//                 parent[key].push(value);
//             } else {
//                 parent[key] = value;
//             }
//         }
//     }

//     return root as Result;
// };

const frameMap: Record<string, string> = {
    normal: 'normal',
    effect: 'effect',
    ritual: 'ritual',
    fusion: 'fusion',
    synchro: 'synchro',
    xyz: 'xyz',
    link: 'link',
    token: 'token',
    'dark-synchro': 'dark synchro',
    zarc: 'unity',
    'speed-skill': 'skill',
};
export const ygoCarderToMseData = (
    card: Card,
    _artRef?: HTMLCanvasElement | null,
    option?: {
        imageName: string,
        gamecode: string,
    },
): {
    result: MseCard,
    isPartial: boolean,
} => {
    const {
        gamecode,
        imageName,
    } = option ?? {};
    const {
        atk,
        attribute,
        def,
        effect,
        frame,
        isPendulum,
        name,
        pendulumEffect,
        pendulumScaleBlue,
        pendulumScaleRed,
        star,
        typeAbility,
    } = card;
    const defaultMseCard = getDefaultMseCard();
    const cardType = [
        isPendulum ? 'pendulum' : '',
        frameMap[frame] ?? '',
        checkMonster(card) ? 'monster' : frame,
    ].filter(entry => entry !== '').join(' ');
    const date = new Date();
    const pad = (num: number) => String(num).padStart(2, '0');
    const time = `${date.getFullYear()
        }-${pad(date.getMonth() + 1)
        }-${pad(date.getDate())
        } ${pad(date.getHours())
        }:${pad(date.getMinutes())
        }:${pad(date.getSeconds())
        }`;
    return {
        result: {
            attack: atk,
            attribute: attribute.toLowerCase(),
            blue_scale: pendulumScaleBlue,
            card_type: cardType,
            defense: def,
            extra_data: defaultMseCard.extra_data,
            gamecode: gamecode ?? '',
            has_styling: defaultMseCard.has_styling,
            image: `local_image_file("${imageName ?? ''}")`,
            level: (typeof star === 'number' ? new Array(star).fill(0) : []).map(() => '<sym-auto>*</sym-auto>').join(''),
            monster_type: '<prefix>[</prefix>' + typeAbility.map((entry, index) => {
                return index === 0
                    ? `<word-list-monster>${entry}</word-list-monster>`
                    : `<word-list-card>${entry}</word-list-card>`;
            }).join('') + '<sep>]<soft></soft></sep>',
            name: normalizeCardName(name),
            notes: '',
            pendulum_text: pendulumEffect,
            rarity: 'common',
            red_scale: pendulumScaleRed,
            rule_text: effect,
            time_created: time,
            time_modified: time,
            type_1: `<word-list-monster>${typeAbility[0] ?? ''}</word-list-monster>`,
            type_2: `<word-list-card>${typeAbility[1] ?? ''}</word-list-card>`,
            type_3: `<word-list-card>${typeAbility[2] ?? ''}</word-list-card>`,
            type_4: `<word-list-card>${typeAbility[3] ?? ''}</word-list-card>`,
            type_5: `<word-list-card>${typeAbility[4] ?? ''}</word-list-card>`,
        },
        isPartial: false,
    };
};
export const stringifyMseData = (mseCard: MseCard) => {
    const stringify = (target: object, indent = '	'): string[] => {
        const resultLineList: string[] = [];

        if (target != null) {
            for (const field in target) {
                const value = target[field];
                if ([
                    'image',
                    'mse_version',
                    'time_created',
                    'time_modified',
                ].includes(field) && typeof value === 'string') resultLineList.push(`${indent}${field}: ${value}`);
                else if (typeof value === 'boolean') resultLineList.push(`${indent}${field}: ${value === true ? 'true' : 'false'}`);
                else if (typeof value === 'string') resultLineList.push(`${indent}${field}: "${value}"`);
                else if (value && typeof value === 'object') {
                    resultLineList.push(`${indent}${field}:`);
                    resultLineList.push(...stringify(value, indent + '	'));
                }
            }
            return resultLineList;
        }
        return [];
    };
    return stringify(mseCard).join('\n');
};

// export const mseToYgoCarderData = (card: MseCard | string): { result: Card, isPartial: boolean } => {
//     const normalizedCard = typeof card === 'string' ? parseMse(card).card[0] : card;
// };