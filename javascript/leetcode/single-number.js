/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    res = nums[0]
    for (var i = 1; i < nums.length; i++) {
        res = res ^ nums[i]
    }
    return res
};