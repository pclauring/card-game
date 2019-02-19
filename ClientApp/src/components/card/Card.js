import React from 'react';
import './Card.css';

const Card = ({ value, suit }) => {
    return (
        <div className="game-card">
            <p>{value}</p>
            <p>{suit}</p>
        </div>);
}

export default Card;