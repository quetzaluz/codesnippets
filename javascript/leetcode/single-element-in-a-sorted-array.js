/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var previousVal = nums[1]
    
    for (var i = 0; i < nums.length; i++) {
        if (previousVal !== nums[i] && nums[i] !== nums[i+1]) {return nums[i]}
        previousVal = nums[i]
    }
};