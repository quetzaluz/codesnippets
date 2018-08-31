/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var startN = 0;
    var endN = n - 1;
    var startM = 0;
    var endM = n - 1;
    var matrix = initializeMatrix(n);
    var position = 0;
    while (startN <= endN && startM <= endM) {
    	// go across to the right
    	for (var i = startM; i <= endM; i++) {
    		matrix[startN][i] = ++position;
    	}
    	startN++;

    	// go down
    	for (var i = startN; i <= endN; i++) {
    		matrix[i][endM] = ++position;
    	}
    	endM--;

    	// go across to the left
        if (startN <= endN) {
            for (var i = endM; i >= startM; i--) {
                matrix[endN][i] = ++position;
            }
            endN--;
        }

    	// go up
        if (startM <= endM) {
            for (var i = endN; i >= startN; i--) {
                matrix[i][startM] = ++position;
            }
            startM++;
        }
    }
    return matrix;
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var initializeMatrix = function (n) {
	var matrix = [];
	for (var i = 0; i < n; i++) {
		matrix.push(new Array(n));
	}
	return matrix;
};
