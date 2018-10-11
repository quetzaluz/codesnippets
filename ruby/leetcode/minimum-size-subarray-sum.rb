# @param {Integer} s
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(s, nums)
    this_len = 0
    this_sum = 0
    max_len = nums.size() + 1
    min_len = max_len
    j = 0
    for i in 0...nums.size()
        this_sum = nums[i]
        this_len = 1
        j = i + 1
        while j < nums.size()
            if this_sum >= s
                break
            end
            this_sum += nums[j]
            this_len += 1
            j += 1
        end
        if this_sum >= s && this_len < min_len
            min_len = this_len
        end
    end
    if min_len < max_len then return min_len else return 0 end
end
