/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var subArr = []
    var longestArr = []
    var indexOfExisting, lastIndexOfExisting;
    for (var i = 0; i < A.length; i++) {
        indexOfExisting = B.indexOf(A[i])
        if (indexOfExisting > -1 && (!lastIndexOfExisting || indexOfExisting == lastIndexOfExisting + 1)) {
            subArr.push(A[i])
            lastIndexOfExisting = indexOfExisting
        } else {
            if (subArr.length > longestArr.length) {
                longestArr = subArr
            }
            subArr.push(A[i])
            subArr = subArr.slice(indexOfExisting+1)
            lastIndexOfExisting = null
            indexOfExisting = null
        }
    }
    if (subArr.length > longestArr.length)  { longestArr = subArr }
   	console.log(longestArr)
    return longestArr.length
};