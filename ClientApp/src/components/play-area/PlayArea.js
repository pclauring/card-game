import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../actions/playerActions';
import Hand from '../hand/Hand';
import Board from '../board/Board';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
import CardPile from '../card-pile/CardPile';
import './PlayArea.css';

const PlayerArea = ({ player, opponent }) => {
    let activeSection;
    if(opponent) {
        activeSection = <div>
        <div>
            <Hand hand={[]} front={false}/>
            </div>
            <div className="played-card-area">
            <Board board={[]} />
            <CardPile title="Spell Area" cards={[]}/>
            </div>
        </div>;
    } else {
        activeSection = <div>
                        <div className="played-card-area">
                        <Board board={[]} />
                        <CardPile title="Spell Area" cards={[]}/>
                        </div>
                        <div>
                        <Hand hand={[]} front={true}/>
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
    );
}


class PlayArea extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div className="play-area-container">
                <PlayerArea opponent={true} />
                <div className="shared-area-container">
                    Shared Board
                </div>
                <PlayerArea opponent={false}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);