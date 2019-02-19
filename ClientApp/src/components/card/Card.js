import React from 'react';
import './Card.css';

const Card = ({ value, suit }) => {
    return (
        <div  className="game-card">
            <h1>{value}</h1>
            <h1>{suit}</h1>
        </div>);
}

export default Card;