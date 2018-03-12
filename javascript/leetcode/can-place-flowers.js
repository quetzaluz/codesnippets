/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    c = 0
    scannedFlowerbed = flowerbed
    for (var i = 0; i < scannedFlowerbed.length; i++) {
        if (scannedFlowerbed[i] == 0 && scannedFlowerbed[i - 1] !== 1 && scannedFlowerbed[i + 1] !== 1) {
            scannedFlowerbed[i] = 1
            c++
        }
    }
    return c >= n
};