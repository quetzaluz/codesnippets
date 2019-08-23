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
const increasingBST = function(root) {
    const head = new TreeNode();
    let curr = head;
    const traverse = function(root) {
        if (root === null) { return }
        traverse(root.left);
        curr.right = root;
        curr = root
        curr.left = null;
        traverse(root.right);
    }
    traverse(root);
    return head.right;
};
