import React from 'react';
import './HandActionMenu.css';

const HandActionMenu = ({ selectedCard, playCard, discardCard }) => {

    return (
        <div className="hand-menu-container">
            <div className="hand-menu-body">
            <label className="hand-menu-action-label">
                {"Selected Card: " + selectedCard.id}
                </label>
                <div className="hand-menu-actions">
                    <input
                        type="submit"
                        value="Play"
                        className="btn btn-primary"
                        onClick={() => playCard ? playCard(selectedCard.id) : null}
                    />
                    <input
                        type="submit"
                        value="Discard"
                        className="btn btn-secondary"
                        onClick={() => discardCard ? discardCard(selectedCard.id) : null}
                    />
                </div>
            </div>
        </div>
    );
}



export default HandActionMenu;