import * as types from  './actionTypes';

export function loadGameSuccess(game){
    return { type: types.LOAD_GAME_SUCCESS, game }
}

export function loadGame(){
    return async function(dispatch) {
        try {
            const response = await fetch(`api/Game/loadGame`);
            const game = await response.json();
            dispatch(loadGameSuccess(game));
        }
        catch (error) {
            throw (error);
        }
    };  
}

export function shuffleDiscardIntoDeck(game){
    return {type: types.SHUFFLE_DISCARD_INTO_DECK, game }
}