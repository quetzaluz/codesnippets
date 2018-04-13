/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    seen = {}
    dupes = []
    for (var i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            dupes.push(nums[i])
        } else {
            seen[nums[i]] = 1
        }
    }
    return dupes
};
