# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    i = 0
    l = nums.size()
    while i < l
        if nums[i] == val
            nums.delete_at(i)
            l -= 1
        else
            i += 1
        end
    end
    return l
end
