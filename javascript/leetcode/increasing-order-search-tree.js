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
    const values = traverse(root, []);
    return buildNewTree(values);
};

const traverse = function(root, values) {
    if (root === null) { return values }
    values = traverse(root.left, values);
    values.push(root.val);
    values = traverse(root.right, values);
    return values;
}

const buildNewTree = function(values) {
    const newRoot = new TreeNode();
    let root = newRoot;
    let i = 0;
    while (i < values.length) {
        root.val = values[i];
        if (i < values.length - 1) {
            root.right = new TreeNode();
            root = root.right;
        }
        i++;
    }
    return newRoot;
}
