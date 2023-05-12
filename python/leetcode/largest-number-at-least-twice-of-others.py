class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        # Start with naive solution of nested loop.
        # Optimize this loop somewhat by tracking biggest value seen.
        largest_seen = -1
        for i in range(len(nums)):
            if nums[i] > largest_seen and self.isTwoTimesLarger(nums, nums[i]):
                largest_seen = i
        return largest_seen


    def isTwoTimesLarger(self, nums: List[int], candidate: int) -> bool:
        for i in range(len(nums)):
            if nums[i] != candidate and (nums[i] * 2) > candidate:
                return False
        return True
