/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    change = null
    i = 0
    while (i < nums.length) {
        if (nums[i] > nums[i + 1]) {
            if (change !== null) {
                return false                
            } else {
                change = i
            }
        }
        i++
    }

    return change === null || change === 0 || change == nums.length - 2 || nums[change - 1] <= nums[change + 1] || nums[change] <= nums[change + 2]
};
