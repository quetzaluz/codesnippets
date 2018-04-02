/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    seen = {}
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            seen[nums[i]]++
        } else {
            seen[nums[i]] = 1
        }
    }
    result = []
    for (k in seen) {
        if (seen[k] == 1) {
            result.push(parseInt(k))
        }
    }
    return result
};
