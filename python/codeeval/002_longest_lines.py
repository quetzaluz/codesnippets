import sys

with open(sys.argv[1], 'r') as test_cases:
	r = []
	fst = True
	for test in test_cases:
		if fst:
			c = int(test)
			fst = False
		else:
			r.append(test)
	r.sort(key=len, reverse=True)
	print(''.join(r[0:c]))
	r = []
