import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import GameContainer from './GameContainer';

class CardGamePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.shuffleDiscardIntoDeck = this.shuffleDiscardIntoDeck.bind(this);
    }

    shuffleDiscardIntoDeck(event) {
        event.preventDefault();
        if (this.props.game.discard.length === 0) { return; }
        this.props.actions.shuffleDiscardIntoDeck(this.props.game);
    }


    render() {
        return (
            <div>
                <input 
                type="submit"
                value="Shuffle Discard into Deck"
                className="btn btn-primary"
                onClick={this.shuffleDiscardIntoDeck}
                /> 
                <GameContainer game={this.props.game}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        game: state.game
    };
}

function mapDispatchToProps(dispatch) {
   return {
       actions: bindActionCreators(gameActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGamePage);