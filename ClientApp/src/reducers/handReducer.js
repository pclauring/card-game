import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function handReducer(state = initialState.hand, action) {
    
    switch (action.type) {
        
        case types.DRAW_CARD:
        return[...state, Object.assign({}, action.card)];

        case types.DISCARD_CARD: {
            const newState = Object.assign([], state);
            const indexOfCardToRemove = state.findIndex(card => {
                return card.id === action.card.id
            })
            newState.splice(indexOfCardToRemove, 1);
            return newState;
        }
        
        default:
            return state;
    }
}