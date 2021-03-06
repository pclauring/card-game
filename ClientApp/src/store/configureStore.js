import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import game from '../reducers/gameReducer';
import hand from '../reducers/handReducer';
import board from '../reducers/boardReducer';
import turn from '../reducers/turnReducer';
import turnState from '../reducers/turnStateReducer';
import opponentHand from '../reducers/opponentHandReducer';
import players from '../reducers/playerReducer';
import cards from '../reducers/cardsReducer';

export default function configureStore (history, initialState) {
  const reducers = {

    //Deck-Builder State
    players: players,
    cards: cards,
    turnState: turnState,

    //Card Game State
    hand: hand,
    opponentHand: opponentHand,
    game: game,
    board: board,
    turn: turn,

  };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
