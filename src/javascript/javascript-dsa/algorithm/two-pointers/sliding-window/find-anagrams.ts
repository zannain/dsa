/*
    Time Complexity: O(N)
    Space Complexity: O(c) where c is the size of the check
*/
export function findStringAnagrams(str: string, pattern: string) {
    let windowStart = 0,
        matched: number = 0,
        charFrequency: {[key: string]: number} = {};
    const resultIndices = [];

    // 1. Create hashmap of anagram pattern
    for (let i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
    }

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }

      if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
        resultIndices.push(windowStart);
      }

      if (windowEnd >= pattern.length - 1) {
        let leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
  }
    return resultIndices;
}
