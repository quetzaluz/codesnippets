class Solution:
    def productExceptSelf(self, nums):
        b = [1]
        a = 1
        for i in range(len(nums) - 1):
            a *= nums[i]
            b.append(a)
        a = 1
        for i in range(len(nums) - 1, 0, -1):
            a *= nums[i]
            b[i - 1] *= a
        return b
