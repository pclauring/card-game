import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';

export default function playersReducer(state = initialState.deckbuilder.players, action) {
    switch (action.type) {
        default:
        return state;
    }
}