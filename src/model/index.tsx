export type ScaleValue = {
	scaleRatio: number,
	translatePercent: string,
};

export type Card = typeof defaultCard;
export const defaultCard = {
    atk: '100',
    attribute: 'DARK',
    frame: 'effect',
    subFamily: 'Level',
    def: '2000',
    type_ability: ['Dragon', 'Pendulum', 'Effect'] as string[],
    effect: `["Blue-Eyes White Dragon" + "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon"]
Your opponent cannot target or destroy this card with card effects. Once per turn: You can target 1 card your opponent controls; destroy it.
● If this card was Fusion Summoned using a monster whose original name is "Blue-Eyes Alternative White Dragon" as material, you can target up to 3 cards your opponent controls instead.
● This card cannot attack the turn this effect is activated.
(This card is always treated as "Blue-Eyes Ultimate Dragon")`,
    link_map: ['1', '2', '3', '8', '9'] as string[],
    name: 'B.F.A - U3 “Eden”',
    nameColor: 'auto',
    passcode: '24907043',
    foil: 'gold',
    sticker: 'gold',
    isPendulum: true,
    pendulum_effect: 'You can pay 1000 LP; add 1 "Abyss Actor" Pendulum Monster from your Deck to your hand, except "Abyss Actor - Mellow Madonna", also you cannot Special Summon monsters for the rest of this turn, except "Abyss Actor" Pendulum Monsters (even if this card leaves the field). You can only use this effect of "Abyss Actor - Mellow Madonna" once per turn.',
    red_scale: '0',
    blue_scale: '13',
    picture: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/165851102_3703072819802446_2677153091621164666_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=qA4t3mN92dQAX_RST5K&_nc_ht=scontent.fsgn2-6.fna&oh=16d439f4c142f27cf716c1d70bc80b22&oe=6085E577',
    pictureCrop: {
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        aspect: 1,
        unit: '%',
    } as Partial<ReactCrop.Crop>,
    set_id: 'ROTD-EN081',
    star: 4,
    isFirstEdition: true,
    creator: '©2020 Studio Dice/SHUEISHA TV TOKYO, KONAMI',
};
export const defaultMonster = defaultCard;

export const frameType = [
    { name: 'normal', color: '#fff', backgroundColor: '#c49c5e' },
    { name: 'effect', color: '#fff', backgroundColor: '#b96c49' },
    { name: 'fusion', color: '#fff', backgroundColor: '#8948a4' },
    { name: 'synchro', color: '#000', backgroundColor: '#efefef' },
    { name: 'xyz', color: '#fff', backgroundColor: '#000' },
    { name: 'link', color: '#fff', backgroundColor: '#0c8ac6' },
    { name: 'ritual', color: '#fff', backgroundColor: '#5e85c9' },
    { name: 'spell', color: '#fff', backgroundColor: '#1b8f83' },
    { name: 'trap', color: '#fff', backgroundColor: '#c32a8c' },
    { name: 'token', color: '#fff', backgroundColor: '#6f6c6b' },
];

export const iconList = [
    'NO ICON',
    'FIELD',
    'CONTINUOUS',
    'QUICK-PLAY',
    'RITUAL',
    'COUNTER',
];

export const foilList = [
    { name: 'normal', color: '#747b95' },
    { name: 'gold', color: '#cfa65f' },
    { name: 'platinum', color: '#b1b1b1' },
];

export const stickerList = [
    'gold',
    'silver',
    'beta',
    'holo5',
    'holo4',
    'holo3',
    'holo2',
    'holo1',
];

export const attributeList = [
    { name: 'DARK', color: '#b41dda' },
    { name: 'EARTH', color: '#8d8e8e' },
    { name: 'FIRE', color: '#e51b23' },
    { name: 'LIGHT', color: '#bfae32' },
    { name: 'WATER', color: '#008ecd' },
    { name: 'WIND', color: '#28ab35' },
    { name: 'DIVINE', color: '#ef6300' },
    { name: 'SPELL', color: '#1b8f83' },
    { name: 'TRAP', color: '#c32a8c' },
];