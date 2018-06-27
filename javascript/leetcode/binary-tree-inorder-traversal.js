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
var inorderTraversal = function(root) {
    var result = [];
    function _traverse(root, result) {
        if (root != null) {
            result = _traverse(root.left, result);
            result.push(root.val);
            result = _traverse(root.right, result);
        }
        return result;
    }
    result = _traverse(root, result);
    return result;
}
