import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {shuffle} from '../selectors/cardGameSelectors';

export default function gameReducer(state = initialState.game, action) {
    switch (action.type) {
        case types.LOAD_GAME_SUCCESS:
            return action.game
            //delete with immutable state
        case types.DRAW_CARD: {
            const newState = Object.assign([], state);
            const indexOfCardToRemove = state.deck.findIndex(card => {
                return card.id === action.card.id
            })
            newState.deck.splice(indexOfCardToRemove, 1);
            return newState;
        }
        case types.DISCARD_CARD: {
            const discardState = Object.assign([], state);
            discardState.discard.push(action.card);
            return discardState;
        }

        case types.SHUFFLE_DISCARD_INTO_DECK: {
            const shuffleState = Object.assign([], state);
            shuffleState.deck = shuffleState.deck.concat(shuffleState.discard);
            shuffleState.deck = shuffle(shuffleState.deck);
            shuffleState.discard = [];
            return shuffleState;
        }
        default:
            return state;
    }
}