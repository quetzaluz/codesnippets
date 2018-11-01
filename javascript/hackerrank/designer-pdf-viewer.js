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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let maxHeight = 0;
    word.split('').forEach((char) => {
       maxHeight = Math.max(h[ord(char) - 97], maxHeight); 
    });
    return maxHeight * word.length;
}

// custom implementation of ord in javascript
function ord (string) {
  const str = string + ''
  const code = str.charCodeAt(0)

  if (code >= 0xD800 && code <= 0xDBFF) {
    const hi = code;
    if (str.length === 1) { return code; }
    const low = str.charCodeAt(1)
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000
  }
  if (code >= 0xDC00 && code <= 0xDFFF) { return code; }

  return code;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    ws.write(result + "\n");

    ws.end();
}
