# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Boolean}
def is_unival_tree(root)
    def check_unival(root, sought_value)
      return true if root == nil
      return false if root.val != sought_value
      return check_unival(root.left, sought_value) && check_unival(root.right, sought_value)
    end
    return check_unival(root, root.val)
end
