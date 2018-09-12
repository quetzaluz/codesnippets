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
# @return {Integer}
def path_sum(root, sum)
    return 0 if root == nil
    return find_sum(root, sum) + path_sum(root.left, sum) + path_sum(root.right, sum)
end

def find_sum(root, sum)
    return 0 if root == nil
    this_sum = if root.val == sum then 1 else 0 end
    return this_sum + find_sum(root.left, sum - root.val) + find_sum(root.right, sum - root.val)
end
