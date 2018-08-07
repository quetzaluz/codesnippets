/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var thisPath = "";
    var paths = [];
    if (root === null) { return paths; }
    paths = findPath(root, thisPath, paths);
    return paths;
};

var findPath = function(root, thisPath, paths) {
    if (root.left === null && root.right === null) {
        thisPath += root.val;
        paths.push(thisPath);
    }

    if (root.left !== null) {
        paths = findPath(root.left, thisPath + root.val + "->", paths);
    }

    if (root.right !== null) {
        paths = findPath(root.right, thisPath + root.val + "->", paths);
    }

    return paths;
}
