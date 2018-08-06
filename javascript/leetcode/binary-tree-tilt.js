/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    if (root === null) { return 0; }
    var tilt = Math.abs(findSum(root.left) - findSum(root.right));
    return tilt + findTilt(root.left) + findTilt(root.right);
};

var findSum = function(root) {
    if (root === null) { return 0; }
    return root.val + findSum(root.left) + findSum(root.right);
}
