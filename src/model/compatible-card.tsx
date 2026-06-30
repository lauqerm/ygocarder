export type OtherMakerCard = ReturnType<typeof getDefaultOtherMakerCard>;
export const getDefaultOtherMakerCard = () => ({
    version: '1.0.0',
    name: 'Card Name',
    level: '4',
    type: 'Warrior/Effect',
    icon: 'Quick-play',
    effect: 'Card Effect',
    atk: 0 as string | number,
    def: 0 as string | number,
    serial: '1234567890',
    copyright: '©',
    attribute: 'Light',
    id: 'ABCD-XY000',
    pendulum: getDefaultPendulumOtherMakerCard() as PendulumOtherMakerCard | undefined,
    variant: 'Normal',
    link: {
        topLeft: false,
        topCenter: false,
        topRight: false,
        middleLeft: false,
        middleRight: false,
        bottomLeft: false,
        bottomCenter: false,
        bottomRight: false
    },
    layout: 'Effect',
    boxSize: 'Normal',
    rarity: 'secret',
    image: '',
});
export type PendulumOtherMakerCard = ReturnType<typeof getDefaultPendulumOtherMakerCard>;
export const getDefaultPendulumOtherMakerCard = () => ({
    enabled: false,
    effect: '',
    blue: '0',
    red: '0',
    boxSize: 'Normal',
    boxSizeEnabled: true,
});

export type YgoproDeckCardImage = ReturnType<typeof getDefaultYgoproDeckCardImage>;
export const getDefaultYgoproDeckCardImage = () => ({
    'id': 27288416,
    'image_url': 'https://images.ygoprodeck.com/images/cards/27288416.jpg',
    'image_url_small': 'https://images.ygoprodeck.com/images/cards_small/27288416.jpg',
    'image_url_cropped': 'https://images.ygoprodeck.com/images/cards_cropped/27288416.jpg',
});

export type YgoproDeckCardSet = ReturnType<typeof getDefaultYgoproDeckCardSet>;
export const getDefaultYgoproDeckCardSet = () => ({
    set_name: '1990 Mega-Tins',
    set_code: 'XX00-EN000',
    set_rarity: 'Ultra Rare',
    set_rarity_code: '(UR)',
    set_price: '0.01',
});

export type YgoproDeckCardMisc = ReturnType<typeof getDefaultYgoproDeckCardMisc>;
export const getDefaultYgoproDeckCardMisc = () => [
    {
        staple: 'No',
        views: 0,
        viewsweek: 0,
        upvotes: 0,
        downvotes: 0,
        formats: [] as string[],
        treated_as: '',
        tcg_date: '',
        ocg_date: '',
        konami_id: 0,
        has_effect: 1,
        md_rarity: ''
    }
];

export type YgoproDeckCard = ReturnType<typeof getDefaultYgoproDeckCard>;
export const getDefaultYgoproDeckCard = () => ({
    id: 10000000,
    name: 'Card Name',
    typeline: [
        'Warrior',
        'Effect',
    ] as string[] | undefined,
    type: 'Effect Monster',
    humanReadableCardType: 'Effect Monster',
    frameType: 'effect',
    desc: '\'\'The ultimate wizard in terms of attack and defense.\'\'',
    pend_desc: '',
    monster_desc: 'The ultimate wizard in terms of attack and defense.',
    race: 'Warrior',
    atk: 0,
    def: 0 as number | undefined,
    level: 4,
    scale: 4 as number | undefined,
    linkval: 3 as number | undefined,
    linkmarkers: [] as string[] | undefined,
    attribute: 'DARK',
    archetype: 'Dark Magician',
    ygoprodeck_url: 'https://ygoprodeck.com/card/dark-magician-4003',
    card_sets: [] as YgoproDeckCardSet[] | undefined,
    card_images: [] as undefined | (YgoproDeckCardImage[]),
    card_prices: [
        {
            cardmarket_price: '0.02',
            tcgplayer_price: '0.23',
            ebay_price: '0.99',
            amazon_price: '14.45',
            coolstuffinc_price: '0.39'
        }
    ],
    misc_info: getDefaultYgoproDeckCardMisc() as YgoproDeckCardMisc,
});

export type MseCard = ReturnType<typeof getDefaultMseCard>;
export const getDefaultMseCard = () => ({
    has_styling: false,
    notes: '',
    time_created: '2026-06-14 12:00:00',
    time_modified: '2026-06-14 12:00:00',
    extra_data: {
        yugiohseries10: {
            mse_version: '2.0.1',
        },
    },
    card_type: 'effect monster',
    name: 'Card Name',
    attribute: 'light',
    level: '<sym-auto>*</sym-auto><sym-auto>*</sym-auto><sym-auto>*</sym-auto><sym-auto>*</sym-auto>',
    image: 'local_image_file("image1")',
    type_1: '<word-list-monster>Machine</word-list-monster>',
    type_2: '<word-list-card>Effect</word-list-card>',
    type_3: '<word-list-card></word-list-card>',
    type_4: '<word-list-card></word-list-card>',
    type_5: '<word-list-card></word-list-card>',
    monster_type: '<prefix>[</prefix><word-list-monster>Machine</word-list-monster><sep><test>/</test></sep><word-list-card>Effect</word-list-card><sep-soft></sep-soft><word-list-card></word-list-card><sep-soft></sep-soft><word-list-card></word-list-card><sep>]<soft></soft></sep><word-list-card></word-list-card>',
    rule_text: 'Placeholder Effect',
    attack: '2000',
    defense: '2000',
    blue_scale: '4',
    red_scale: '3',
    pendulum_text: 'Balogar',
    gamecode: '01',
    rarity: 'ultra rare',
    pendulum: 'none',
    number: '',
    edition: '',
    copyright: '',
});

export type MseFile = ReturnType<typeof getDefaultMseFile>;
export const getDefaultMseFile = () => ({
    mse_version: '2.0.1',
    game: 'yugioh',
    stylesheet: 'series10',
    set_info: {
        title: 'MSE',
        gods_have_effects: false
    },
    styling: {

    },
    card: [] as MseCard[],
    version_control: {
        type: 'none'
    },
    apprentice_code: {},
});