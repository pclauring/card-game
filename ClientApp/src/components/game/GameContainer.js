import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as handActions from '../../actions/handActions';
import HandContainer from '../hand/HandContainer';
import OpponentHand from '../opponent/OpponentHand';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
import Board from '../board/Board';
import GameCounter from './GameCounter';
import './Game.css';

class GameContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showPanel: false,
            playerId: 0
        };
        this.drawCard = this.drawCard.bind(this);
        this.showPanel = this.showPanel.bind(this);
        this.shuffleDiscardIntoDeck = this.shuffleDiscardIntoDeck.bind(this);
    }
    
    shuffleDiscardIntoDeck(event) {
        event.preventDefault();
        if (this.props.game.discard.length === 0) { return; }
        this.props.actions.shuffleDiscardIntoDeck(this.props.game);
    }


    drawCard(event) {
        event.preventDefault();
        if (this.props.game.deck.length === 0) { return; }
        var card = this.props.game.deck[0];
        this.props.actions.drawCard(card);
    }

    showPanel(event) {
        event.preventDefault();
        if (this.state.showPanel) {
            this.setState({
                showPanel: false
            });
        } else {
            this.setState({
                showPanel: true
            });
        }
    }

    render() {
        return (<div>
            <GameCounter
            deck={this.props.game.deck}
            discard={this.props.game.discard}
            hand={this.props.hand}
            board={this.props.board}
            playerTurn={this.props.playerTurn === this.state.playerId ? true : false}
            turnCount={this.props.turnCount}
            showPanel={this.state.showPanel}
            clickAction={this.showPanel} />
            <input 
                type="submit"
                value="Shuffle Discard into Deck"
                className="btn btn-primary shuffle-discard-btn"
                onClick={this.shuffleDiscardIntoDeck}
                /> 
            <div className="game-container">
            <div className="opponent-container">
                {this.props.opponentHand && <OpponentHand hand={this.props.opponentHand} />}
                </div>
                {this.props.hand && <HandContainer />}
            </div>
            <div className="game-board-container">
                <Deck deck={this.props.game.deck} drawCard={this.drawCard} />
                {this.props.game.discard && <Discard deck={this.props.game.discard} />}
                {this.props.board && <Board board={this.props.board} />}
            </div>
        </div>

        )
    }
}

function mapStateToProps(state, ownProps) {
    const playerId = Math.trunc((state.turn / state.game.phaseNumber) % state.game.playerNumber);
    console.log(playerId);
    return {
        game: state.game,
        hand: state.hand,
        opponentHand: state.opponentHand,
        board: state.board,
        playerTurn: playerId,
        turnCount: state.turn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(handActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);