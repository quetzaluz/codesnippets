""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""

def traverse_and_check_(root, seen):
    if root and ((root.left is not None and root.left.data > root.data) or (root.right is not None and root.right.data < root.data)):
        return False
    if root is None:
        return seen
    if root.data in seen:
        return False
    seen.append(root.data)
    seen = traverse_and_check_(root.left, seen)
    if seen:
        return traverse_and_check_(root.right, seen)
    else:
        return False
def check_binary_search_tree_(root):
    seen = []
    return True if traverse_and_check_(root, seen) else False
