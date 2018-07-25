class Solution:
    def isSubtree(self, s, t):
        """
        :type s: TreeNode
        :type t: TreeNode
        :rtype: bool
        """
        return self.traverse(s, t)
    
    def isEqual(self, s, t):
        if s is None and t is None:
            return True
        if s is None or t is None:
            return False
        return s.val == t.val and self.isEqual(s.left, t.left) and self.isEqual(s.right, t.right)
    
    def traverse(self, s, t):
        return s is not None and (self.isEqual(s, t) or self.traverse(s.left, t) or self.traverse(s.right, t))
