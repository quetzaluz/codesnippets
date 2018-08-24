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
var diameterOfBinaryTree = function(root) {
    if (root === null) { return 0; }
    return [
        diameterOfBinaryTree(root.left),
        diameterOfBinaryTree(root.right),
        findDepth(root.left) + findDepth(root.right)
    ].reduce(function(a, b) { return Math.max(a, b); });
};

var findDepth = function (root, depth) {
    if (root === null) { return 0; }
    return Math.max(findDepth(root.left, depth), findDepth(root.right, depth)) + 1;
};
