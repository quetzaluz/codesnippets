'use strict';

const fs = require('fs');

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
 * Complete the diagonalDifference function below.
 */
function diagonalDifference(a) {
    /*
     * Write your code here.
     */
    let firstSum = 0
    let secondSum = 0
    let c = 0
    let r = 0
    while (c < a.length) {
        firstSum += a[c][r]
        c++
        r++
    }
    r = 0
    c = a.length - 1
    while (c >= 0) {
        secondSum += a[c][r]
        c--
        r++
    }
    return Math.abs(secondSum - firstSum)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let aRowItr = 0; aRowItr < n; aRowItr++) {
        a[aRowItr] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    ws.write(result + "\n");

    ws.end();
}
