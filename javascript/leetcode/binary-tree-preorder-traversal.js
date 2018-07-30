/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    return traverse(root, []);
};

var traverse = function(root, result) {
    if (root !== null) {
        result.push(root.val);
        result = traverse(root.left, result);
        result = traverse(root.right, result);
    }
    return result
};
