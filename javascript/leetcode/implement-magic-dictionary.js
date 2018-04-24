/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.lookup = []
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.lookup = dict
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    this.lookup.forEach(function(w) {
        if (w !== word && w.length == word.length) {
            diff = 0
            for (var i = 0; i < word.length; i++) {
                c1 = word[i]
                c2 = word[i]
                if (c1 !== c2) {
                    diff++
                }
                if (diff > 1) {break}
            }
            if (diff == 1) {
                return true
            }
        }
    })
    return false
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */