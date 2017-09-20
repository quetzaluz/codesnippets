function c2c (coords) {
	c = coords.split(' ')
	x1 = parseInt(c[0])
	y1 = parseInt(c[1])
	x2 = parseInt(c[2])
	y2 = parseInt(c[3])
	dist_ns = y2 - y1
	dist_ew = x1 - x2
	dir = ''
	if )dist_ew == 0 and dist_ns == 0) {
		return 'here'
	}
	if (y2 > y1) {
		dir += 'N'
	} else if (y2 < y1) {
		dir += 'S'
	}
	if (x2 > x1) {
		dir += 'E'
	} else if (x2 < x1) {
		dir += 'W'
	}
	return dir
}