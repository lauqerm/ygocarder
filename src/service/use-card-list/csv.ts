import {
    Card,
    CardOpacity,
    Foil,
    FoilNameMap,
    getDefaultCardOpacity,
    getDefaultNameStyle,
    getEmptyCard,
    InternalCard,
    NameStyle,
    NameStyleType,
    NO_ATTRIBUTE,
    NO_ICON,
    PresetNameStyle,
} from 'src/model';
import { v4 as uuid } from 'uuid';

const CsvStandardFieldList = [
    'Format',
    'Frame',
    'Name',
    'Name Style Type',
    'Name Style - Font',
    'Name Style - Fill Style',
    'Name Style - Headtext Fill Style',
    'Name Style - Shadow Color',
    'Name Style - Shadow Offset Y',
    'Name Style - Shadow Offset X',
    'Name Style - Shadow Blur',
    'Name Style - Has Shadow',
    'Name Style - Line Color',
    'Name Style - Line Width',
    'Name Style - Line Offset Y',
    'Name Style - Line Offset X',
    'Name Style - Has Outline',
    'Name Style - Gradient Angle',
    'Name Style - Gradient Color',
    'Name Style - Has Gradient',
    'Name Style - Preset',
    'Name Style - Pattern',
    'ATK',
    'DEF',
    'Attribute',
    'Star',
    'Subfamily',
    'Card Icon',
    'Type Ability',
    'Effect',
    'Set Id',
    'Is First Edition',
    'Is Speed Card',
    'Is Limited Edition',
    'Is Duel Terminal Card',
    'Is Legacy Card',
    'Foil',
    'Art Finish',
    'Opacity - Body',
    'Opacity - Pendulum',
    'Opacity - Text',
    'Opacity - Name',
    'Opacity - Base Fill',
    'Opacity - Art Border',
    'Opacity - Name Border',
    'Opacity - Boundless',
] as const;
const CsvFieldList = [
    ...CsvStandardFieldList,
    /**
     * External fields that is not standard but we try to account for
     * https://docs.google.com/spreadsheets/d/1bZcKiMB3taPFXGKhLoyVa9885HxJ5RBF/edit?gid=448833078#gid=448833078
     * */
    'Level/Rank',
    'Star_Type',    // 1 = Treat star as number, 2 = Treat star as string
    'spell_type/trap_type',
    'Type_1',
    'Type_2',
    'Type_3',
    'Type_4',
    'Set_ID',
    // 'foil', // Unclear + Conflict
    'Borderless', // Unclear
    'Edition',
    'Rarity',
    'Background_Type',
    'Card_Background', // Unclear
    'Font_Style', // Unclear
    'Art_Finish',
    'Image_Frame_Type', // Unclear
] as const;
const normalizeFieldName = (field: string) => field.toLowerCase().replaceAll(' ', '').replaceAll('-', '');
const CsvFieldSet = new Set(CsvFieldList.map(normalizeFieldName));
type CsvField = typeof CsvFieldList[number];

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

    return [
        CsvFieldList.join(','),
        valueList.join('\n'),
    ].join('\n');
};

