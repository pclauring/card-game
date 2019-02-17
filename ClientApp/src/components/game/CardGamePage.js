import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';

class CardGamePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.game.cards}</h1>
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