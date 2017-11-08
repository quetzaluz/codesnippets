// input -- arr, positions to swap by
// shiftEle([1, 2, 3, 4, 5], 3) => [3, 4, 5, 1, 2]
// shiftEle([1, 2, 3, 4, 5], -1) => [2, 3, 4, 5, 1]
// goal -- do this in O(n) constant time
// starting with tmp array, then will try swap in place

function shiftEle(arr, pos) {
	var tmpIdx, tmp, arrLen;
	arrLen = arr.length
	var newArr = []
	for (var i = 0; i < arrLen; i++) {
		tmpIdx = i + pos
		if (tmpIdx < 0) { tmpIdx = arrLen + tmpIdx } // no negative indexing in js
		else if (tmpIdx >= arrLen) { tmpIdx = tmpIdx - arrLen}
		newArr.push(arr[tmpIdx])
	}
	return newArr
}