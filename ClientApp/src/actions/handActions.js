import * as types from  './actionTypes';

export function drawCard(card){
    return { type: types.DRAW_CARD, card }
}

export function discardCard(cardId){
    return { type: types.DISCARD_CARD, cardId }
}