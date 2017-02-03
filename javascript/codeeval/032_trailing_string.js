var fs  = require("fs");
var ew = function(l) {
    var inp = l.trim().split(',')
    var w = inp[0]
    var f = inp[1]
    return w.substr((f.length * -1), w.length) == f ? 1 : 0
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       console.log(ew(line))
    }
});