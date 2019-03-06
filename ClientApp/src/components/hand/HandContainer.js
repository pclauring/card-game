import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as handActions from '../../actions/handActions';
import Hand from './Hand';
import HandActionMenu from './HandActionMenu';

class HandContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedCard: {},
            displayMenu: false
        };
       this.discardCard = this.discardCard.bind(this);
       this.playCard = this.playCard.bind(this);
       this.selectCard = this.selectCard.bind(this);
    }

    
    discardCard(cardId) {
        var discardCard = this.props.hand.find(card => card.id === cardId);
        if(discardCard !== undefined) {
        this.props.actions.discardCard(discardCard);
        this.setState({ displayMenu: false});
        }
    }

    playCard(cardId) {
        var playCard = this.props.hand.find(card => card.id === cardId);
        if(playCard !== undefined){
            this.props.actions.playCard(playCard);
            this.setState({ displayMenu: false});
        } 
    }

    selectCard(cardId){
        var selectCard = this.props.hand.find(card => card.id === cardId);
        this.setState({ 
            selectedCard: selectCard,
            displayMenu: true });
        ;
    }

    render() {

    const {hand} = this.props;
        return (
            <div>
                <Hand
                    hand={hand}
                    selectCard={this.selectCard}
                    />
               <HandActionMenu 
                    currentTurn={this.props.currentTurn}
                    display={this.state.displayMenu}
                    playCard={this.playCard}
                    discardCard={this.discardCard}
                    selectedCard={this.state.selectedCard} 
                    />
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        hand: state.hand
    };
}

function mapDispatchToProps(dispatch) {
   return {
       actions: bindActionCreators(handActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HandContainer);