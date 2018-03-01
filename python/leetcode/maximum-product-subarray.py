class Solution:
    def maxProduct(self, nums):
        start_idx = 0
        max_p = nums[start_idx]
        while (start_idx < len(nums)):
            this_product = nums[start_idx]
            if this_product > max_p:
                max_p = this_product
            for i in range(start_idx + 1, len(nums)):
                this_product *= nums[i]
                if this_product > max_p:
                    max_p = this_product
            start_idx += 1
        return max_p