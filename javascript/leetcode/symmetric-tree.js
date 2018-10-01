/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    return isSameTree(
        invertTree(root.left),
        root.right
    );
};

var isSameTree = function(p, q) {
    if (p == null && q == null) { return true }
    if (p == null && q != null || q == null && p != null) { return false }
    if (p.val !== q.val) { return false }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

var invertTree = function(root) {
    if (!root) { return root}
    tmpNode = root.left
    root.left = root.right
    root.right = tmpNode
    root.left = invertTree(root.left)
    root.right = invertTree(root.right)
    return root
};
