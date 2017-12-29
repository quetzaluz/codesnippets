var fs  = require("fs");
function hasRotation (s1, s2) {
	matchFound = false
	sc1 = 0
	sc2 = 0
	while (true) {
		if (sc2 >= s2.length && !matchFound) {
			return 'False'
		}
		if (sc2 > s2.length - 1) {
			sidx2 = sc2 - (s2.length)
		} else {
			sidx2 = sc2
		}
		if (s2[sidx2] == s1[sc1]) {
			matchFound = true
			if (sc1 == s1.length -1) { return 'True' }
			sc2++
			sc1++
		} else {
			matchFound = false
			sc1 = 0
			sc2++
		}
	}
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        vals = line.split(',')
        console.log(hasRotation(vals[0], vals[1]))
    }
});
