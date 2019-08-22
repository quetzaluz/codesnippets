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
var averageOfLevels = function(root) {
    const levelData = [];
    const traverse = function(root, levelIndex) {
        let data = levelData[levelIndex] || [];
        data.push(root.val);
        if (root.left) {
            traverse(root.left, levelIndex + 1);
        }

        if (root.right) {
            traverse(root.right, levelIndex + 1);
        }
        levelData[levelIndex] = data;
    };
    traverse(root, 0);
    return levelData.map((data) => data.reduce((n, acc) => n + acc, 0) / data.length);
};
