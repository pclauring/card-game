import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function opponentHandReducer(state = initialState.opponentHand, action) {
    switch (action.type) {
        case types.LOAD_GAME_SUCCESS:
        return state;
        default:
        return state;
    }
}