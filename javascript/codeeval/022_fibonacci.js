var fib = function(n){
    if (n <= 0) {
        return 0;
    } else if (n <= 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(fib(parseInt(line)))
    }
})
