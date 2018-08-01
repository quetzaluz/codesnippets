/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return initializeNode(nums, 0, nums.length - 1);
};

var initializeNode = function(nums, left, right) {
    if (left > right) { return null; }
    if (left === right) { return new TreeNode(nums[left]); }
    var midpoint = left + Math.round((right - left) / 2);
    var root = new TreeNode(nums[midpoint]);
    root.left = initializeNode(nums, left, midpoint - 1);
    root.right = initializeNode(nums, midpoint + 1, right);
    return root;
}
