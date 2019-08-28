# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        return self.traverse(root)[k - 1]
    def traverse(self, root):
        if root is None:
            return []
        return self.traverse(root.left) + [root.val] + self.traverse(root.right)
