class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reversed = clean.split('').reverse().join('');

        if (clean === reversed) {
            return true;
        } else {
            return false;
        }
    }
}