# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def mergeTrees(self, t1, t2):
        """
        :type t1: TreeNode
        :type t2: TreeNode
        :rtype: TreeNode
        """
        if (t1 is None and t2 is None):
            return None
        newRoot = TreeNode(self.addNodeValues(t1, t2))
        if t1 is None:
            t1Left = None
            t1Right = None
        else:
            t1Left = t1.left
            t1Right = t1.right
        if t2 is None:
            t2Left = None
            t2Right = None
        else:
            t2Left = t2.left
            t2Right = t2.right
        newRoot.left = self.mergeTrees(t1Left, t2Left)
        newRoot.right = self.mergeTrees(t1Right, t2Right)
        return newRoot

    def addNodeValues(self, t1, t2):
        t1V = 0 if t1 is None else t1.val
        t2V = 0 if t2 is None else t2.val
        return t1V + t2V
