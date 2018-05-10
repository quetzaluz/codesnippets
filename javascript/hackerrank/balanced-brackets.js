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

// Complete the isBalanced function below.
var isBalanced = function(s) {
    let v = {p: {idx: [], cnt: 0}, s: {idx: [], cnt: 0}, c: {idx: [], cnt: 0}}
    for (var i = 0; i <= s.length; i++) {
        let l = s[i]
        if (l == '(') {
            v = updateForOpenBrackets(v, 'p', i)
        } else if (l == ')') {
            v = updateForClosedBrackets(v, 'p', 'c', 's')
            if (!v) { return v ? 'YES' : 'NO' }
        } else if (l == '[') {
            v = updateForOpenBrackets(v, 's', i)
        } else if (l == ']') {
            v = updateForClosedBrackets(v, 's', 'p', 'c')
            if (!v) { return v ? 'YES' : 'NO' }
        } else if (l == '{') {
            v = updateForOpenBrackets(v, 'c', i)
        } else if (l == '}') {
            v = updateForClosedBrackets(v, 'c', 'p', 's')
            if (!v) { return v ? 'YES' : 'NO' }
        }
        let prev = l
    }
    if (v['p'].cnt != 0 || v['s'].cnt != 0 || v['c'].cnt != 0) {
        return 'NO'
    } else {
        return 'YES'
    }
};

function hasUnclosedBrackets(values, thisType, otherType1, otherType2) {
    return values[thisType].cnt == 0 ||
           values[otherType1].idx[values[otherType1].idx.length - 1] > values[thisType].idx[values[thisType].idx.length - 1] ||
           values[otherType2].idx[values[otherType2].idx.length - 1] > values[thisType].idx[values[thisType].idx.length - 1]
}

function updateForClosedBrackets(values, thisType, otherType1, otherType2) {
    // returns values or false if found to be invalid
    if (hasUnclosedBrackets(values, thisType, otherType1, otherType2)) {
        return false
    } else {
        values[thisType].cnt -= 1
        values[thisType].idx.pop()
        return values
    }
}

function updateForOpenBrackets(values, thisType, idx) {
    values[thisType].cnt += 1
    values[thisType].idx.push(idx)
    return values
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
