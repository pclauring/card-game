import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';

export default function cardReducer(state = [], action) {
    switch (action.type) {
        case types.UPDATE_CARD: {
            return [
                ...state.filter(card => card !== action.card.id), 
               Object.assign({}, action.card)
            ];
        }
        default:
        return state;
    }
}