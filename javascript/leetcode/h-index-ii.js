/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var ans = 0;
    for (var i = citations.length - 1; i >= 0; i--) {
        if (citations.length - i - 1 < citations[i]) {
            ans++;
        }
    }
    return ans;
};