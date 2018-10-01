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
def is_symmetric(root)
    return true if root == nil
    return is_same_tree(
        invert_tree(root.left),
        root.right
    )
end

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

# @param {TreeNode} root
# @return {TreeNode}
def invert_tree(root)
    return root if root == nil
    temp_node = root.left
    root.left = root.right
    root.right = temp_node
    root.left = invert_tree(root.left)
    root.right = invert_tree(root.right)
    return root
end
