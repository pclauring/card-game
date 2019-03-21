import React from 'react';
import './CardPile.css';
import Card from '../card/Card';

const CardPile = ({ cards, front = true, title }) => {
    return (
        <div className="card-pile-container card-stack">
            <div className="card-pile-body">
                {cards.slice(-5).map(card => <Card key={card.id} {...card}/>)}
            </div>
            <label className="card-pile-label">{title + " Count: " + cards.length}</label>
        </div>
    );
}

export default CardPile;