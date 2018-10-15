# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
  start_idx = 0
  max_p = nums[start_idx]
  while start_idx < nums.size()
    this_product = nums[start_idx]
    if this_product > max_p
      max_p = this_product
    end
    for i in (start_idx + 1)...nums.size()
      this_product *= nums[i]
      if this_product > max_p
        max_p = this_product
      end
    end
    start_idx += 1
  end
  return max_p
end
