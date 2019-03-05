import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playerReducer(state = initialState.game.player1, action) {
    switch (action.type) {
        case types.MOVE_CARD:
        return state;
        default:
        return state;
    }
}