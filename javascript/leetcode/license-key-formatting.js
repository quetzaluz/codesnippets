/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    res = ''
    ct = 0
    for (var i = S.length - 1; i >= 0; i--) {
        if (S[i] == '-') { continue }
        if (ct == K) {
            res = '-' + res
            ct = 0
        }
        res = S[i].toUpperCase() + res
        ct++
    }
    return res
};