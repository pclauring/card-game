import React from 'react';
import './Game.css';

const countSuit = (array, suit) => {
  var suitCount = array.reduce(function (suitTotal, currentCard) {
    return suitTotal + (currentCard.suit === suit ? 1 : 0);
  }, 0);
  return suitCount;
}

const GameCounter = ({ deck, hand, discard, board, showPanel = false, clickAction, turnCount, playerTurn }) => {
  const panelClasses = ['game-counter-panel'];
  if (showPanel) { panelClasses.push('show'); }
  

  return (
    <div className="game-counter-container">
  <button className="game-counter-accordian" onClick={clickAction}>Game Dashboard</button>
  <div className={panelClasses.join(' ')}>
  <h6>Turn Counter: {turnCount}</h6>
  <h6>Player Turn: {playerTurn}</h6>
    <table >
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th>Count</th>
            <th scope="col"><span className="game-counter-icon">♥</span></th>
            <th scope="col"><span className="game-counter-icon">♦</span></th>
            <th scope="col"><span className="game-counter-icon">♣</span></th>
            <th scope="col"><span className="game-counter-icon">♠</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Deck</td>
            <td>{deck.length}</td>
            <td>{countSuit(deck, "Hearts")}</td>
            <td>{countSuit(deck, "Diamonds")}</td>
            <td>{countSuit(deck, "Clubs")}</td>
            <td>{countSuit(deck, "Spades")}</td>
          </tr>
          <tr>
            <td>Discard</td>
            <td>{discard.length}</td>
            <td>{countSuit(discard, "Hearts")}</td>
            <td>{countSuit(discard, "Diamonds")}</td>
            <td>{countSuit(discard, "Clubs")}</td>
            <td>{countSuit(discard, "Spades")}</td>
          </tr>
          <tr>
            <td>Board</td>
            <td>{board.length}</td>
            <td>{countSuit(board, "Hearts")}</td>
            <td>{countSuit(board, "Diamonds")}</td>
            <td>{countSuit(board, "Clubs")}</td>
            <td>{countSuit(board, "Spades")}</td>
          </tr>
          <tr>
            <td>Hand</td>
            <td>{hand.length}</td>
            <td>{countSuit(hand, "Hearts")}</td>
            <td>{countSuit(hand, "Diamonds")}</td>
            <td>{countSuit(hand, "Clubs")}</td>
            <td>{countSuit(hand, "Spades")}</td>
          </tr>
        </tbody>
  </table> 
  </div>
  <div>Test</div>
    </div> 
  );
}


export default GameCounter;