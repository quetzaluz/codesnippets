# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    seen = {}
    for i in 0...nums.size()
        if seen[nums[i]] != nil
            return true
        end
        seen[nums[i]] = 1
    end
    return false
end
