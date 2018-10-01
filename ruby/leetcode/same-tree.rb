# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} p
# @param {TreeNode} q
# @return {Boolean}
def is_same_tree(p, q)
    if p == nil && q == nil
        return true
    elsif p == nil || q == nil
        return false
    elsif p.val != q.val
        return false
    end
    return is_same_tree(p.left, q.left) && is_same_tree(p.right, q.right)
end
