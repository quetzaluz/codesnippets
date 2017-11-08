function productOfAllButSelf (arr, n) {
	var b = [1] // Initialize because we are going to be adding right side products first
	var a = 1
	for (var i = 0; i <= arr.length - 2; i++) {
		a *= arr[i]
		b[i+1] = a
	}
	a = 1
	for (var i = (arr.length - 1); i >= 1; i--) {
		a *= arr[i]
		b[i - 1] *= a
	}
	return b
}