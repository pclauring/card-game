import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as deckBuilderActions from '../../actions/deckBuilderActions';
import Hand from '../hand/Hand';
import Board from '../board/Board';
import Deck from '../deck/Deck';
import Discard from '../discard/Discard';
import CardPile from '../card-pile/CardPile';
import './PlayArea.css';
import { getCards } from '../../selectors/cardSelector';

const PlayerActiveSection = ({ player, opponent }) => {
    let activeSection;
    if (opponent) {
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
                <PlayerActiveSection opponent={true} />
                <div className="shared-area-container">
                </div>
                <PlayerActiveSection opponent={false} />
            </div>
        )
    }
}
const getCardsById = (cards, playerId) => {
    const cardsById = cards.filter(card => card.owner === playerId);
    return cardsById
}

const getPlayerById = (players, playerId) => {
    return players.filter(player => player.id === playerId);
}

function mapStateToProps(state, ownProps) {
    const cards = state.cards.AllIds.map(id => state.cards.ById[id]);
    const players = state.players.AllIds.map(id => state.players.ById[id]);
    console.log(players);
    console.log(getCards(state));
    const cardsById = getCardsById(cards, "player1");
    const playerById = getPlayerById(players, "player1");
    console.log(playerById);
    console.log(cardsById);
    return {
        cards: cardsById
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(deckBuilderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);