import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deckBuilderActions from '../../actions/deckBuilderActions';
import PlayerActiveSection from './PlayerActiveSection';
import './PlayArea.css';
import * as cardSelector from '../../selectors/cardSelector';



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
    let currentPlayerCards = cardSelector.getAllCardsForCurrentPlayer(state);
    let opponentPlayerCards = cardSelector.getAllCardsForOpposingPlayer(state);

    return {
        currentPlayer: state.players.ById[state.turnState.currentPlayerId],
        opposingPlayer: state.players.ById[state.turnState.opposingPlayerId],
        currentPlayerCards: currentPlayerCards,
        opponentPlayerCards: opponentPlayerCards
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deckBuilderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);