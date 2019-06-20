/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let ans = 0;
    let bal = 0;
    for (var i = 1; i < S.length; i++) {
      bal += S[i] === ')' ? 1 : -1;
      if (bal === -1) {
        ans++;
        bal++;
      }
    }
    return ans + bal;
};
