class Solution:
    def setZeroes(self, matrix):
        to_convert = [] # stack we will build of coords to convert
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    ti = i - 1
                    while ti >= 0:
                        to_convert.append([ti, j])
                        ti -= 1
                    ti = i + 1
                    while ti < len(matrix):
                        to_convert.append([ti, j])
                        ti += 1
                    tj = j - 1
                    while tj >= 0:
                        to_convert.append([i, tj])
                        tj -= 1
                    tj = j + 1
                    while tj < len(matrix[i]):
                        to_convert.append([i, tj])
                        tj += 1  
        for c in to_convert:
            matrix[c[0]][c[1]] = 0
