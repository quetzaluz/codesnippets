/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var b = [1]
  var a = 1
  for (var i = 0; i<= nums.length - 2; i++) {
    a *= nums[i]
    b[i+1] = a
  }
  a = 1
  for (var i = (nums.length -1); i >= 1; i--) {
    a *= nums[i]
    b[i - 1] *= a
  }
  return b
};