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
var isBalanced = function(root) {
    function checkBalance(root) {
        if (root === null) {
            return 0;
        }
        var leftBalance = checkBalance(root.left);
        var rightBalance = checkBalance(root.right);
        if (leftBalance === -1 || rightBalance === -1 || Math.abs(leftBalance - rightBalance) > 1) {
            return -1;
        }
        return 1 + Math.max(leftBalance, rightBalance);
    }
    return checkBalance(root) !== -1;
};
