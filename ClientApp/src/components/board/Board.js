import React from 'react';
import './Board.css';
import Card from '../card/Card';

const Board = ({ board }) => {
    return (
        <div className="hand-container">
            {board.map(card => <Card key={card.id} {...card} />)}
        </div>);
}

export default Board;