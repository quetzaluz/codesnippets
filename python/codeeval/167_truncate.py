import sys

def trunc(inp):
    inp = inp.rstrip()
    if len(inp) > 55:
        new_str = inp[0:40]
        try:
            last_space = len(new_str) - 1 - new_str[::-1].index(' ')
            new_str = new_str[0:last_space]
        except ValueError:
            pass
        return new_str + '... <Read More>'
    else:
        return inp

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(trunc(test))
