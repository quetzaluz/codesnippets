/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var openIndexes = []
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] == 0) {
            openIndexes.push(i)
        } else if (nums[i] == null) {
            nums[i] = 0
        } else if (openIndexes.length > 0) {
            nums[openIndexes.shift()] = nums[i]
            nums[i] = null;
        }
    }
};