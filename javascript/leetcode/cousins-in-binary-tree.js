/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const levelMap = {};
    const traverse = function(root, l, p) {
        if (!root) { return; }
        levelMap[root.val] = { parent: p, level: l};
        traverse(root.left, l+1, root.val);
        traverse(root.right, l+1, root.val);
    }
    traverse(root, 0, null);
    return levelMap[x] && levelMap[y] && levelMap[x].parent !== levelMap[y].parent && levelMap[x].level === levelMap[y].level;
};
