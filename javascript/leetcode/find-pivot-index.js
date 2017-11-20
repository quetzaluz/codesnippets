/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var numsLength = nums.length
    for (var i = 0; i < numsLength; i++) {
        var leftSum = 0
        var rightSum = 0
        for (var l = 0; l < i; l++) {
            leftSum += nums[l]
        }
        for (var r = (numsLength - 1); r > i; r--) {
            rightSum += nums[r]
        }
        if (leftSum == rightSum) {return i}
    }
    return -1
};