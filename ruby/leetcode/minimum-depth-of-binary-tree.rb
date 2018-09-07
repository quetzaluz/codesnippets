# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Integer}
def min_depth(root)
    if root == nil
        return 0
    elsif root.left != nil && root.right != nil
        return [min_depth(root.left), min_depth(root.right)].min + 1
    else
        (if root.left then min_depth(root.left) else min_depth(root.right) end) + 1
    end
end
