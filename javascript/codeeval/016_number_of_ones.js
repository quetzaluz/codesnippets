var fs  = require("fs");

var n1 = function (line) {
    return (parseInt(line) >>> 0).toString(2).replace(/0/g, '').length
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(n1(line))
    }
});
