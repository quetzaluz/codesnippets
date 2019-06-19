/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let res = []; // list of tuples;
    const findAndUpdateEntry = (l) => {
        for (let i = 0; i < res.length; i++) {
            if (res[i][0] === l) {
                res[i][1]++
                return true;
            }
        }
        res.push([l, 1])
    }
    for (let i = 0; i < s.length; i++) {
        findAndUpdateEntry(s[i]);
    }
    let ret = '';

    res.sort((a, b) => a[1] <= b[1] ? 1 : -1).forEach((t) => {
        let c = 0;
        while (c < t[1]) {
            ret += t[0];
            c++;
        }
    });
    return ret;
};
