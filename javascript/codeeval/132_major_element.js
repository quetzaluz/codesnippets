var fs  = require("fs");

function me(test) {
    a = test.split(',')
    l = a.length / 2
    c = {}
    m = a[0]
    for (var i = 0; i < a.length; i++) {
        if (c[a[i]]) {
            c[a[i]] += 1
            if (c[a[i]] > c[m]) { m = a[i]}
        } else {
            c[a[i]] = 1
        }
    }
    return c[m] > l ? m : 'None'
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(me(line))
    }
});
