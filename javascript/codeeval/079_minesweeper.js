function buildSweeper(m, n, vals) {
    // build the map
    mMap = []
    lIdx = 0
    for (var i = 0; i < m; i++) {
        r = []
        for (var j = 0; j < n; j++) {
            l = vals.slice(lIdx, lIdx+1)
            if (l == '*') {
                r.push('*')
            } else {
                r.push(0)
            }
            lIdx++
        }
        mMap.push(r)
    }

    // calculate adjacent and concatenate to string
    result = ''
    for (var i = 0; i < mMap.length; i++) {
        for (var j = 0; j < mMap[0].length; j++) {
            if (mMap[i][j] != '*') {
                mMap[i][j] = calculateAdjacent(mMap, i, j)
            }
            result += mMap[i][j].toString()
        }
    }
    return result
}

function calculateAdjacent(map, i, j) {
    c = 0
    if (map[i-1] && map[i-1][j-1] == '*') {
        c++
    }
    if (map[i-1] && map[i-1][j] == '*') {
        c++
    }
    if (map[i-1] && map[i-1][j+1] == '*') {
        c++
    }
    if (map[i][j-1] == '*') {
        c++
    }
    if (map[i][j+1] == '*') {
        c++
    }
    if (map[i+1] && map[i+1][j-1] == '*') {
        c++
    }
    if (map[i+1] && map[i+1][j] == '*') {
        c++
    }
    if (map[i+1] && map[i+1][j+1] == '*') {
        c++
    }
    return c
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        parsedInput1 = line.split(';')
        parsedInput2 = parsedInput1[0].split(',')
        console.log(buildSweeper(parseInt(parsedInput2[0]), parseInt(parsedInput2[1]), parsedInput1[1]))
    }
});