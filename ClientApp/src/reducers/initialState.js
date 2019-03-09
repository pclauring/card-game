const turnPhase = {
    MAIN: 1,
    CLEANUP: 2,
    DRAW: 3,
};

export default {
    game: {
        deck: [],
        discard: [],
        turnPhases: [],
        PhaseNum: 0,
        PlayerNum: 0,
        player1: {},
        player2: {},
    },
    opponentHand: [
        {
            id: "Hearts-4",
            index: 17,
            location: "DECK",
            suit: "Hearts",
            value: 4,
        },
        {
            id: "Clubs-5",
            index: 14,
            location: "DECK",
            suit: "Clubs",
            value: 5,
        },
        {
            id: "Diamonds-3",
            index: 3,
            location: "DECK",
            suit: "Diamonds",
            value: 3,
        },
    ],
    hand: [],
    board: [],
    turn: 0,
    //Test Initial State Start
    players: [
        {
            id: 1,
            health: 20,
            attack: 0,
            buy: 0,
            handSize: 5,
            cardAreas: {
                draw: [],
                discard: [],
                board: [{
                    id: "Hearts-4",
                    index: 17,
                    location: "DECK",
                    suit: "Hearts",
                    value: 4,
                }],
                hand: [{
                    id: "Hearts-4",
                    index: 17,
                    location: "DECK",
                    suit: "Hearts",
                    value: 4,
                },
                {
                    id: "Clubs-5",
                    index: 14,
                    location: "DECK",
                    suit: "Clubs",
                    value: 5,
                },
                {
                    id: "Diamonds-3",
                    index: 3,
                    location: "DECK",
                    suit: "Diamonds",
                    value: 3,
                }],
                spellArea: [],
            },
        },
        {
            id: 2,
            health: 20,
            attack: 0,
            buy: 0,
            handSize: 5,
            cardAreas: {
                draw: [],
                discard: [],
                board: [],
                hand: [],
                spellArea: [],
            },
        }
    ],

    Turns: {
        count: 0,
        currentPlayerId: 1,
        currentTurnPhase: turnPhase.MAIN,
    },

    playArea: {
            specialAttackStore: [],
            specialBuyStore: [],
            storeDeck: [],
            storeBoard: [],
            storeExile: []
        }
};