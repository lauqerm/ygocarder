export type OtherMakerCard = ReturnType<typeof getDefaultOtherMakerCard>;
export const getDefaultOtherMakerCard = () => ({
    version: '1.0.0',
    name: 'Card Name',
    level: '4',
    type: 'Warrior/Effect',
    icon: 'Quick-play',
    effect: 'Card Effect',
    atk: '0',
    def: '0',
    serial: '1234567890',
    copyright: '©',
    attribute: 'Light',
    id: 'ABCD-XY000',
    pendulum: {
        enabled: false,
        effect: '',
        blue: '0',
        red: '0',
        boxSize: 'Normal',
        boxSizeEnabled: true,
    },
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

export type YgoproDeckCardImage = ReturnType<typeof getDefaultYgoproDeckCardImage>;
export const getDefaultYgoproDeckCardImage = () => ({
    id: 46986414,
    image_url: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
    image_url_small: 'https://images.ygoprodeck.com/images/cards_small/46986414.jpg',
    image_url_cropped: 'https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg'
});

export type YgoproDeckCardSet = ReturnType<typeof getDefaultYgoproDeckCardSet>;
export const getDefaultYgoproDeckCardSet = () => ({
    set_name: '1990 Mega-Tins',
    set_code: 'XX00-EN000',
    set_rarity: 'Ultra Rare',
    set_rarity_code: '(UR)',
    set_price: '0.01',
});

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
    monster_desc: 'You can Ritual Summon this card with "Odd-Eyes Advent".',
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
    card_sets: [] as YgoproDeckCardSet[],
    card_images: [] as YgoproDeckCardImage[],
    card_prices: [
        {
            cardmarket_price: '0.02',
            tcgplayer_price: '0.23',
            ebay_price: '0.99',
            amazon_price: '14.45',
            coolstuffinc_price: '0.39'
        }
    ],
});