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

// Complete the minimumLoss function below.
function minimumLoss(price) {
    let sorted = price.map(function(v, i) {
        return [i, v]
    })
    sorted = sorted.sort(function(a, b) {
        if (a[1] < b[1]) {
            return 1
        } else if (a[1] > b[1]) {
            return -1
        } else {
            return 0
        }
    })
    let minLoss = Infinity;
    for (var i = 1; i < sorted.length; i++) {
        if (sorted[i - 1][0] < sorted[i][0] && sorted[i - 1][1] - sorted[i][1] < minLoss) {
            minLoss = sorted[i - 1][1] - sorted[i][1]
        }
    }
    return minLoss
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const price = readLine().split(' ').map(priceTemp => parseInt(priceTemp, 10));

    let result = minimumLoss(price);

    ws.write(result + "\n");

    ws.end();
}
