const Twitter = require('twitter');
const keys = require('./keys.js');

const showTweets = function() {

	var client = new Twitter(
 		keys.twitter
	);

	client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
   console.log(tweets);
});

}

module.exports = showTweets;