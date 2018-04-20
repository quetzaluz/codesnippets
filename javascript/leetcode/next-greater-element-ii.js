/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
	let result = Array(nums.length);
	let stack = [];
	for (var i = (nums.length * 2) - 1; i >= 0; i--) {
		while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i % nums.length]) {
			stack.pop();
		}
		result[i % nums.length] = stack.length == 0 ? -1 : nums[stack[stack.length - 1]];
		stack.push(i % nums.length);
	}
	return result;
};
