/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    seen = {}
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]] !== null && i - seen[nums[i]] <= k) { return true }
        seen[nums[i]] = i
    }
    return false
};