// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0 || divisor === 0) { return 0; }
    let result = dividend;
    let divisorCount = 0;
    let isOutputNegative = (divisor < 0 && dividend > 0) || (dividend < 0 && divisor > 0)
    if (Math.abs(divisor) === 1) return isOutputNegative ? -Math.abs(dividend) : Math.abs(dividend);
    while (Math.abs(result) > 0) {
        divisorCount++
        let newResult = result - Math.abs(divisor)
        if (newResult == 0) {
            return isOutputNegative ? -Math.abs(divisorCount) : divisorCount;
        } else if (newResult < 0) {
            // At end of routine with remainder
            if (newResult < dividend << 1) divisorCount--
            return isOutputNegative ? -Math.abs(divisorCount) : divisorCount;
        } else {
            result = newResult
        }
    }
};
