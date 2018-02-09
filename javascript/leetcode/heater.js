/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    maxDistance = 0
    thisDistance = 0
    for (var i = 0; i <= houses[houses.length - 1]; i++) {
        if (heaters.indexOf(i) >= 0) {
            maxDistance = thisDistance > maxDistance ? thisDistance : maxDistance
            thisDistance = 0
        } else {
            thisDistance++
        }
    }
    maxDistance = thisDistance > maxDistance ? thisDistance : maxDistance
    return Math.ceil(maxDistance / 2)
};