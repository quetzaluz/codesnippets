/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.orig = nums.slice(0)
    this.curr = nums.slice(0)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.curr = this.orig.slice(0)
    return this.curr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    options = this.orig.slice(0)
    l = options.length
    this.curr = []
    while (l > 0) {
        this.curr = this.curr.concat(options.splice(Math.floor(Math.random() * l), 1))
        l--
    }
    return this.curr
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
 