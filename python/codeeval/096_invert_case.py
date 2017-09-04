import sys

def inv(string):
	new_string = ''
	for l in string:
		if l.islower():
			new_string += l.upper()
		else:
			new_string += l.lower()
	return new_string

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        print(inv(test))
