import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as handActions from '../../actions/handActions';
import Hand from '../hand/Hand';
import Deck from '../deck/Deck';
import './Game.css';

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.drawCard = this.drawCard.bind(this);
        this.discardCard = this.discardCard.bind(this);
    }

    drawCard(event) {
        event.preventDefault();
        if(this.props.game.deck.length === 0){ return;}
        var card = this.props.game.deck[0];
        this.props.actions.drawCard(card);
    }

    discardCard(cardId) {
        this.props.actions.discardCard(cardId);
    }

    render() {
        return (
            <div className="game-container">
                <Deck deck={this.props.game.deck} drawCard={this.drawCard} />
               {this.props.hand && <Hand hand={this.props.hand} discardCard={this.discardCard} />}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log('Hand in state:' + state.hand.length);
    return {
        game: state.game,
        hand: state.hand
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(handActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);