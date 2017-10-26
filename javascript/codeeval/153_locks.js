var fs  = require("fs");
function doors(inp) {
  inp = inp.split(' ')
  var d = parseInt(inp[0])
  var ite = (parseInt(inp[1]) * 2) - 1
  var r = []
  for (var j = 0; j < d; j++) {
    r.push(1)
  }
  for (var i = 0; i < ite; i++) {
    for (var j = 0; j < d; j++) {
      if (i == ite - 1) {
        r[d-1] = r[d-1] == 1 ? 0 : 1
        break
      } else if (i % 2 == 0 && j % 2 == 1) {
        r[j] = 0
      }
      else if (i % 2 == 1 && j % 3 == 2) {
        r[j] = r[j] == 1 ? 0 : 1
      }
    }
  }

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
