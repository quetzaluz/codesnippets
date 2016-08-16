function odds () {
	var last = []
	for (var i = 0; i < 50; i++) {
		if (i % 2 == 1) {
			console.log(i);
			last.unshift(100 - i);
		}
	}
	console.log(last.join("\n"));
}

odds();
