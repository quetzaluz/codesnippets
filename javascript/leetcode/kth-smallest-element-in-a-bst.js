/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const a = new Array(k);
    const updateArray = function(v) {
        let tmp;
        let inserted = false;
        for (var i = 0; i < k; i++) {
            if ((a[i] == null || v < a[i])) {
                if (!inserted) {
                    tmp = v;
                    inserted = true;
                }
            }
            if (tmp) {
                a[i + 1] = a[i];
                a[i] = tmp;
                tmp = a[i + 1];
            }
        }
    }
    const traverse = function(root) {
        if (root == null) { return }
        updateArray(root.val)
        traverse(root.left)
        traverse(root.right)
    }
    traverse(root)
    return a[k - 1];
};
