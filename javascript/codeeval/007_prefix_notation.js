function pr(g, v, lo) {
    o = g.shift()
    if (g[1]) {
        if (o == '*') {
            if (!lo || lo == '+') {
                return v + (g[0] * g[1])
            } else if (lo == '*') {
                return v * (g[0] * g[1])
            } else if (lo == '/') {
                return v / (g[0] * g[1])
            }
        } else if (o == '+') {
            if (!lo || lo == '+') {
                return v + (g[0] + g[1])
            } else if (lo == '*') {
                return v * (g[0] + g[1])
            } else if (lo == '/') {
                return v / (g[0] + g[1])
            }
        } else if (o == '/') {
            if (!lo || lo == '+') {
                return v + (g[0] / g[1])
            } else if (lo == '*') {
                return v * (g[0] / g[1])
            } else if (lo == '/') {
                return v / (g[0] / g[1])
            }
        }
    } else {
        if (o == '*') {
            return v * g[0]
        } else if (o == '+') {
            return v + g[0]
        } else if (o == '/') {
            return v / g[0]
        } 
    }
}

function pref(line) {
    console.log(line)
    s = line.split(' ')
    lop = s.shift()
    r = []
    rg = []
    for (var i = (s.length - 1); i >= 0; i--) {
        if (['*', '/', '+'].indexOf(s[i]) >= 0) {
            rg.unshift(s[i])
            r.push(rg)
            rg = []
        } else {
            rg.unshift(parseInt(s[i]))
        }
    }

    if (r[0].length > 3) {
        r.push([lop, r[0].pop()])
        lop = null
    }

    v = 0

    for (g = 0; g < r.length; g++) {
        v = pr(r[g], v, lop)
    }
    return v
}