import React from 'react';
import './Card.css';

const Card = ({ value, suit, id, discardCard }) => {
    return (
        //n.b. pass the function
        <div className="game-card" onClick={() => discardCard(id)}>
            <p>{value}</p>
            <p>{suit}</p>
        </div>);
}

export default Card;