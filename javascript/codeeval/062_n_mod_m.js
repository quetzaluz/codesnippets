function modulo(input) {
    var vals = input.split(',');
    var x = parseInt(vals[0]);
    var y = parseInt(vals[1]);
    console.log(x - (Math.floor(x / y) * y));
}
//Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       modulo(line);
    }
});