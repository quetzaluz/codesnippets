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

# Can also be written as such with arr passed in

# class Solution:
#     def kthSmallest(self, root: TreeNode, k: int) -> int:
#         return self.traverse(root, [])[k - 1]
#     def traverse(self, root, arr):
#         if root is not None:
#             self.traverse(root.left, arr)
#             arr.append(root.val)
#             self.traverse(root.right, arr)
#         return arr
