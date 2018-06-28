# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def pruneTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if not self.hasOne(root):
            return None
        if (root is not None):
            root.left = self.pruneTree(root.left)
            root.right = self.pruneTree(root.right)
        return root

    def hasOne(self, root):
        if root is None:
            return False
        if root.val == 1:
            return True
        return self.hasOne(root.left) or self.hasOne(root.right)
