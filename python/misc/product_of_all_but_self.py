# UNTESTED
def product_of_all_but_self(arr, n):
	b = [1]
	a = 1
	for i in range(len(nums) - 2):
		a *= arr[i]
		b[i+1] = a
	a = 1
	for i in range(len(nums) - 1, 1):
		a *= arr[i]
		b[i - 1] *= a
	return b
