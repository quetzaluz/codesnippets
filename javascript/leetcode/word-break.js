/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    f = []
    for (var i = 0; i <= s.length; i++){
        f.push(false)
    }
    f[0] = 1
    for(var i=1; i <= s.length; i++){
        for(var j=0; j < i; j++){
            if(f[j] && wordDict.indexOf(s.substring(j, i)) !== -1){
                f[i] = true;
                break;
            }
        }
    }
    return f[s.length]
};