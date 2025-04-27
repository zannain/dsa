function isAlphaNumeric(c) {
    return /^[a-zA-Z0-9]*$/.test(c);
}

// Time Complexity: O(N)
// Space Complexity: O(1)
export function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (l < r && !isAlphaNumeric(s.charAt(l))) {  // Note 1, 2
            l++;
        }
        while (l < r && !isAlphaNumeric(s.charAt(r))) {
            r--;
        }
        if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {  // ignore case
            return false;
        }
        l++;
        r--;
    }
    return true;
}