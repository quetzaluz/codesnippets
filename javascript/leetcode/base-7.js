/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num < 0) {
        return '-' + convertToBase7(num * -1)
    }
    if (num < 7) {
        return num + ''
    }
    return convertToBase7(Math.floor(num / 7)) + num % 7
};