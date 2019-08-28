/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const traverse = function(root) {
        if (root == null) { return [] }
        return traverse(root.left).concat([root.val]).concat(traverse(root.right));
    }
    return traverse(root)[k - 1];
};
