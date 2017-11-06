var fs  = require("fs");

function withoutRep(inp) {
    var l;
    var ret = '';
    for (var i = 0; i < inp.length; i++) {
        if (inp[i] != l) {
            ret += inp[i]
            l = inp[i]
        }
    }
    return ret
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(withoutRep(line))
    }
});