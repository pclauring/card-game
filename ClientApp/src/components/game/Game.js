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
    }

    drawCard(event) {
        event.preventDefault();
        var card = this.props.game.deck[0];
        this.props.actions.drawCard(card);

    }

    render() {
        return (
            <div className="game-container">
            {/* <input 
                type="submit"
                value="Draw Hand"
                className="btn btn-primary"
                onClick={this.drawCard}
                />  */}
                
                {this.props.game.deck.length > 0 && <Deck deck={this.props.game.deck} drawCard={this.drawCard} />}
               {this.props.hand && <Hand hand={this.props.hand} />}
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