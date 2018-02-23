/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    seen = {}
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) { return true }
        seen[nums[i]] = 1
    }
    return false
};