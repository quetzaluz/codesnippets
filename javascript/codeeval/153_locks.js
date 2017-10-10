var fs  = require("fs");
function doors(inp) {
  inp = inp.split(' ')
  var d = parseInt(inp[0])
  var ite = parseInt(inp[1])
  var r = []
  for (var j = 0; j < d; j++) {
    r.push(1)
  }
  for (var i = 0; i < ite; i++) {
    for (var j = 0; j < d; j++) {
      var n = j + 1
      mod2 = n % 2 == 0
      mod3 = n % 3 == 0
      if (mod2 && mod3) {
        r[j] = 1
      }
      else if (mod2) {
        r[j] = 0
      }
      else if (mod3) {
        r[j] = 0
      }
    }
  }

  r[d-1] = r[d-1] == 1 ? 0 : 1

  result = 0
  for (var i = 0; i < d; i++) {
    result += r[i]
  }
  return result
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(doors(line))
    }
});