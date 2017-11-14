/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    oR = nums.length
    oC = oR ? nums[0].length : 0
    origSize = nums.length * nums[0].length
    if ((r * c) !== origSize) {return nums}
    allNums = []
    newMatrix = []
    for (var iR = 0; iR < oR; iR++ ) {
        allNums = allNums.concat(nums[iR])
    }
    for (var i = 0; i < r; i++) {
        newMatrix.push(allNums.slice((i * c), ((i + 1) * c) ))
    }
    return newMatrix
};