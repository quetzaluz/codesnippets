class Solution:
    def spiralMatrixIII(self, R, C, r0, c0):
        """
        :type R: int
        :type C: int
        :type r0: int
        :type c0: int
        :rtype: List[List[int]]
        """
        r = r0
        c = c0
        result = [[r, c]]
        visits = 1
        steps = 1
        while visits < R * C:
            # Go across to the right
            for i in range(steps):
                c += 1
                if r < R and r >= 0 and c < C and c >= 0:
                    result.append([r, c])
                    visits += 1

            # Go down
            for i in range(steps):
                r += 1
                if r < R and r >= 0 and c < C and c >= 0:
                    result.append([r, c])
                    visits += 1
            steps += 1

            # Go back to the left
            for i in range(steps):
                c -= 1
                if r < R and r >= 0 and c < C and c >= 0:
                    result.append([r, c])
                    visits += 1

            # Go up
            for i in range(steps):
                r -= 1
                if r < R and r >= 0 and c < C and c >= 0:
                    result.append([r, c])
                    visits += 1
            steps += 1
        return result
