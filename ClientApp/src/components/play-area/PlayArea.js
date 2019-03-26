import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deckBuilderActions from '../../actions/deckBuilderActions';
import PlayerActiveSection from './PlayerActiveSection';
import './PlayArea.css';



class PlayArea extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div className="play-area-container">
                <PlayerActiveSection opponent={true} playerId={this.props.opposingPlayerId}/>
                <div className="shared-area-container">
                </div>
                <PlayerActiveSection opponent={false} playerId={this.props.currentPlayerId}/>
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
        currentPlayerId: state.turnState.currentPlayerId,
        opposingPlayerId: state.turnState.opposingPlayerId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deckBuilderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);