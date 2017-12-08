/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.createNew = function (nums) {
        this.nums = nums
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    result = 0
    for (var k = i; k <= j; k++) {
        result+=this.nums[k]
    }
    return result
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */