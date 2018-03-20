/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var fM = -Infinity
    var sM = -Infinity
    var tM = -Infinity
    for (var i = 0; i < nums.length; i++) {
        n = nums[i]
        if (n == fM || n == sM || n == tM) {continue}
        if (n > fM) {
            tM = sM
            sM = fM
            fM = n
        } else if (n > sM) {
            tM = sM
            sM = n
        } else if (n > tM) {
            tM = n
        }

    }
    if (tM == -Infinity) {
        tM = fM // per specification
    }
    return tM
};