import urllib
import sys

def uc(test):
    s1, s2 = test.split(';')
    return (urllib.parse.unqoute(s1)).lower() == (urllib.parse.unqoute(s2)).lower()

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(uc(test))
