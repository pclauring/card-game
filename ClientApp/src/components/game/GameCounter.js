import React from 'react';
import './Game.css';

const GameCounter = ({ deck, hand, discard, board}) => {
    return (
        <div className="game-counter-container">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Deck</th>
      <th scope="col">Discard</th>
      <th scope="col">Hand</th>
      <th scope="col">Board</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{deck.length}</td>
      <td>{discard.length}</td>
      <td>{hand.length}</td>
      <td>{board.length}</td>
    </tr>
  </tbody>
</table>
         </div>
        );
}

export default GameCounter;