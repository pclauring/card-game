import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deckBuilderActions from '../../actions/deckBuilderActions';
import Hand from '../hand/Hand';
import Board from '../board/Board';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
import CardPile from '../card-pile/CardPile';
import * as cardSelector from '../../selectors/cardSelector';



class PlayerActiveSection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    
    render() {

    let activeSection;
    if (this.props.opponent) {
        activeSection = <div>
            <div>
                <Hand hand={[]} front={false} />
            </div>
            <div className="played-card-area">
                <Board board={[]} />
                <CardPile title="Spell Area" cards={[]} />
            </div>
        </div>;
    } else {
        activeSection = <div>
            <div className="played-card-area">
                <Board board={[]} />
                <CardPile title="Spell Area" cards={[]} />
            </div>
            <div>
                <Hand hand={[]} front={true} />
            </div>
        </div>;
    };
    return (
        <div className="opposing-player-container">
            <div>
                {activeSection}
            </div>
            <div className="player-resource-area">
                <div className="health-section">20</div>
                <div className="deck-pile-section">
                    <Deck deck={[]} />
                    <Discard discard={[]} />
                </div>
                <div className="resource-section">{[]}</div>
            </div>
        </div>
    )
    }
}


function mapStateToProps(state, props) {
    let cards = cardSelector.getCardsbyPlayerId(state, props);
    console.log(cards);
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deckBuilderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerActiveSection);