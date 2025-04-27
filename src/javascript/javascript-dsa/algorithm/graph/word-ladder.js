const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getNeighbors(word, unvisitedWords) {
    const unvisitedNeighbors = [];
    for (let i = 0; i < word.length; i++) {
        for (const letter of alphabet) {
            const newWord = word.slice(0, i) + letter.toUpperCase() + word.slice(i + 1);
            if (unvisitedWords.has(newWord)) {
                unvisitedNeighbors.push(newWord);
                unvisitedWords.delete(newWord);
            }
        }
    }
    return unvisitedNeighbors;
}
function wordLadder(begin, end, wordList) {
    const unvisitedWords = new Set(wordList);
    const queue = [begin];
    unvisitedWords.delete(begin);
    let distance = 0;

    while (queue.length > 0) {
        const n = queue.length;
        distance++;
        for (let i = 0; i < n; i++) {
            let word = queue.shift();
            for (const neighbor of getNeighbors(word.toUpperCase(), unvisitedWords)) {
                if (neighbor === end) { return distance };
                queue.push(neighbor);
            }
        }
    }
    return -1;
}

console.log(wordLadder("COLD", "WARM", ["COLD", "GOLD", "CORD", "SOLD", "CARD", "WARD", "WARM", "TARD"]))