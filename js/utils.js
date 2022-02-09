function shuffleArray(array) {
    // Durstenfeld shuffle algorhythm optimization of Fisher-Yates shuffle algorhythm\
    // Attribution:  Accessed on 2022-02-04 at https://www.thiscodeworks.com/durstenfeld-shuffle-algorithm-optimized-fisher-yates-javascript-vanilla-sort-randomize-array/60cd9c0b0c21d80014540536
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function removeAllChildren(parentNode){
    /// Attribution:  Accessed on 2022-02-03 at https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
    while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}