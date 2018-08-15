/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) { return; }
    var left = root.left;
    var right = root.right;
    flatten(right);
    flatten(left);
    root.right = left; 
    root.left = null;
    var node = root;
    while (node.right !== null) {
        node = node.right;
    }
    node.right = right;
};
