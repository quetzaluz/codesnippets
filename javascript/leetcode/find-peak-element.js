/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if ((nums[i - 1] == undefined ? -Infinity : nums[i -1]) < nums[i] && nums[i] > (nums[i+1] == undefined ? -Infinity : nums[i+1])) {
            return i
        }
    }
    return false
};