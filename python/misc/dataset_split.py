class Train:
	def split_set(self, input):
		# `input` format [{'cid': int, 'text': str} ...]
		# Task is to split data per customer into test and training set.
		# Can do this round robin, approach here is random assingment
		train_set = []
		train_cust = {} # or set
		test_set = []
		test_cust = []
		for i in input:
			if i['cid'] in train_cust:
				train_set.append(i)
			elif i['cid'] in test_cust:
				test_set.append(i)
			elif random.random() < 0.8:
				train_set.append(i)
				train_cust[i['cid']] = 1
			else:
				test_set.append(i)
				test_cust[i['cid']] = 1
		return {'test_set': test_set, 'train_set': train_set}
