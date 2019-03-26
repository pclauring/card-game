export default {
    players: {
        ById: {
        "player1": {
            id: "player1",
            health: 20,
            attack: 0,
            buy: 0,
            handSize: 5,
        },
        "player2": {
            id: "player2",
            health: 20,
            attack: 0,
            buy: 0,
            handSize: 5,
        }
    },
    AllIds: ["player1", "player2"]
},

    cards: {
        ById: {
            "card-1": {
                id: "card-1",
                name: "soldier",
                location: "DECK",
                owner: "player1",
                value: 0,
                cost: 1,
                damage: 1,
            },
            "card-2": {
                id: "card-2",
                name: "soldier",
                location: "DECK",
                owner: "player2",
                value: 0,
                cost: 1,
                damage: 1,
            },
            "card-3": {
                id: "card-3",
                name: "soldier",
                location: "HAND",
                owner: "player1",
                value: 0,
                cost: 1,
                damage: 1,
            },
            "card-4": {
                id: "card-4",
                name: "wizard",
                location: "DECK",
                owner: "player1",
                value: 0,
                cost: 1,
                damage: 1,
            },
            "card-5": {
                id: "card-5",
                name: "wizard",
                location: "HAND",
                owner: "player1",
                value: 0,
                cost: 1,
                damage: 1,
            },
           
        },
        AllIds: ["card-1", "card-2", "card-3", "card-4", "card-5"]
    },

    turnState: {
        count: 0,
        currentPlayerId: "player1",
        opposingPlayerId: "player2",
        currentTurnPhase: "MAIN",
    },

    playArea: {
        specialAttackStore: [],
        specialBuyStore: [],
        storeDeck: [],
        storeBoard: [],
        storeExile: []
    }
};