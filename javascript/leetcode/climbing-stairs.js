/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) { return 1 }
    first = 1
    second = 2
    for (var i = 3; i <= n; i++) {
        third = first + second
        first = second
        second = third
    }
    return second
};