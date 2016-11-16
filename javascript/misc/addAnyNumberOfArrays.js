function addAnyNumberOfArraysWithSameLength() {
   result = []
   len = arguments[0].length
   for (i = 0; i < len; i++) {
      thisSum = 0
      for (arrayIndex = 0; arrayIndex < arguments.length; arrayIndex ++) {
        thisArray = arguments[arrayIndex]
        thisSum += thisArray[i]
      }
      result.push(thisSum)
   }
   return result
}
