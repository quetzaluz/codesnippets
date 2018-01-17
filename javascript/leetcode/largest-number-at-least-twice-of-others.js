/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    largest = [-Infinity, -1] // value, index
    secondLargest = [] // value, index
    for (var i = 0; i < nums.length; i++) {
        twice = nums[i] * 2
        if (twice > largest[0]) {
            secondLargest[0] = largest[0]
            secondLargest[1] = largest[1]
            largest[0] = twice
            largest[1] = i
        } else if (twice > secondLargest[0]) {
            secondLargest[0] = twice
            secondLargest[1] = i
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= secondLargest[0] && i == largest[1]) {
            return i
        }
    }
    return -1
};