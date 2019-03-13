export const turnPhase = {
    MAIN: 1,
    CLEANUP: 2,
    DRAW: 3,
};

export default {
    deckbuilder: {
    players: [
        {
            id: 1,
            health: 20,
            attack: 0,
            buy: 0,
            handSize: 5,
            cardAreas: {
                draw: [{
                    id: "Hearts-4",
                    index: 17,
                    location: "DECK",
                    suit: "Hearts",
                    value: 4,
                }],
                discard: [{
                    id: "Hearts-4",
                    index: 17,
                    location: "DECK",
                    suit: "Hearts",
                    value: 4,
                }],
                board: [{
                    id: "Hearts-4",
                    index: 17,
                    location: "DECK",
                    suit: "Hearts",
                    value: 4,
                }],
                hand: [
                {
                    id: "Diamonds-3",
                    index: 3,
                    location: "DECK",
                    suit: "Diamonds",
                    value: 3,
                },
                {
                    id: "Diamonds-3",
                    index: 3,
                    location: "DECK",
                    suit: "Diamonds",
                    value: 3,
                }],
                spellArea: [{
                    id: "Hearts-4",
                    index: 17,
                    location: "DECK",
                    suit: "Hearts",
                    value: 4,
                }],
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

    turns: {
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
    }
};