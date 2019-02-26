import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState.game, action) {
    switch (action.type) {
        case types.MOVE_CARD:
        return state;
        default:
        return state;
    }
}