import sys
def reverse(string1):
    output = ''
    words = string1.rstrip('\n').split(' ')
    i = len(words)
    while True:
        i -= 1
        output += words[i]
        if i == 0:
            break
        else:
            output += ' '
    return output

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(reverse(test))
