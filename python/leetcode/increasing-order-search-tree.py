# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    head = TreeNode(None)
    curr = head
    def increasingBST(self, root: TreeNode) -> TreeNode:
        self.traverse(root)
        return self.head.right

    def traverse(self, root: TreeNode) -> None:
        if root is None:
            return
        self.traverse(root.left)
        self.curr.right = root
        self.curr = root
        self.curr.left = None
        self.traverse(root.right)
