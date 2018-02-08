const fs = require('fs');


const random = function() {
	fs.readFile('random.txt', 'utf8', function(err, data) {
		if(err) {
			return console.log(err);
		}

		const output = data.split(',');

		for (let i = 0; i < output.length; i++) {
			console.log(output[i]);
		}
	})
}

module.exports = random;