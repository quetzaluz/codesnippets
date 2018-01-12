/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    idxMap = {}
    for (var i = 0; i < B.length; i++) {
        if (idxMap[B[i]]) {
            idxMap[B[i]].push(i)
        } else {
            idxMap[B[i]] = [i]
        }
    }
    for (var i = 0; i < A.length; i++) {
        A[i] = idxMap[A[i]].pop()
    }
    return A
};