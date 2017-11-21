/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = 0;
    var leftSum = 0
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    for (var i = 0; i < nums.length; i++) {
        if (leftSum == sum - leftSum - nums[i]) return i;
        leftSum += nums[i]
    }
    return -1
};