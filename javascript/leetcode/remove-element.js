/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0
    var l = nums.length
    while (i < l) {
        if (nums[i] == val) {
            nums.splice(i, 1)
            l--
        } else {
            i++            
        }
    }
    return l
};