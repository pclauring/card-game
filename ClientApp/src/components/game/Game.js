import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as handActions from '../../actions/handActions';
import Hand from '../hand/Hand';

var divStyle = {
    display: 'flex'
  };

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.drawHand = this.drawHand.bind(this);
    }

    drawHand(event) {
        event.preventDefault();
        var card = this.props.game.deck[0];
        this.props.actions.drawCard(card);

    }

    render() {
        return (
            <div style={divStyle}>
            <input 
                type="submit"
                value="Draw Hand"
                className="btn btn-primary"
                onClick={this.drawHand}
                /> 
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