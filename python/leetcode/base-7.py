class Solution:
    def convertToBase7(self, num):
        if num < 0:
            return '-' + self.convertToBase7(num * - 1)
        if num < 7:
            return str(num) + ''
        else:
            return str(self.convertToBase7(num // 7) + str(num % 7)) # Might need to call floor function or use //
