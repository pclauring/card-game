import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../actions/playerActions';
import Hand from '../hand/Hand';

class DeckBuilderPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {this.props.player.id}
                <Hand hand={this.props.player.cardAreas["hand"]} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const player = state.players[0];
    return {
        player: player
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilderPage);