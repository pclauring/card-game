import React from 'react';
import './Discard.css';

const Discard = ({ deck }) => {
    return (
        <div className="discard-container">
            <div className="discard-body">{deck.length > 0 ? "Card Count: " + deck.length : "Discard Empty"}</div>
        </div>
    );
}

export default Discard;