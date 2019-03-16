import * as types from  './deckBuilderActionTypes';

export function moveCard(cardMoveInfo){
    return { type: types.MOVE_CARD, cardMoveInfo }
}

export function drawCard(cardDrawInfo){
    return { type: types.DRAW, cardDrawInfo }
}

//takes in a player Id and should take player hand size for that player
//move that many cards from draw pile to hand pile
export function drawHand(playerId){
    return { type: types.MOVE_CARD, playerId }
}
