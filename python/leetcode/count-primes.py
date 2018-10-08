class Solution:
    # Still takes a very long time on large inputs
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
                j = 2
                while i * j < n:
                    non_prime[i * j] = True
                    j += 1
        return prime_count

    # Very naive brute force solution
    def countPrimesBruteForce(self, n):
        """
        :type n: int
        :rtype: int
        """
        prime_count = 0
        for i in range(2, n):
            is_prime = True
            for k in range(2, i - 1):
                if i % k == 0:
                    is_prime = False
                    break
            if is_prime:
                prime_count += 1
        return prime_count
