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
var postorderTraversal = function(root) {
    var result = [];
    function _traverse(root, result) {
        if (root != null) {
            result = _traverse(root.left, result);
            result = _traverse(root.right, result);
            result.push(root.val);
        }
        return result;
    }
    result = _traverse(root, result);
    return result;
};
