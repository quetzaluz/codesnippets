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
var rightSideView = function(root) {
    const result = [];
    const levels = {};
    var traverse = function(root, level) {
        if (!root) { return }
        if (!levels[level]) {
            result.push(root.val);
        }
        levels[level] = true;
        const nextLevel = level + 1;
        traverse(root.right, nextLevel);
        traverse(root.left, nextLevel);
    }
    traverse(root, 0);
    return result;
};
