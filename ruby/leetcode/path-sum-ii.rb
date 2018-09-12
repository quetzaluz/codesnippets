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
# @return {Integer[][]}
def path_sum(root, sum)
    def find_sum(root, this_sum, sum, this_path)
        return if root == nil
        new_sum = this_sum + root.val
        this_path << root.val
        if root.left == nil && root.right == nil
            if sum == new_sum
                @paths << this_path.map(&:clone)
            end
        else
            if root.left != nil
                find_sum(root.left, new_sum, sum, this_path)
            end
            if root.right != nil
                find_sum(root.right, new_sum, sum, this_path)
            end
        end
        this_path.pop()
    end
    @paths = []
    find_sum(root, 0, sum, [])
    return @paths
end
