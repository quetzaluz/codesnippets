/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    startIdx = 0
    maxA = k == 1 ? nums[startIdx] : -Infinity
    while (startIdx < nums.length) {
        thisSum = nums[startIdx]
        thisLength = 1
        if (k == 1) {
            thisA = thisSum / thisLength
            if (thisA > maxA) {
                maxA = thisA
            }
        } else {
            for (var i = startIdx + 1; i < nums.length; i++) {
                thisSum += nums[i]
                thisLength += 1
                if (thisLength == k) {
                    thisA = thisSum / thisLength
                    if (thisA > maxA) {
                        maxA = thisA
                    }
                }
            }
        }
        startIdx++
    }


    return maxA 
};