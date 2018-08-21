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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return findSum(root, 0, sum);
};

var findSum = function(root, thisSum, sum) {
    if (root === null) {
        return false;
    }
    const newSum = thisSum + root.val;
    if (newSum === sum && root.left === null && root.right === null) {
        return true;
    } else {
        return findSum(root.left, newSum, sum) || findSum(root.right, newSum, sum);
    }
}
