import * as types from '../actions/actionTypes';
import initialState from './deckBuilderInitialState';

export default function turnInfoReducer(state = initialState.deckbuilder.turns, action) {
    switch (action.type) {
        default:
        return state;
    }
}