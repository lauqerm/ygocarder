import { Card, getEmptyCard } from 'src/model';

const headerList = [
    'name',
    'atk',
];
const normalizeCsvData = (data: any) => {
    if (data == null) return '';
    if (data === '') return '';
    return `"${data.replace(/"/g, '""')}"`;
};
export const cardListToCsv = (cardList: Card[]) => {
    const valueList: string[] = [];

    for (let cnt = 0; cnt < cardList.length; cnt++) {
        /** Again, we do not support export offline art or background here unless absolutely need to. With the current scope of about hundred of cards, the exported csv may become hundred MB in size, which is not scalable at all. */
        const {
            name,
            atk,
        } = cardList[cnt];
        valueList.push([
            name,
            atk,
        ].map(normalizeCsvData).join(','));
    }

    return [headerList.join(','), valueList.join('\n')].join('\n');
};
export type CardCsv = [
    name: string,
    atk: string,
];
export const csvToCardList = (csv: Papa.ParseResult<CardCsv>): Card[] => {
    try {
        const data = csv.data;

        return data
            .map((value, index) => {
                /** Ignore header */
                if (index === 0) return null;
                /** Ignore empty row */
                if (value.join('') === '') return null;

                const [
                    name,
                    atk,
                ] = value;

                return {
                    ...getEmptyCard(),
                    name,
                    atk,
                };
            })
            .filter(entry => entry != null);
    } catch (e) {
        console.error('csvToCardList', e);
        return [];
    }
};