class Solution:
    def lastRemaining(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 1:
            return 1
        if n == 2:
            return 2
        rng = list(range(1, n + 1))
        start_left = True
        while len(rng) > 1:
            if start_left:
                idx = 0
                while idx < len(rng):
                    rng[idx] = None
                    idx += 2
            else:
                idx = len(rng) - 1
                while idx >= 0:
                    rng[idx] = None
                    idx -= 2
            start_left = not start_left
            newRng = []
            for i in rng:
                if i is not None:
                    newRng.append(i)
            rng = newRng
        return rng[0]
