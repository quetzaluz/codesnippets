/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    seen = Array(nums.length + 1)
    for (var i = 0; i < nums.length; i++) {
        seen[nums[i]] = 1
    }
    for (var i = 0; i < seen.length; i++) {
        if (seen[i] !== 1) {
            return i
        }
    }
};
