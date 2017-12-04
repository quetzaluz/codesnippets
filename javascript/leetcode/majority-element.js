/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var seen = {}
    if (nums.length == 1) { return nums[0] }
    var majorityCount = ~~(nums.length / 2)
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            seen[nums[i]]++
            if (seen[nums[i]] > majorityCount) {return nums[i]}
        } else { seen[nums[i]] = 1 }
    }
};