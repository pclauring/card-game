import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function boardReducer(state = initialState.board, action) {
    switch (action.type) {
        case types.PLAY_CARD:
        return [...state,
            Object.assign({}, action.card)
            ];
        default:
            return state;
    }

}