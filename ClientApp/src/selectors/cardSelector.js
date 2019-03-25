import { createSelector } from 'reselect';

const getAllCards = (state) => state.cards.ById;
const getAllCardIds = (state) => state.cards.AllIds

export const getCards = createSelector(
    [getAllCards, getAllCardIds],
    (cards, ids) => {
        return ids.map(id => cards[id]);
    }
)




