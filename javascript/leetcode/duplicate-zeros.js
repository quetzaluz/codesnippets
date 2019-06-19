/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let j = 0;
    let i = 0;
    let newArr = arr.slice();
    while (j < newArr.length) {
        if (newArr[i] === 0) {
            arr[j++] = 0;
            if (j >= arr.length) break;
        }
        arr[j++] = newArr[i];
        i++;
    }
    arr = arr
};
