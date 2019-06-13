/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxS = -Infinity;
    let sum = 0;
    nums.forEach((n) => {
        if (sum > 0) {
            sum += n;
        } else {
            sum = n;
        }
        if (maxS < sum) {
            maxS = sum;
        }
    });
    return maxS
};
