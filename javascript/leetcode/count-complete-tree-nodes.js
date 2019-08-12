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
var countNodes = function(root) {
    let count = 0;
    var traverse = function(root) {
        if (root) {
            count++;
            traverse(root.left);
            traverse(root.right);
        }
    }
    traverse(root);
    return count;
};
