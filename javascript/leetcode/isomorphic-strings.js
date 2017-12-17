/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return encodeIsomorphic(s) == encodeIsomorphic(t)
};

var encodeIsomorphic = function(str) {
    sH = {}
    sR = ''
    sC = 0
    for (var i = 0; i < str.length; i++) {
        debugger
        if (sH[str[i]] != null) {
            sR += sH[str[i]]
        } else {
            sH[str[i]] = sC
            sR += sH[str[i]]
            sC++
        }
    }
    console.log(sH)
    return sR
} 