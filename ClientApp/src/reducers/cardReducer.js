import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';
import { combineReducers } from 'redux';


function cardByIdReducer(state = initialState.cards.ById, action) {
    switch (action.type) {
        case types.UPDATE_CARD: {
            //update cards
            const card = state[action.card.id];
            return {
                ...state,
                    [card.id]: {
                        ...action.card
                    }
            };
        }
        default:
            return state;
    }
}

function cardAllIdsReducer(state = initialState.cards.AllIds, action){
    switch (action.type) {
        default:
            return state;
    }
}

const cardReducer = combineReducers({
    ById: cardByIdReducer,
    AllIds: cardAllIdsReducer
})

export default cardReducer