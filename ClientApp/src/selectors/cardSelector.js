import { createSelector } from 'reselect';

const getAllCards = (state) => state.cards.ById;
const getAllCardIds = (state) => state.cards.AllIds;
const getCurrentPlayerId = (state) => state.turnState.currentPlayerId;

export const getCards = createSelector(
    [getAllCards, getAllCardIds],
    (cards, ids) => {
        return ids.map(id => cards[id]);
    }
);

export const getAllCardsForCurrentPlayer = createSelector(
    [getCards, getCurrentPlayerId],
    (cards, id) => {
        return cards.filter(card => card.owner === id);
    }
);






