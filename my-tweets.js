const Twitter = require('twitter');
const keys = require('./keys.js');

const showTweets = function() {

	var client = new Twitter(
 		keys.twitter
	);

	client.get('statuses/user_timeline', {screen_name: 'washingtonpost', count: '20'}, function(error, tweets, response) {
		if (!error) {
			for (i = 0; i < tweets.length; i++) {
				console.log(JSON.stringify(tweets[i].text, null, 2));
				console.log("=======================================\n")
				if (i === 19) {
					break;
				}
			}
		} else {
			console.log(error);
		}
	});

}

module.exports = showTweets;