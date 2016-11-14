var num;
var res = []

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        if (num == null) {
            num = parseInt(line);
        } else {
            res.push([line, line.length])  
        }
    }
});
res.sort(function(a, b) {
    return b[1] - a[1];
})

for (i = 0; i < num; i++) {
    console.log(res[i][0])
}
