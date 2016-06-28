var fs  = require("fs");
var mth_to_last = function(line) {
    var a = line.split(' ')
    var i = parseInt(a.pop())
    var l = a.length
    var r = a[l - i]
    if (r) { console.log(r); }    
};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       mth_to_last(line);
    }
});