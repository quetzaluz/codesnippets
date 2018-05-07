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

function rotateArray(nums, k) {
    let newArr = Array(nums.length)
    for (var i = 0; i < nums.length; i++) {
        newArr[(i + k) % nums.length] = nums[i]
    }
    for (var i = 0; i < nums.length; i++) {
        nums[i] = newArr[i]
    }
    return newArr
}

function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    
    console.log(rotateArray(a, n - d).join(' '))
}
