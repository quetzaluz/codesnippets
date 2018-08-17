/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var findLevels = function(root, result, depth) {
    if (root === null) {
        return result;
    }
    if (result.length <= depth) {
        result.push([]);
    }
    result[depth].push(root.val);
    if (root.left !== null) {
        result = findLevels(root.left, result, depth + 1);
    }
    if (root.right !== null) {
        result = findLevels(root.right, result, depth + 1);
    }
    return result;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    result = [];
    depth = 0;
    return findLevels(root, result, depth);
};
