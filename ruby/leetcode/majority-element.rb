# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    seen = {}
    if nums.size == 1
        return nums[0]
    end
    majority_count = nums.size / 2
    nums.each do |n|
        if seen.include? n
            seen[n] += 1
            if seen[n] > majority_count
                return n
            end
        else
            seen[n] = 1
        end
    end
end
