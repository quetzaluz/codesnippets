/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k;
    this.occupied = 0;
    this.front = null;
    this.rear = null;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.occupied === 0) {
        const newNode = { val: value, next: null };
        this.front = newNode;
        this.rear = newNode;
        this.occupied = 1;
        return true;
    } else if (this.occupied < this.size) {
        const newNode = { val: value, next: null };
        let count = 0;
        let lastNode = this.front;
        let prevNode = lastNode;
        while (lastNode) {
            prevNode = lastNode;
            lastNode = lastNode.next;
        }
        prevNode.next = newNode;
        this.rear = newNode;
        this.occupied++;
        return true;
    } else {
        return false;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.occupied === 0) return false;
    this.occupied--;
    if (this.occupied === 0) {
        this.front = null;
        this.rear = null;
        return true;
    } else {
        let lastNode = this.front;
        let prevNode = lastNode;
        while (lastNode) {
            prevNode = lastNode;
            lastNode = lastNode.next;
        }
        prevNode.next = null;
        this.rear = prevNode;
        return true;
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.front ? this.front.val : -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.rear ? this.rear.val : - 1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.occupied === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.occupied === this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
