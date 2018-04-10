/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    var min = Infinity;
    var biggestDiff = 0;
    for (var i = 0; i < prices.length; i++) {
        if (min > prices[i]) { min = prices[i] }
        if ((prices[i] - min) > biggestDiff) { biggestDiff = (prices[i] - min)}
    }
    return biggestDiff;
};