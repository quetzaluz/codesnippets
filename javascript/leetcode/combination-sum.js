/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(c, target) {
    if (target < 0) {
        return [];
    }
    if (target == 0) {
        return [[]];
    }
    var result = []
    for (var i = 0; i < c.length; i++) {
        var partSum = combinationSum(c.slice(i), target - c[i])
        partSum.forEach(function(s) {
            result.push(s.concat(c[i])) 
        });
    }
    return result
};
