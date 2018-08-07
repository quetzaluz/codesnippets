# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def binaryTreePaths(self, root):
        """
        :type root: TreeNode
        :rtype: List[str]
        """
        this_path = ""
        paths = []
        if root is None:
            return paths
        return self.findPath(root, this_path, paths)
    
    def findPath(self, root, this_path, paths):
        if root.left is None and root.right is None:
            this_path = "%s%s" % (this_path, root.val)
            paths.append(this_path)
        if root.left is not None:
            paths = self.findPath(root.left, "%s%s->" % (this_path, root.val), paths)
        if root.right is not None:
            paths = self.findPath(root.right, "%s%s->" % (this_path, root.val), paths)
        return paths
