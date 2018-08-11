/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return search(root, val);
};

var search = function(root, val) {
    if (root.val === val) {
        return root;
    } else if (val < root.val && root.left !== null) {
        return search(root.left, val);
    } else if (val > root.val && root.right !== null) {
        return search(root.right, val);
    } else { return []; }
}