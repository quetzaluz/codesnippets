var fs  = require("fs");
var sm = function (inp) {
    inp = inp.split(',')
    t = parseInt(inp[0])
    f = parseInt(inp[1])
    m = 2
    p = f
    while (p < t) {
        p = f * m
        m++
    }
    return p
}
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(sm(line))
    }
});
