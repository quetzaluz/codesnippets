class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        c = 0
        scanned_flowerbed = flowerbed
        for i in range(len(scanned_flowerbed)):
            if (
                scanned_flowerbed[i] == 0 and 
                (i - 1 == -1 or scanned_flowerbed[i - 1] == 0) and 
                (i + 1 == len(scanned_flowerbed) or scanned_flowerbed[i + 1] == 0)
            ):
                scanned_flowerbed[i] = 1
                c += 1
        return c >= n