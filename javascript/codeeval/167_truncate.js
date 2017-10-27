var fs  = require("fs");

function trunc(inp) {
    if (inp.length > 55) {
        return inp.substr(0,40).trim() + '... <Read More>'
    } else {
        return inp
    }
}
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(trunc(line))
    }
});
