class Solution:

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.orig = nums
        

    def reset(self):
        """
        Resets the array to its original configuration and return it.
        :rtype: List[int]
        """
        return self.orig
        

    def shuffle(self):
        """
        Returns a random shuffling of the array.
        :rtype: List[int]
        """
        options = self.orig.copy()
        l = len(options)
        shuf = []
        while l > 0:
            shuf.append(options.pop(int((random.random() * l) / 1)))
            l -= 1
        return shuf
        
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
