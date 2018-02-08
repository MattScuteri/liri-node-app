const twitter = require('twitter');
const keys = require('./keys.js');

const showTweets = function() {

	let count = 0,
		util = require('util');

	client.stream('filter', (track = 'love'), function(stream) {
		stream.on('data', function(data) {
			console.log(util.inspect(data));
			stream.destroy();
			process.exit(0);
		});
	});

}

module.exports = showTweets;