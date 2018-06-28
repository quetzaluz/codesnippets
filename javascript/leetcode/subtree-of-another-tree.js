/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    return traverse(s, t);
}

var isEqual = function(s, t) {
    if (s == null && t == null) {
        return true
    }
    if (s == null || t == null) {
        return false
    }
    return s.val == t.val && isEqual(s.left, t.left) && isEqual(s.right, t.right)
};

var traverse = function (s, t) {
    return s != null && (isEqual(s, t) || traverse(s.left, t) || traverse(s.right, t))
};
