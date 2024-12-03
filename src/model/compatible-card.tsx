export type CompatibleCard = ReturnType<typeof getDefaultCompatibleCard>;
export const getDefaultCompatibleCard = () => ({
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
    image: ''
});