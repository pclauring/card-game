import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';

export default function turnStateReducer(state = initialState.turnState, action) {
    switch (action.type) {
        default:
        return state;
    }
}