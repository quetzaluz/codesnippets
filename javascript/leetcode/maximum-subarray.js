/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    startIdx = 0
    maxS = nums[startIdx]
    while (startIdx < nums.length) {
        thisSum = nums[startIdx]
        if (thisSum > maxS) {
            maxS = thisSum
        }
        for (var i = startIdx + 1; i < nums.length; i++) {
            thisSum += nums[i]
            if (thisSum > maxS) {
                maxS = thisSum
            }
        }
        startIdx++
    }

    return maxS
};