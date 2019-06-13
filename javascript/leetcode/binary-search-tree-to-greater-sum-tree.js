/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const bstToGst = function(root) {
    const traverse = (node, n) => {
        if (!node.right) {
            node.val += n;
            return node.val
        } else {
            node.val += traverse(node.right, n);
            let ret = node.val;
            if (node.left) {
                ret = traverse(node.left, node.val);
            }
            return ret;
        }
    };
    traverse(root, 0);
    return root;
};
