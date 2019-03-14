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
    }

    render() {
        return (
            <div className="play-area-container">
                <div className="opposing-player-container">
                    <div>
                        <Hand hand={this.props.opposingPlayer.cardAreas["hand"]} front={false}/>
                        <Board board={this.props.opposingPlayer.cardAreas["board"]} />
                    </div>
                    <div className="player-resource-area">
                        <div className="health-section">{this.props.opposingPlayer.health}</div>
                        <div className="deck-pile-section">
                            <Deck deck={this.props.opposingPlayer.cardAreas["draw"]} />
                            <Discard discard={this.props.opposingPlayer.cardAreas["discard"]} />
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
                        <Board board={this.props.player.cardAreas["board"]} />
                        <CardPile title="Spell Area" cards={this.props.player.cardAreas["spellArea"]}/>
                        </div>
                        <Hand hand={this.props.player.cardAreas["hand"]} />
                    </div>
                    <div className="player-resource-area">
                        <div className="health-section">{this.props.player.health}</div>
                        <div className="deck-pile-section">
                            <Deck deck={this.props.player.cardAreas["draw"]} />
                            <Discard discard={this.props.player.cardAreas["discard"]} />
                        </div>
                        <div className="resource-section">{this.props.player.attack}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const currentPlayerId = state.turnInfo.currentPlayerId;
    const opposingPlayerId = state.turnInfo.opposingPlayerId;
    const player = state.players.find(player => player.id === currentPlayerId);
    const opposingPlayer = state.players.find(player => player.id === opposingPlayerId);
    return {
        player: player,
        opposingPlayer: opposingPlayer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);