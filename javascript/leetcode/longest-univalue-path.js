/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let maxCount = 0;
  var findPath = function(root, currCount) {
    if (root === null) return 0;
    let left = findPath(root.left, currCount);
    let right = findPath(root.right, currCount);
    let leftCount = 0;
    let rightCount = 0;
    if (root.left && root.left.val === root.val) {
      leftCount = left + 1;
    }
    if (root.right && root.right.val === root.val) {
      rightCount = right + 1;
    }
    maxCount = Math.max(maxCount, leftCount + rightCount);
    return Math.max(leftCount, rightCount);
  }
  findPath(root, 0);
  return maxCount;
};
