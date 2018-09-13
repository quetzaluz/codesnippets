# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    l = 0
    r = nums.size()
    while l < r
        m = l + (r - l) / 2
        if nums[m] > target
            r = m
        elsif nums[m] == target
            return m
        else
            l = m + 1
        end
    end
    return -1
end
