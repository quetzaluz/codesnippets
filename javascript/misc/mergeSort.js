function mergeSort(arr) {
	if (arr.length < 2) {
		return arr
	}
	// Split the list
	var mid = ~~(arr.length / 2)
	var leftHalf = arr.slice(0, mid)
	var rightHalf = arr.slice(mid)
	return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

function merge (leftHalf, rightHalf) {
	arr = []
	while (leftHalf.length && rightHalf.length) {
		if (leftHalf[0] <= rightHalf[0]) {
			arr.push(leftHalf.shift())
		} else {
			arr.push(rightHalf.shift())
		}
	}
	while (leftHalf.length) {
		arr.push(leftHalf.shift())
	}
	while (rightHalf.length) {
		arr.push(rightHalf.shift())
	}
	return arr
}