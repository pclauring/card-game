import React from 'react';
import './Hand.css';
import Card from '../card/Card';

const Hand = ({ deck }) => {
    return (
        <div className="hand-container">
            {deck.map(card => <Card {...card} />)}
        </div>);
}

export default Hand;