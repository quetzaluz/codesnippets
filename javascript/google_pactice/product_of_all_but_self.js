function productOfAllButSelf (arr, n) {
	var accum = 1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != n) { accum *= arr[i] }
	}
	return accum;
}