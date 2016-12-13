import sys
def fib(str_n):
	n = int(str_n)
	if n == 0:
		return 0
	elif n < 2:
		return 1
	else:
		return fib(n - 1) + fib(n - 2)
with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(fib(test))
