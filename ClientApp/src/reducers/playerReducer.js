import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';

export default function playerReducer(state = initialState.players, action) {
    switch (action.type) {
        default:
        return state;
    }
}