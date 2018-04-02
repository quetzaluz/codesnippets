/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.length = 0
    this.set = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this.set[i] == val) {
            return false
        }
    }
    this.set.push(val)
    this.length++
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this.set[i] == val) {
            this.set.splice(i, 1)
            this.length--
            return true
        }
    }
    return false
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.set[Math.floor(Math.random() * this.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 