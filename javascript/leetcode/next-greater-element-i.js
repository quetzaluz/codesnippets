/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var nextGreater = {}
    nums.forEach(function (n) {
        Object.keys(nextGreater).forEach(function (k) {
            if (nextGreater[k] === -1 && parseInt(k) < n) {
                nextGreater[k] = n
            }
        })
        if (findNums.indexOf(n) !== -1 && nextGreater[n] === undefined) {
            nextGreater[n] = -1
        }
    })
    result = findNums.map(function(n) { return nextGreater[n] })
    return result
};
