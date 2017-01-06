var fs  = require("fs");

function st(s) {
    res = []
    ts = s.split(' ')
    for (i = 0; i < ts.length; i++) {
        r = 0
        si = ts[i].split(':')
        r += parseInt(si[0]) * 3600
        r += parseInt(si[1]) * 60
        r += parseInt(si[2])
        res.push([ts[i], r])
    }
    console.log(res.sort(function(a, b) {return a[1] - b[1]}).map(function(x) {return x[0]}).join(' '))
}
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        st(line)
    }
});