# @param {Integer[]} nums
# @return {Integer[]}
def majority_element(nums)
    seen = {}
    majority_count = nums.size / 3
    nums.each do |n|
        seen[n] = if seen[n] then seen[n] + 1 else 1 end
    end
    return seen.select { |k, v| v > majority_count }.keys
end
