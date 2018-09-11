# @param {Integer[]} nums
# @param {Integer} k
# @return {Float}
def find_max_average(nums, k)
    this_sum = 0.0
    for i in 0...k do
        this_sum += nums[i]
    end
    max_sum = this_sum
    for i in k...nums.size() do
        this_sum += nums[i] - nums[i - k]
        max_sum = [max_sum, this_sum].max
    end
    return max_sum / k
end
