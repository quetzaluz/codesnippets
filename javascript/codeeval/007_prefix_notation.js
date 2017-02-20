OPS = ['+', '/', '*']
function pref(line) {
    s = line.split(' ')
    r = []
    for (var i = s.length - 1; i >= 0; i--) {
        if (OPS.indexOf(s[i]) >= 0) {
            r1 = r.pop()
            r2 = r.pop()
            if (s[i] == '+') {
                r.push(r1 + r2)
            } else if (s[i] == '*') {
                r.push(r1 * r2)
            } else if (s[i] == '/') {
                r.push(r1 / r2)
            }
        } else {
            r.push(parseInt(s[i]))
        }
    }
    return r[0]
}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(pref(line))
    }
});