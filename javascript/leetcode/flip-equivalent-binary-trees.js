/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if (root1 === root2) {
        return true;
    }
    if (!root1 || !root2 || root1.val !== root2.val) {
        return false;
    }
    return (
        (
            flipEquiv(root1 && root1.left, root2 && root2.left)
            && flipEquiv(root1 && root1.right, root2 && root2.right)
        ) || (
            flipEquiv(root1 && root1.left, root2 && root2.right)
            && flipEquiv(root1 && root1.right, root2 &&root2.left)
        )
    )
};
