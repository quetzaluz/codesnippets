/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    seen1 = {}
    seen2 = {}
    for (var i = 0; i < s.length; i++) {
        seen1[s[i]] = seen1[s[i]] ? seen1[s[i]] + 1 : 1
    }
    for (var i = 0; i < t.length; i++) {
        seen2[t[i]] = seen2[t[i]] ? seen2[t[i]] + 1 : 1
    }

    for (key in seen2) {
        if (seen2[key] !== seen1[key]) {
            return key
        }
    }
    return -1
};