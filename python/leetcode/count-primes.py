class Solution:
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        prime_count = 0
        non_prime = [False] * n
        for i in range(2, n):
            if non_prime[i] == False:
                prime_count += 1
                for j in range(2, (n - 1) // i + 1):
                    non_prime[i * j] = True
        return prime_count
