import * as types from '../actions/actionTypes';
import initialState from './initialState';

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
        default:
            return state;
    }
}