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
      mod2 = j % 2
      mod3 = j % 3
      if (mod2 == 1 && mod3 == 2) {
        r[j] = 1
      }
      else if (mod2 == 1) {
        r[j] = 0
      }
      else if (mod3 == 2) {
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