const analyzeHeader = (header: string[]) => {
    return header.reduce((acc, field, index) => {
        const normalizedColumnName = normalizeFieldName(field);
        if (CsvFieldSet.has(normalizedColumnName)) acc[normalizedColumnName as CsvField] = index;

        return acc;
    }, {} as Record<CsvField, number | undefined>);
};
const getCsvFieldReader = (row: string[], headerIndexMap: Record<CsvField, number | undefined>) => {
    return (field: CsvField) => {
        const columnIndex = headerIndexMap[field] ?? -1;
        const value = (row[columnIndex] ?? '').trim();

        return value === ''
            ? undefined
            : value;
    };
};
const getCsvMultipleFieldReader = (row: string[], headerIndexMap: Record<CsvField, number | undefined>) => {
    return <FieldList extends CsvField>(fieldList: FieldList[]) => {
        return fieldList.reduce((acc, field) => {
            const columnIndex = headerIndexMap[field] ?? -1;
            acc[field] = (row[columnIndex] ?? '').trim();
    
            return acc;
        }, {} as Record<FieldList, string>);
    };
};
const normalizeInt = (value: any, fallback: number) => {
    if (typeof value === 'number') return isFinite(value) ? value : fallback;
    if (typeof value === 'string') return isFinite(parseInt(value)) ? parseInt(value) : fallback;
    return fallback;
};
export const csvToCardList = (csv: Papa.ParseResult<string[]>): InternalCard[] => {
    try {
        const data = csv.data;
        const headerIndexMap = analyzeHeader(data[0]);

        return data
            .map((row, index) => {
                /** Ignore header */
                if (index === 0) return null;
                /** Ignore empty row */
                if (row.join('') === '') return null;
                const emptyCard = getEmptyCard();
                const reader = getCsvFieldReader(row, headerIndexMap);
                const multipleReader = getCsvMultipleFieldReader(row, headerIndexMap);

                const rawStar = reader('Star') ?? reader('Level/Rank') ?? '';
                const star = parseInt(rawStar) <= 13 && reader('Star_Type') !== '2'
                    ? parseInt(rawStar)
                    : rawStar;
                const rawFoil = (reader('Foil') ?? reader('Rarity') ?? 'normal').toLowerCase() as Foil;
                const foil = FoilNameMap[rawFoil] ? rawFoil : 'normal';

                const nameStyleType = (reader('Name Style Type') ?? 'auto').toLowerCase() as NameStyleType;
                const format = (reader('Format') ?? 'tcg').toLowerCase();
                const attribute = (reader('Attribute') ?? NO_ATTRIBUTE).toUpperCase();
                const cardIcon = (reader('Card Icon') ?? 'auto');
                const subFamily = (reader('Subfamily') ?? reader('spell_type/trap_type') ?? NO_ICON).toUpperCase();
                const setId = reader('Set Id') ?? reader('Set_ID') ?? '';
                const frame = (reader('Frame') ?? reader('Background_Type') ?? 'effect').toLowerCase();
                const artFinish = (reader('Art Finish') ?? `type${reader('Art_Finish')}`);

                const isFirstEdition = reader('Is First Edition') === 'true'
                    || reader('Edition')?.toLowerCase() === '1st edition';
                const isDuelTerminalCard = reader('Is Duel Terminal Card') === 'true'
                    || reader('Edition')?.toLowerCase() === 'duel terminal';
                const isLimitedEdition = reader('Is Limited Edition') === 'true'
                    || reader('Edition')?.toLowerCase() === 'limited edition';
                const isSpeedCard = reader('Is Speed Card') === 'true'
                    || reader('Edition')?.toLowerCase() === 'speed duel';
                const isLegacyCard = reader('Is Legacy Card') === 'true';

                const rawTypeAbility = reader('Type Ability');
                const typeAbility = rawTypeAbility
                    ? rawTypeAbility.split('/')
                    : [reader('Type_1'), reader('Type_2'), reader('Type_3'), reader('Type_4')]
                        .filter<string>(entry => typeof entry === 'string')
                        .filter(entry => entry !== '');

                const emptyOpacity = getDefaultCardOpacity();
                const opacity: CardOpacity = {
                    artBorder: `${reader('Opacity - Art Border') ?? emptyOpacity.artBorder}` === 'true',
                    baseFill: reader('Opacity - Base Fill') ?? emptyOpacity.baseFill,
                    body: normalizeInt(reader('Opacity - Body'), emptyOpacity.body),
                    boundless: `${reader('Opacity - Boundless') ?? emptyOpacity.boundless}` === 'true',
                    name: normalizeInt(reader('Opacity - Name'), emptyOpacity.name),
                    nameBorder: `${reader('Opacity - Name Border') ?? emptyOpacity.nameBorder}` === 'true',
                    pendulum: normalizeInt(reader('Opacity - Pendulum'), emptyOpacity.pendulum),
                    text: normalizeInt(reader('Opacity - Text'), emptyOpacity.text),
                };

                const emptyNameStyle = getDefaultNameStyle();
                const nameStyle: NameStyle = {
                    fillStyle: reader('Name Style - Fill Style') ?? emptyNameStyle.fillStyle,
                    font: reader('Name Style - Font') ?? emptyNameStyle.font,
                    gradientAngle: normalizeInt(reader('Name Style - Gradient Angle'), emptyNameStyle.gradientAngle),
                    gradientColor: reader('Name Style - Gradient Color') ?? emptyNameStyle.gradientColor,
                    hasGradient: `${reader('Name Style - Has Gradient') ?? emptyNameStyle.hasGradient}` === 'true',
                    hasOutline: `${reader('Name Style - Has Outline') ?? emptyNameStyle.hasOutline}` === 'true',
                    hasShadow: `${reader('Name Style - Has Shadow') ?? emptyNameStyle.hasShadow}` === 'true',
                    headTextFillStyle: reader('Name Style - Headtext Fill Style') ?? emptyNameStyle.headTextFillStyle,
                    lineColor: reader('Name Style - Line Color') ?? emptyNameStyle.lineColor,
                    lineOffsetX: normalizeInt(reader('Name Style - Line Offset X'), emptyNameStyle.lineOffsetX),
                    lineOffsetY: normalizeInt(reader('Name Style - Line Offset Y'), emptyNameStyle.lineOffsetY),
                    lineWidth: normalizeInt(reader('Name Style - Line Width'), emptyNameStyle.lineWidth),
                    pattern: reader('Name Style - Pattern') ?? emptyNameStyle.pattern,
                    preset: (reader('Name Style - Preset') ?? emptyNameStyle.preset) as PresetNameStyle,
                    shadowBlur: normalizeInt(reader('Name Style - Shadow Blur'), emptyNameStyle.shadowBlur),
                    shadowColor: reader('Name Style - Shadow Color') ?? emptyNameStyle.shadowColor,
                    shadowOffsetX: normalizeInt(reader('Name Style - Shadow Offset X'), emptyNameStyle.shadowOffsetX),
                    shadowOffsetY: normalizeInt(reader('Name Style - Shadow Offset Y'), emptyNameStyle.shadowOffsetY),
                };

                return {
                    id: uuid(),
                    ...emptyCard,
                    ...multipleReader(['Name', 'ATK', 'DEF', 'Effect']),
                    artFinish,
                    attribute,
                    cardIcon,
                    foil,
                    format,
                    frame,
                    isDuelTerminalCard,
                    isFirstEdition,
                    isLegacyCard,
                    isLimitedEdition,
                    isSpeedCard,
                    nameStyle,
                    nameStyleType,
                    opacity,
                    setId,
                    star,
                    subFamily,
                    typeAbility,
                };
            })
            .filter(entry => entry != null);
    } catch (e) {
        console.error('csvToCardList', e);
        return [];
    }
};