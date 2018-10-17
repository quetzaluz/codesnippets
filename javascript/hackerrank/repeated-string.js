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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    const repeats = Math.floor(n / s.length);
    const remainder = n % s.length;

    let i = 0;
    let fullCount = 0;
    let remainderCount = 0;

    while (i < s.length) {
        if (s[i] === 'a') {
            if (i < remainder) {
                remainderCount++;
            }
            fullCount++;
        }
        i++;
    }
    return (fullCount * repeats) + remainderCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
