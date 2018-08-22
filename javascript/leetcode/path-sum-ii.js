/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

var pathSum = function(root, sum) {
    paths = []
    var findSum = function(root, thisSum, sum, thisPath) {
        if (root === null) { return; }
        thisSum += root.val;
        thisPath.push(root.val);
        if (root.left === null && root.right === null) {
            if (sum === thisSum) {
                paths.push(thisPath.slice(0));
            }
        } else {
            if (root.left !== null) {
                findSum(root.left, thisSum, sum, thisPath);
            }
            if (root.right !== null) {
                findSum(root.right, thisSum, sum, thisPath);
            }
        }
        thisSum -= root.val;
        thisPath.pop();
    };
    findSum(root, 0, sum, []);
    return paths;
};
