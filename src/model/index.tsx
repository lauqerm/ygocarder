export type ScaleValue = {
	scaleRatio: number,
	translatePercent: string,
}

export type Card = typeof defaultCard;
export const defaultCard = {
    atk: 0,
    attribute: '',
    def: 0,
    effect: 'You cannot Special Summon from the Extra Deck, except Machine monsters. If this card is Normal or Special Summoned: You can send 1 Xyz Machine monster from your Extra Deck to the GY; add 1 “B.F.A” Spell/Trap from your Deck to your hand. If this card is in your GY: You can banish 1 Xyz Machine monster from your Extra Deck; add this card to your hand. You can only use each effect of “B.F.A - U3 ”Eden”” once per turn.',
    link_count: 0,
    link_map: [],
    name: '',
    passcode: '',
    pendulum_effect: '',
    pendulum_scale: -1,
    pic: '',
    set_id: '',
    st_type: '',
    star: 0,
    type: [],
};

export type { TextBoxSize } from './textbox';