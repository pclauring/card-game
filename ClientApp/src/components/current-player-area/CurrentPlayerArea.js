import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../actions/playerActions';
import Hand from '../hand/Hand';
import Board from '../board/Board';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';

class CurrentPlayerArea extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <Hand hand={this.props.player.cardAreas["hand"]} />
                <Board board={this.props.player.cardAreas["board"]}/>
                <Deck deck={this.props.player.cardAreas["draw"]}/>
                <Discard discard={this.props.player.cardAreas["discard"]}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const currentPlayerId = state.turnInfo.currentPlayerId;
    const player = state.players.find( player => player.id === currentPlayerId);
    return {
        player: player
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPlayerArea);