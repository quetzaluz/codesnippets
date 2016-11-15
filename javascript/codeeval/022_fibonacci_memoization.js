fm = { 0: 0, 1: 1, 2: 1 }
var fib = function(n){
    if (fm[n] !== undefined) { return fm[n] }
    fm[n-1] = fm[n-1] || fib(n - 1)
    fm[n-2] = fm[n-2] || fib(n - 2)
    return fm[n-1] + fm[n-2];
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(fib(parseInt(line)))
    }
})
