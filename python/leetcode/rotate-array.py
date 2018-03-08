class Solution:
    def rotate(self, nums, k):
        new_arr = [None] * len(nums)
        for i in range(len(nums)):
            new_arr[(i + k) % len(nums)] = nums[i]
        for i in range(len(nums)):
            nums[i] = new_arr[i]
