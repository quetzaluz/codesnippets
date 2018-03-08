/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    newArr = Array(nums.length)
    for (var i = 0; i < nums.length; i++) {
        newArr[(i + k) % nums.length] = nums[i]
    }
    for (var i = 0; i < nums.length; i++) {
        nums[i] = newArr[i]
    }
};
