/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n^2) below, should be able to optimize
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (j !== i && nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return false
};