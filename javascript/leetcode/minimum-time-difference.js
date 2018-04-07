/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    // first convert to minutes
    minutes = []
    for (var i = 0; i < timePoints.length; i++) {
        s = timePoints[i].split(':')
        minutes.push((parseInt(s[0]) * 60) + parseInt(s[1]))
    }
    fullCycle = 60 * 24
    minDist = fullCycle // maximum possible distance plus one
    for (var i = 0; i < minutes.length; i++) {
        for (var j = 0; j < minutes.length; j++) {
            dist = Math.abs(minutes[i] - minutes[j])
            dist = Math.min(Math.abs((minutes[i] + fullCycle) - minutes[j]), dist)
            dist = Math.min(Math.abs((minutes[j] + fullCycle) - minutes[i]), dist)
            if (i !== j && dist < minDist) { minDist = dist}
        }
    }
    return minDist
};
