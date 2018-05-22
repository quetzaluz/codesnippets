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

// Complete the minimumNumber function below.
const specialChars = '!@#$%^&*()-+';

function minimumNumber(n, s) {
    // Return the minimum number of characters to make the password strong
    let conditionsNeeded = 4 // uppercase, lowercase, digit
    let hasLower = 0
    let hasUpper = 0
    let hasDigit = 0
    let hasSpecial = 0
    let change = 0
    let one = 0
    let two = 0
    let p = 2
    for (var i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            if (specialChars.indexOf(s[i]) !== -1) {
                hasSpecial = 1  
            } else if (s[i] == s[i].toLowerCase()) {
                hasLower = 1
            } else {
                hasUpper = 1
            }
        } else {
            hasDigit = 1
        }
    }
    let conditionsMet = hasDigit + hasLower + hasUpper + hasSpecial
    while (p < s.length) {
        if (s[p] == s[p-1] && s[p] == s[p-2]) {
            let length = 2
            while (p < s.length && s[p] == s[p-1]) {
                length++
                p++
            }
            change += Math.floor(length / 3)
            if (length % 3 == 0) { one++ }
            else if (length % 3 == 1) { two++ }
        } else {
            p++
        }
    }
    if (s.length < 6) {
        return Math.max(conditionsNeeded - conditionsMet, 6 - s.length)
    } else {
        return Math.max(conditionsNeeded - conditionsMet, change)
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
