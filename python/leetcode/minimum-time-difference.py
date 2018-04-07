class Solution:
    def findMinDifference(self, timePoints):
        """
        :type timePoints: List[str]
        :rtype: int
        """
        minutes = []
        for t in timePoints:
            s = t.split(':')
            minutes.append((int(s[0]) * 60) + int(s[1]))
        full_cycle = 60 * 24
        min_dist = full_cycle
        for i in range(len(minutes)):
            for j in range(len(minutes)):
                if j != i:
                    dist = abs(minutes[i] - minutes[j])
                    dist = min([(minutes[i] + full_cycle) - minutes[j], dist])
                    dist = min([(minutes[j] + full_cycle) - minutes[i], dist])
                    if dist < min_dist:
                        min_dist = dist
        return min_dist
