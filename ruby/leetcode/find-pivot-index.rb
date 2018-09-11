# @param {Integer[]} nums
# @return {Integer}
def pivot_index(nums)
    sum = 0
    left_sum = 0
    nums.each do |n|
        sum += n
    end
    for i in 0...nums.size()
        n = nums[i]
        if left_sum == sum - left_sum - n
            return i
        end
        left_sum += n
    end
    return -1
end
