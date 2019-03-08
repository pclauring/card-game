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

    players: [
        {
            id: 1,
            health: 20,
            attack: 0,
            buy: 0,
            cardAreas: [
                {
                    id: 'DRAW',
                    cards: []
                },
                {
                    id: 'DISCARD',
                    cards: []
                },
                {
                    id: 'BOARD',
                    cards: []
                },
                {
                    id: 'HAND',
                    cards: []
                },
                {
                    id: 'SPELL_AREA',
                    cards: []
                },
            ]
        },
        {
            id: 2,
            health: 20,
            attack: 0,
            buy: 0,
            cardAreas: [
                {
                    id: 'DRAW',
                    cards: []
                },
                {
                    id: 'DISCARD',
                    cards: []
                },
                {
                    id: 'BOARD',
                    cards: []
                },
                {
                    id: 'HAND',
                    cards: []
                },
                {
                    id: 'SPELL_AREA',
                    cards: []
                },
            ]
        }
    ],

    Turns: {
        count: 0,
        currentPlayerId: 1,
        currentTurnPhase: turnPhase.MAIN,
    },

    playArea: [
        {
            id: 'SPECIAL_ATTACK_STORE',
            cards: []
        },
        {
            id: 'SPECIAL_BUY_STORE',
            cards: []
        },
        {
            id: 'STORE_DECK',
            cards: []
        },
        {
            id: 'STORE_BOARD',
            cards: []
        },
        {
            id: 'STORE_EXILE',
            cards: []
        },
    ]
};