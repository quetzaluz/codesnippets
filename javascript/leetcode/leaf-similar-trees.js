/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function traverse(root, result) {
        if (root != null) {
            result = traverse(root.left, result);
            if (!root.left && !root.right) result.push(root.val);
            result = traverse(root.right, result);
        }
        return result;
    };
    
    function sameArray(arr1, arr2) {
        if (arr1.length !== arr2.length) { return false }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    };

    root1Leaves = traverse(root1, []);
    root2Leaves = traverse(root2, []);
    return sameArray(root1Leaves, root2Leaves);
};
