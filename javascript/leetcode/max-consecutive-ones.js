/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var consec = 0
    var maxConsec = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            consec++
        } else {
            if (consec > maxConsec) { maxConsec = consec}
            consec = 0
        }
    }
    if (consec > maxConsec) { maxConsec = consec}
    return maxConsec
};