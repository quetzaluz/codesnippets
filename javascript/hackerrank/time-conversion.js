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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    const pm = s.slice(8,10).toUpperCase() == 'PM'
    let nums = s.slice(0, 8).split(':')
    if (pm) {
        nums[0] = ((parseInt(nums[0]) % 12) + 12).toString().padStart(2, '0')
    } else {
        nums[0] = ((parseInt(nums[0]) % 12)).toString().padStart(2, '0')
    }
    return nums.join(':')
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
