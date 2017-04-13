var fs  = require("fs");

function fp(inp) {
    inp = inp.trim().split(' ')
    r = inp.shift().replace(/\./g, '\\.').replace(/\?/g, '.').replace(/\*/g, '.*')
    r = new RegExp('^(' + r + ')$')
    result = []
    for (i = 0; i < inp.length; i++) {
        if (inp[i].match(r)) {
            result.push(inp[i])
        }
    }
    return result.length > 0 ? result.join(' ') : '-'
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(fp(line))
    }
});
