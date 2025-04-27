// Creating a frequency map

const createCharMap = (s) => {
    const freq = {}

    for (let c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }
    console.log(freq)

}

createCharMap("applepie")
createCharMap("aabbcc")
createCharMap("bananas")