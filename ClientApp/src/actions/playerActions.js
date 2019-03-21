import * as types from  './deckBuilderActionTypes';

export function updateCard(card){
    return { type: types.UPDATE_CARD, 
            card }
}
