import * as types from  './actionTypes';

export function moveCard(card){
    return { type: types.MOVE_CARD, card }
}
