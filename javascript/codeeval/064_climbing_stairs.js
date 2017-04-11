var fs  = require("fs");

function factorial(n) {
    return (n<2) ? 1 : factorial(n-1)*n;
}

function perm(one, two) {
    return Math.floor(factorial(one+two)/(factorial(one)*factorial(two)))
}

function cs(num) {
    var np = 0
    var one = num 
    var two = 0
    while (one >= 0) {
        np += perm(one, two)
        two += 1
        one = num - (2 * two)
    }
    return np
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(cs(parseInt(line)))
    }
});
