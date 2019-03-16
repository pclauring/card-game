import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../actions/playerActions';
import Hand from '../hand/Hand';
import Board from '../board/Board';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
import CardPile from '../card-pile/CardPile';
import './PlayArea.css';

class PlayArea extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(event) {
        event.preventDefault();
        if (this.props.currentPlayerDeck.length === 0) { return; }
        let cardDrawInfo = {
            drawNum: 1,
            playerId: this.props.currentPlayer.id
        };
        this.props.actions.drawCard(cardDrawInfo);
    }

    render() {
        return (
            <div className="play-area-container">
                <div className="opposing-player-container">
                    <div>
                        <Hand hand={this.props.opposingPlayer["hand"]} front={false}/>
                        <Board board={this.props.opposingPlayer["board"]} />
                    </div>
                    <div className="player-resource-area">
                        <div className="health-section">{this.props.opposingPlayer.health}</div>
                        <div className="deck-pile-section">
                            <Deck deck={this.props.opposingPlayer["draw"]} />
                            <Discard discard={this.props.opposingPlayer["discard"]} />
                        </div>
                        <div className="resource-section">{this.props.opposingPlayer.attack}</div>
                    </div>
                </div>
                <div className="shared-area-container">
                    Shared Board
                </div>
                <div className="current-player-container">
                    <div className="active-card-area">
                        <div className="played-card-area">
                        <Board board={this.props.currentPlayerBoard} />
                        <CardPile title="Spell Area" cards={this.props.currentPlayerSpellArea}/>
                        </div>
                        <div>
                        <Hand hand={this.props.currentPlayerHand} />
                        </div>
                    </div>
                    <div className="player-resource-area">
                        <div className="health-section">{this.props.currentPlayer.health}</div>
                        <div className="deck-pile-section">
                            <Deck deck={this.props.currentPlayerDeck} />
                            <Discard discard={this.props.currentPlayerDiscard} />
                        </div>
                        <div className="resource-section">{this.props.currentPlayer.attack}</div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.drawCard}>Draw</button>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        currentPlayerDeck: state.players[0]["draw"],
        currentPlayerHand: state.players[0]["hand"],
        currentPlayerDiscard: state.players[0]["discard"],
        currentPlayerBoard: state.players[0]["board"],
        currentPlayerSpellArea: state.players[0]["spellArea"],
        currentPlayer: state.players[0],
        opposingPlayer: state.players[1]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);