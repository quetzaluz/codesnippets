# NOT SUBMITTED YET
def find_peak_element(nums):
	for i in range(len(nums)):
		if (i - 1 < 0 or nums[i - 1] < nums[i]) and (i + 1 >= len(nums) or nums[i] > nums[i + 1]):
			return i
	return False
