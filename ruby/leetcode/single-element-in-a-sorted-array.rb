# @param {Integer[]} nums
# @return {Integer}
def single_non_duplicate(nums)
    previous_val = nums[1]
    found_elem = nil
    for i in 0...nums.size()
        if previous_val != nums[i] && (i + 1 == nums.size() || nums[i] != nums[i + 1])
            found_elem = nums[i]
            break
        end
        previous_val = nums[i]
    end
    return found_elem
end
