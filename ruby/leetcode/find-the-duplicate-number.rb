# @param {Integer[]} nums
# @return {Integer}
def find_duplicate(nums)
   seen = {}
   for i in 0...nums.size()
        return nums[i] if seen[nums[i]]
        seen[nums[i]] = 1
   end
end
