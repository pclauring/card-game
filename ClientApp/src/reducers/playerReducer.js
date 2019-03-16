import * as types from '../actions/deckBuilderActionTypes';
import initialState from './deckBuilderInitialState';

export default function playersReducer(state = initialState.players, action) {
    switch (action.type) {
        case types.DRAW: {
            debugger;
            var drawState = Object.assign([], state);
            const indexOfPlayer = drawState.findIndex(player => player.id === action.cardDrawInfo.playerId);
            const drawnCards = drawState[indexOfPlayer]["draw"].splice(0, action.cardDrawInfo.drawNum);
            drawState[indexOfPlayer]["hand"] = drawState[indexOfPlayer]["hand"].concat(drawnCards);
            return drawState;
        }
        default:
        return state;
    }
}