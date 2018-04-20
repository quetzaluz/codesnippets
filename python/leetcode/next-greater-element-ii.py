class Solution:
    def nextGreaterElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = [-1] * len(nums)
        stack = []
        for i in range((len(nums) * 2) - 1, -1, -1):
            while len(stack) > 0 and nums[stack[-1]] <= nums[i % len(nums)]:
                stack.pop()
            result[i % len(nums)] = -1 if len(stack) == 0 else nums[stack[-1]]
            stack.append(i % len(nums))
        return result
