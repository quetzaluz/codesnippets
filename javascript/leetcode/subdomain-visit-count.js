/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var findEntryIndex = function(seen, domain) {
    for (var i = 0; i < seen.length; i++) {
        if (seen[i][1] === domain) {
            return i
        }
    }
    return -1
}

var subdomainVisits = function(cpdomains) {
    seen = []
    cpdomains.forEach(function(e) {
        spl = e.split(' ')
        val = parseInt(spl[0])
        dom = spl[1]
        while (dom !== '') {
            existsIndex = findEntryIndex(seen, dom)
            if (existsIndex !== -1) {
                seen[existsIndex] = [seen[existsIndex][0] + val, dom]
            } else {
                seen.push([val, dom])
            }
            dom = dom.replace(/[a-z0-9]+\.?/i, '')
        }
    })
    seen = seen.sort(function(a,b) {return b[0] - a[0]})
    return seen.map(function(x) {return x.join(' ')})
};
