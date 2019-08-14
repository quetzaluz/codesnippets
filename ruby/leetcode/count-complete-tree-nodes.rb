# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {Integer} count
# @return {Integer}
def traverse(root, count)
    new_count = count
    if root != nil
        new_count += 1
        new_count = traverse(root.left, new_count)
        new_count = traverse(root.right, new_count)
    end
    return new_count
end

# @param {TreeNode} root
# @return {Integer}
def count_nodes(root)
    return traverse(root, 0)
end

