# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    count = 0
    def traverse(self, root: TreeNode) -> None:
        if root is not None:
            self.count += 1
            self.traverse(root.left)
            self.traverse(root.right)

    def countNodes(self, root: TreeNode) -> int:
        self.traverse(root)
        return self.count

