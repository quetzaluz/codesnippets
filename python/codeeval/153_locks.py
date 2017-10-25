import sys

def doors(inp):
	inp = inp.split(' ')
	d = int(inp[0])
	ite = (int(inp[1]) * 2) - 1
	r = [1] * d
	for i in range(0, ite):
		for j in range(0, d):
			if i == ite - 1:
				r[d-1] = 0 if r[d-1] == 1 else 1
				break
			elif i % 2 == 0 and j % 2 == 1:
				r[j] = 0
			elif i % 2 == 1 and j % 3 == 2:
				r[j] = 0 if r[j] == 1 else 1
	result = 0
	for i in range(0, d):
		result += r[i]
	return result


with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(doors(test))
