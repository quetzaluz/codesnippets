/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let startingMin = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[(i + 1) % nums.length]) {
            continue
        } else if (startingMin !== null) {
            return false;
        } else {
            startingMin = nums[(i + 1) % nums.length]
        }
    }
    return startingMin;
};
