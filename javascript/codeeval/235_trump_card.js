var fs  = require("fs");

ORDER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

function st(inp) {
    inps = inp.split(' | ')
    s = inps[1]
    cs = inps[0].split(' ')
    c1 = cs[0]
    c2 = cs[1]
    c1l = c1.length - 1
    c2l = c2.length - 1
    if (c1[c1l] == s) {
        if (c2[c2l] != s) {
            return c1
        }
    }
    else if (c2[c2l] == s) {
        return c2
    }
    c1i = ORDER.indexOf(c1.substr(0,c1l))
    c2i = ORDER.indexOf(c2.substr(0,c2l))
    if (c1i > c2i) {
        return c1
    }
    else if (c1i < c2i) {
        return c2
    }
    else {
        return c1 + ' ' + c2
    }

}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(st(line))
    }
});