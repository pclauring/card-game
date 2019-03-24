import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';
import { combineReducers } from 'redux';


function playerByIdReducer(state = initialState.players.ById, action) {
    switch (action.type) {
        case types.UPDATE_PLAYER: {
            //update cards
            const player = state[action.player.id];
            return {
                ...state,
                    [player.id]: {
                        ...action.player
                    }
            };
        }
        default:
            return state;
    }
}

function playerAllIdsReducer(state = initialState.players.AllIds, action){
    switch (action.type) {
        default:
            return state;
    }
}

const playerReducer = combineReducers({
    ById: playerByIdReducer,
    AllIds: playerAllIdsReducer
})

export default playerReducer