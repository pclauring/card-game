import * as types from  './actionTypes';

export function moveCard(card){
    return { type: types.MOVE_CARD, card }
}

//takes in a player Id and should take player hand size for that player
//move that many cards from draw pile to hand pile
export function drawHand(playerId){
    return { type: types.MOVE_CARD, playerId }
}
