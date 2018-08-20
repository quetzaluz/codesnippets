/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var longest = 0;
    if (nums.length === 0) {
        return longest;
    }
    last = nums[0];
    longest++;
    var thisLength = longest;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > last) {
            thisLength++;
        } else {
            if (thisLength > longest) {
                longest = thisLength;
            }
            thisLength = 1;
        }
        last = nums[i];
    }
    if (thisLength > longest) {
        longest = thisLength;
    }
    return longest;
};