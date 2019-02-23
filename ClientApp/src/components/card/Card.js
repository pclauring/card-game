import React from 'react';
import './Card.css';

const Card = ({ value, suit, id, clickAction, front = true }) => {

    var cardContent;
    if (front) {
    cardContent = <div class="card-content"><p>{displayCardValue(value)}</p><p>{suit}</p></div>;
    }
    else {
        cardContent = <div class="card-back"></div>;
    }

    return (
        //n.b. pass the function
        <div className={"game-card " + (front ? "front" : "back")} onClick={() => clickAction ? clickAction(id) : null }>
            {cardContent}
        </div>);
}

function displayCardValue(value) {
    switch(value) {
        case 1:
            return "A";
        case 11:
            return "J";
        case 12:
            return "Q";
        case 13:
            return "K";
        default:
            return value;
    }
}

export default Card;