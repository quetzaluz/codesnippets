class Solution:
    def generate(self, num_rows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if num_rows == 0:
            return []
        iterations = 1
        result = [[1]]
        while iterations < num_rows:
            result.append(self.generate_row(result[iterations - 1]))
            iterations += 1
        return result

    def generate_row(self, last_row):
        new_row = []
        new_row.append(last_row[0])
        for i in range(len(last_row) - 1):
            new_row.append(last_row[i] + last_row[i + 1])
        new_row.append(last_row[-1])
        return new_row
