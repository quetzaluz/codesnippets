# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {Integer} k
# @return {Integer}
def kth_smallest(root, k)
    def traverse(root)
        if root == nil
            return []
        end
        return traverse(root.left) + [root.val] + traverse(root.right)
    end
    return traverse(root)[k - 1]
end
