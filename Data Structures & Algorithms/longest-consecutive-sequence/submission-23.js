class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);

        let arr = [...new Set(nums)];

        let count = 1;
        let max = 1;

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i + 1] === arr[i] + 1) {
                count++;
            } else {
                max = Math.max(max, count);
                count = 1;
            }
        }

        return Math.max(max, count);
    }
}