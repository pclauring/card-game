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
    turn: 0
};