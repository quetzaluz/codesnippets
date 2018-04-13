/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    prev = null
    prevPrev = null
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == prev && nums[i] == prevPrev) {
            nums.splice(i, 1)
            i--
        }
        prevPrev = prev
        prev = nums[i]
    }
    return nums.length
};
