import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function turnReducer(state = initialState.turn, action) {
    switch (action.type) {
        case types.MOVE_CARD:
        return state + 1;
        case types.PLAY_CARD:
        return state + 1;
        case types.DISCARD_CARD:
        return state + 1;
        case types.DRAW_CARD:
        return state + 1;
        default:
        return state;
    }
}