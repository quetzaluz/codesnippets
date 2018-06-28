/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 == null && t2 == null) {
        return null;
    }
    var newRoot = new TreeNode(addNodeValues(t1, t2));
    newRoot.left = mergeTrees(t1 == null ? null : t1.left, t2 == null ? null : t2.left);
    newRoot.right = mergeTrees(t1 == null ? null : t1.right, t2 == null ? null : t2.right);
    return newRoot;
}

var addNodeValues = function(t1, t2) {
    var t1V = t1 == null ? 0 : t1.val;
    var t2V = t2 == null ? 0 : t2.val;
    return t1V + t2V;
}
