import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../../actions/gameActions';

const Card = ({ value, suit }) => {
    return (
        <div>
            <h1>{value}</h1>
            <h1>{suit}</h1>
        </div>);
}

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {this.props.game.deck.map(card => <Card {...card} />)}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state.game.deck);
    return {
        game: state.game
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gameActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);