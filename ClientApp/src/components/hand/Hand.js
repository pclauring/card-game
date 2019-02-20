import React from 'react';
import './Hand.css';
import Card from '../card/Card';

const Hand = ({ hand }) => {
    return (
        <div className="hand-container">
            {hand.map(card => <Card key={card.id} {...card} />)}
        </div>);
}

export default Hand;