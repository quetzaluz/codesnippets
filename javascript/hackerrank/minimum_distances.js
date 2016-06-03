process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    A = readLine().split(' ');
    A = A.map(Number);
    min = -1;
    for(i = 0; i < A.length; i++) {
        for(j=0; j < A.length; j++) {
            v = Math.abs(i - j);
            if (i != j && A[i] == A[j] && (v < min || min == -1)) {
                min = v;
            }
        }
    }
    console.log(min);
}
