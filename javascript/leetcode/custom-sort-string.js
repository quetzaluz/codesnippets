/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    let l = T.split('');
    let r = [];
    S.split('').forEach(function (c) {
        let findIndex;
        while (findIndex !== -1) {
            findIndex = l.indexOf(c)
            if (findIndex !== -1) {
                r.push(l.splice(findIndex, 1))
            }
        }
    });
    return (r.concat(l)).join('');
};
