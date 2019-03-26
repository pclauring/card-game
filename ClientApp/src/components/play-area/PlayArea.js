import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deckBuilderActions from '../../actions/deckBuilderActions';
import Hand from '../hand/Hand';
import Board from '../board/Board';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
import CardPile from '../card-pile/CardPile';
import './PlayArea.css';
import * as cardSelector from '../../selectors/cardSelector';

const PlayerActiveSection = ({ player, opponent }) => {
    let activeSection;
    if (opponent) {
        activeSection = <div>
            <div>
                <Hand hand={[]} front={false} />
            </div>
            <div className="played-card-area">
                <Board board={[]} />
                <CardPile title="Spell Area" cards={[]} />
            </div>
        </div>;
    } else {
        activeSection = <div>
            <div className="played-card-area">
                <Board board={[]} />
                <CardPile title="Spell Area" cards={[]} />
            </div>
            <div>
                <Hand hand={[]} front={true} />
            </div>
        </div>;
    };

    return (
        <div className="opposing-player-container">
            <div>
                {activeSection}
            </div>
            <div className="player-resource-area">
                <div className="health-section">20</div>
                <div className="deck-pile-section">
                    <Deck deck={[]} />
                    <Discard discard={[]} />
                </div>
                <div className="resource-section">{[]}</div>
            </div>
        </div>
    );
}


class PlayArea extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div className="play-area-container">
                <PlayerActiveSection opponent={true} />
                <div className="shared-area-container">
                </div>
                <PlayerActiveSection opponent={false} />
            </div>
        )
    }
}

export const getCardsByLocation = (cards, location) => {
    switch(location){
        case "DRAW":
        return cards.filter(card => card.location === "DRAW");
        case "DISCARD":
        return cards.filter(card => card.location === "DISCARD");
        case "BOARD":
        return cards.filter(card => card.location === "BOARD");
        case "SPELL_AREA":
        return cards.filter(card => card.location === "SPELL_AREA");
        case "HAND":
        return cards.filter(card => card.location === "HAND");
        default:
        throw new Error(`Unknown Location: ${location}`);
    }
}

function mapStateToProps(state, ownProps) {
    
    return {
        currentPlayerCards: cardSelector.getAllCardsForCurrentPlayer(state),
        opposingPlayerCards: cardSelector.getAllCardsForOpposingPlayer(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deckBuilderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);