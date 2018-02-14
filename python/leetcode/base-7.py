# NOT SUBMITTED YET
def convert_to_base_7(num):
	if num < 0:
		return '-' + convert_to_base_7(num * - 1)
	if num < 7:
		return num + ''
	else:
		return convert_to_base_7(num / 7) + num % 7 # Might need to call floor function or use //