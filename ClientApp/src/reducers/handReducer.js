import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function handReducer(state = initialState.hand, action) {
    
    switch (action.type) {
        case types.DRAW_CARD:
        console.log(state.hand)
        return[...state, Object.assign({}, action.card)];
            // return Object.assign({},state,{
            //     hand: [state.push(action.card)]
            // })
        default:
            return state;
    }
}