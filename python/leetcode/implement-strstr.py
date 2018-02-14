# UNTESTED
def str_str(haystack, needle):
	if needle == '':
		return 0
	i = 0
	while i < len(haystack) - 1 + len(needle):
		if haystack[i] == needle[0]:
			j = 0
			original_i = i
			while (j < len(needle)):
				if (needle[j] == haystack[i]):
					j++
					i++
				else: 
					break
			if j == len(needle):
				return original_i
			else:
				i = original_i
		i++
	return -1