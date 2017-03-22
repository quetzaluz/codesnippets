var fs  = require("fs");

var words = "Mary had a little lamb its fleece was white as snow And everywhere that Mary went the lamb was sure to go It followed her to school one day which was against the rule It made the children laugh and play to see a lamb at school And so the teacher turned it out but still it lingered near And waited patiently about till Mary did appear Why does the lamb love Mary so the eager children cry Why Mary loves the lamb you know the teacher did reply "

function gai (words, word) {
    var is = []
    var i = -1;
    l = word.length;
    while ((i = words.indexOf(word, i+1)) != -1){
        if (words[i + l] == ' ') {
            is.push(i + l + 1);
        }
    }
    return is;
}

function ta (inpu) {
    inp = inpu.split(',')
    n = parseInt(inp[0])
    w = inp[1]
    wl = w.length
    indexes = gai(words, w)
    l = indexes.length
    f = {}
    r = []
    fw = ''
    nUsed = w.replace(/\S+/g, '').length + 1
    for (var i = 0; i < indexes.length; i++) {
        indx = indexes[i]
        k = ''
        tn = nUsed
        li = indx + 1
        while (tn < n) {
            fw = words.slice(indx, words.indexOf(' ', li))
            k += fw
            li += fw.length
            indx += fw.length
            tn += 1
            if (tn == n) {
              fw = ''
              break;
            }
        }
        if (f[k]) {
            f[k] += 1
        } else {
            f[k] = 1
        }
    }
    for (var key in f) {
        r.push([key.replace('-', ' '), (f[key] / l).toFixed(4).substring(0,5)])
    }
    r = r.sort(function(a, b) {
        if (a[1] < b[1]) return 1;
        if (a[1] > b[1]) return -1;
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
    })
    return r.join(';')
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(ta(line))
    }
});
