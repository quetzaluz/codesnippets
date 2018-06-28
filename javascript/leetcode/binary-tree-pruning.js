/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if (!hasOne(root)) {
        return null;
    }
    if (root != null) {
        root.left = pruneTree(root.left);
        root.right = pruneTree(root.right);
    }
    return root;
}

var hasOne = function(root) {
    if (root == null) {
        return false;
    }
    if (root.val == 1) {
        return true;
    }
    return hasOne(root.left) || hasOne(root.right)
}
