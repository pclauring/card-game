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
        
    }


    render() {
        return (
            <div>
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