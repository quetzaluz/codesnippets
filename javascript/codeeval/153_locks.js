function doors(inp) {
  inp = inp.split(' ')
  var d = parseInt(inp[0])
  var ite = parseInt(inp[1])
  var r = []
  for (var i = 0; i < ite; i++) {
    for (var t = 0; t < 2; t++) {
      var mod = t + 2;
      var modeq = t + 1
      for (var j = 0; j < d; j++) {
        if (t == 0 && i == 0) {
          r.push(1 - j % 2)
        } else {
          if (j % mod == modeq) {
            r[j] = r[j] == 1 ? 0 : 1
          }
        }
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