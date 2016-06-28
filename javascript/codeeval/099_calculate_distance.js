function pythagoras(line) {
    input = line.replace(/^\(/, '').replace(/\)$/, '').split(') (');
    coords_a = input[0].split(', ').map(function(x){ return parseInt(x) });
    coords_b = input[1].split(', ').map(function(x){ return parseInt(x) });
    side_a = Math.abs(coords_a[0] - coords_b[0]);
    side_b = Math.abs(coords_a[1] - coords_b[1]);
    console.log(Math.sqrt(Math.pow(side_a, 2) + Math.pow(side_b, 2)));
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        pythagoras(line)
    }
});