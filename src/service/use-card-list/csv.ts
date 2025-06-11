import { Crop } from 'react-image-crop';
import {
    BackgroundType,
    Card,
    CardFlag,
    CardOpacity,
    CondenseType,
    FLAG_LENGTH,
    Foil,
    FoilNameMap,
    getArtCanvasCoordinate,
    getDefaultCardOpacity,
    getDefaultCrop,
    getDefaultNameStyle,
    getDefaultTextStyle,
    getEmptyCard,
    InternalCard,
    NameStyle,
    NameStyleType,
    NO_ATTRIBUTE,
    OtherFinish,
    PendulumSize,
    PresetNameStyle,
} from 'src/model';
import { v4 as uuid } from 'uuid';

const CsvStandardFieldList = [
    /** Extremely common stuff for most users */
    'Format',
    'Frame',
    'Name',
    'Attribute',
    'Star',
    'Spell/Trap Icon',
    'Art Link',
    'Type Ability',
    'Effect',
    'Set Id',
    'ATK',
    'DEF',
    'Password',
    'Sticker',
    'Copyright',
    'Is Pendulum',
    'Pendulum Effect',
    'Pendulum Scale Red',
    'Pendulum Scale Blue',
    'Is Link',
    'Link - Top Left Arrow',
    'Link - Top Arrow',
    'Link - Top Right Arrow',
    'Link - Left Arrow',
    'Link - Right Arrow',
    'Link - Bottom Left Arrow',
    'Link - Bottom Arrow',
    'Link - Bottom Right Arrow',
    /** More detailed stuffs */
    'Is First Edition',
    'Is Speed Card',
    'Is Limited Edition',
    'Is Duel Terminal Card',
    'Is Legacy Card',
    'Foil',
    'Art Finish',
    'Card Finish',
    'Art Crop - X (%)',
    'Art Crop - Y (%)',
    'Art Crop - Width (%)',
    'Art Crop - Height (%)',
    'Is Using Full Art',
    /** Creative customize stuff */
    'Star Type',
    'Star Alignment',
    'Card Icon Type',
    'Link Rating',
    'Opacity - Body',
    'Opacity - Pendulum',
    'Opacity - Text',
    'Opacity - Name',
    'Opacity - Base Fill',
    'Opacity - Art Border',
    'Opacity - Name Border',
    'Opacity - Boundless',
    'Has Background',
    'Background Link',
    'Is Using Full Background',
    'Background Type',
    'Background Crop - X (%)',
    'Background Crop - Y (%)',
    'Background Crop - Width (%)',
    'Background Crop - Height (%)',
    'Bottom Frame',
    'Condense Rate',
    'Use Furigana Helper',
    /** Extremely intricate stuff, user usually should not bother with these */
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
    'Name Style - Emboss Pitch',
    'Name Style - Emboss Yaw',
    'Name Style - Emboss Thickness',
    'Name Style - Has Emboss',
    'Name Style - Preset',
    'Name Style - Pattern',
    'Stat Style - Is Custom',
    'Stat Style - Fill Color',
    'Stat Style - Has Shadow',
    'Stat Style - Shadow Color',
    'Type Style - Is Custom',
    'Type Style - Fill Color',
    'Type Style - Has Shadow',
    'Type Style - Shadow Color',
    'Effect Style - Is Custom',
    'Effect Style - Fill Color',
    'Effect Style - Has Shadow',
    'Effect Style - Shadow Color',
    'Effect Style - Upsize',
    'Effect Style - Font Style',
    'Effect Style - Background',
    'Pendulum Size',
    'Pendulum Effect Style - Is Custom',
    'Pendulum Effect Style - Fill Color',
    'Pendulum Effect Style - Has Shadow',
    'Pendulum Effect Style - Shadow Color',
    'Pendulum Effect Style - Upsize',
    'Pendulum Effect Style - Font Style',
    'Pendulum Effect Style - Background',
    'Other Style - Is Custom',
    'Other Style - Fill Color',
    'Other Style - Has Shadow',
    'Other Style - Shadow Color',
    'Other Finish - Attribute',
    'Other Finish - Background',
    'Other Finish - Icon',
    'Other Finish - Sticker',
    'Left Frame',
    'Right Frame',
    'Bottom Right Frame',
    'Flag',
    'External Info (JSON)',
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
const normalizeFieldName = (field?: string) => (field ?? '').toLowerCase().replaceAll(' ', '').replaceAll('-', '');
const CsvFieldSet = new Set(CsvFieldList.map(normalizeFieldName));
type CsvField = typeof CsvFieldList[number];
const analyzeExportHeader = CsvStandardFieldList.reduce((acc, field, index) => {
    const normalizedColumnName = normalizeFieldName(field);
    if (CsvFieldSet.has(normalizedColumnName)) acc[field as CsvField] = index;

    return acc;
}, {} as Record<CsvField, number | undefined>);

const normalizeCsvData = (data: any) => {
    if (data == null) return '';
    if (data === '') return '';
    return `"${data.replace(/"/g, '""')}"`;
};
export const cardListToCsv = (cardList: Card[]) => {
    const valueList: string[] = [];
    const rowLength = CsvStandardFieldList.length;
    let error = '';

    for (let cnt = 0; cnt < cardList.length; cnt++) {
        const write = (key: CsvField, value: boolean | string | number | undefined) => {
            const index = analyzeExportHeader[key];
    
            if (typeof index === 'number') {
                if (typeof value === 'string') rowValue[index] = value;
                if (typeof value === 'number') rowValue[index] = `${value}`;
                if (typeof value === 'boolean') rowValue[index] = `${value}`;
                if (value == null) rowValue[index] = '';
            }
        };
        /** Again, we do not support export offline art or background here unless absolutely need to. With the current scope of about hundred of cards, the exported csv may become hundred MB in size, which is not scalable at all. */
        const rowValue = Array(rowLength).map(() => '');
        const {
            art,
            artCrop,
            artFinish,
            artFit,
            artSource,
            atk,
            attribute,
            background,
            backgroundCrop,
            backgroundFit,
            backgroundSource,
            backgroundType,
            cardIcon,
            creator,
            def,
            effect,
            effectStyle,
            effectTextStyle,
            externalInfo,
            finish,
            flag,
            foil,
            format,
            frame,
            furiganaHelper,
            hasBackground,
            isDuelTerminalCard,
            isFirstEdition,
            isLegacyCard,
            isLimitedEdition,
            isLink,
            isPendulum,
            isSpeedCard,
            leftFrame,
            linkMap,
            linkRating,
            name,
            nameStyle,
            nameStyleType,
            opacity,
            otherFinish,
            otherTextStyle,
            password,
            pendulumEffect,
            pendulumFrame,
            pendulumRightFrame,
            pendulumScaleBlue,
            pendulumScaleRed,
            pendulumSize,
            pendulumStyle,
            pendulumTextStyle,
            rightFrame,
            setId,
            star,
            starAlignment,
            statTextStyle,
            sticker,
            subFamily,
            typeAbility,
            typeTextStyle,
        } = cardList[cnt];
        const stringifedExternalInfo = JSON.stringify(externalInfo);
        const stringifedFlag = flag.join('|');

        write('Format', format);
        write('Frame', frame);
        write('Name', name);
        write('Attribute', attribute);
        write('Star', `${star}`);
        write('Spell/Trap Icon', subFamily);
        write('Art Link', art);
        write('Type Ability', typeAbility.join('/'));
        write('Effect', effect);
        write('Set Id', setId);
        write('ATK', atk);
        write('DEF', def);
        write('Password', password);
        write('Sticker', sticker);
        write('Copyright', creator);
        write('Is Pendulum', isPendulum);
        write('Pendulum Effect', pendulumEffect);
        write('Pendulum Scale Red', pendulumScaleRed);
        write('Pendulum Scale Blue', pendulumScaleBlue);
        write('Is Link', isLink ?? undefined);
        write('Link - Top Left Arrow', linkMap.includes('1'));
        write('Link - Top Arrow', linkMap.includes('2'));
        write('Link - Top Right Arrow', linkMap.includes('3'));
        write('Link - Left Arrow', linkMap.includes('4'));
        write('Link - Right Arrow', linkMap.includes('6'));
        write('Link - Bottom Left Arrow', linkMap.includes('7'));
        write('Link - Bottom Arrow', linkMap.includes('8'));
        write('Link - Bottom Right Arrow', linkMap.includes('9'));
        write('Link Rating', linkRating);
        write('Is First Edition', isFirstEdition);
        write('Is Speed Card', isSpeedCard);
        write('Is Limited Edition', isLimitedEdition);
        write('Is Duel Terminal Card', isDuelTerminalCard);
        write('Is Legacy Card', isLegacyCard);
        write('Foil', foil);
        write('Art Finish', artFinish);
        write('Card Finish', finish.join(','));
        write('Art Crop - X (%)', artCrop.x);
        write('Art Crop - Y (%)', artCrop.y);
        write('Art Crop - Width (%)', artCrop.width);
        write('Art Crop - Height (%)', artCrop.height);
        write('Is Using Full Art', artFit);
        write('Star Type', typeof star === 'number' && star >= 0 && star <= 13 ? 'number' : 'text');
        write('Star Alignment', starAlignment);
        write('Card Icon Type', cardIcon);
        write('Opacity - Body', opacity.body);
        write('Opacity - Pendulum', opacity.pendulum);
        write('Opacity - Text', opacity.text);
        write('Opacity - Name', opacity.name);
        write('Opacity - Base Fill', opacity.baseFill);
        write('Opacity - Art Border', opacity.artBorder);
        write('Opacity - Name Border', opacity.nameBorder);
        write('Opacity - Boundless', opacity.boundless);
        write('Has Background', hasBackground);
        write('Background Link', background);
        write('Is Using Full Background', backgroundFit);
        write('Background Type', backgroundType);
        write('Background Crop - X (%)', backgroundCrop.x);
        write('Background Crop - Y (%)', backgroundCrop.y);
        write('Background Crop - Width (%)', backgroundCrop.width);
        write('Background Crop - Height (%)', backgroundCrop.height);
        write('Bottom Frame', pendulumFrame);
        write('Condense Rate', effectStyle.condenseTolerant);
        write('Use Furigana Helper', furiganaHelper);
        write('Name Style Type', nameStyleType);
        write('Name Style - Font', nameStyle.font);
        write('Name Style - Fill Style', nameStyle.fillStyle);
        write('Name Style - Headtext Fill Style', nameStyle.headTextFillStyle);
        write('Name Style - Shadow Color', nameStyle.shadowColor);
        write('Name Style - Shadow Offset Y', nameStyle.shadowOffsetY);
        write('Name Style - Shadow Offset X', nameStyle.shadowOffsetX);
        write('Name Style - Shadow Blur', nameStyle.shadowBlur);
        write('Name Style - Has Shadow', nameStyle.hasShadow);
        write('Name Style - Line Color', nameStyle.lineColor);
        write('Name Style - Line Width', nameStyle.lineWidth);
        write('Name Style - Line Offset Y', nameStyle.lineOffsetY);
        write('Name Style - Line Offset X', nameStyle.lineOffsetX);
        write('Name Style - Has Outline', nameStyle.hasOutline);
        write('Name Style - Gradient Angle', nameStyle.gradientAngle);
        write('Name Style - Gradient Color', nameStyle.gradientColor);
        write('Name Style - Has Gradient', nameStyle.hasGradient);
        write('Name Style - Emboss Pitch', nameStyle.embossPitch);
        write('Name Style - Emboss Yaw', nameStyle.embossYaw);
        write('Name Style - Emboss Thickness', nameStyle.embossThickness);
        write('Name Style - Has Emboss', nameStyle.hasEmboss);
        write('Name Style - Preset', nameStyle.preset);
        write('Name Style - Pattern', nameStyle.pattern);
        write('Stat Style - Is Custom', statTextStyle[0]);
        write('Stat Style - Fill Color', statTextStyle[1]);
        write('Stat Style - Has Shadow', statTextStyle[2]);
        write('Stat Style - Shadow Color', statTextStyle[3]);
        write('Type Style - Is Custom', typeTextStyle[0]);
        write('Type Style - Fill Color', typeTextStyle[1]);
        write('Type Style - Has Shadow', typeTextStyle[2]);
        write('Type Style - Shadow Color', typeTextStyle[3]);
        write('Effect Style - Is Custom', effectTextStyle[0]);
        write('Effect Style - Fill Color', effectTextStyle[1]);
        write('Effect Style - Has Shadow', effectTextStyle[2]);
        write('Effect Style - Shadow Color', effectTextStyle[3]);
        write('Effect Style - Upsize', effectStyle.upSize);
        write('Effect Style - Font Style', effectStyle.fontStyle);
        write('Effect Style - Background', effectStyle.background);
        write('Pendulum Size', pendulumSize);
        write('Pendulum Effect Style - Is Custom', pendulumTextStyle[0]);
        write('Pendulum Effect Style - Fill Color', pendulumTextStyle[1]);
        write('Pendulum Effect Style - Has Shadow', pendulumTextStyle[2]);
        write('Pendulum Effect Style - Shadow Color', pendulumTextStyle[3]);
        write('Pendulum Effect Style - Upsize', pendulumStyle.upSize);
        write('Pendulum Effect Style - Font Style', pendulumStyle.fontStyle);
        write('Pendulum Effect Style - Background', pendulumStyle.background);
        write('Other Style - Is Custom', otherTextStyle[0]);
        write('Other Style - Fill Color', otherTextStyle[1]);
        write('Other Style - Has Shadow', otherTextStyle[2]);
        write('Other Style - Shadow Color', otherTextStyle[3]);
        write('Other Finish - Attribute', otherFinish[0]);
        write('Other Finish - Icon', otherFinish[1]);
        write('Other Finish - Sticker', otherFinish[2]);
        write('Other Finish - Background', otherFinish[3]);
        write('Left Frame', leftFrame);
        write('Right Frame', rightFrame);
        write('Bottom Right Frame', pendulumRightFrame);
        write('Flag', stringifedFlag);
        write('External Info (JSON)', stringifedExternalInfo === '{}' ? '' : stringifedExternalInfo);

        if (artSource === 'offline' || (hasBackground && backgroundSource === 'offline')) {
            error = 'offline-data';
        }

        valueList.push(rowValue.map(normalizeCsvData).join(','));
    }

    return {
        value: [
            CsvStandardFieldList.join(','),
            valueList.join('\n'),
        ].join('\n'),
        error,
    };
};

const analyzeImportHeader = (header: (string | undefined)[]) => {
    return header.reduce((acc, field, index) => {
        const normalizedColumnName = normalizeFieldName(field);
        if (CsvFieldSet.has(normalizedColumnName)) acc[field as CsvField] = index;

        return acc;
    }, {} as Record<CsvField, number | undefined>);
};
const getCsvFieldReader = (row: (string | undefined)[], headerIndexMap: Record<CsvField, number | undefined>) => {
    return (field: CsvField) => {
        const columnIndex = headerIndexMap[field] ?? -1;
        const value = (row[columnIndex] ?? '').trim();

        return value === ''
            ? undefined
            : value;
    };
};
const normalizeBoolean = (value: any, fallback: boolean) => {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
        const normalizedValue = value.toLowerCase();
        return normalizedValue === 'true'
            ? true
            : normalizedValue === 'false'
                ? false
                : fallback;
    }
    return fallback;
};
const normalizeInt = (value: any, fallback: number) => {
    if (typeof value === 'number') return isFinite(value) ? value : fallback;
    if (typeof value === 'string') return isFinite(parseInt(value)) ? parseInt(value) : fallback;
    return fallback;
};
const normalizeFloat = (value: any, fallback: number) => {
    if (typeof value === 'number') return isFinite(value) ? value : fallback;
    if (typeof value === 'string') return isFinite(parseFloat(value)) ? parseFloat(value) : fallback;
    return fallback;
};
const normalizeColor = (value: any, fallback: string) => {
    if (typeof value === 'string') {
        if (value.startsWith('#')) return value;
        return `#${value}`;
    }
    return fallback;
};
export const csvToCardList = (data: (string | undefined)[][]): InternalCard[] => {
    try {
        const headerIndexMap = analyzeImportHeader(data[0]);

        return data
            .map((row, index) => {
                /** Ignore header */
                if (index === 0) return null;
                /** Ignore empty row */
                if (row.join('') === '') return null;
                const emptyCard = getEmptyCard();
                const reader = getCsvFieldReader(row, headerIndexMap);

                const frame = (reader('Frame') ?? reader('Background_Type') ?? emptyCard.frame).toLowerCase();
                const rightFrame = (reader('Right Frame') ?? emptyCard.rightFrame).toLowerCase();
                const leftFrame = (reader('Left Frame') ?? emptyCard.leftFrame).toLowerCase();
                const pendulumRightFrame = (reader('Bottom Right Frame') ?? emptyCard.pendulumRightFrame).toLowerCase();

                const rawStar = reader('Star') ?? reader('Level/Rank') ?? '';
                const star = reader('Star Type') === 'text'
                    ? rawStar
                    : parseInt(rawStar) <= 13 && parseInt(rawStar) >= 0 && reader('Star_Type') !== '2'
                        ? parseInt(rawStar)
                        : rawStar;

                const rawFoil = (reader('Foil') ?? reader('Rarity') ?? 'normal').toLowerCase() as Foil;
                const foil = FoilNameMap[rawFoil] ? rawFoil : 'normal';

                const rawAttribute = reader('Attribute')?.toUpperCase();
                const attribute = rawAttribute
                    ? rawAttribute === 'NONE'
                        ? NO_ATTRIBUTE
                        : rawAttribute
                    : frame === 'spell'
                        ? 'SPELL'
                        : frame === 'trap'
                            ? 'TRAP'
                            : emptyCard.attribute;

                const artFinish = (reader('Art Finish') ?? (reader('Art_Finish') ? `type${reader('Art_Finish')}` : ''));
                const finishAttribute = reader('Other Finish - Attribute') ?? '';
                const finishSticker = reader('Other Finish - Sticker') ?? '';
                const finishIcon = reader('Other Finish - Icon') ?? '';
                const finishBackground = reader('Other Finish - Background') ?? '';
                const atk = reader('ATK') ?? '';
                const cardIcon = (reader('Card Icon Type') ?? emptyCard.cardIcon);
                const creator = reader('Copyright') ?? '';
                const def = reader('DEF') ?? '';
                const effect = reader('Effect') ?? '';
                const finish = reader('Card Finish')?.split(/,| /).filter(entry => entry !== '') ?? [] as string[];
                const format = (reader('Format') ?? emptyCard.format).toLowerCase();
                const furiganaHelper = normalizeBoolean(reader('Use Furigana Helper'), emptyCard.furiganaHelper);
                const name = reader('Name') ?? '';
                const password = reader('Password') ?? '';
                const setId = reader('Set Id') ?? reader('Set_ID') ?? '';
                const starAlignment = (reader('Star Alignment') ?? emptyCard.starAlignment).toLowerCase();
                const sticker = (reader('Sticker') ?? emptyCard.sticker).toLowerCase();
                const subFamily = (reader('Spell/Trap Icon') ?? reader('spell_type/trap_type') ?? emptyCard.subFamily).toUpperCase();

                const edition = reader('Edition')?.toLowerCase();
                const isFirstEdition = normalizeBoolean(
                    reader('Is First Edition'),
                    edition ? edition === '1st edition' : emptyCard.isFirstEdition,
                );
                const isDuelTerminalCard = normalizeBoolean(
                    reader('Is Duel Terminal Card'),
                    edition ? edition === 'duel terminal' : emptyCard.isDuelTerminalCard,
                );
                const isLimitedEdition = normalizeBoolean(
                    reader('Is Limited Edition'),
                    edition ? edition === 'limited edition' : emptyCard.isLimitedEdition,
                );
                const isSpeedCard = normalizeBoolean(
                    reader('Is Speed Card'),
                    edition ? edition === 'speed duel' : emptyCard.isSpeedCard,
                );
                const isLegacyCard = normalizeBoolean(reader('Is Legacy Card'), emptyCard.isLegacyCard);

                const isPendulum = normalizeBoolean(reader('Is Pendulum'), emptyCard.isPendulum);
                const pendulumFrame = (reader('Bottom Frame') ?? emptyCard.pendulumFrame).toLowerCase();
                const pendulumEffect = reader('Pendulum Effect') ?? '';
                /** We treat empty scale value as scaleless behavior instead of assigning default value from empty card. As empty card still obey the normal card component and therefore must have a non-empty value. */
                const pendulumScaleRed = reader('Pendulum Scale Red') ?? '';
                const pendulumScaleBlue = reader('Pendulum Scale Blue') ?? '';
                const pendulumSize = (reader('Pendulum Size') ?? 'medium') as PendulumSize;

                const rawTypeAbility = reader('Type Ability');
                const typeAbility = rawTypeAbility
                    ? rawTypeAbility.split('/')
                    : [reader('Type_1'), reader('Type_2'), reader('Type_3'), reader('Type_4')]
                        .filter(entry => typeof entry === 'string' && entry !== '');

                const condenseTolerant = (reader('Condense Rate') ?? emptyCard.effectStyle.condenseTolerant).toLowerCase() as CondenseType;
                const effectUpSize = normalizeInt(reader('Effect Style - Upsize'), emptyCard.effectStyle.upSize);
                const pendulumEffectUpSize = normalizeInt(reader('Pendulum Effect Style - Upsize'), emptyCard.pendulumStyle.upSize);
                const effectFontStyle = (reader('Effect Style - Font Style') ?? emptyCard.effectStyle.fontStyle).toLowerCase();
                const pendulumEffectFontStyle = (reader('Pendulum Effect Style - Font Style') ?? emptyCard.pendulumStyle.fontStyle).toLowerCase();
                const effectBackground = (reader('Effect Style - Background') ?? emptyCard.effectStyle.background).toLowerCase();
                const pendulumEffectBackground = (reader('Pendulum Effect Style - Background') ?? emptyCard.pendulumStyle.background).toLowerCase();

                const emptyOpacity = getDefaultCardOpacity();
                const opacity: CardOpacity = {
                    artBorder: normalizeBoolean(reader('Opacity - Art Border'), emptyOpacity.artBorder),
                    baseFill: reader('Opacity - Base Fill') ?? emptyOpacity.baseFill,
                    body: normalizeInt(reader('Opacity - Body'), emptyOpacity.body),
                    boundless: normalizeBoolean(reader('Opacity - Boundless'), emptyOpacity.boundless),
                    name: normalizeInt(reader('Opacity - Name'), emptyOpacity.name),
                    nameBorder: normalizeBoolean(reader('Opacity - Name Border'), emptyOpacity.nameBorder),
                    pendulum: normalizeInt(reader('Opacity - Pendulum'), emptyOpacity.pendulum),
                    text: normalizeInt(reader('Opacity - Text'), emptyOpacity.text),
                };

                const emptyArtCrop = getDefaultCrop();
                const art = reader('Art Link') ?? emptyCard.art;
                const artFit = normalizeBoolean(reader('Is Using Full Art'), emptyCard.artFit);
                const artCrop: Crop = {
                    aspect: getArtCanvasCoordinate(isPendulum, opacity, undefined, pendulumSize).ratio,
                    height: normalizeFloat(reader('Art Crop - Height (%)'), emptyArtCrop.height),
                    width: normalizeFloat(reader('Art Crop - Width (%)'), emptyArtCrop.width),
                    x: normalizeFloat(reader('Art Crop - X (%)'), emptyArtCrop.x),
                    y: normalizeFloat(reader('Art Crop - Y (%)'), emptyArtCrop.y),
                    unit: '%',
                };

                const emptyBackgroundCrop = getDefaultCrop();
                const hasBackground = normalizeBoolean(reader('Has Background'), emptyCard.hasBackground);
                const background = reader('Background Link') ?? emptyCard.background;
                const backgroundType = (reader('Background Type') ?? emptyCard.backgroundType).toLowerCase() as BackgroundType;
                const backgroundFit = normalizeBoolean(reader('Is Using Full Background'), emptyCard.backgroundFit);
                const backgroundCrop: Crop = {
                    aspect: getArtCanvasCoordinate(isPendulum, opacity, backgroundType, pendulumSize).ratio,
                    height: normalizeFloat(reader('Background Crop - Height (%)'), emptyBackgroundCrop.height),
                    width: normalizeFloat(reader('Background Crop - Width (%)'), emptyBackgroundCrop.width),
                    x: normalizeFloat(reader('Background Crop - X (%)'), emptyBackgroundCrop.x),
                    y: normalizeFloat(reader('Background Crop - Y (%)'), emptyBackgroundCrop.y),
                    unit: '%',
                };

                const emptyNameStyle = getDefaultNameStyle();
                const nameStyleType = (reader('Name Style Type') ?? emptyCard.nameStyleType).toLowerCase() as NameStyleType;
                const nameStyle: NameStyle = {
                    embossPitch: normalizeInt(reader('Name Style - Emboss Pitch'), emptyNameStyle.embossPitch),
                    embossYaw: normalizeInt(reader('Name Style - Emboss Yaw'), emptyNameStyle.embossYaw),
                    embossThickness: normalizeInt(reader('Name Style - Emboss Thickness'), emptyNameStyle.embossThickness),
                    fillStyle: normalizeColor(reader('Name Style - Fill Style'), emptyNameStyle.fillStyle),
                    font: reader('Name Style - Font') ?? emptyNameStyle.font,
                    gradientAngle: normalizeInt(reader('Name Style - Gradient Angle'), emptyNameStyle.gradientAngle),
                    gradientColor: reader('Name Style - Gradient Color') ?? emptyNameStyle.gradientColor,
                    hasEmboss: normalizeBoolean(reader('Name Style - Has Emboss'), emptyNameStyle.hasEmboss),
                    hasGradient: normalizeBoolean(reader('Name Style - Has Gradient'), emptyNameStyle.hasGradient),
                    hasOutline: normalizeBoolean(reader('Name Style - Has Outline'), emptyNameStyle.hasOutline),
                    hasShadow: normalizeBoolean(reader('Name Style - Has Shadow'), emptyNameStyle.hasShadow),
                    headTextFillStyle: normalizeColor(reader('Name Style - Headtext Fill Style'), emptyNameStyle.headTextFillStyle),
                    lineColor: normalizeColor(reader('Name Style - Line Color'), emptyNameStyle.lineColor),
                    lineOffsetX: normalizeInt(reader('Name Style - Line Offset X'), emptyNameStyle.lineOffsetX),
                    lineOffsetY: normalizeInt(reader('Name Style - Line Offset Y'), emptyNameStyle.lineOffsetY),
                    lineWidth: normalizeInt(reader('Name Style - Line Width'), emptyNameStyle.lineWidth),
                    pattern: reader('Name Style - Pattern') ?? emptyNameStyle.pattern,
                    preset: (reader('Name Style - Preset') ?? emptyNameStyle.preset) as PresetNameStyle,
                    shadowBlur: normalizeInt(reader('Name Style - Shadow Blur'), emptyNameStyle.shadowBlur),
                    shadowColor: normalizeColor(reader('Name Style - Shadow Color'), emptyNameStyle.shadowColor),
                    shadowOffsetX: normalizeInt(reader('Name Style - Shadow Offset X'), emptyNameStyle.shadowOffsetX),
                    shadowOffsetY: normalizeInt(reader('Name Style - Shadow Offset Y'), emptyNameStyle.shadowOffsetY),
                };

                const isLink = normalizeBoolean(reader('Is Link'), emptyCard.isLink ?? (frame === 'link'));
                const linkMap = [
                    normalizeBoolean(reader('Link - Top Left Arrow'), false) ? '1' : '',
                    normalizeBoolean(reader('Link - Top Arrow'), false) ? '2' : '',
                    normalizeBoolean(reader('Link - Top Right Arrow'), false) ? '3' : '',
                    normalizeBoolean(reader('Link - Left Arrow'), false) ? '4' : '',
                    normalizeBoolean(reader('Link - Right Arrow'), false) ? '6' : '',
                    normalizeBoolean(reader('Link - Bottom Left Arrow'), false) ? '7' : '',
                    normalizeBoolean(reader('Link - Bottom Arrow'), false) ? '8' : '',
                    normalizeBoolean(reader('Link - Bottom Right Arrow'), false) ? '9' : '',
                ].filter(entry => entry !== '') ?? [];
                const linkRating = reader('Link Rating') ?? '';

                const emptyTextStyle = getDefaultTextStyle();
                const statTextStyle = [
                    normalizeBoolean(reader('Stat Style - Is Custom'), emptyTextStyle[0]),
                    normalizeColor(reader('Stat Style - Fill Color'), emptyTextStyle[1]),
                    normalizeBoolean(reader('Stat Style - Has Shadow'), emptyTextStyle[2]),
                    normalizeColor(reader('Stat Style - Shadow Color'), emptyTextStyle[3]),
                ] as [boolean, string, boolean, string];
                const typeTextStyle = [
                    normalizeBoolean(reader('Type Style - Is Custom'), emptyTextStyle[0]),
                    normalizeColor(reader('Type Style - Fill Color'), emptyTextStyle[1]),
                    normalizeBoolean(reader('Type Style - Has Shadow'), emptyTextStyle[2]),
                    normalizeColor(reader('Type Style - Shadow Color'), emptyTextStyle[3]),
                ] as [boolean, string, boolean, string];
                const effectTextStyle = [
                    normalizeBoolean(reader('Effect Style - Is Custom'), emptyTextStyle[0]),
                    normalizeColor(reader('Effect Style - Fill Color'), emptyTextStyle[1]),
                    normalizeBoolean(reader('Effect Style - Has Shadow'), emptyTextStyle[2]),
                    normalizeColor(reader('Effect Style - Shadow Color'), emptyTextStyle[3]),
                ] as [boolean, string, boolean, string];
                const pendulumTextStyle = [
                    normalizeBoolean(reader('Pendulum Effect Style - Is Custom'), emptyTextStyle[0]),
                    normalizeColor(reader('Pendulum Effect Style - Fill Color'), emptyTextStyle[1]),
                    normalizeBoolean(reader('Pendulum Effect Style - Has Shadow'), emptyTextStyle[2]),
                    normalizeColor(reader('Pendulum Effect Style - Shadow Color'), emptyTextStyle[3]),
                ] as [boolean, string, boolean, string];
                const otherTextStyle = [
                    normalizeBoolean(reader('Other Style - Is Custom'), emptyTextStyle[0]),
                    normalizeColor(reader('Other Style - Fill Color'), emptyTextStyle[1]),
                    normalizeBoolean(reader('Other Style - Has Shadow'), emptyTextStyle[2]),
                    normalizeColor(reader('Other Style - Shadow Color'), emptyTextStyle[3]),
                ] as [boolean, string, boolean, string];
                let externalInfo = {};
                try {
                    externalInfo = JSON.parse(reader('External Info (JSON)') ?? '{}');
                } catch (e) {
                    console.error('csvToCardList', e);
                }
                const flag = reader('Flag').split('|').map(Number).slice(0, FLAG_LENGTH) as CardFlag;

                return {
                    id: uuid(),
                    ...emptyCard,
                    art,
                    artCrop,
                    artFinish,
                    artFit,
                    artSource: 'online',
                    atk,
                    attribute,
                    background,
                    backgroundCrop,
                    backgroundFit,
                    backgroundSource: 'online',
                    backgroundType,
                    cardIcon,
                    condenseTolerant,
                    creator,
                    def,
                    effect,
                    effectStyle: { condenseTolerant, upSize: effectUpSize, fontStyle: effectFontStyle, background: effectBackground },
                    effectTextStyle,
                    externalInfo,
                    finish,
                    flag,
                    foil,
                    format,
                    frame,
                    furiganaHelper,
                    hasBackground,
                    isDuelTerminalCard,
                    isFirstEdition,
                    isLegacyCard,
                    isLimitedEdition,
                    isLink,
                    isPendulum,
                    isSpeedCard,
                    leftFrame,
                    linkMap,
                    linkRating,
                    name,
                    nameStyle,
                    nameStyleType,
                    opacity,
                    otherFinish: [finishAttribute, finishIcon, finishSticker, finishBackground] as OtherFinish,
                    otherTextStyle,
                    password,
                    pendulumEffect,
                    pendulumFrame,
                    pendulumRightFrame,
                    pendulumScaleBlue,
                    pendulumScaleRed,
                    pendulumSize,
                    pendulumStyle: { upSize: pendulumEffectUpSize, fontStyle: pendulumEffectFontStyle, background: pendulumEffectBackground },
                    pendulumTextStyle,
                    rightFrame,
                    setId,
                    star,
                    starAlignment,
                    statTextStyle,
                    sticker,
                    subFamily,
                    typeAbility,
                    typeTextStyle,
                };
            })
            // .map(migrateCardData)
            .filter(entry => {
                return entry != null;
            });
    } catch (e) {
        console.error('csvToCardList', e);
        return [];
    }
};