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
var isUnivalTree = function(root) {
    const soughtValue = root && root.val;
    const checkUnival = (root) => {
      if (!root) return true;
      if (root.val !== soughtValue) { return false }
      return checkUnival(root.left) && checkUnival(root.right);
    }
    return checkUnival(root);
};
