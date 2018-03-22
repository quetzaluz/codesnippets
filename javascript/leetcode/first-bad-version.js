/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    firstBad = null
    return function(n) {
        l = null
        m = n
        while (l === null) {
            if (isBadVersion(m)) {
                if (m == 1) { return m }
                m = Math.ceil(m / 2)
            } else {
                l = m
            }
        }
        while (l <= n) {
            if (isBadVersion(l)) {
                return l
            }
            l++
        }
        return -1
    };
};