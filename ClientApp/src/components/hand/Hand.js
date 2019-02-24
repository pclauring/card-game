import React from 'react';
import './Hand.css';
import Card from '../card/Card';

const Hand = ({ hand, selectCard }) => {
    return (
        <div className={"hand-container"} style={handStyle(hand.length)}>
            {hand.map((card, index) => <Card key={card.id} {...card} clickAction={selectCard} style={cardStyle(index, hand.length)} />)}
        </div>);
}

function cardStyle(index, count) {
    var maxDegrees = Math.min(2*count, 30);
    var degreeDiff = maxDegrees/count;
    var rotation = index*degreeDiff - maxDegrees/2 + 0.5*degreeDiff;

    //this is far less scientific than it looks
    var yTranslate = 720*Math.pow(Math.sin(rotation * Math.PI / 180.0), 2);

    var percentLeft = 100*Math.cos(rotation * Math.PI / 180)*(index - count/2 + 0.5)/count + 50;

    return {
        left: percentLeft + '%',
        transform: 'translateY(' + yTranslate + 'px) rotate(' + rotation + 'deg)'
    }
}

function handStyle(count) {
    return {
        maxWidth: 75*count + 'px',
    }
}

export default Hand;