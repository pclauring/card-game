import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../actions/playerActions';
import Hand from '../hand/Hand';
import Board from '../board/Board';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
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
                    Opponent
                </div>
                <div className="shared-area-container">
                    Shared Board
                </div>
                <div className="current-player-container">
                    <div className="current-player-active-area">
                        <Board board={this.props.player.cardAreas["board"]} />
                        <Hand hand={this.props.player.cardAreas["hand"]} />
                    </div>
                    <div className="current-player-resource-area">
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
    const player = state.players.find(player => player.id === currentPlayerId);
    return {
        player: player
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);