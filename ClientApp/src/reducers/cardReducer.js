import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';



export default function cardReducer(state = initialState.cards, action) {
    switch (action.type) {
        case types.UPDATE_CARD: {
            //update cards
            const card = state[action.card.id];
            return {
                ...state, 
                [card.id]: {
                    ...action.card
                }
            };
        }
        default:
        return state;
    }
}