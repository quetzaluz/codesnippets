/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = []
    for (var i = 0; i <= num; i++) {
        ct = 0
        bitString = i.toString(2)
        for (var j = 0; j < bitString.length; j++) {
            ct += parseInt(bitString[j])
        }
        result.push(ct)
    }
    return result
};