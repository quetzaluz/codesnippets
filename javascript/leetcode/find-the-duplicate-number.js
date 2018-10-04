/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    seen = {}
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) { return nums[i] }
        seen[nums[i]] = 1
    }
};
