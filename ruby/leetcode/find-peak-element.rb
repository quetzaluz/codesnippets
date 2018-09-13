# @param {Integer[]} nums
# @return {Integer}
def find_peak_element(nums)
    for i in 0...nums.size() do
        if (i -1 < 0 || nums[i - 1] < nums[i]) && (i + 1 >= nums.size() || nums[i] > nums[i + 1])
            return i
        end      
    end
    return false
end
