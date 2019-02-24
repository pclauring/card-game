import React from 'react';
import './HandActionMenu.css';

const HandActionMenu = ({ selectedCard, playCard, discardCard }) => {

    return (
        <div>
            <h4>Card Actions</h4>
            <h6>{selectedCard.id}</h6>
            <input
                type="submit"
                value="Play"
                className="btn btn-primary"
                onClick={() => playCard ? playCard(selectedCard.id) : null }
            />
            <input
                type="submit"
                value="Discard"
                className="btn btn-secondary"
                onClick={() => discardCard ? discardCard(selectedCard.id) : null }
            />
        </div>
    );
}



export default HandActionMenu;