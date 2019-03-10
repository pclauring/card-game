import React from 'react';
import './Discard.css';
import Card from '../card/Card';

const Discard = ({ discard }) => {
    return (
        <div className="discard-container card-stack">
            <div className="discard-body">
                {discard.slice(-5).map(card => <Card key={card.id} {...card}/>)}
            </div>
            <label className="discard-label">{"Discard Count: " + discard.length}</label>
        </div>
    );
}

export default Discard;