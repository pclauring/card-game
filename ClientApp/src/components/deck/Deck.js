import React from 'react';
import './Deck.css';
import Card from '../card/Card';

const Deck = ({ deck, drawCard }) => {
    return (
        <div className="deck-container card-stack">
            <div className="deck-body" onClick={drawCard}>
                {deck.slice(0, 5).reverse().map(card => <Card key={card.id} {...card} front={false} />)}
            </div>
            <label className="deck-label">{"Deck Count: " + deck.length}</label>
         </div>
        );
}

export default Deck;