/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    result = Array(temperatures.length)
    for (var i = 0; i < temperatures.length; i++) {
        ti = i;
        oTemp = temperatures[i]
        greaterFound = false;
        c = 0;
        while (ti < temperatures.length) {
            if (temperatures[ti] > oTemp) {
                greaterFound = true
                break
            } else {
                c++
            }
            ti++
        }
        result[i] = greaterFound ? c : 0
    }
    return result
};
