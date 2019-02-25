import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as handActions from '../../actions/handActions';
import HandContainer from '../hand/HandContainer';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
import Board from '../board/Board';
import './Game.css';

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(event) {
        event.preventDefault();
        if (this.props.game.deck.length === 0) { return; }
        var card = this.props.game.deck[0];
        this.props.actions.drawCard(card);
    }


    render() {
        return (<div>
            <div className="game-container">
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
    return {
        game: state.game,
        hand: state.hand,
        board: state.board
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(handActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);