export function shuffle (array) {
    //shuffle Fisher Yates ES6 double var assignment in one line
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function sortByIndex(array){
    //Sort by index prop of card expects an array of card objects
           array.sort(function(a, b){
                return a.index - b.index
            });
    }
