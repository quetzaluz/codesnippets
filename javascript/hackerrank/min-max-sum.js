'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the miniMaxSum function below.
 */
function miniMaxSum(arr) {
    /*
     * Write your code here.
     */
    let min = Infinity
    let max = -Infinity
    let totalSum = 0
    arr.forEach(function (i) {
        if (i < min) {
            min = i
        }
        if (i > max) {
            max = i
        }
        totalSum += i
    })
    return `${totalSum - max} ${totalSum - min}`
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(miniMaxSum(arr));
}
