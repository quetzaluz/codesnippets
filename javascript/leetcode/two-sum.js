/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    seen = {}
    for (var i = 0; i < nums.length; i++) {
        if (typeof seen[target - nums[i]] !== 'undefined') {
            return [i, seen[target - nums[i]]]
        }
        seen[nums[i]] = i
    }
    return false
};