import React from 'react';
import './Deck.css';

const Deck = ({ deck, drawCard }) => {
    return (
        <div className="deck-container">
            <div className="deck-body" onClick={drawCard}>{"Card Count: " + deck.length}</div>
        </div>
        );
}

export default Deck;