import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playersReducer(state = initialState.deckbuilder.players, action) {
    switch (action.type) {
        default:
        return state;
    }
}