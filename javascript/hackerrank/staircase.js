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
 * Complete the staircase function below.
 */
function staircase(n) {
    /*
     * Write your code here.
     */
    let i = 1
    while (i <= n) {
        let res = ''
        for (let k = 0; k < n - i; k++) {
            res += ' '
        }
        for (let k = 0; k < i; k++) {
            res += '#'
        }
        console.log(res)
        i++
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
