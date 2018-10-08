# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    start_idx = 0
    max_s = nums[start_idx]
    while start_idx < nums.size()
        this_sum = nums[start_idx]
        if this_sum > max_s
            max_s = this_sum
        end
        for i in (start_idx + 1)...nums.size()
            this_sum += nums[i]
            if this_sum > max_s
                max_s = this_sum
            elsif this_sum < 0
                break
            end
        end
        start_idx += 1
    end
    return max_s 
end
