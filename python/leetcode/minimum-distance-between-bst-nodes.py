# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.diff = float('inf')

    def minDiffInBST(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.dfsMinDiff(root)
        return self.diff
    
    def dfsMinDiff(self, root):
        if root.left is not None:
            self.diff = min(self.diff, abs(root.val - self.dfRight(root.left)))
            self.dfsMinDiff(root.left)
        if root.right is not None:
            self.diff = min(self.diff, abs(root.val - self.dfLeft(root.right)))
            self.dfsMinDiff(root.right)
    
    def dfLeft(self, root):
        if root.left is not None:
            return self.dfLeft(root.left)
        else:
            return root.val

    def dfRight(self, root):
        if root.right is not None:
            return self.dfRight(root.right)
        else:
            return root.val
