/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var ans = 0;
    var sorted = citations.sort(function(a, b) { return b - a });
    for (var i = 0; i < sorted.length; i++) {
        if (i < sorted[i]) {
            ans++;
        }
    }
    return ans;
};
