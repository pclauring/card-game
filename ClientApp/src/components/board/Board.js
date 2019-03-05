import React from 'react';
import styles from './Board.module.css';
import Card from '../card/Card';

const Board = ({ board }) => {
    return (
        <div className={styles.board_container}>
            {board.map(card => <Card key={card.id} {...card} />)}
        </div>);
}

export default Board;