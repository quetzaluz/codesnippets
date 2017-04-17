LETTERS = { a: 'y', b: 'h', c: 'e', d: 's', e: 'o', f: 'c', g: 'v', h: 'x', i: 'd', j: 'u', k: 'i', l: 'g', m: 'l', n: 'b', o: 'k', p: 'r', q: 'z', r: 't', s: 'n', t: 'w', u: 'j', v: 'p', w: 'f', x: 'm', y: 'a', z: 'q' }
SPACE = ' '

function tr(line) {
    s = ''
    for (var i = 0; i < line.length; i++) {
        if (line[i] == SPACE) {
            s += SPACE
        } else {
            s += LETTERS[line[i]]
        }
    }
    return s
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(tr(line))
    }
});
