/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = null
    this.collection = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.min == null || this.min > x) { this.min = x }
    this.collection.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    result = this.collection.pop()
    if (result == this.min) {
        if (this.collection.length == 0) {
            this.min = null
        } else {
            this.min = Infinity
            for (var i = 0; i < this.collection.length; i++) {
                if (this.min > this.collection[i]) {this.min = this.collection[i]}
            }
        }
    }
    return result
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.collection[this.collection.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */