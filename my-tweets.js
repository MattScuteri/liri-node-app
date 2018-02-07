const showTweets = function() {

	const queryURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?mattcuteri=twitterapi&count=20&";

	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response) {
		console.log('-----------------------------');
		console.log(response.user.name);
		console.log(response.text);
		console.log(response.user.created_at);
		console.log('-----------------------------');
	})

}

module.exports = showTweets;