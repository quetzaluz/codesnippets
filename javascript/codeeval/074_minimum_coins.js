var fs  = require("fs");

function mc(line) {
    t = parseInt(line)
    c = 0
    d = [5, 3, 1]
    while (t > 0) {
        for (i = 0; i < 3; i++) {
            di = d[i]
            r = Math.floor(t / di)
            if (r > 0) {
                c += r
                t -= (r * di)
            }
        }
    }
    return c
}
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(mc(line))
    }
});