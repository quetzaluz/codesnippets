/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = []
    for (var i = 0; i <= num; i++) {
        result.push(countOnes(i))
    }
    return result
};

// Helper method that counts one given that binary is a representation of powers of 2
var countOnes = function (thisNum) {
    var countOne = 0
    while (thisNum) {
        if (thisNum % 2 !== 0) countOne++
        thisNum = ~~(thisNum / 2)
    }
    return countOne
}