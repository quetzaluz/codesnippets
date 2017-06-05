var fs  = require("fs");

function ic (inp) {
	ret = ''
	for (var i = 0; i < inp.length; i++) {
		ltr = inp[i]
		u = ltr.toUpperCase()
		console.log(u)
		if (ltr == u) {
			ret += ltr.toLowerCase()
		} else {
			ret += u
		}
	}
	return ret
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(ic(line))
    }
});