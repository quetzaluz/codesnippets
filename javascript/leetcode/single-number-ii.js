/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    seen = {}
    for (var i = 0; i < nums.length; i++) {
        seen[nums[i]] = seen[nums[i]] ? seen[nums[i]] + 1 : 1
    }
    for (k in seen) {
        if (seen[k] == 1) { return parseInt(k) }
    }
};
