export function longestSubstringWithoutRepeatingCharacters(s: string) {
    let charFrequency = new Map();
    let windowStart = 0;
    let longest = 0;
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let curr = s[windowEnd];

        charFrequency.set(curr, charFrequency.has(curr) ? charFrequency.get(curr) + 1 : 1);
        while (charFrequency.get(curr) > 1) {
            charFrequency.set(s[windowStart], charFrequency.get(s[windowStart]) - 1)
            windowStart++
        }
        longest = Math.max(longest, windowEnd - windowStart + 1);

    }
    return longest;
}

