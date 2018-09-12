# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {Integer} sum
# @return {Boolean}
def has_path_sum(root, sum)
    return find_sum(root, 0, sum)
end

def find_sum(root, this_sum, sum)
    return false if root == nil
    new_sum = this_sum + root.val
    if new_sum == sum && root.left == nil && root.right == nil
        return true
    end
    return find_sum(root.left, new_sum, sum) || find_sum(root.right, new_sum, sum)
end
