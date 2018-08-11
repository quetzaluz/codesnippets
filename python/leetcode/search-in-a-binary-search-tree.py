# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def searchBST(self, root, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """
        return self.search(root, val)
    
    def search(self, root, val):
        if root.val == val:
            return root
        if val < root.val and root.left is not None:
            return self.search(root.left, val)
        if val > root.val and root.right is not None:
            return self.search(root.right, val)
