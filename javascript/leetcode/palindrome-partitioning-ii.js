var alphanum = 'qwertyuiopasdfghjklzxcvbnm0987654321'

var isPalindrome = function(s) {
    if (s.length == 1) { return true }
    if (s == '') { return false }
    p1 = 0
    p2 = s.length - 1
    s = s.toLowerCase()
    while (p1 < p2) {
        if (alphanum.indexOf(s[p1]) == -1) {
            p1++
        } else if (alphanum.indexOf(s[p2]) == -1) {
            p2--
        } else if (s[p1] !== s[p2]) {
            return false
        }  else {
            p1++
            p2--
        }
    }
    return true
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var minCut = function(s) {
    ans = Infinity
    curr = []
    var findPartitions = function(s, pos) {
        if (pos === s.length) {
            ans = curr.length - 1 < ans ? curr.length - 1 : ans;
            return;
        }

        for (let i = pos; i < s.length; i++) {
            const thisStr = s.substring(pos, i + 1);
            if (isPalindrome(thisStr)) {
                curr.push(thisStr);
                findPartitions(s, i + 1);
                curr.pop();
            }

        }
    };

    findPartitions(s, 0);
    return ans;
};
