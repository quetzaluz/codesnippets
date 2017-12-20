/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct (nums) {
    startIdx = 0
    maxP = nums[startIdx]
    while (startIdx < nums.length) {
        thisProduct = nums[startIdx]
        if (thisProduct > maxP) {
            maxP = thisProduct
        }
        for (var i = startIdx + 1; i < nums.length; i++) {
            thisProduct *= nums[i]
            if (thisProduct > maxP) {
                maxP = thisProduct
            }
        }
        startIdx++
    }


    return maxP
};