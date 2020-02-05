/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var steal = function(index) {
        if (index >= nums.length) {
            return 0;
        }
        return Math.max(nums[index] + steal(index + 2), steal(index + 1));
    }
    return steal(0);
};