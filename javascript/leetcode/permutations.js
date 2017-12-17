/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length < 2) { return nums }
    permutations = []
    for (var i = 0; i < nums.length; i++) {
        thisNum = nums[i]
        if (nums.indexOf(thisNum) != i) {continue}
        remainingNums = nums.slice(0, i).concat(nums.slice(i+1, nums.length))
        remainingPermutations = permute(remainingNums)
        for (var j = 0; j < remainingPermutations.length; j++) {
            permutations.push([thisNum].concat(remainingPermutations[j]))
        }
    }
    return permutations
};