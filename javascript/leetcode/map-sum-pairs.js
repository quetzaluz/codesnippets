/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.map = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.map[key.toLowerCase()] = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    res = 0
    p = prefix.toLowerCase()
    for (key in this.map) {
        if (key.indexOf(p) == 0) { res += this.map[key]}
    }
    return res
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */