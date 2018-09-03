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
var minDiffInBST = function(root) {
    var dfsMinDiff = function (root) {
        if (root.left !== null) {
            min = Math.min(min, Math.abs(root.val - dfRight(root.left)));
            dfsMinDiff(root.left);
        }
        if (root.right !== null) {
            min = Math.min(min, Math.abs(root.val - dfLeft(root.right)));
            dfsMinDiff(root.right);
        }
    };

    var dfLeft = function (root) {
        if (root.left !== null) {
            return dfLeft(root.left);
        } else {
            return root.val;
        }
    };

    var dfRight = function (root) {
        if (root.right !== null) {
            return dfRight(root.right);
        } else {
            return root.val;
        }
    };
    min = Number.MAX_SAFE_INTEGER;
    dfsMinDiff(root);
    return min;
};

