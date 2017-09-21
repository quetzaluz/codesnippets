import sys
def find_primes(start_end_str):
    start_end = start_end_str.split(',')
    start = int(start_end[0])
    end = int(start_end[1])
    prime_count = 0
    for i in range(start, end + 1):
        is_prime = True
        for k in range(2, i - 1):
            if i % k == 0:
                is_prime = False
                break
        if is_prime:
            prime_count += 1
    return prime_count


with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(find_primes(test))
