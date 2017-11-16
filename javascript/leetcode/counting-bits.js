/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = []
    for (var i = 0; i <= num; i++) {
        var countOne = 0
        var thisNum = i;
        while (thisNum) {
            if (thisNum % 2 !== 0) countOne++
            thisNum = ~~(thisNum / 2)
        } 
        result.push(countOne)
    }
    return result
};