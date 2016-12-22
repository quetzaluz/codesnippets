import sys

def fb(st):
    d1, d2, l = map(int, st.split(' '))
    o = ''
    for i in range(1, l + 1):
        if i % d1 == 0:
            if i % d2 == 0:
                o += 'FB'
            else:
                o += 'F'
        elif i % d2 == 0:
            o += 'B'
        else:
            o += str(i)
        if i < l:
            o += ' '
    return o

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
      print(fb(test))
