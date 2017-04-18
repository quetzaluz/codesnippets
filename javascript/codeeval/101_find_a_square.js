var fs  = require("fs");

function ds(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2))
}

function findS(line) {
    x = line.trim().substr(1, line.length - 2).split('), (')
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i].split(',')
        x[i][0] = parseInt(x[i][0])
        x[i][1] = parseInt(x[i][1])
    }
    d = []
    d.push(ds(x[0], x[1]))
    d.push(ds(x[1], x[2]))
    d.push(ds(x[2], x[3]))
    d.push(ds(x[3], x[0]))
    d.push(ds(x[0], x[2]))
    d.push(ds(x[1], x[3]))
    d = d.sort()
    return d[0] == d[1] && d[0] == d[2] && d[0] == d[3] && d[4] == d[5]
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(findS(line))
    }
});