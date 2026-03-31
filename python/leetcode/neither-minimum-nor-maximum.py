class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        # Loop and set min and max, as soon as we find a number
        # between either break loop and return
        last_num = nums[0]
        this_max = last_num
        this_min = last_num
        i = 1
        while i < len(nums):
            num = nums[i]
            if num > this_max:
                if this_max > this_min:
                    return this_max
                this_max = num
            if num < this_min:
                if this_min < this_max:
                    return this_min
                this_min = num
            last_num = num
            i += 1
        return last_num if last_num > this_min and last_num < this_max else -1
