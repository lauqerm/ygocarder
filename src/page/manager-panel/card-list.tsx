import { useCardList } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { CardThumb } from './card-thumb';

export const ManagerCardList = () => {
    const {
        cardList,
        activeIndex,
    } = useCardList(useShallow(({
        cardList,
        activeIndex,
    }) => ({
        cardList,
        activeIndex,
    })));

    return <div>
        {cardList.map((card, index) => <CardThumb
            key={card.name}
            card={card}
            active={index === activeIndex}
        />)}
    </div>;
};