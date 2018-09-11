/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var thisSum = 0;
    for (var i = 0; i < k; i++) {
        thisSum += nums[i];
    }
    var maxSum = thisSum;
    for (var i = k; i < nums.length; i++) {
        thisSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, thisSum);
    }
    return maxSum / k;
};
