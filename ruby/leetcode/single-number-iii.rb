# @param {Integer[]} nums
# @return {Integer[]}
def single_number(nums)
    seen = {}
    nums.each do |i|
        seen[i] = if seen[i] then seen[i] + 1 else 1 end
    end
    result = []
    seen.each do |k, v|
        if v == 1
            result << k
        end
    end
    return result
end