/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) { return 0; }
    return findSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

var findSum = function(root, sum) {
    if (!root) { return 0; }
    return (root.val === sum ? 1 : 0) + findSum(root.left, sum - root.val) + findSum(root.right, sum - root.val);
}
