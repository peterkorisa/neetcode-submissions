class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const set = new Set();

        for (let i = 0; i < nums.length - 2; i++) {
            for (let j = i + 1; j < nums.length - 1; j++) {
                for (let k = j + 1; k < nums.length; k++) {

                    if (nums[i] + nums[j] + nums[k] === 0) {

                        const arr = [nums[i], nums[j], nums[k]];
                        arr.sort((a, b) => a - b);

                        set.add(arr.join(","));
                    }
                }
            }
        }

        const result = [];

        for (const item of set) {
            result.push(item.split(",").map(Number));
        }

        return result;
    }
}