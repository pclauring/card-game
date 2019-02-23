import React from 'react';
import './Card.css';

const Card = ({ value, suit, id, discardCard }) => {
    return (
        //n.b. pass the function
        <div className="game-card" onClick={() => discardCard(id)}>
            <p>{displayCardValue(value)}</p>
            <p>{suit}</p>
        </div>);
}

function displayCardValue(value) {
    switch(value) {
        case 1:
            return "A";
        case 11:
            return "J";
        case 12:
            return "Q";
        case 13:
            return "K";
        default:
            return value;
    }
}

export default Card;