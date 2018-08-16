/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length;
    while (l < r) {
        m = Math.floor(l + (r - l) / 2);
        if (nums[m] > target) {
            r = m;
        } else if (nums[m] === target) {
            return m;
        } else {
            l = m + 1;
        }
    }
    return -1;
};
