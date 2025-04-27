const nextDigits = new Map();
for (let i = 0; i < 10; i++) {
    let nextVal = (i + 1) % 10;
    nextDigits.set(i.toString(), nextVal.toString())
}
const previousDigits = new Map();
for (let [key, val] of nextDigits.entries()) {
    previousDigits.set(val, key);
}


function openLock(targetCombo, trappedCombos) {
    if (targetCombo === "0000") { return 0 };
    const trappedComboSet = new Set([...trappedCombos]);
    const queue = ["0000"];
    const steps = new Map();
    steps.set("0000", 0);

    while (queue.length > 0) {
        let combo = queue.shift();
        for (let i = 0; i < 4; i++) {
            let newCombo = combo.slice(0, i) + nextDigits.get(combo.charAt(i)) + combo.slice(i + 1);
            if (!trappedComboSet.has(newCombo) && !steps.has(newCombo)) {
                queue.push(newCombo);
                steps.set(newCombo, steps.get(combo) + 1);
                if (newCombo === targetCombo) return steps.get(newCombo);
            }

            newCombo = combo.slice(0, i) + previousDigits.get(combo.charAt(i)) + combo.slice(i + 1);
            if (!trappedComboSet.has(newCombo) && !steps.has(newCombo)) {
                queue.push(newCombo);
                steps.set(newCombo, steps.get(combo) + 1);
                if (newCombo === targetCombo) return steps.get(newCombo);
            }
        }
    }
    return -1;
}

console.log(openLock("0202", ["0201","0101","0102","1212","2002"]))