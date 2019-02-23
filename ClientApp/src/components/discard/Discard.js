import React from 'react';
import './Discard.css';
import Card from '../card/Card';

const Discard = ({ deck }) => {
    return (
        <div className="discard-container card-stack">
            <div className="discard-body">
                {deck.slice(-5).map(card => <Card key={card.id} {...card}/>)}
            </div>
            <label className="discard-label">{"Discard Count: " + deck.length}</label>
        </div>
    );
}

export default Discard;