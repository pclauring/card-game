import React from 'react';
import './Hand.css';
import Card from '../card/Card';

const Hand = ({ hand, discardCard }) => {
    return (
        <div className="hand-container">
            {hand.map(card => <Card key={card.id} {...card} discardCard={discardCard} />)}
        </div>);
}

export default Hand;