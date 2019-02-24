import React from 'react';
import './Card.css';

const Card = ({ value, suit, id, clickAction, front = true, style = {} }) => {

    var cardContent;
    if (front) {
    cardContent = 
        <div className="game-card-content" data-suit={suit}>
            <div className="game-card-header">{displayCardValue(value)}<br/><span className="icon"></span></div>
            <div className="game-card-inner">
                {gameCardInner(value)}
            </div>
        </div>;
    }
    else {
        cardContent = <div className="card-back"></div>;
    }

    return (
        //n.b. pass the function
        <div className={"game-card " + (front ? "front" : "back")} style={style} onClick={() => clickAction ? clickAction(id) : null }>
            {cardContent}
        </div>);
}

function gameCardInner(value) {
    switch (value) {
        case 1:
            return <span className="icon big-icon"></span>;
        case 2:
            return iconRows([1,1]);
        case 3:
            return iconRows([1,1,1]);
        case 4:
            return iconRows([2,2]);
        case 5:
            return iconRows([2,1,2]);
        case 6:
            return iconRows([2,2,2]);
        case 7:
            return iconRows([2,1,2,2]);
        case 8:
            return iconRows([2,1,2,1,2]);
        case 9:
            return iconRows([2,2,1,2,2]);
        case 10:
            return iconRows([2,1,2,2,1,2]);
        case 11:
            return <span className="big-icon">J</span>;
        case 12:
            return <span className="big-icon">♕</span>;
        case 13:
            return <span className="big-icon">♔</span>;
        default:
            return null;
    }
}

function iconRows(arr) {
    return arr.map((num, index) => iconRow(num, index));
}

function iconRow(num, key) {
    return (
        <div key={key} className={"game-card-inner-row " + (num % 2 === 0 ? "even" : "odd")}>
            {Array.from(Array(num).keys()).map(x => <span key={key + "-" + x.toString()} className="icon"></span>)}
        </div>
    )
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