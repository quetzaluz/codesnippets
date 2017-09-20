import sys

def c2c(coords):
	c = coords.split(' ')
	x1 = int(c[0])
	y1 = int(c[1])
	x2 = int(c[2])
	y2 = int(c[3])
	dist_ns = y2 - y1
	dist_ew = x1 - x2
	dir = ''
	if dist_ew == 0 and dist_ns == 0:
		return 'here'
	if y2 > y1:
		dir += 'N'
	elif y2 < y1:
		dir += 'S'
	if x2 > x1:
		dir += 'E'
	elif x2 < x1:
		dir += 'W'
	return dir

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(c2c(test))
