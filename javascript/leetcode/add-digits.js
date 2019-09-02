/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let result = num;
    let sum = num;
    while (num > 9) {
        let iterationNum = num;
        sum = 0;
        while (iterationNum > 0) {
            r = iterationNum % 10;
            sum += r;
            iterationNum = (iterationNum - r) / 10;
        }
        num = sum;
    }
    return sum;
};

