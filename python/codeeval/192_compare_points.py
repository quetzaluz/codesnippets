import sys

def c2c(coords):
	c = coords.split(' ')
	dist_ns = int(c[3]) - int(c[1])
	dist_ew = int(c[0]) - int(c[2])
	dir = ''
	if dist_ns > 0:
		dir += 'N'
	elif dist_ns < 0:
		dir += 'S'
	elif dist_ew == 0:
		return 'here'
	if dist_ew > 0:
		dir += 'E'
	elif dist_ew < 0:
		dir += 'W'
	return dir

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(c2c(test))
