import sys

def doors(inp):
	inp = inp.split(' ')
	d = int(inp[0])
	ite = int(inp[1])
	r = [1] * d
	for i in range(0, ite):
		for j in range(0, d):
			n = j + 1
			mod2 = n % 2 == 0
			mod3 = n % 3 == 0
			if mod2 and mod3:
				r[j] = 1
			elif mod2 or mod3:
				r[j] = 0
	r[d-1] = 0 if r[d-1] == 1 else 1
	result = 0
	for i in range(0, d):
		result += r[i]
	return result


with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(doors(test))
