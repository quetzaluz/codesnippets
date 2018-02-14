# UNTESTED
def generate(num_rows):
	iterations = 0
	result = []
	while iterations < num_rows:
		result.append(generate_row(result[iterations - 1]))
		iterations++
	return result

def generate_row(last_row):
	if last_row is None:
		return [1]
	new_row = []
	new_row.append(last_row[0])
	for i in range(len(last_row) - 1):
		new_row.append(last_row[i] + last_row[i + 1])
	new_row.append(last_row[-1])
	return new_row
