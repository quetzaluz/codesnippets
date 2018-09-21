# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    for i in 0...nums.size()
        if target <= nums[i]
            return i
        end
    end
    return nums.size()
end
