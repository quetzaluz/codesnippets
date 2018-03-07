class NumArray:

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.nums = nums
        self.cache = {}
        self.build_cache()

    def build_cache(self):
        for i in range(len(self.nums)):
            sum = 0
            for k in range(i, len(self.nums)):
                sum += self.nums[k]
                self.cache['%s,%s' % (i, k)] = sum


    def sumRange(self, i, j):
        if '%s,%s' % (i, j) in self.cache:
            return self.cache['%s,%s' % (i, j)]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)