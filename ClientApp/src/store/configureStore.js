import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import game from '../reducers/gameReducer';
import hand from '../reducers/handReducer';
import board from '../reducers/boardReducer';
import turn from '../reducers/turnReducer';
import turnInfo from '../reducers/turnInfoReducer';
import opponentHand from '../reducers/opponentHandReducer';
import players from '../reducers/playerReducer';

export default function configureStore (history, initialState) {
  const reducers = {
    players: players,
    hand: hand,
    opponentHand: opponentHand,
    game: game,
    board: board,
    turn: turn,
    turnInfo: turnInfo

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
