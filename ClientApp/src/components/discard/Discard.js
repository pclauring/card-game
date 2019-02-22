import React from 'react';
import './Discard.css';

const Discard = ({ deck, drawCard }) => {
    return (
        <div className="deck-container">
            <div className="deck-body" onClick={drawCard}>{deck.length > 0 ? "Card Count: " + deck.length : "Deck Empty"}</div>
        </div>
        );
}

export default Discard;